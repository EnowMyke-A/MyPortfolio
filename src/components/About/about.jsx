import React from "react";
import Lottie from "react-lottie";
import myPhoto from "../../resources/about-portfolio.png";
import movingShapes from "../../resources/json_animations/moving-shapes.json";
import "./about.css";

const AboutComponent = () => {
	const movingShapesOptions = {
		loop: true,
		autoplay: true,
		animationData: movingShapes,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
    <div className="main-home-container about-me" id="about" data-aos="fade-up">
      <div className="my-information">
        <h1>About me</h1>
        <p className="infos-about-me">
          I'm Enow Myke-Austine Eta, Third year Engineering student in the
          Faculty of Engineering and Technology (FET) at the Unviersity of Buea.
          I'm a techonology enthusiate, software to be very specific. I'm mainly
          focused on web and hybrid mobile application development using the
          MERN stack. I enjoy solving problems using codes
        </p>
        <div className="more-navigation-links">
          <a
            className={"header-buttons primary-button transparent-button"}
            href="#contact"
          >
            Let's talk
          </a>
          <a className="header-buttons primary-button" href="/Resume.pdf">
            Download CV
          </a>
        </div>
      </div>
      <div className="my-photo">
        <Lottie
          options={movingShapesOptions}
          className="moving-shape-animation"
        />
        <div className="clipper-container"></div>
        <img src={myPhoto} alt="me" />
      </div>
    </div>
  );
};

export default AboutComponent;
