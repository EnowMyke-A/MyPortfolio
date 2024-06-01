import React from "react";
import "./testimonial.css";
import Client1 from "../../resources/Mark_wilson.jpg";
import Client2 from "../../resources/Sara_jones.jpg";
import Client3 from "../../resources/Micheal_brown.jpg";

const TestimonialComponent = () => {
	const clientAvatar = [Client1, Client2, Client3];

	const testimonialData = [
		{
			client_name: "Josh Alex",
			role: "client",
			testimony:
				"Nice work kid!! I'm impressed with your sense of style. Keep it up!!",
		},
		{
			client_name: "Skyler Walker",
			role: "client",
			testimony:
				"Besides the fact that you do an amazing Job, I'm amazed with how you get to deliver on time",
		},
		{
			client_name: "Larry Xavier",
			role: "client",
			testimony:
				"You can already do this much with little experience. Keep up and you just might be a prodigy at this",
		},
	];
	return (
		<div
			className="main-service-container main-testimonial-container"
			id="testimonials"
			data-aos="fade-up">
			<h1 className="section-heading">Testimonials</h1>
			<p className="heading-text">
				See what clients think about me and my services
			</p>
			<div className="service-block-container">
				<div className="service-block">
					{testimonialData.map((testimonial, index) => (
						<div
							className={
								(index + 1) % 2 === 0 && index
									? "service-container gradient-service-container"
									: "service-container"
							}
							key={index}>
							<div className="client-identity">
								<div className="client-image-container">
									<img
										className="client-image"
										src={clientAvatar[index]}
										alt={testimonial.client_name}
									/>
								</div>
								<div className="client-information">
									<span className="client-name">{testimonial.client_name}</span>
									<span className="client-role">{testimonial.role}</span>
								</div>
							</div>
							<p className="description">{testimonial.testimony}</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="151.28"
								height="128"
								viewBox="0 0 1664 1408">
								<path d="M768 192v704q0 104-40.5 198.5T618 1258t-163.5 109.5T256 1408h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28H192q-80 0-136-56T0 576V192q0-80 56-136T192 0h384q80 0 136 56t56 136m896 0v704q0 104-40.5 198.5T1514 1258t-163.5 109.5T1152 1408h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136V192q0-80 56-136t136-56h384q80 0 136 56t56 136" />
							</svg>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TestimonialComponent;
