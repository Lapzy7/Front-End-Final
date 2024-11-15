import Gap from "../../component/Gap";
import About from "../About";
import Contact from "../Contact";
import Home from "../Home";
import Prody from "../Prody";

const Main = () => {
  return (
    <div className="app-container">
      <Home />
      <About />
      <Gap height={80} />
      <Prody />
      <Contact />
    </div>
  );
};

export default Main;
