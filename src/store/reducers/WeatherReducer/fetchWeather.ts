import axios from "axios";
import {URL} from "../../../utilites/Data";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
	"weather/fetchAll",
	async (city: string, thunkAPI) => {
		try {
			const resWeather = await axios.get(URL.WEATHER_URL(city));
			const resForecast = await axios.get(URL.FORECAST_URL(city));
			return {weather: resWeather.data, forecast: resForecast.data};
		} catch (err: any) {
			return thunkAPI.rejectWithValue(err.message.replace(/[^0-9]/g, ""));
		}
	},
);
