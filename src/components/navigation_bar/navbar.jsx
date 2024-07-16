import React from "react";
import { useState, useEffect } from "react";
import "./navbar.css";

const NavigationBar = ({isMobileMenuOpen, setMobileMenuOpen}) => {
	const [activeNavLink, setActiveNavLink] = useState("Home");
	const [isNavShadowSet, setNavShadow] = useState(false);
	const [scrollPostion, setScrollPosition] = useState(window.scrollY);

	window.addEventListener("scroll", () => {
		setScrollPosition(window.scrollY);
	});

	useEffect(() => {
		if (scrollPostion > 65) setNavShadow(true);
		else setNavShadow(false);
		console.log(scrollPostion);
	}, [scrollPostion]);

	return (
		<nav
			className={
				isNavShadowSet ? "main-navigation shadow-nav" : "main-navigation"
			}>
			<div className="logo-part">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="128"
					height="128"
					viewBox="0 0 512 512">
					<path d="M265 41.08c65 2.2 111.7 28.07 142.8 57.38c16.3 15.34 28.3 31.64 36.1 45.74c7.5 13.8 10.8 25.8 11 31.1l-31 139.7l-95.4 79.4l-30.6 76.5h-83.8l-30.6-76.5L88.1 315l-31-139.7c.2-5.3 3.5-17.3 11-31.1c7.8-14.1 19.8-30.4 36.1-45.74C135.3 69.15 182 43.28 247 41.08V166.9h-26.7l-31.4 31.4L85.1 181l18.7 112.2l97 64.7l17.4 39.2l75.7-.4l17.3-38.8l97-64.7l16.7-99.8l2-12.4l-103.8 17.3l-31.4-31.4H265zM467.3 202.6L487 242v95.3L442.3 315zm-422.6 0l25 112.4L25 337.3V242zm388.5 128l44.9 22.4l-155 103.3l20.4-50.9zm-354.4 0l89.7 74.8l20.4 50.9L33.9 353z" />
				</svg>
				<span>MYKE</span>
			</div>
			<div className="navigation-links">
				<a
					href="#home"
					className={activeNavLink === "Home" ? "active-nav-link" : ""}
					onClick={() => {
						setActiveNavLink("Home");
					}}>
					Home
				</a>
				<a
					href="#skills"
					className={activeNavLink === "Skills" ? "active-nav-link" : ""}
					onClick={() => {
						setActiveNavLink("Skills");
					}}>
					Skills
				</a>
				<a
					href="#about"
					className={activeNavLink === "About" ? "active-nav-link" : ""}
					onClick={() => {
						setActiveNavLink("About");
					}}>
					About
				</a>
				<a
					href="#services"
					className={activeNavLink === "Services" ? "active-nav-link" : ""}
					onClick={() => {
						setActiveNavLink("Services");
					}}>
					Services
				</a>

				<a
					href="#projects"
					className={activeNavLink === "Projects" ? "active-nav-link" : ""}
					onClick={() => {
						setActiveNavLink("Projects");
					}}>
					Projects
				</a>
				<a
					href="#testimonials"
					className={activeNavLink === "Testimonials" ? "active-nav-link" : ""}
					onClick={() => {
						setActiveNavLink("Testimonials");
					}}>
					Testimonials
				</a>
			</div>
			<div className="more-navigation-links">
				<a
					className={
						activeNavLink === "Contact"
							? "header-buttons primary-button transparent-button active-nav-link"
							: "header-buttons primary-button transparent-button"
					}
					onClick={() => {
						setActiveNavLink("Contact");
					}}
					href="#contact">
					Let's talk
				</a>
				<a className="header-buttons primary-button" href="/Resume.pdf">
					Download CV
				</a>
			</div>
			<div className="mobile-navigation" onClick={()=>{setMobileMenuOpen(isMobileMenuOpen?false:true)}}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="128"
					height="128"
					viewBox="0 0 20 20">
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</nav>
	);
};

export default NavigationBar;
