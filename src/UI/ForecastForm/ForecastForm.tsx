import React, {FC} from "react";
import {IForecastFormProps} from "../../types/types";
import {DATE_UNIX} from "../../utilites/utilities";
import cl from "./ForecastForm.module.css";
import {URL} from "../../utilites/Data";

const {unixHours, unixDate} = DATE_UNIX;

const ForecastForm: FC<IForecastFormProps> = ({item}) => {
	return (
		<form className={cl.form}>
			<p className={cl.date}>{unixDate(item.dt)}</p>
			<p className={cl.date}>{unixHours(item.dt)}</p>
			<div className={cl.temp}>
				Temperature: {Math.floor(item.main.temp) - 273}
				<div className={cl.img}></div>
			</div>
			<div className={cl.temp}>
				Feels like: {Math.floor(item.main.temp) - 273}
				<div className={cl.img}></div>
			</div>
			<div className={cl.weather_wrapper}>
				<p className={cl.weather_p}>{item.weather[0].main}</p>
				<img
					className={cl.weather_img}
					src={URL.WEATHER_PNG_URL(item.weather?.[0].icon, "2x")}
					loading="lazy"
					alt="icon_weather"
				/>
			</div>
		</form>
	);
};

export default ForecastForm;
