import React from "react";
import Lottie from "react-lottie";
import myPhoto from "../../resources/portfolio-image.png";
import "./home.css";
import Teletyping from "./teleypeComponent";
import movingShapes from "../../resources/json_animations/moving-shapes.json";

const HomeComponent = () => {
	const movingShapesOptions = {
		loop: true,
		autoplay: true,
		animationData: movingShapes,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div>
			<div className="main-home-container" id="home" data-aos="fade-up">
				<div className="my-information">
					<span>Hello there,</span>
					<h1>
						I'm <Teletyping />
					</h1>
					<p className="infos-about-me">
						I utilise modern web technologies for development of both hybrid
						mobile and web applications. I'm mainly focused and Javascript - The
						MERN stack. I also do UI/UX designs.
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
				<div className="my-photo">
					<img src={myPhoto} alt="me" />
					<div>
						<Lottie options={movingShapesOptions} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeComponent;
