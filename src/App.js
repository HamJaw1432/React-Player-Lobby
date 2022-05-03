import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Players from "./components/Players";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Players />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
