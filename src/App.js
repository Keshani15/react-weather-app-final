import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <button className="btn btn-primary">Search</button>
        <h1>Weather app</h1>
        <footer>
          This was coded by Keshani Naidoo
          <a
            href="https://github.com/Keshani15/react-weather-app-final"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
