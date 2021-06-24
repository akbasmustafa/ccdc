import { CcdcProvider } from "./context/CcdcContext";
import "./App.css";
import CardList from "./components/CardList";

function App() {
  return (
    <CcdcProvider>
      <div className="App">
        <header className="App-header">
          <h1>Welcome CCDC Assessment</h1>
        </header>
        <CardList />
      </div>
    </CcdcProvider>
  );
}

export default App;
