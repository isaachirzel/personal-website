import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Home } from "./components/home";
import { Projects } from "./components/projects";
import { Resume } from "./components/resume/resume";
import "./app.scss";
import { NavItem } from "./components/nav-item";
import { useRef } from "react";

function App() {

	const homeRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);
	const resumeRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	return (
		<div className="app">
			<header>
				<NavItem label="HOME" element={homeRef} />
				<NavItem label="ABOUT" element={aboutRef} />
				<NavItem label="RESUME" element={resumeRef} />
				<NavItem label="PROJECTS" element={projectsRef} />
				<NavItem label="CONTACT" element={contactRef} />
			</header>
			<main>
				<Home innerRef={homeRef}/>
				<About innerRef={aboutRef} />
				<Resume innerRef={resumeRef} />
				<Projects innerRef={projectsRef} />
				<Contact innerRef={contactRef} />
			</main>
		</div>
	);
}

export default App;
