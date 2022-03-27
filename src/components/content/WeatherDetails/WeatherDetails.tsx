import React, {FC} from "react";
import {useAppSelector} from "../../../hooks/redux";
import {IWeatherContentProps} from "../../../types/types";
import cl from "./WeatherDetails.module.css";
import {DATE_UNIX} from "../../../utilites/utilities";

const {unixHours} = DATE_UNIX;

const WeatherDetails: FC<IWeatherContentProps> = ({active}) => {
	const weather = useAppSelector(
		(state) => state.weatherReducer.weatherInfo.weather,
	);
	const status = useAppSelector((state) => state.weatherReducer.fetchStatus);
	return !status.fetchSuccess ? (
		<></>
	) : (
		<div
			className={
				active === "tab_details" ? `${cl.details_active}` : `${cl.details}`
			}>
			<span className={cl.city}>{weather.name}</span>
			<div className={cl.info}>
				Temperature: {Math.floor(weather?.main.temp) - 273}
				<div className={cl.img}></div>
			</div>
			<div className={cl.info}>
				Feels like: {Math.floor(weather?.main.temp) - 273}
				<div className={cl.img}></div>
			</div>
			<p className={cl.info}>Weather: {weather?.weather[0].main}</p>
			<p className={cl.info}>Sunrise: {unixHours(weather?.sys.sunrise)}</p>
			<p className={cl.info}>Sunset: {unixHours(weather?.sys.sunset)}</p>
		</div>
	);
};

export default WeatherDetails;
