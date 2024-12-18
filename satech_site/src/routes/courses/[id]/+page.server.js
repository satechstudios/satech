/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

	const Courses = [
		{
			id: 1,
			image: '/courses/Front end.jpg',
			name: "Frontend Development Course",
			description:
				"Master the skills to create dynamic, responsive, and visually appealing websites with our Frontend Development Course. This course is designed for beginners and focuses on real-world projects and modern technologies to prepare you for the booming web development industry.",
			highlights: [{
				studentLevel: "Beginner",
				duration: "3 Months",
				mode: "Online Classes",
				certification: "Yes",
			}
			],
			whyChoose: [
				"Build expertise in the latest frontend development technologies.",
				"Gain hands-on experience through real-world projects.",
				"Learn from industry professionals and receive personalized guidance.",
				"Boost your career opportunities with a professional certificate and portfolio."
			],
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
			highlights: [
				{
				studentLevel: "Beginner",
				duration: "3 Months",
				mode: "Online Classes",
				certification: "Yes",
				}
			],
			whyChoose: [
				"Gain expertise in industry-standard design tools.",
				"Learn from experienced mentors with real-world knowledge.",
				"Build a professional portfolio to showcase your skills.",
				"Unlock exciting career opportunities in the booming tech and design industries."
			],
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
		{
			id: 3,
			image: '/courses/Photoshop.jpg',
			name: "Photoshop Mastery Course",
			description:
				"Transform your creative ideas into stunning visuals with our Photoshop Mastery Course. This course equips beginners and intermediate learners with the tools and techniques to design professional-grade graphics, retouch images, and create digital artwork.",
			highlights:[
				{
					studentLevel: "Beginner to Intermediate",
					duration: "2 Months",
					mode: "Online Classes",
					certification: "Yes"

				}
			],
			whyChoose: [
				"Learn from industry-standard tools and techniques.",
				"Develop a strong foundation in digital design and editing.",
				"Build a portfolio with visually compelling projects.",
				"Gain confidence in creating designs for professional use."
			],
			syllabus: [
				{
					section: "Basics of Photoshop",
					lessons: [
						"Introduction to Photoshop: Understand the interface, tools, and panels to navigate the software efficiently.",
						"Working with Layers: Learn to create, manage, and organize layers for precise editing and design flexibility.",
						"Selections and Masks: Master the use of selection tools and masks for seamless image manipulation.",
					],
				},
				{
					section: "Advanced Editing Techniques",
					lessons: [
						"Image Retouching: Learn professional techniques for photo retouching, blemish removal, and skin smoothing.",
						"Color Correction and Grading: Understand how to adjust colors, contrast, and saturation to enhance visual appeal.",
						"Typography and Text Effects: Design compelling text layouts and create unique typography-based designs.",
					],
				},
				{
					section: "Individual Projects",
					lessons: [
						"Photo Manipulation: Combine multiple images to create a surreal and visually striking composition.",
						"Social Media Graphics: Design professional-quality banners, posts, and ads for social media platforms.",
					],
				},
			],
			faq: [
				{
					question: "Do I need prior design experience?",
					answer: "No prior experience is required. This course is beginner-friendly.",
				},
				{
					question: "Will I get access to Photoshop software?",
					answer: "Students are advised to have a licensed or trial version of Photoshop installed.",
				},
				{
					question: "Can I work as a freelance designer after this course?",
					answer: "Yes, the skills and portfolio you develop will enable you to work on freelance projects.",
				},
			],
		},
		{
			id: 4,
			image: '/courses/After effects.jpg',
			name: "After Effects Course",
			description:
				"Bring your ideas to life with our After Effects Course. Learn motion graphics, visual effects, and animations to create engaging videos and content for various platforms.",
			highlights:[
				{
					studentLevel: "Beginner to Intermediate",
					duration: "2 Months",
					mode: "Online Classes",
					certification: "Yes",
				}
			],
			whyChoose: [
				"Learn industry-standard animation techniques.",
				"Create impactful motion graphics for professional use.",
				"Build a portfolio that stands out in the creative field."
			],
			syllabus: [
				{
					section: "Basics of Motion Graphics",
					lessons: [
						"Introduction to After Effects: Understand the interface and workflow of After Effects for beginners.",
						"Keyframes and Animation Basics: Learn to animate objects using keyframes for smooth motion.",
						"Layers and Compositions: Organize your projects effectively with layers and compositions.",
					],
				},
				{
					section: "Advanced Techniques",
					lessons: [
						"Visual Effects: Explore effects like tracking, masking, and rotoscoping to create professional-grade VFX.",
						"3D Layers and Camera Animation: Dive into the basics of 3D animation with layers and virtual cameras.",
						"Audio Synchronization: Learn to sync animations with audio tracks for dynamic videos.",
					],
				},
				{
					section: "Individual Projects",
					lessons: [
						"Animated Logo Design: Create a unique and professional animated logo.",
						"Promotional Video: Design and animate a video for marketing or social media campaigns.",
					],
				},
			],
			faq: [
				{
					question: "Do I need experience in animation?",
					answer: "No prior experience is required. This course is designed for beginners.",
				},
				{
					question: "What tools do I need for this course?",
					answer: "A licensed or trial version of After Effects and a system capable of running the software are required.",
				},
				{
					question: "Can I work in video production after completing this course?",
					answer: "Yes, this course equips you to work in roles like motion designer or video editor.",
				},
			],
		},
		{
			id: 5,
			image: '/courses/Illustrator.jpg',
			name: "Illustrator Course",
			description:
				"Our Illustrator Course is perfect for those who want to create stunning vector designs, logos, and professional illustrations. You’ll master Adobe Illustrator, the industry-standard tool, and develop a strong understanding of vector-based design principles. This course is ideal for beginners and intermediate learners, with practical projects to build your portfolio.",
			highlights: [
				{
					studentLevel: "Beginner to Intermediate",
					duration: "2 Months",
					mode: "Online Classes",
					certification: "Yes",
				}
			],
			whyChoose: [
				"Learn from industry professionals with years of experience in graphic design.",
				"Hands-on projects to build a portfolio that stands out.",
				"Master a tool that is essential for any graphic design career."
			],
			syllabus: [
				{
					section: "Fundamentals of Illustrator",
					lessons: [
						"Introduction to Adobe Illustrator and its interface",
						"Working with basic shapes and paths",
						"Using layers, artboards, and groups for organized designs",
					],
				},
				{
					section: "Advanced Techniques",
					lessons: [
						"Creating complex designs using gradients, patterns, and brushes",
						"Mastering the pen tool for precise vector artwork",
						"Typography design and advanced text effects",
					],
				},
				{
					section: "Projects",
					lessons: [
						"Design a professional logo for branding",
						"Create an infographic with stunning visuals",
					],
				},
			],
			faq: [
				{
					question: "What is the eligibility for this course?",
					answer: "This course is open to beginners and intermediate learners with no prior design experience required.",
				},
				{
					question: "Will I get a certificate?",
					answer: "Yes, a certificate will be awarded upon successful completion of the course.",
				},
				{
					question: "Do I need to have Adobe Illustrator installed?",
					answer: "Yes, we recommend having the latest version of Adobe Illustrator installed.",
				},
			],
		},
		{
			id: 6,
			image: '/courses/premiere Pro.jpeg',
			name: "Premiere Pro Course",
			description:
				"Our Premiere Pro Course is tailored for individuals who want to master video editing and post-production. You’ll learn to create professional videos for various platforms, from promotional content to cinematic montages. This course is perfect for beginners aiming to enter the video production industry.",
			highlights: [{
				studentLevel: "Beginner to Intermediate",
				duration: "2 Months",
				mode: "Online Classes",
				certification: "Yes",
			}],
			whyChoose: [
				"Gain practical skills to produce professional videos from start to finish.",
				"Learn advanced editing techniques from experienced mentors.",
				"Build an impressive portfolio to showcase your expertise."
			],
			syllabus: [
				{
					section: "Basics of Premiere Pro",
					lessons: [
						"Introduction to Adobe Premiere Pro and its interface",
						"Importing media and organizing files in the project panel",
						"Basic video editing: trimming, splitting, and arranging clips on the timeline",
					],
				},
				{
					section: "Advanced Editing Techniques",
					lessons: [
						"Applying effects, transitions, and advanced color grading",
						"Audio editing, synchronization, and mixing",
						"Exporting videos for different platforms and formats",
					],
				},
				{
					section: "Projects",
					lessons: [
						"Edit a short promotional video for a brand",
						"Create a cinematic montage using advanced techniques",
					],
				},
			],
			faq: [
				{
					question: "Is this course suitable for absolute beginners?",
					answer: "Yes, this course is designed for beginners with no prior experience in video editing.",
				},
				{
					question: "Do I need a high-end computer for this course?",
					answer: "While not mandatory, a computer with good specifications is recommended for smooth video editing.",
				},
				{
					question: "Will I receive any course materials?",
					answer: "Yes, students will receive practice files and guides to follow along with the course.",
				},
			],
		},
		{
			id: 7,
			image: '/courses/3d-modeling.jpg',
			name: "3D Modelling Course",
			description:
				"Step into the world of 3D design with our 3D Modeling Course. From creating realistic models to mastering texturing and rendering, this course covers everything needed for a successful career in 3D design.",
			highlights: [{
				studentLevel: "Beginner",
				duration: "3 Months",
				mode: "Online Classes",
				certification: "Yes",
			}],
			whyChoose: [
				"Gain expertise in industry-leading tools like Blender and Maya.",
				"Build a portfolio showcasing realistic 3D models and environments.",
				"Learn techniques applicable to gaming, animation, and AR/VR."
			],
			syllabus: [
				{
					section: "Fundamentals of 3D Modeling",
					lessons: [
						"Introduction to 3D Design Tools: Learn the basics of Blender and Maya interfaces, tools, and workflows.",
						"Creating and Modifying Objects: Master techniques to create, scale, rotate, and edit 3D objects.",
						"Modeling Basics: Understand polygon modeling, extrusion, and subdivision for creating detailed models.",
					],
				},
				{
					section: "Advanced Techniques",
					lessons: [
						"UV Mapping and Texturing: Learn to map textures onto models for realism and artistic effects.",
						"Lighting and Rendering: Understand the principles of lighting and create high-quality renders.",
						"Rigging: Explore tools for rigging for animation.",
					],
				},
				{
					section: "Individual Projects",
					lessons: [
						"3D Product Visualization: Create a detailed 3D model of a product for marketing or virtual display.",
						"Virtual Environment Design: Create a fully rendered 3D environment.",
					],
				},
			],
			faq: [
				{
					question: "Is this course beginner-friendly?",
					answer: "Yes, no prior experience is required.",
				},
				{
					question: "Will I need a powerful computer?",
					answer: "Yes, a system capable of running Blender or Maya smoothly is recommended.",
				},
				{
					question: "What career options are available after this course?",
					answer: "You can work as a 3D artist, animator, or game designer.",
				},
			],
		},
		{
			"id": 8,
			"image": "/courses/AR-VR-.jpg",
			"name": "AR/VR Development Course",
			"description": "Immerse yourself in the future of technology with our AR/VR Development Course. Learn to create interactive augmented and virtual reality experiences for applications in gaming, education, and beyond.",
			"highlights": [{
				"studentLevel": "Beginner",
				"duration": "4 Months",
				"mode": "Online Classes",
				"certification": "Yes"
			}],
			"whyChoose": [
				"Stay ahead with cutting-edge AR/VR technologies.",
				"Build skills in one of the fastest-growing tech fields.",
				"Develop hands-on projects to showcase in your portfolio.",
				"Gain knowledge applicable to industries like gaming, healthcare, and education."
			],
			"syllabus": [
				{
					"section": "Introduction to AR/VR",
					"lessons": [
						"Understanding AR and VR: Learn the difference between augmented and virtual reality and their applications.",
						"Overview of Tools and Platforms: Explore AR/VR development platforms like Unity, Unreal Engine, and ARKit/ARCore.",
						"Hardware Integration: Understand how AR/VR hardware like Oculus Rift, HTC Vive, and Microsoft HoloLens works."
					]
				},
				{
					"section": "AR Development",
					"lessons": [
						"AR Basics with ARKit/ARCore: Learn to create augmented reality experiences for mobile devices.",
						"Image and Object Tracking: Master techniques to track objects and images in real-world environments.",
						"Interactivity in AR: Add touch and gesture-based interactivity to AR applications."
					]
				},
				{
					"section": "VR Development",
					"lessons": [
						"VR Environment Creation: Learn to design and develop immersive virtual environments.",
						"VR Interaction Design: Understand best practices for designing intuitive interactions in VR.",
						"Motion Tracking and Controllers: Integrate motion controllers and sensors for dynamic user interactions."
					]
				},
				{
					"section": "Individual Project",
					"lessons": [
						"AR Product Visualization: Develop an AR application for visualizing products in real-world environments.",
						"VR Simulation: Create a VR simulation for training or entertainment purposes."
					]
				}
			],
			"faq": [
				{
					"question": "What are the prerequisites for this course?",
					"answer": "No prerequisites are required. This course is beginner-friendly."
				},
				{
					"question": "Do I need AR/VR hardware to join?",
					"answer": "While not mandatory, having access to AR/VR hardware will enhance your learning experience."
				},
				{
					"question": "Can I build AR/VR apps for mobile devices?",
					"answer": "Yes, the course covers AR/VR development for both mobile and desktop platforms."
				}
			]
		},
		{
			"id": 9,
			"image": "/courses/Game Design And Development.png",
			"name": "Game Design and Development Course",
			"description": "Step into the exciting world of game creation with our Game Design and Development Course. This course equips you with the knowledge and tools to design, develop, and deploy your own games, whether for mobile, PC, or consoles.",
			"highlights": [{
				"studentLevel": "Beginner to Intermediate",
				"duration": "4 Months",
				"mode": "Online Classes",
				"certification": "Yes"
			}],
			"whyChoose": [
				"Learn from experienced game developers.",
				"Master industry-standard tools like Unity and Unreal Engine.",
				"Build a professional portfolio with completed game projects.",
				"Unlock career opportunities in the booming gaming industry."
			],
			"syllabus": [
				{
					"section": "Fundamentals of Game Design",
					"lessons": [
						"Introduction to Game Development: Learn the basic principles of game design, including genres, mechanics, and the player experience.",
						"Game Engines Overview: Understand how game engines like Unity and Unreal Engine work and their capabilities.",
						"Storyboarding and Concept Design: Create compelling game narratives and visual concepts to guide the development process."
					]
				},
				{
					"section": "Game Development Essentials",
					"lessons": [
						"Unity Basics: Learn to navigate the Unity interface, manage assets, and create scenes.",
						"Scripting with C#: Understand the basics of C# programming to implement game mechanics like movement, interaction, and scoring.",
						"Physics and Animation: Master the Unity physics engine to create realistic motion and animations for characters and objects."
					]
				},
				{
					"section": "Advanced Game Development",
					"lessons": [
						"Multiplayer Game Development: Learn to implement networking features for multiplayer games, including lobbies and player interactions.",
						"Level Design: Understand the principles of creating engaging and balanced game levels using tools like ProBuilder.",
						"Publishing Your Game: Learn how to optimize, test, and publish your game on platforms like Steam, Google Play, and App Store."
					]
				},
				{
					"section": "Individual Projects",
					"lessons": [
						"2D Platformer Game: Design and develop a complete 2D platformer game with levels, animations, and scoring systems.",
						"3D Adventure Game: Create a 3D adventure game with a storyline, challenges, and advanced mechanics."
					]
				}
			],
			"faq": [
				{
					"question": "Do I need prior programming knowledge?",
					"answer": "Basic programming knowledge is helpful but not mandatory. This course will cover the fundamentals."
				},
				{
					"question": "Can I create games for mobile and consoles?",
					"answer": "Yes, the course covers multi-platform game development for PC, mobile, and consoles."
				},
				{
					"question": "Will I be able to publish games after this course?",
					"answer": "Yes, the course includes guidance on publishing games to major platforms."
				}
			]
		}
		
		
	];
	  
	const course = Courses.find(course => course.id == params.id);


	if (course) {
		return { props: course };
	} else {
		return { status: 404 };
	}
	

}