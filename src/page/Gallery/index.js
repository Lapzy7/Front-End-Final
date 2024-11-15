import { gallery1, gallery2, gallery3, imgHome2 } from "../../assets";
import SmallNavigation from "../../component/SmallNavigation";

const Gallery = () => {
  return (
    <div className="app-container">
      <SmallNavigation />
      <div>
        <section className="gallery">
          <div className="container">
            <div className="section-header">
              <h2>Gallery</h2>
              <p>Explore our collection of unforgettable moments.</p>
            </div>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src={gallery1} alt="Gallery 1" />
                <h3>Filkom Day 2024</h3>
                <p>solidarity</p>
              </div>
              <div className="gallery-item">
                <img src={gallery2} alt="Gallery 2" />
                <h3>Filkom Day 2024</h3>
                <p>Quantum Paradise</p>
              </div>
              <div className="gallery-item">
                <img src={gallery3} alt="Gallery 3" />
                <h3>Filkom Day 2021</h3>
                <p>Building the future together</p>
              </div>
              <div className="gallery-item">
                <img src={imgHome2} alt="Gallery 4" />
                <h3>Filkom Day 2024</h3>
                <p>We enjoyed the fun of playing together</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
