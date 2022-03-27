import WeatherContent from "./components/content/WeatherContent";
import SaveLocationsList from "./components/SaveLocationsList/SaveLocationsList";
import SearchForm from "./components/SearchForm/SearchForm";
import "./style/app.css";

function App() {
	return (
		<div className="App">
			<div className="main">
				<SearchForm />
				<div className="content">
					<WeatherContent />
					<SaveLocationsList />
				</div>
			</div>
		</div>
	);
}

export default App;
