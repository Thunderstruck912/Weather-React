import {combineReducers, configureStore} from "@reduxjs/toolkit";
import saveLocationsSlice from "./reducers/SaveLocationsRedicer/saveLocationsSlice";
import weatherSlice from "./reducers/WeatherReducer/weatherSlice";

const rootReducer = combineReducers({
	weatherReducer: weatherSlice,
	locationsReducer: saveLocationsSlice,
});

export const store = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
