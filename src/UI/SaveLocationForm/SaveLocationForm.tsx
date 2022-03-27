import React, {FC} from "react";
import {ISaveLocationFormProps} from "../../types/types";
import cl from "./SaveLocationForm.module.css";

const SaveLocationForm: FC<ISaveLocationFormProps> = ({item, ...props}) => {
	return (
		<div className={cl.locations_wrapper} key={item + props.index}>
			<p className={cl.city} onClick={() => props.searchWeather(item)}>
				{item}
			</p>
			<button
				className={cl.remove_btn}
				onClick={(e: React.MouseEvent<HTMLButtonElement>): void => {
					props.removeLocation(item);
				}}
			/>
		</div>
	);
};

export default SaveLocationForm;
