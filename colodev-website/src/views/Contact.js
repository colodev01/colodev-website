import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <div>
          <h2 className="contact-title">Contact Me</h2>
        </div>
        <div className="contact-content">
          <div className="contact-card__left">
            <form className="contact-form" role="form">
              <div className="form-input">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  value=""
                  required
                />
              </div>
              <div className="form-input">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  value=""
                  required
                />
              </div>
              <div className="form-input">
                <textarea
                  className="form-control"
                  rows="10"
                  placeholder="MESSAGE"
                  name="message"
                  required
                ></textarea>
              </div>
              <button
                class="btn btn-primary send-button"
                id="submit"
                type="submit"
                value="SEND"
              >
                <div class="alt-send-button">
                  <span class="send-text">SEND</span>
                </div>
              </button>
            </form>
          </div>
          <div className="contact-card__right"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
