import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Main from "./components/Main";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

          <Home />
          <Main />
        
      </Router>
    </div>
  );
}

export default App;
