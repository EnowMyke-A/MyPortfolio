import React from "react";
import { useState } from "react";
import "./projects.css";
import releifRadar from "../../resources/project_images/Relief_Radar.png";
import Devify from "../../resources/project_images/Devify_music.png";
import iStore from "../../resources/project_images/iStore.png";
import EcommerceAPI from "../../resources/project_images/node_js.png";
import SoundZ from "../../resources/project_images/Soundz.png";
import Portfolio from "../../resources/project_images/portfolio_project.png";

const ProjectComponent = () => {
	const [activeFilter, setActiveFilter] = useState("All");
	const [isAnimationSet, setAnimation] = useState(true);

	function triggerAnimation() {
		setAnimation(false);
		setTimeout(() => {
			setAnimation(true);
		}, 0);
	}

	const projectList = [
		{
			name: "Relief Radar - cross platform disaster management mobile application",
			image: releifRadar,
			category: "Mobile Developement",
			technologies: ["Ionic", "ReactTS", "CSS3", "NodeJS"],
			repository: "https://gitub.com",
			live_demo: "https://github.com",
		},
		{
			name: "Soundz - Mobile screen only ecommerce platform for headphones, earbuds, speakers etc",
			image: SoundZ,
			category: "Web Developement",
			technologies: ["HTML5", "CSS3", "VanillaJS", "JSON"],
			repository: "https://github.com/EnowMyke-A/Soundz",
			live_demo:
				"https://soundz-em4u-rngucxtoc-enowmyke944-gmailcom.vercel.app/",
		},
		{
			name: "iStore - An apple niche product platform for showcase and sales",
			image: iStore,
			category: "Web Developement",
			technologies: ["ReactJS", "CSS3", "NodeJS", "MongoDB"],
			repository: "https://github.com/staruth0/sellerce/tree/Myke",
			live_demo: "https://user-panel-lac.vercel.app/",
		},
		{
			name: "Devify Music - A modern look and feel music player to play your local songs done with WaveSurfer Library",
			image: Devify,
			category: "Web Developement",
			technologies: ["HTML5", "CSS3", "VanillaJS", "NodeJS", "SQLite"],
			repository: "https://github.com/EnowMyke-A/Devify",
			live_demo: "https://github.com",
		},
		{
			name: "My Portfolio - Advertise my serivces, skills and projects using modern web design",
			image: Portfolio,
			category: "Web Developement",
			technologies: ["ReactJS", "CSS3", "JSON"],
			repository: "https://gitub.com",
			live_demo: "https://github.com",
		},
		{
			name: "General Ecommerce API - Authentication, Account recovery, Live chat etc",
			image: EcommerceAPI,
			category: "API",
			technologies: [
				"NodeJS",
				"ExpressJS",
				"JWT",
				"MongoDB",
				"Socket.io",
				"Nodemailer",
			],
			repository: "https://github.com/EnowMyke-A/Server",
			live_demo:
				"https://server-a0cpbg46s-enowmyke944gmailcoms-projects.vercel.app/",
		},
	];

	return (
		<div className="main-project-container" id="projects" data-aos="fade-up">
			<h1 className="section-heading">My Latest Projects</h1>
			<p className="heading-text">
				Here's a list of my most recent projects, both complete and incomplete
			</p>
			<div className="filter-container">
				<div className="filter-project-genre">
					<div
						className={
							activeFilter === "All"
								? "filter-button active-filter"
								: "filter-button"
						}
						onClick={() => {
							triggerAnimation();
							setActiveFilter("All");
						}}>
						All
					</div>
					<div
						className={
							activeFilter === "Web Developement"
								? "filter-button active-filter"
								: "filter-button"
						}
						onClick={() => {
							triggerAnimation();
							setActiveFilter("Web Developement");
						}}>
						Web Developement
					</div>
					<div
						className={
							activeFilter === "Mobile Developement"
								? "filter-button active-filter"
								: "filter-button"
						}
						onClick={() => {
							triggerAnimation();
							setActiveFilter("Mobile Developement");
						}}>
						Mobile Developement
					</div>
					<div
						className={
							activeFilter === "API"
								? "filter-button active-filter"
								: "filter-button"
						}
						onClick={() => {
							triggerAnimation();
							setActiveFilter("API");
						}}>
						API
					</div>
				</div>
			</div>
			<div className="project-section">
				{projectList.map(
					(project, index) =>
						(activeFilter == "All" || project.category == activeFilter) && (
							<div
								className={
									!isAnimationSet
										? "project-container"
										: "project-container fade-up-animation"
								}
								key={index}>
								<img src={project.image} alt="project" />
								<p className="project-title">{project.name}</p>
								<div className="project-technologies">
									{project.technologies.map((tech, index) => (
										<div className="technology-chip" key={index}>
											{tech}
										</div>
									))}
								</div>
								<div className="project-links">
									<a href={project.repository}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="128"
											height="128"
											viewBox="0 0 24 24">
											<path
												stroke="none"
												fill-rule="evenodd"
												d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2"
												clip-rule="evenodd"
											/>
										</svg>
										<span>Source Code</span>
									</a>
									<a href={project.live_demo}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="128"
											height="128"
											viewBox="0 0 24 24">
											<path
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
											/>
										</svg>
										<span>Live Demo</span>
									</a>
								</div>
							</div>
						)
				)}
			</div>
		</div>
	);
};

export default ProjectComponent;
