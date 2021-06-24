import { CcdcProvider } from "./context/CcdcContext";
import "./App.css";

function App() {
  return (
    <CcdcProvider>
      <div className="App">
        <header className="App-header">
          <h1>Welcome CCDC Assessment</h1>
        </header>
      </div>
    </CcdcProvider>
  );
}

export default App;
