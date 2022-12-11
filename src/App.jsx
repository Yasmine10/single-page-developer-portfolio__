import Navigation from "./components/general/Navigation";
import Home from "./views/Home";

function App() {
  return (
    <div className="App">
      <header className="header-primary">
        <Navigation />
      </header>
      
      <Home />
      <footer className="footer-primary">
        <Navigation />
      </footer>
    </div>
  )
}

export default App
