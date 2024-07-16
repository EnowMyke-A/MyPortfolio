import React from "react";
import "./footer.css";

const FooterComponent = () => {
  return (
    <div className="main-footer-container" id="contact">
      <div className="upper-section">
        <div className="my-personal-footer-info">
          <div className="my-information">
            <div className="logo-part">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                viewBox="0 0 512 512"
              >
                <path d="M265 41.08c65 2.2 111.7 28.07 142.8 57.38c16.3 15.34 28.3 31.64 36.1 45.74c7.5 13.8 10.8 25.8 11 31.1l-31 139.7l-95.4 79.4l-30.6 76.5h-83.8l-30.6-76.5L88.1 315l-31-139.7c.2-5.3 3.5-17.3 11-31.1c7.8-14.1 19.8-30.4 36.1-45.74C135.3 69.15 182 43.28 247 41.08V166.9h-26.7l-31.4 31.4L85.1 181l18.7 112.2l97 64.7l17.4 39.2l75.7-.4l17.3-38.8l97-64.7l16.7-99.8l2-12.4l-103.8 17.3l-31.4-31.4H265zM467.3 202.6L487 242v95.3L442.3 315zm-422.6 0l25 112.4L25 337.3V242zm388.5 128l44.9 22.4l-155 103.3l20.4-50.9zm-354.4 0l89.7 74.8l20.4 50.9L33.9 353z" />
              </svg>
              <span>MYKE</span>
            </div>
            <p className="my-footer-info">
              Have any project in mind or brilliant idea you would like to
              materialize? Maybe an already existing project needing my
              expertise? Just reach out by subscribing.
            </p>
          </div>
          <div className="my-location">
            <h3>Address</h3>
            <p>
              UB South, Molyko <br />
              Buea, Cameroon
            </p>
          </div>
        </div>
        <div className="navigation-link-container">
          <h2>Links</h2>
          <div className="navigation-links">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#testimonials">Testimonials</a>
          </div>
        </div>
        <div className="message-me">
          <h2>Let's talk</h2>
          <p>
            Get in touch by subscribing with your email below and together let's
            make the abstracts in your mind concrete
          </p>
          <form action="" className="subscribe-form">
            <input
              type="email"
              name="email-part"
              id="email-part"
              placeholder="Enter your email here"
            />
            <input
              type="sumbit"
              value={"Subscribe"}
              className="primary-button"
              id="subscribe-button"
            />
          </form>
        </div>
      </div>
      <div className="lower-section">
        <div className="copyright">
          <span>&copy;2024</span> Enow Myke-Austine Eta
        </div>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/enow-myke-3299b2241/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
          <a href="https://instagram.com" className="instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              viewBox="0 0 15 15"
            >
              <path
                fill="none"
                d="M11 3.5h1M4.5.5h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4Zm3 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"
              />
            </svg>
          </a>
          <a href="https://x.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              viewBox="0 0 256 256"
            >
              <path d="m214.75 211.71l-62.6-98.38l61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72l-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37l-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72l40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29M164.39 208L62.57 48h29l101.86 160Z" />
            </svg>
          </a>
          <a href="https://github.com/EnowMyke-A">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
