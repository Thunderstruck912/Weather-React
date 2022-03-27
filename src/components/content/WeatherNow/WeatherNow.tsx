import React, {FC} from "react";
import cl from "./WeatherNow.module.css";
import FetchLoadAndErrors from "../../FetchLoadAndErrors/FetchLoadAndErrors";
import {useAppSelector} from "../../../hooks/redux";
import {IWeatherContentNowProps} from "../../../types/types";
import {URL} from "../../../utilites/Data";

const WeatherNow: FC<IWeatherContentNowProps> = ({active, saveLocation}) => {
	const status = useAppSelector((state) => state.weatherReducer.fetchStatus);
	const weather = useAppSelector(
		(state) => state.weatherReducer.weatherInfo.weather,
	);
	return !status.fetchSuccess ? (
		<FetchLoadAndErrors />
	) : (
		<div className={active === "tab_now" ? `${cl.now_active}` : `${cl.now}`}>
			<div>
				<div className={cl.temp}>
					{Math.floor(weather.main?.temp) - 273}
					<div className={cl.img} />
				</div>
			</div>
			<span className={cl.city}>{weather.name}</span>
			<img
				className={cl.cloud}
				src={URL.WEATHER_PNG_URL(weather.weather?.[0].icon, "4x")}
				loading="lazy"
				alt="icon_weather"
			/>
			<input
				type="checkbox"
				id={cl.checkbox}
				name=""
				className={cl.btn_save}
				onChange={() => saveLocation()}
				checked={weather.save}
			/>
		</div>
	);
};

export default WeatherNow;
