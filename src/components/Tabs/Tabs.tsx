import React, {FC} from "react";
import {ITabsProps} from "../../types/types";
import cl from "./Tabs.module.css";

const Tabs: FC<ITabsProps> = ({active, swipeTabs}) => {
	const setClassName = (id: string): string => {
		return active === id ? `${cl.tab_active}` : `${cl.tab}`;
	};

	return (
		<nav
			className={cl.nav}
			onClick={(e: React.MouseEvent<HTMLElement>) =>
				swipeTabs((e.target as HTMLElement).id)
			}>
			<div className={setClassName("tab_now")} id="tab_now">
				Now
			</div>
			<div className={setClassName("tab_details")} id="tab_details">
				Details
			</div>
			<div className={setClassName("tab_forecast")} id="tab_forecast">
				Forecast
			</div>
		</nav>
	);
};

export default Tabs;
