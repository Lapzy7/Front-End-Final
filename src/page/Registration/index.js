import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import SmallNavigation from "../../component/SmallNavigation";

const Registration = () => {
  const [registration, setRegistration] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const registrationRef = ref(db, "Page/Registration");

    onValue(registrationRef, (snapshot) => {
      const data = snapshot.val();
      setRegistration(data);
    });
  }, []);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleRedirect = () => {
    window.location.href = "/"; // Redirects to the main page
  };

  if (isSubmitted) {
    return (
      <div className="app-container">
        <SmallNavigation />
        <div className="success-container" onClick={handleRedirect}>
          <h2>{registration.h2}</h2>
          <p>{registration.p}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <SmallNavigation />
      <div className="registration-container">
        <h2>{registration.fp}</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="nama">{registration.nm}</label>
            <input
              type="text"
              id="nama"
              placeholder="Masukkan nama lengkap"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="nim">{registration.nim}</label>
            <input type="number" id="nim" placeholder="Masukkan NIM" required />
          </div>

          <div className="form-group">
            <label htmlFor="noreg">{registration.nr}</label>
            <input
              type="text"
              id="noreg"
              placeholder="Masukkan No Regis"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="notelp">{registration.nt}</label>
            <input
              type="tel"
              id="notelp"
              placeholder="Masukkan nomor telepon"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="makanan">{registration.mkn}</label>
            <select id="makanan" required>
              <option value="" disabled selected>
                {registration.mkn}
              </option>
              <option value="Ayam">{registration.mkn1}</option>
              <option value="Ikan">{registration.mkn2}</option>
              <option value="Vegetarian">{registration.mkn3}</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="sizechart">{registration.sb}</label>
            <select id="sizechart" required>
              <option value="" disabled selected>
                {registration.sb}
              </option>
              <option value="M">{registration.sb1}</option>
              <option value="L">{registration.sb2}</option>
              <option value="XL">{registration.sb3}</option>
              <option value="XXL">{registration.sb4}</option>
              <option value="XXXL">{registration.sb5}</option>
            </select>
          </div>

          <button type="submit" className="register-button">
            {registration.btn}
          </button>

          <button
            type="submit"
            className="back-button"
            onClick={handleRedirect}
          >
            {registration.btnb}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
