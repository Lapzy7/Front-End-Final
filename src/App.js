import "./assets/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gap from "./component/Gap";
import Navigation from "./component/Navigation";
import Main from "./page/Main";
import Registration from "./page/Registration";

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
      <Gap />
    </div>
  );
}

export default App;
