import "./App.css";
import NavigationBar from "./components/navigation_bar/navbar";
import HomeComponent from "./components/Home/home";
import SkillComponent from "./components/Skill/skill";
import AboutComponent from "./components/About/about";
import ProjectComponent from "./components/Projects/projects";
import ServicesComponent from "./components/Services/services";
import TestimonialComponent from "./components/Testimonials/testimonial";
import FooterComponent from "./Footer/footer";
import MobileNavigationBar from "./components/navigation_bar/mobile_navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function App() {

const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(()=>{
    AOS.init({
      once: true,
      duration: 500,
      offset: 150,
      easing: "ease-in-out",
    });
  }, [])

	return (
		<div className="App">
			<NavigationBar isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>
			<MobileNavigationBar isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>
			<div className={isMobileMenuOpen?"open-menu main-body-container":"main-body-container"} onClick={()=>{setMobileMenuOpen(false)}}>
				<HomeComponent />
				<SkillComponent />
				<AboutComponent />
				<ServicesComponent />
				<ProjectComponent />
				<TestimonialComponent />
			</div>
			<FooterComponent />
		</div>
	);
}

export default App;
