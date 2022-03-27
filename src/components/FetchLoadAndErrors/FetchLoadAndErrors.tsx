import React, {FC} from "react";
import cl from "./FetchLoadAndErrors.module.css";
import Spinner from "../../UI/Spinner/Spinner";
import {useAppSelector} from "../../hooks/redux";
import {errMessage} from "../../utilites/utilities";

const FetchLoadAndErrors: FC = () => {
	const errorStatus = useAppSelector(
		(state) => state.weatherReducer.errorStatus,
	);
	const status = useAppSelector((state) => state.weatherReducer.fetchStatus);
	return (
		<>
			<Spinner isLoading={status.isLoading} />
			{errorStatus && <div className={cl.error}>{errMessage(errorStatus)}</div>}
		</>
	);
};

export default FetchLoadAndErrors;
