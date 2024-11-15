import { useEffect } from "react";
import Navigation from "../../component/Navigation";
import About from "../About";
import Contact from "../Contact";
import Home from "../Home";
import Prody from "../Prody";
import Gap from "../../component/Gap";

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-container">
      <Navigation />
      <Home />
      <About />
      <Gap height={80} />
      <Prody />
      <Contact />
    </div>
  );
};

export default Main;
