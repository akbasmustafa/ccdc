import { CcdcProvider } from "./context/CcdcContext";
import "./App.css";
import CardList from "./components/CardList";
import Footer from "./components/Footer";

function App() {
  return (
    <CcdcProvider>
      <div className="App">
        <header className="App-header">
          <h1>Welcome CCDC Assessment</h1>
        </header>
        <CardList />
        <footer>
          <Footer />
        </footer>
      </div>
    </CcdcProvider>
  );
}

export default App;
