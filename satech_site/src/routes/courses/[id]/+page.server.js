/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

	const Courses = [
		{ id: 1, title: 'Frontend Development', description: 'Master the art of crafting responsive and interactive web interfaces.', image: '/courses/Front end.jpg', outline: ['HTML', 'CSS', 'JavaScript', 'Modern Frameworks'] },
		{ id: 2, title: 'UI/UX Design', description: 'Learn the principles of user-centered design to create intuitive, engaging, and visually compelling interfaces.', image: '/courses/ui-ux.jpg', outline: ['Wireframing', 'Prototyping', 'Usability Testing'] },
		{ id: 3, title: 'Photoshop', description: 'Learn professional photo editing, digital painting, and graphic design techniques with Adobe Photoshop. Master layers, masks, retouching, and creative effects to bring your ideas to life.', image: '/courses/Photoshop.jpg', outline: ['Layers', 'Masks', 'Retouching', 'Creative Effects'] },
		{ id: 4, title: 'After Effects', description: 'Dive into motion graphics and visual effects with Adobe After Effects. This course teaches you animation, compositing, and dynamic visual storytelling for film, video, and online platforms.', image: '/courses/After effects.jpg', outline: ['Animation', 'Compositing', 'Visual Storytelling'] },
		{ id: 5, title: 'Illustrator', description: 'Discover the art of vector design with Adobe Illustrator. Create stunning logos, illustrations, and scalable graphics for print and digital media using advanced drawing and typography tools.', image: '/courses/Illustrator.jpg', outline: ['Vector Design', 'Logos', 'Illustrations', 'Typography'] },
		{ id: 6, title: 'Premiere Pro', description: 'Master video editing with Adobe Premiere Pro. Learn to craft compelling stories, apply transitions, manage audio, and deliver professional-quality videos for any medium.', image: '/courses/premiere Pro.jpeg', outline: ['Video Editing', 'Transitions', 'Audio Management', 'Storytelling'] },
		{ id: 7, title: '3D Modelling', description: 'Explore 3D modeling techniques to create detailed and realistic objects, characters, and environments. Use industry-standard tools to bring your imagination to the third dimension.', image: '/courses/3d-modeling.jpg', outline: ['3D Objects', 'Characters', 'Environments'] },
		{ id: 8, title: 'AR/VR', description: 'Step into the future with AR/VR development. Learn to build immersive augmented and virtual reality experiences using cutting-edge platforms and tools.', image: '/courses/AR-VR-.jpg', outline: ['AR Development', 'VR Development', 'Immersive Experiences'] },
		{ id: 9, title: 'Game Design and Development', description: 'Unlock the world of game creation by mastering design principles, scripting, and prototyping. This course covers everything from concept art to interactive gameplay mechanics.', image: '/courses/Game Design And Development.png', outline: ['Design Principles', 'Scripting', 'Prototyping', 'Gameplay Mechanics']}
	];
	const course = Courses.find(course => course.id == params.id);

	// if course is found , return the title of the course
	if (course) {
		return { props: course };
	} else {
		return { status: 404 };
	}
	

}