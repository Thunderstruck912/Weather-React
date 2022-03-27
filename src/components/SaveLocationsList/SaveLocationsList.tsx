import {FC, useEffect} from "react";
import SaveLocationForm from "../../UI/SaveLocationForm/SaveLocationForm";
import cl from "./SaveLocationsList.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {saveLocationsSlice} from "../../store/reducers/SaveLocationsRedicer/saveLocationsSlice";
import {weatherSlice} from "../../store/reducers/WeatherReducer/weatherSlice";
import {fetchWeather} from "../../store/reducers/WeatherReducer/fetchWeather";
import {useLocalStorage} from "../../hooks/useLocalStorage";

const SaveLocationsList: FC = () => {
	const dispatch = useAppDispatch();
	const locations = useAppSelector((state) => state.locationsReducer);
	const weather = useAppSelector(
		(state) => state.weatherReducer.weatherInfo.weather,
	);

	useLocalStorage(
		"DATA:SAVE_LOCATIONS",
		locations,
		saveLocationsSlice.actions.setLocations,
	);

	useEffect(() => {
		locations.find(
			(item) =>
				weather.name === item &&
				dispatch(weatherSlice.actions.weatherSave(true)),
		);
	}, [weather.name]);

	const searchWeather = (value: string): void => {
		weather.name !== value && dispatch(fetchWeather(value));
	};

	const removeLocation = (value: string): void => {
		dispatch(saveLocationsSlice.actions.removeLocation(value));
		dispatch(weatherSlice.actions.weatherSave(false));
	};

	return (
		<div className={cl.conteiner}>
			<div className={cl.title_wrapper}>
				<span className={cl.title}>Added Locations:</span>
			</div>
			<div className={cl.locations_wrapper}>
				{locations.map((item, index) => (
					<SaveLocationForm
						item={item}
						index={index}
						searchWeather={searchWeather}
						removeLocation={removeLocation}
						key={index + item}
					/>
				))}
			</div>
		</div>
	);
};

export default SaveLocationsList;
