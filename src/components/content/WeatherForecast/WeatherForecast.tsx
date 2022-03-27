import React, {FC} from "react";
import {useAppSelector} from "../../../hooks/redux";
import {IForecast, IWeatherContentProps} from "../../../types/types";
import ForecastForm from "../../../UI/ForecastForm/ForecastForm";
import cl from "./WeatherForecast.module.css";

const WeatherForecast: FC<IWeatherContentProps> = ({active}) => {
	const forecast = useAppSelector(
		(state) => state.weatherReducer.weatherInfo.forecast,
	);
	const status = useAppSelector((state) => state.weatherReducer.fetchStatus);
	return !status.fetchSuccess ? (
		<></>
	) : (
		<div
			className={
				active === "tab_forecast" ? `${cl.forecast_active}` : `${cl.forecast}`
			}>
			<span className={cl.city}>{forecast.city.name}</span>
			{forecast.list.map((item: IForecast, index: number) => (
				<ForecastForm item={item} key={index + forecast.city.name} />
			))}
		</div>
	);
};

export default WeatherForecast;
