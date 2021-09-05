import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="meditation" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Kristel Pau
          </small>
        </footer>
      </div>
    </div>
  );
}