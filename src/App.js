import "./App.css";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="main">
      <Home />
      <button type="button" className="app-button primary-button">
        Primary
      </button>
      <button type="button" className="app-button secondary-button">
        Secondary
      </button>
      <button type="button" className="app-button black-button">
        Black
      </button>
      <button type="button" className="app-button white-button">
        White
      </button>

      <button
        type="button"
        className="app-button app-button-large secondary-button"
      >
        Secondary
      </button>
      <button
        type="button"
        className="app-button app-button-small secondary-button"
      >
        Secondary
      </button>
    </div>
  );
}

export default App;
