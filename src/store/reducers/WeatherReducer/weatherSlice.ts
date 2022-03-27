import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IWeather} from "../../../types/types";
import {fetchWeather} from "./fetchWeather";

const initialState: IWeather = {
	weatherInfo: {
		weather: {
			save: false,
		},
		forecast: {},
	},
	fetchStatus: {
		isLoading: false,
		fetchSuccess: false,
	},
	errorStatus: "",
	lastCity: "",
};

export const weatherSlice = createSlice({
	name: "weather",
	initialState,
	reducers: {
		weatherSave: (state, action: PayloadAction<boolean>) => {
			state.weatherInfo.weather.save = action.payload;
		},
		setLastCity: (state, action: PayloadAction<string>) => {
			state.lastCity = action.payload;
		},
	},
	extraReducers: {
		[fetchWeather.pending.type]: (state) => {
			state.weatherInfo.weather = {};
			state.fetchStatus.fetchSuccess = false;
			state.fetchStatus.isLoading = true;
		},
		[fetchWeather.fulfilled.type]: (state, action: PayloadAction<any>) => {
			state.fetchStatus.isLoading = false;
			state.fetchStatus.fetchSuccess = true;
			state.weatherInfo.weather = action.payload.weather;
			state.weatherInfo.forecast = action.payload.forecast;
			state.lastCity = state.weatherInfo.weather.name;
			state.weatherInfo.weather.save = false;
		},
		[fetchWeather.rejected.type]: (state, action: PayloadAction<string>) => {
			state.fetchStatus.isLoading = false;
			state.errorStatus = action.payload;
		},
	},
});

export const {weatherSave, setLastCity} = weatherSlice.actions;
export default weatherSlice.reducer;
