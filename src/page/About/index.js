import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import Gap from "../../component/Gap";

const About = () => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "Page/Main/About");

    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);

  return (
    <div id="about" className="about-container">
      <header className="about-header">
        <h1>{about.Title}</h1>
        <p>{about.subTitle}</p>
      </header>
      <Gap height={100} />
      <section className="about-content">
        <div className="about-text">
          <p>{about.content1}</p>
          <p>{about.content2}</p>
        </div>
        <div className="about-image">
          <img
            src={`data:image/jpeg;base64, ${about.image}`}
            alt="Filkom Day"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
