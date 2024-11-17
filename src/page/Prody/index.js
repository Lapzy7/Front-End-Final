import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

import { dkvIcon, siIcon, tiIcon } from "../../assets";
import Gap from "../../component/Gap";

const Prody = () => {
  const [prody, setPrody] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const prodyRef = ref(db, "Page/Main/Contact");

    onValue(prodyRef, (snapshot) => {
      const data = snapshot.val();
      setPrody(data);
    });
  }, []);

  const prodiList = [
    {
      name: "Teknik Informatika",
      description:
        "Fokus pada pengembangan perangkat lunak, pemrograman, dan sistem komputer.",
      logo: tiIcon,
    },
    {
      name: "Sistem Informasi",
      description:
        "Mempelajari bagaimana teknologi informasi dapat digunakan untuk mendukung proses bisnis.",
      logo: siIcon,
    },
    {
      name: "Teknologi Informasi",
      description:
        "Mengkhususkan pada pengajaran dan pembelajaran teknologi informasi.",
      logo: dkvIcon,
    },
  ];

  return (
    <div id="prody" className="prody-container">
      <Gap />
      <h1>Program Studi di Fakultas Ilmu Komputer</h1>
      <div className="prody-list">
        {prodiList.map((prodi, index) => (
          <div key={index} className="prody-item">
            <div className="prody-logo">
              <img
                src={prodi.logo}
                alt={`Logo ${prodi.name}`}
                className="prody-icon"
              />
            </div>
            <h2>{prodi.name}</h2>
            <p>{prodi.description}</p>
          </div>
        ))}
      </div>
      <Gap height={50} />
    </div>
  );
};

export default Prody;
