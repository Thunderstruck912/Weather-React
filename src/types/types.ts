// Props Interface //

export interface IInputFormProps {
	value: string;
	searchWeather(e: React.MouseEvent | React.FormEvent): void;
	setValue(value: string): void;
}

export interface IWeatherContentProps {
	active: string;
}

export interface IWeatherContentNowProps extends IWeatherContentProps {
	saveLocation(): void;
}

export interface ITabsProps {
	active: string;
	swipeTabs(id: string): void;
}
export interface IForecastFormProps {
	item: IForecast;
}

export interface ISpinerProps {
	isLoading: boolean;
}
export interface ISaveLocationFormProps {
	item: SaveLocation;
	index?: number;
	searchWeather(value: string): void;
	removeLocation(value: string): void;
}
// Interface //

export interface IForecast {
	dt: number;
	main: {
		temp: number;
	};
	weather: [
		{
			main: string;
			icon: string;
		},
	];
}

export interface IWeather {
	weatherInfo: IWeatherInfo;
	fetchStatus: IFetchStatus;
	errorStatus: string;
	lastCity: string;
}

export interface IWeatherInfo {
	weather: any;
	forecast: any;
}
export interface IFetchStatus {
	fetchSuccess: boolean;
	isLoading: boolean;
}

// alias type //

export type SaveLocation = string;
