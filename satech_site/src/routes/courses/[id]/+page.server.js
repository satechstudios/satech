/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

	const Courses = [
		{
			id: 1,
			image: '/courses/Front end.jpg',
		  name: "Frontend Development Course",
		  description:
			"Master the skills to create dynamic, responsive, and visually appealing websites with our Frontend Development Course. This course is designed for beginners and focuses on real-world projects and modern technologies to prepare you for the booming web development industry.",
		  highlights: {
			studentLevel: "Beginner",
			duration: "3 Months",
			mode: "Online/Offline (Live Classes)",
			certification: "Yes",
		  },
		  syllabus: [
			{
			  section: "Fundamentals of Web Development",
			  lessons: [
				"Introduction to Web Development: Basics of websites, client-server architecture, and frontend technologies.",
				"HTML Basics: Structured, semantic HTML, forms, tables, and multimedia.",
				"CSS Basics: Selectors, properties, box model, and page styling.",
				"Introduction to JavaScript: Variables, loops, events, and interactivity.",
			  ],
			},
			{
			  section: "Advanced Design Principles",
			  lessons: [
				"Responsive Web Design: Mobile-friendly websites using media queries.",
				"CSS Layout Systems: Flexbox and Grid for complex layouts.",
				"Bootstrap Framework: Pre-built responsive design components.",
			  ],
			},
			{
			  section: "JavaScript Frameworks",
			  lessons: [
				"Introduction to React.js: Component-based architecture, state management, and hooks.",
				"Basics of Angular: SPAs, MVC framework, and routing.",
			  ],
			},
			{
			  section: "Individual Projects",
			  lessons: [
				"Responsive Portfolio Website: Showcase your skills.",
				"Weather Forecast Web App: Real-time weather data using APIs.",
			  ],
			},
		  ],
		  faq: [
			{
			  question: "Do I need prior coding knowledge?",
			  answer: "No prior coding knowledge is required—this course is designed for beginners.",
			},
			{
			  question: "What does the course cover?",
			  answer: "The course offers a balance of theoretical knowledge and hands-on practical skills.",
			},
			{
			  question: "Are live sessions recorded?",
			  answer: "All live sessions are recorded and available for review.",
			},
			{
			  question: "Will this course help me get a job?",
			  answer: "The course equips you with a portfolio to apply for roles like Frontend Developer or Web Designer.",
			},
		  ],
		},
		{
			id: 2,
			image: '/courses/ui-ux.jpg',
		  name: "UI/UX Design Course",
		  description:
			"Our UI/UX Design Course is perfect for beginners who want to craft visually stunning user interfaces (UI) and seamless user experiences (UX). You will master tools like Figma, Adobe XD, and Illustrator while developing a deep understanding of user-centered design principles.",
		  highlights: {
			studentLevel: "Beginner",
			duration: "3 Months",
			mode: "Online/Offline (Live Classes)",
			certification: "Yes",
		  },
		  syllabus: [
			{
			  section: "UX Design Foundations",
			  lessons: [
				"Introduction to UI/UX: Fundamentals and roles in product development.",
				"User Research and Empathy Mapping: Insights for better design.",
				"User Personas and Stories: Represent target audiences.",
				"User Journey Mapping: Visualize user experiences.",
				"Problem Definition: Address user pain points effectively.",
				"User Scenarios and Storyboarding: Validate interactions.",
				"Card Sorting and Information Architecture: Enhance usability.",
				"Heuristic Evaluation: Evaluate usability principles.",
				"Usability Testing: Gather feedback from real users.",
				"Affinity Mapping and Iterative Design: Refine for optimal experiences.",
			  ],
			},
			{
			  section: "UI Design Essentials",
			  lessons: [
				"Web and Mobile Layouts: Responsive design principles.",
				"Wireframing and Prototyping: Low- and high-fidelity prototypes.",
				"Colors and Typography: Theory, accessibility, and standards.",
				"Navigation Design: Intuitive navigation systems.",
				"Material Design and Design Systems: Scalable, modern designs.",
			  ],
			},
			{
			  section: "Tools and Techniques",
			  lessons: [
				"Figma (Advanced): Collaborative design and prototyping.",
				"Adobe XD (Advanced): Prototyping and UX tools.",
				"Illustrator and Asset Creation: Icons, illustrations, and assets.",
			  ],
			},
			{
			  section: "Hands-On Projects",
			  lessons: [
				"Static Website UI Design: Professional UI design.",
				"Mobile App Design: Interactive, user-friendly prototypes.",
			  ],
			},
		  ],
		  faq: [
			{
			  question: "Do I need coding knowledge?",
			  answer: "No coding knowledge is required. This course focuses entirely on design.",
			},
			{
			  question: "Does the course help with job placement?",
			  answer: "We provide guidance and resources for job placements in UI/UX roles.",
			},
			{
			  question: "Can I add projects to my portfolio?",
			  answer: "Yes, you will work on projects that can be added to your professional portfolio.",
			},
		  ],
		},
		// Add other courses (Photoshop Mastery, After Effects, Illustrator, Premiere Pro, etc.) in the same format here
	  ];
	  
	const course = Courses.find(course => course.id == params.id);

	// if course is found , return the title of the course
	if (course) {
		return { props: course };
	} else {
		return { status: 404 };
	}
	

}