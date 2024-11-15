import React, { useState } from "react";
import SmallNavigation from "../../component/SmallNavigation";

const Registration = () => {
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
      <div className="success-container" onClick={handleRedirect}>
        <h2>Pendaftaran Selesai</h2>
        <p>Klik di sini untuk kembali ke halaman utama</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <SmallNavigation />
      <div className="registration-container">
        <h2>Formulir Pendaftaran</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              id="nama"
              placeholder="Masukkan nama lengkap"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="nim">NIM</label>
            <input type="number" id="nim" placeholder="Masukkan NIM" required />
          </div>

          <div className="form-group">
            <label htmlFor="noreg">No Regis</label>
            <input
              type="text"
              id="noreg"
              placeholder="Masukkan No Regis"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="notelp">No Telepon</label>
            <input
              type="tel"
              id="notelp"
              placeholder="Masukkan nomor telepon"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="makanan">Makanan</label>
            <select id="makanan" required>
              <option value="" disabled selected>
                Makanan
              </option>
              <option value="Ayam">Ayam</option>
              <option value="Ikan">Ikan</option>
              <option value="Vegetarian">Vegetarian</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="sizechart">Ukuran Baju</label>
            <select id="sizechart" required>
              <option value="" disabled selected>
                Size baju
              </option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="XXXL">XXXL</option>
            </select>
          </div>

          <button type="submit" className="register-button">
            Daftar
          </button>

          <button
            type="submit"
            className="back-button"
            onClick={handleRedirect}
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
