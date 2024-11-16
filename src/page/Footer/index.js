const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Filkom Day</h2>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-socials">
          <a
            href="https://web.facebook.com/people/UNKLAB-Official/100082571173139/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/unklabofficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://x.com/unklabofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Filkom Day. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
