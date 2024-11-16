import "./assets/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gap from "./component/Gap";
import Main from "./page/Main";
import Registration from "./page/Registration";
import Gallery from "./page/Gallery";
import Team from "./page/Team";
import Login from "./page/Login";

function App() {
  return (
    <div className="app-container">
      <Router>
        <div style={{ scrollRestoration: "manual" }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
