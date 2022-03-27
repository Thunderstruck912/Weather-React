import React, {FC} from "react";
import {ISpinerProps} from "../../types/types";
import cl from "./Spinner.module.css";

const Spinner: FC<ISpinerProps> = ({isLoading}) => {
	return (
		<>
			{isLoading && (
				<svg className={cl.spinner} viewBox="0 0 50 50">
					<circle
						className={cl.path}
						cx="25"
						cy="25"
						r="20"
						fill="none"
						strokeWidth="5"></circle>
				</svg>
			)}
		</>
	);
};

export default Spinner;
