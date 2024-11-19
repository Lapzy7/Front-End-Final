import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import Gap from "../../component/Gap";

const Prody = () => {
  const [prody, setPrody] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const prodyRef = ref(db, "Page/Main/Prody");

    onValue(prodyRef, (snapshot) => {
      const data = snapshot.val();
      setPrody(data);
    });
  }, []);

  const prodiList = [
    {
      name: prody.prodi1,
      description: prody.prodi1des,
      logo: `data:image/jpg;base64,${prody.iconTI}`,
    },
    {
      name: prody.prodi2,
      description: prody.prodi2des,
      logo: `data:image/jpg;base64,${prody.iconSI}`,
    },
    {
      name: prody.prodi3,
      description: prody.prodi3des,
      logo: `data:image/jpg;base64,${prody.iconDKV}`,
    },
  ];

  return (
    <div id="prody" className="prody-container">
      <Gap />
      <h1>{prody.h1}</h1>
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
