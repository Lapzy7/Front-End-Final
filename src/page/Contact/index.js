import React, { useState } from "react";
import Gap from "../../component/Gap";
const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi proses pengiriman
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
    }, 2000); // Menunggu 2 detik untuk simulasi pengiriman
  };

  return (
    <div id="contact" className="contact-container">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Reach out with any questions or feedback.
        </p>
      </section>

      <Gap height={50} />
      <div className="contact-main">
        <section className="contact-info">
          <h2>Our Contact Information</h2>
          <p>
            <strong>Address:</strong> Unklab, Airmadidi, Sulawesi Utara
          </p>
          <p>
            <strong>Phone:</strong> +62 123 456 789
          </p>
          <p>
            <strong>Email:</strong> contact@filkomday.com
          </p>
          <p>
            <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
          </p>
        </section>

        <section className="contact-form">
          <h2>Send Us a Message</h2>
          {status === "success" ? (
            <div className="success-message">
              <h3>Thank you for your message!</h3>
              <p>We will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">NIM</label>
                <input
                  type="number"
                  id="nim"
                  name="nim"
                  placeholder="Enter your NIM"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
};

export default Contact;
