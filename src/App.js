import "./assets/style.css";
import Gap from "./component/Gap";
import Navigation from "./component/Navigation";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Prody from "./page/Prody";

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <Gap />
      <Home />
      <About />
      <Gap height={80} />
      <Prody />
      <Contact />
    </div>
  );
}

export default App;
