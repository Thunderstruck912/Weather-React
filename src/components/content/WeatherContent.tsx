import {FC, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {saveLocationsSlice} from "../../store/reducers/SaveLocationsRedicer/saveLocationsSlice";
import {weatherSlice} from "../../store/reducers/WeatherReducer/weatherSlice";
import Tabs from "../Tabs/Tabs";
import cl from "./WeatherContent.module.css";
import WeatherDetails from "./WeatherDetails/WeatherDetails";
import WeatherForecast from "./WeatherForecast/WeatherForecast";
import WeatherNow from "./WeatherNow/WeatherNow";

const WeatherContent: FC = () => {
	const [active, setActive] = useState<string>("tab_now");
	const dispatch = useAppDispatch();
	const weather = useAppSelector(
		(state) => state.weatherReducer.weatherInfo.weather,
	);
	const swipeTabs = (id: string): void => {
		setActive(id);
	};

	const saveLocation = (): void => {
		dispatch(weatherSlice.actions.weatherSave(!weather.save));
		if (weather.save !== true) {
			dispatch(saveLocationsSlice.actions.addLocation(weather.name));
		} else {
			dispatch(saveLocationsSlice.actions.removeLocation(weather.name));
			dispatch(weatherSlice.actions.weatherSave(!weather.save));
		}
	};
	return (
		<div className={cl.conteiner}>
			<div className={cl.content}>
				<WeatherNow active={active} saveLocation={saveLocation} />
				<WeatherForecast active={active} />
				<WeatherDetails active={active} />
			</div>
			<Tabs active={active} swipeTabs={swipeTabs} />
		</div>
	);
};

export default WeatherContent;
