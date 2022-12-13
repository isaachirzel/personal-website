export interface ResumeItem
{
	title?: string;
	organization?: string;	
	from?: Date;
	to?: Date;
	points?: string[];
}

export interface ContactItem
{
	label: string;
	url: string;
	icon?: string;
}

export interface ResumeData
{
	skills: string[];
	contactItems: ContactItem[];
	experienceItems: ResumeItem[];
	openSourceItems: ResumeItem[];
	educationItems: ResumeItem[];
	otherItems: ResumeItem[];
}

export const resumeData: ResumeData =
{
	skills: [
		"C#", "JavaScript", "TypeScript", "Java", "Python", "React", "Angular",
		"C", "C++", "HTML", "CSS", "SASS", ".NET", "Entity Framework", "SQL", "PL/SQL",
		"Android", "ASP.NET", "SQL Server", "Oracle DB", "Linux", "Git", "Jenkins",
		"CI/CD", "Unit Testing", "Frontend", "Backend", "Full Stack", "Micoservices",
		"OOP", "Node.js", "Blazor", "Selenium"
	],
	contactItems: [
		{
			label: "LinkedIn",
			url: "https://www.linkedin.com/in/isaac-hirzel"
		},
		{
			label: "(805) 340-0091",
			url: "tel:+1-805-340-0091"
		},
		{
			label: "hirzelisaac@gmail.com",
			url: "mailto:hirzelisaac@gmail.com"
		},
		{
			label: "GitHub",
			url: "https://github.com/ikehirzel"
		},
	],
	experienceItems: [
		{
			title: "Application Engineer I",
			organization: "VSolvit LLC",
			from: new Date(2022, 2, 21),
			points: [
				"Achieved _*Employee of the Quarter*_ for Quarter 2 of 2022",
				"Serve as *technical lead* for the Navy's premiere infrastructure planning platform using Angular, ASP.NET Core, and Oracle DB",
				"Design and implement interactive UI and a scalable backend for managing infrastructure plans with ease",
				"Lead meetings with stakeholders to gather task requirements and conduct product demonstrations",
				"Assess and review all *architecture design*, *implementation*, *deployment* and *testing* needs for project",
				"Participate in *multi-project Agile* meetings to record tasking, work through obstacles, and encourage team cooperation",
			]
		},
		{
			title: "Junior Application Engineer",
			organization: "VSolvit LLC",
			from: new Date(2021, 11),
			to: new Date(2022, 2),
			points: [
				"Implement *enterprise applications* for VSolvit's Business Development branch using C#, Blazor, ASP.NET MVC, and SQL Server, driving $37M in annual revenue",
				"Automated and optimized company data collection to gain competitive edge in market by integrating web scraping with Selenium",
				"Attend stakeholder meetings and demo new features *directly to CEO and COO*"
			]
		},
		{
			title: "Software Developer Intern",
			organization: "VSolvit LLC",
			from: new Date(2021, 5),
			to: new Date(2021, 11),
			points: [
				"Review and test team code submissions",
				"Make code changes as directed to internal-use applications"
			]
		},
	],
	openSourceItems: [
		{
			title: "STOQS",
			organization: "Monterey Bay Aquarium Research Institute",
			from: new Date(2021, 7),
			to: new Date(2021, 11),
			points: [
				"https://github.com/stoqs/stoqs: The *Spatial Temporal Oceanographic Query System*, is a system created to visualize and research scans of the ocean floor with exceedingly high resolution",
				"Developed a new pipeline to enable the conversion of bathymetric scans to glTF 2.0 for viewing in the browser",
				"Greatly *improved the performance* and *load time* of the bathymetry visualizer, and reduced the time required to produce 3D models by *>99%*",
			]
		}
	],
	educationItems: [
		{
			title: "B.S. Computer Science",
			organization: "California State University, Monterey Bay",
			from: new Date(2019, 7),
			to: new Date(2021, 11),
			points: [
				"Made _*Dean's List*_ for Fall 2020, Spring 2021, and Fall 2021"
			]
		}
	],
	otherItems: [
		{
			title: "Security+ Certificate",
			organization: "CompTIA",
			from: new Date(2022, 5, 14),
			to: new Date(2025, 5, 14)
		},
		{
			title: "Secret Security Clearance",
			organization: "US Department of Defense",
			from: new Date(2022, 3)
		}
	]
};
