import React, {FC} from "react";
import {IInputFormProps} from "../../types/types";
import cl from "./InputForm.module.css";

const InputForm: FC<IInputFormProps> = ({value, setValue, searchWeather}) => {
	return (
		<form className={cl.form} onSubmit={searchWeather}>
			<input
				onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
					setValue(e.target.value)
				}
				type="text"
				placeholder="City..."
				className={cl.input_text}
				value={value}
				autoFocus
			/>
			<button className={cl.btn} onClick={searchWeather} />
		</form>
	);
};

export default InputForm;
