import React from "react";
import "./services.css";

const ServicesComponent = () => {
	const serviceIcons = [
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="128"
			height="128"
			viewBox="0 0 24 24">
			<path d="M12 13.725q-.25 0-.488-.062t-.462-.188l-8.45-4.6q-.275-.15-.388-.375T2.1 8t.113-.5t.387-.375l8.45-4.6q.225-.125.463-.188T12 2.275t.488.063t.462.187l8.45 4.6q.275.15.388.375t.112.5t-.112.5t-.388.375l-8.45 4.6q-.225.125-.462.188t-.488.062m0 2l7.85-4.275q.05-.025.475-.125q.425 0 .713.288t.287.712q0 .275-.125.5t-.4.375l-7.85 4.275q-.225.125-.462.188t-.488.062t-.488-.062t-.462-.188L3.2 13.2q-.275-.15-.4-.375t-.125-.5q0-.425.288-.712t.712-.288q.125 0 .238.038t.237.087zm0 4l7.85-4.275q.05-.025.475-.125q.425 0 .713.288t.287.712q0 .275-.125.5t-.4.375l-7.85 4.275q-.225.125-.462.188t-.488.062t-.488-.062t-.462-.188L3.2 17.2q-.275-.15-.4-.375t-.125-.5q0-.425.288-.712t.712-.288q.125 0 .238.038t.237.087z" />
		</svg>,
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="128"
			height="128"
			viewBox="0 0 20 20">
			<path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zM11 8v8h6V8zm3 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2" />
		</svg>,
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="128"
			height="128"
			viewBox="0 0 16 16">
			<path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0z" />
		</svg>,
	];

	const serviceData = [
		{
			service_name: "Fullstack Web Development",
			description:
				"Professional 3-tier websites and web application using the web's top scripting language",
		},
		{
			service_name: "Mobile Development",
			description:
				"Building mobile applications for most popular mobile platforms - Android and iOS",
		},
		{
			service_name: "UI/UX design",
			description:
				"Like my portfolio's UI/UX design? I do top notch modern feel designs",
		},
	];
	return (
		<div className="main-service-container" id="services" data-aos="fade-up">
			<h1 className="section-heading">Services</h1>
			<p className="heading-text">The major services I provide</p>
			<div className="service-block">
				{serviceData.map((service, index) => (
					<div
						className={
							index
								? "service-container"
								: "service-container gradient-service-container"
						}
						key={index}>
						{serviceIcons[index]}
						<span className="service-name">{service.service_name}</span>
						<p className="description">{service.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ServicesComponent;
