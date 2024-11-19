import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import SmallNavigation from "../../component/SmallNavigation";

const Gallery = () => {
  const [gallery, setGallery] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const galleryRef = ref(db, "Page/Information/Gallery");

    onValue(galleryRef, (snapshot) => {
      const data = snapshot.val();
      setGallery(data);
    });
  }, []);

  return (
    <div className="app-container">
      <SmallNavigation />
      <div>
        <section className="gallery">
          <div className="team-container">
            <h1>{gallery.galjdl}</h1>
            <p>{gallery.galdes}</p>
            <div className="section-header"></div>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img
                  src={`data:image/jpg;base64,${gallery.gal1}`}
                  alt="Gallery 1"
                />
              </div>
              <div className="gallery-item">
                <img
                  src={`data:image/jpg;base64,${gallery.gal2}`}
                  alt="Gallery 2"
                />
              </div>
              <div className="gallery-item">
                <img
                  src={`data:image/jpg;base64,${gallery.gal3}`}
                  alt="Gallery 3"
                />
              </div>
              <div className="gallery-item">
                <img
                  src={`data:image/jpg;base64,${gallery.gal4}`}
                  alt="Gallery 4"
                />
              </div>
              <div className="gallery-item">
                <img
                  src={`data:image/jpg;base64,${gallery.gal5}`}
                  alt="Gallery 4"
                />
              </div>
              <div className="gallery-item">
                <img
                  src={`data:image/jpg;base64,${gallery.gal6}`}
                  alt="Gallery 4"
                />
              </div>
              <div className="gallery-item">
                <img
                  src={`data:image/jpg;base64,${gallery.gal7}`}
                  alt="Gallery 4"
                />
              </div>
              <div className="gallery-item">
                <img
                  src={`data:image/jpg;base64,${gallery.gal8}`}
                  alt="Gallery 4"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
