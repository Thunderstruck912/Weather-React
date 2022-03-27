import {useEffect} from "react";
import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {useAppDispatch} from "./redux";

export const useLocalStorage = <T>(
	key: string,
	defaultValue: T,
	setValue: ActionCreatorWithPayload<T>,
): void => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		const storage = JSON.parse(localStorage.getItem(key)!);
		storage && dispatch(setValue(storage));
	}, []);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(defaultValue));
	}, [defaultValue]);
};
