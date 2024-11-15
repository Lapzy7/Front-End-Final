import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imgHome1, imgHome2, imgHome3 } from "../../assets";
import { useNavigate } from "react-router-dom";

const Home = () => {
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

  return (
    <div id="home" className="home-container">
      <header className="home-header">
        <h1>Filkom Day</h1>
        <p>Keseruan | Educated</p>
      </header>

      <section className="home-gallery">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="gallery-image-container">
              <img
                src={image}
                alt={`Filkom Day ${index + 1}`}
                className="gallery-image"
              />
              <div className="gallery-image-overlay" />
            </div>
          ))}
        </Slider>
      </section>

      <div className="register-btn">
        <button onClick={() => navigate("/registration")}>
          Daftar Sekarang
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
