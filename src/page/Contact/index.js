import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import Gap from "../../component/Gap";

const Contact = () => {
  const [status, setStatus] = useState(null);
  const [contact, setContact] = useState({});
  const [InformationTitle, setInformationTitle] = useState({});
  const [SendMessage, setSendMessage] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const contactRef = ref(db, "Page/Main/Contact/");

    onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setContact(data);
        if (data.InformationTitle) {
          setInformationTitle(data.InformationTitle);
        }
        if (data.SendMessage) {
          setSendMessage(data.SendMessage);
        }
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return (
    <div id="contact" className="contact-container">
      <section className="contact-header">
        <h1>{InformationTitle.Title}</h1>
        <p>{InformationTitle.subTitle}</p>
      </section>

      <Gap height={50} />
      <div className="contact-main">
        <section className="contact-info">
          <h2>{InformationTitle.Header}</h2>
          <p>
            <strong>{InformationTitle.Address}</strong>{" "}
            {InformationTitle.AddressInfo}
          </p>
          <p>
            <strong>{InformationTitle.Phone}</strong>{" "}
            {InformationTitle.PhoneInfo}
          </p>
          <p>
            <strong>{InformationTitle.Email}</strong>{" "}
            {InformationTitle.EmailInfo}
          </p>
          <p>
            <strong>{InformationTitle.OfficeHour}</strong>{" "}
            {InformationTitle.OfficeHourInfo}
          </p>
        </section>

        <section className="contact-form">
          <h2>{SendMessage.Header}</h2>
          {status === "success" ? (
            <div className="success-message">
              <h3>{SendMessage.SuccesMessage}</h3>
              <p>{SendMessage.SubSuccesmessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{SendMessage.Name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={SendMessage.EnterName}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">{SendMessage.Nim}</label>
                <input
                  type="number"
                  id="nim"
                  name="nim"
                  placeholder={SendMessage.EnterNim}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{SendMessage.Email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={SendMessage.EnterEmail}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{SendMessage.Message}</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={SendMessage.EnterMessage}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                {status === SendMessage.btnSending
                  ? "Sending..."
                  : SendMessage.btnSend}
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
};

export default Contact;
