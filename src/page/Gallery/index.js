import { gallery1, gallery2, gallery3, imgHome2 } from "../../assets";
import Navigation from "../../component/Navigation";

const Gallery = () => {
  return (
    <div className="app-container">
      <Navigation />
      <div>
        <section className="gallery">
          <div className="container">
            <div className="section-header">
              <h2>Gallery</h2>
              <p>Explore our collection of unforgettable moments.</p>
            </div>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src={gallery1} alt="Gallery Image 1" />
                <h3>Filkom Day 2024</h3>
                <p>solidarity</p>
              </div>
              <div className="gallery-item">
                <img src={gallery2} alt="Gallery Image 2" />
                <h3>Filkom Day 2024</h3>
                <p>Quantum Paradise</p>
              </div>
              <div className="gallery-item">
                <img src={gallery3} alt="Gallery Image 3" />
                <h3>Filkom Day 2021</h3>
                <p>Building the future together</p>
              </div>
              <div className="gallery-item">
                <img src={imgHome2} alt="Gallery Image 4" />
                <h3>Filkom Day 2024</h3>
                <p>We enjoyed the fun of playing together</p>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <p>Gallery | Young Boys</p>
            <ul className="social-links">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Gallery;
