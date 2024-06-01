import React from "react";
import "./skill.css";

const SkillComponent = () => {
	const Icons = [
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="128"
			height="128"
			viewBox="0 0 24 24">
			<path d="m12 18.178l4.62-1.256l.623-6.778H9.026L8.822 7.89h8.626l.227-2.211H6.325l.636 6.678h7.82l-.261 2.866l-2.52.667l-2.52-.667l-.158-1.844h-2.27l.329 3.544zM3 2h18l-1.623 18L12 22l-7.377-2z" />
		</svg>,
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="128"
			height="128"
			viewBox="0 0 20 20">
			<path
				fill-rule="evenodd"
				d="m1.5 0l1.594 18.056L10 20l6.906-1.944L18.5 0zm13.577 5.852L9.994 8.125l-.013.005h4.917l-.563 6.762l-4.334 1.323l-.007-.003v.003l-4.358-1.348l-.28-3.405h2.162l.14 1.764l2.316.611l.02-.006v.003l2.397-.706l.164-2.842l-2.561-.008l-4.78-.016l-.163-2.132l4.943-2.153l.288-.125H4.864l-.259-2.18h10.683z"
			/>
		</svg>,
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="128"
			height="128"
			viewBox="0 0 32 32">
			<path d="M2 2v28h28V2zm15.238 21.837c0 2.725-1.6 3.969-3.931 3.969c-2.106 0-3.325-1.087-3.95-2.406l2.144-1.294c.413.731.788 1.35 1.694 1.35c.862 0 1.412-.338 1.412-1.656v-8.944h2.631zm6.224 3.969c-2.444 0-4.025-1.162-4.794-2.688l2.144-1.237c.563.919 1.3 1.6 2.594 1.6c1.087 0 1.788-.544 1.788-1.3c0-.9-.713-1.219-1.919-1.75l-.656-.281c-1.9-.806-3.156-1.825-3.156-3.969c0-1.975 1.506-3.475 3.85-3.475c1.675 0 2.875.581 3.738 2.106l-2.05 1.313c-.45-.806-.938-1.125-1.694-1.125c-.768 0-1.256.488-1.256 1.125c0 .788.488 1.106 1.619 1.6l.656.281c2.238.956 3.494 1.938 3.494 4.137c0 2.363-1.863 3.662-4.357 3.662z" />
		</svg>,
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="112"
			height="128"
			viewBox="0 0 448 512">
			<path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8c12.3-4.3 14.8-5.2 27.9-12.7c1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6c-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2m149.1-210.1c0-39.9-27-50.5-83.7-58c-57.4-7.6-63.2-11.5-63.2-24.9c0-11.1 4.9-25.9 47.4-25.9c37.9 0 51.9 8.2 57.7 33.8c.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6c-52.7 0-84.1 22.2-84.1 59.5c0 40.4 31.3 51.6 81.8 56.6c60.5 5.9 65.2 14.8 65.2 26.7c0 20.6-16.6 29.4-55.5 29.4c-48.9 0-59.6-12.3-63.2-36.6c-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3c0 31.1 16.9 68.2 97.8 68.2c58.4-.1 92-23.2 92-63.4" />
		</svg>,
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="128"
			height="128"
			viewBox="0 0 24 24">
			<path d="M12.001 13.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-.528 2.994c.175.211.35.414.528.609c.177-.195.353-.398.528-.609a24.932 24.932 0 0 1-1.056 0m-1.995-.125a20.686 20.686 0 0 1-2.285-.367a10.8 10.8 0 0 0-.17 1.015c-.19 1.583.075 2.545.478 2.777c.403.233 1.368-.019 2.645-.974c.263-.197.528-.416.794-.655a20.665 20.665 0 0 1-1.462-1.796m7.331-.367a20.69 20.69 0 0 1-2.285.367a20.665 20.665 0 0 1-1.462 1.796c.266.24.531.458.794.655c1.277.955 2.242 1.207 2.645.974c.403-.232.667-1.194.479-2.777a11.374 11.374 0 0 0-.17-1.015m1.45-.388c.577 2.639.274 4.74-1.008 5.48c-1.282.74-3.253-.048-5.25-1.867c-1.997 1.819-3.968 2.606-5.25 1.866c-1.282-.74-1.585-2.84-1.009-5.48c-2.574-.82-4.241-2.133-4.241-3.613s1.667-2.793 4.241-3.613c-.576-2.64-.273-4.74 1.009-5.48c1.282-.74 3.253.047 5.25 1.866c1.997-1.819 3.968-2.606 5.25-1.866c1.282.74 1.585 2.84 1.009 5.48C20.833 9.207 22.5 10.52 22.5 12s-1.668 2.794-4.241 3.614m-7.32-9.779c-.265-.239-.53-.458-.793-.655c-1.277-.955-2.242-1.207-2.645-.974c-.403.232-.667 1.194-.479 2.778c.04.326.096.665.17 1.015a20.677 20.677 0 0 1 2.286-.368c.475-.653.965-1.254 1.462-1.796m3.585 1.796a20.63 20.63 0 0 1 2.285.368c.075-.35.132-.69.17-1.015c.19-1.584-.075-2.546-.478-2.778c-.403-.233-1.368.019-2.645.974c-.263.197-.528.416-.794.655c.497.542.987 1.143 1.462 1.796m-1.995-.125c-.175-.21-.351-.414-.528-.609c-.177.195-.353.398-.528.609a24.868 24.868 0 0 1 1.056 0m-4.156 7.198a24.907 24.907 0 0 1-.528-.914c-.095.257-.183.51-.263.762c.257.055.521.106.79.152m1.932.234a22.915 22.915 0 0 0 3.392 0A22.957 22.957 0 0 0 15.393 12a22.863 22.863 0 0 0-1.696-2.938a22.896 22.896 0 0 0-3.392 0A22.91 22.91 0 0 0 8.609 12a22.926 22.926 0 0 0 1.696 2.938m5.852-4.728c.095-.257.183-.51.263-.761a17.974 17.974 0 0 0-.79-.153a25.076 25.076 0 0 1 .527.914M6.131 9.837c-.34.11-.662.23-.964.36c-1.465.628-2.166 1.338-2.166 1.803c0 .465.7 1.175 2.166 1.803c.302.13.624.25.964.36c.222-.7.497-1.426.825-2.163a20.678 20.678 0 0 1-.825-2.163m1.45-.388c.081.25.169.504.264.76a24.929 24.929 0 0 1 .528-.913c-.27.046-.534.097-.791.153m10.29 4.714c.34-.11.662-.23.964-.36C20.3 13.175 21 12.465 21 12c0-.465-.7-1.175-2.166-1.803c-.302-.13-.625-.25-.965-.36c-.22.7-.496 1.426-.824 2.163c.328.737.603 1.463.825 2.163m-1.45.389a19.245 19.245 0 0 0-.264-.762a25.108 25.108 0 0 1-.528.914c.27-.046.534-.097.791-.152" />
		</svg>,
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="128"
			height="128"
			viewBox="0 0 24 24">
			<path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115c-.28-.394-.53-.954-.735-1.44c-.036.495-.055.685-.523 1.184c-.723.566-4.438 3.682-4.74 10.02c-.282 5.912 4.27 9.435 4.888 9.884l.07.05A74 74 0 0 1 11.91 24h.481a29 29 0 0 1 .51-3.07c.417-.296.604-.463.85-.693a11.34 11.34 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218m-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695c-.381-.045-.765-1.76-.765-2.405" />
		</svg>,
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="128"
			height="128"
			viewBox="0 0 24 24">
			<path d="M20.66 7a1.51 1.51 0 0 0-.55-.57l-7.34-4.24a1.67 1.67 0 0 0-1.54 0L3.89 6.43a1.68 1.68 0 0 0-.77 1.33v8.48a1.57 1.57 0 0 0 .22.76a1.51 1.51 0 0 0 .55.57l7.34 4.24a1.67 1.67 0 0 0 1.54 0l7.34-4.24a1.51 1.51 0 0 0 .55-.57a1.57 1.57 0 0 0 .22-.76V7.76a1.57 1.57 0 0 0-.22-.76M12 17.92A5.92 5.92 0 1 1 17.13 9L16 9.71l-.36.2l-1 .61A3 3 0 0 0 9 12a2.88 2.88 0 0 0 .4 1.48a3 3 0 0 0 5.13 0l2.6 1.52A5.94 5.94 0 0 1 12 17.92m5.92-5.59h-.66V13h-.65v-.66H16v-.66h.66V11h.65v.66h.66zm2.47 0h-.66V13h-.66v-.66h-.65v-.66h.65V11h.66v.66h.66z" />
		</svg>,
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="128"
			height="128"
			viewBox="0 0 24 24">
			<path d="m22.922 7.027l-.103-.23l-.169.188c-.408.464-.928.82-1.505 1.036l-.159.061l.066.155a9.7 9.7 0 0 1 .75 3.759c0 5.405-4.397 9.806-9.806 9.806S2.194 17.405 2.194 12S6.596 2.194 12 2.194c1.467 0 2.883.319 4.2.947l.155.075l.066-.155a3.8 3.8 0 0 1 1.106-1.453l.197-.159l-.225-.117A11.9 11.9 0 0 0 12.001.001c-6.619 0-12 5.381-12 12s5.381 12 12 12s12-5.381 12-12c0-1.73-.361-3.403-1.078-4.973zM12 6.53A5.476 5.476 0 0 0 6.53 12A5.476 5.476 0 0 0 12 17.47A5.476 5.476 0 0 0 17.47 12A5.48 5.48 0 0 0 12 6.53m10.345-2.007a2.494 2.494 0 1 1-4.988 0a2.494 2.494 0 0 1 4.988 0" />
		</svg>,
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="128.13"
			height="128"
			viewBox="0 0 1025 1024">
			<path d="M256.06 224q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5m768 800q-5-2-14.5-5.5t-36-15.5t-51.5-25.5t-55.5-36t-53.5-47.5q-20-14-59-56q21-14 64.5-23.5t76.5-12.5l33-2q0-16-28.5-33.5t-66.5-32t-82.5-40.5t-69.5-55q-19-22-35-48.5t-37-69t-24-48.5q-20-31-57.5-84t-47.5-69q-31-48-108.5-120t-115.5-72q-25 0-46 10q-102-74-114-74q-13 0-22.5 9.5T64.06 96q0 8 31 56t66 96q2 17 5 34t5.5 29t9 28.5t9.5 24t12.5 24.5t11.5 20.5t13 21.5t12 19q-9-1-15-1q-14 0-23 44.5t-9 115.5q0 16 26 62q31 54 37 18q1-6 1-16q0-82 50-94q59 117 101 191t83 125q-83-64-177-211q-9 34-24.5 59.5t-32.5 25.5q-30 0-61-35t-49-79.5t-18-77.5q0-31 8-74.5t21-74.5q-24-34-37.5-67.5t-19.5-89.5q-5-9-14-26q-86-157-86-180q0-26 19-45t45-19q21 0 78 22t89 44q14-2 25-2q48 0 132.5 69t123.5 123q1 1 23 31.5t27.5 38.5t24.5 35t27 41t21.5 36t22 40t14.5 34q18 44 61 82t91 64t94 51.5t76 56.5t30 66q-14 1-36.5 3t-70 11.5t-68.5 23.5q20 25 64.5 59.5t77.5 59.5t33 35" />
		</svg>,
	];

	const Skill_Set = [
		{
			Language: "HTML5",
			Description:
				"With about 5 years of experience with the Language, my mastery level is very Advanced",
		},
		{
			Language: "CSS3",
			Description:
				"Top notch styling with the modern css3, having about 5years of experience. Mastery level at advanced",
		},
		{
			Language: "Vanilla JS",
			Description:
				" 4 years of experience width advanced mastery level of plain JS",
		},
		{
			Language: "Node JS - Express Js",
			Description:
				"Sever-side scripting is no big issue - professional touch - 2 years experience",
		},
		{
			Language: "React JS",
			Description:
				"2 years of exprience with facebook's very own React JS. Mastery level at almost advanced",
		},
		{
			Language: "MongoDB",
			Description:
				"The database that completes the MERN stack. Intermediate mastery level - 2 years of experience",
		},
		{
			Language: "C++",
			Description:
				"One of the most robust language there is - 3 years of experience with intermediate mastery level",
		},
		{
			Language: "Ionic",
			Description:
				"Mobile developement framework that utilizes web technologies like react, vue, angular - 1 month experience",
		},
		{
			Language: "SQL",
			Description:
				"My relational database focus. almost advanced mastery level - about 4 years of experience",
		},
	];

	return (
		<div>
			<div
				className="main-skill-container"
				id="skills"
				data-aos="fade-up"
				data-aos-offset={50}>
				{Skill_Set.map((skill, index) => (
					<div key={index} className="skill-container">
						<div className="icon-container">{Icons[index]}</div>
						<span className="language">{skill.Language}</span>
						<p className="skill-description">{skill.Description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SkillComponent;