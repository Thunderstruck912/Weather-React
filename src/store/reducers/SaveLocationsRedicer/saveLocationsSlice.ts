import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SaveLocation} from "../../../types/types";

export const saveLocationsSlice = createSlice({
	name: "saveLocations",
	initialState: [] as SaveLocation[],
	reducers: {
		setLocations: (state, action: PayloadAction<SaveLocation[]>) => {
			return [...state, ...action.payload];
		},
		addLocation: (state, action: PayloadAction<SaveLocation>) => {
			state.push(action.payload);
		},
		removeLocation: (state, action: PayloadAction<string>) =>
			state.filter((item): boolean => item !== action.payload),
	},
});

export const {addLocation, removeLocation, setLocations} =
	saveLocationsSlice.actions;
export default saveLocationsSlice.reducer;
