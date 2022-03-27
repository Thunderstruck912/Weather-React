import React, {FC, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {fetchWeather} from "../../store/reducers/WeatherReducer/fetchWeather";
import {weatherSlice} from "../../store/reducers/WeatherReducer/weatherSlice";
import InputForm from "../../UI/InputForm/InputForm";

const SearchForm: FC = () => {
	const dispatch = useAppDispatch();
	const lastCity = useAppSelector((state) => state.weatherReducer.lastCity);
	const [value, setValue] = useState<string>("");

	useEffect(() => {
		const storage = JSON.parse(localStorage.getItem("DATA:LAST_CITY")!);
		dispatch(fetchWeather(storage ?? "Moscow"));
	}, []);

	const searchWeather = (
		e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>,
	): void => {
		e.preventDefault();
		if (value === "") return;
		dispatch(fetchWeather(value));
		setValue("");
	};
	useLocalStorage("DATA:LAST_CITY", lastCity, weatherSlice.actions.setLastCity);
	return (
		<InputForm
			value={value}
			setValue={setValue}
			searchWeather={searchWeather}
		/>
	);
};

export default SearchForm;
