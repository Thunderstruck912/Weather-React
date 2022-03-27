export const URL = {
	WEATHER_URL: (city: string): string =>
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d843fb760a7fbe8c30c2e70aa5a89f9`,
	FORECAST_URL: (city: string): string =>
		`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0d843fb760a7fbe8c30c2e70aa5a89f9`,
	WEATHER_PNG_URL: (value: string, size: string): string =>
		`https://openweathermap.org/img/wn/${value}@${size}.png`,
};
