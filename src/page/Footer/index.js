import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Footer = () => {
  const [footer, setFooter] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const footerRef = ref(db, "Page/Main/Footer");

    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      setFooter(data);
    });
  }, []);

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>{footer.logo}</h2>
        </div>
        <div className="footer-links">
          <a href="#home">{footer.fmenu}</a>
          <a href="#about">{footer.fmenu2}</a>
          <a href="#contact">{footer.fmenu3}</a>
        </div>
        <div className="footer-socials">
          <a
            href="https://web.facebook.com/people/UNKLAB-Official/100082571173139/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {footer.fsocial}
          </a>
          <a
            href="https://www.instagram.com/unklabofficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {footer.fsocial2}
          </a>
          <a
            href="https://x.com/unklabofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            {footer.fsocial3}
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {footer.fbtn}</p>
      </div>
    </footer>
  );
};

export default Footer;
