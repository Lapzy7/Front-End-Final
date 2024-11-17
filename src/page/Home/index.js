import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imgHome1, imgHome2, imgHome3 } from "../../assets";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [home, setHome] = useState({});
  const navigate = useNavigate();
  const images = [imgHome1, imgHome2, imgHome3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <ThinArrow direction="left" />,
    nextArrow: <ThinArrow direction="right" />,
  };

  useEffect(() => {
    const db = getDatabase();
    const homeRef = ref(db, "Page/Main/Home");

    onValue(homeRef, (snapshot) => {
      const data = snapshot.val();
      setHome(data);
    });
  }, []);

  return (
    <div id="home" className="home-container">
      <section className="home-gallery">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-image-container"
              style={{ position: "relative" }}
            >
              <img
                src={image}
                alt={`Filkom Day ${index + 1}`}
                className="gallery-image"
              />
              <header
                className="home-header"
                style={{
                  position: "absolute",
                  top: "20%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <h1>{home.Title}</h1>
                <p>{home.subTitle}</p>
              </header>
              <div className="gallery-image-overlay" />
            </div>
          ))}
        </Slider>
      </section>

      <div className="register-btn">
        <button onClick={() => navigate("/registration")}>
          {home.btnRegis}
        </button>
      </div>
    </div>
  );
};

const ThinArrow = ({ direction, onClick }) => (
  <div
    className={`thin-arrow ${
      direction === "left" ? "left-arrow" : "right-arrow"
    }`}
    onClick={onClick}
  >
    <span className="arrow-icon">{direction === "left" ? "❮" : "❯"}</span>
  </div>
);

export default Home;
