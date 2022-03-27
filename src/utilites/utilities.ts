export const DATE_UNIX = {
	unixHours: (time: number): string => {
		const date: Date = new Date(time * 1000);
		const hours: number = date.getHours();
		const minutes: string | number =
			date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
		return `${hours}:${minutes}`;
	},
	unixDate: (time: number): string => {
		const months: string[] = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"Jule",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		const date: Date = new Date(time * 1000);
		const month: number = date.getMonth();
		const day: number = date.getDate();
		return `${day} ${months[month]}`;
	},
};

export const errMessage = (status: string): string => {
	switch (status) {
		case "404":
			return "City not found";
		case "401":
			return "Invalid API key";
		case "429":
			return "Too many requests";
		default:
			return "Unknown error";
	}
};
