import clemyImg from './assets/projects/clemy.jpeg';
import ecomintImg from './assets/projects/ecomint.jpeg';
import foodieorderImg from './assets/projects/foodieorder.jpeg';
import joblistImg from './assets/projects/joblist.jpeg';
import socialsyncImg from './assets/projects/socialsync.jpeg';
import taskerImg from './assets/projects/tasker.jpeg';
import vanlifeImg from './assets/projects/vanlife.jpeg';

export interface Project {
	id: number;
	slug: string;
	title: string;
	category: string;
	year: string;
	size: 'normal' | 'tall' | 'wide';
	image: string;
	description: string;
	tech: string[];
	link: string;
	role: string;
	timeline: string;
	challenge: string;
	solution: string;
	results: string;
	gallery: string[];
}

export interface Skill {
	name: string;
	level: number;
	color: string;
}

export interface Testimonial {
	name: string;
	role: string;
	content: string;
	avatar: string;
}

export interface Stat {
	value: number;
	suffix: string;
	label: string;
}

export interface TimelineMilestone {
	year: string;
	title: string;
	description: string;
}

export interface BeyondCodePhoto {
	src: string;
	caption: string;
	rotate: number;
}

export const navLinks = [
	{ label: 'Home', path: '/' },
	{ label: 'Work', path: '/work' },
	{ label: 'About', path: '/about' },
	{ label: 'Contact', path: '/contact' }
];

export const filters = ['all', 'fullstack', 'frontend', 'mobile'];

export const contactSubjects = ['Project Inquiry', 'Collaboration', 'Just Saying Hi'];

export const stats: Stat[] = [
	{ value: 40, suffix: '+', label: 'Projects Shipped' },
	{ value: 25, suffix: '+', label: 'Happy Clients' },
	{ value: 5, suffix: '+', label: 'Years Experience' },
	{ value: 99, suffix: '%', label: 'Uptime Delivered' }
];

export const techMarquee = [
	'TypeScript',
	'React',
	'Next.js',
	'Node.js',
	'PostgreSQL',
	'MongoDB',
	'GraphQL',
	'Redis',
	'Docker',
	'AWS',
	'Tailwind CSS',
	'Express',
	'Prisma',
	'Terraform'
];

export const projects: Project[] = [
	{
		id: 1,
		slug: 'socialsync',
		title: 'SocialSync',
		category: 'fullstack',
		year: '2025',
		size: 'wide',
		image: socialsyncImg,
		description:
			'Social media scheduling platform where users compose a post once, queue it, and manage everything from a single dashboard.',
		tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
		link: 'https://socialsync-project.vercel.app/',
		role: 'Fullstack Developer',
		timeline: '2025',
		challenge:
			'Posting to several social platforms means living in several tabs, and there was no single place to draft content, line it up for later, and see what was already queued.',
		solution:
			'Built the app around one composer and one dashboard — account sign-up and login, a post editor that holds content until its send time, and a dashboard that surfaces scheduled and published posts at a glance.',
		results:
			'Drafting, queueing and reviewing posts all happen in one place, so the whole publishing routine collapses into a single screen instead of a tab per network.',
		gallery: [socialsyncImg]
	},
	{
		id: 2,
		slug: 'clemy-systems',
		title: 'Clemy Systems LLC',
		category: 'frontend',
		year: '2025',
		size: 'normal',
		image: clemyImg,
		description:
			'Corporate website for an Atlanta-based technology services firm, built around a rotating hero and clear service and project sections.',
		tech: ['React', 'Tailwind CSS', 'Vercel'],
		link: 'https://clemysystemllc.vercel.app/',
		role: 'Frontend Developer',
		timeline: '2025',
		challenge:
			'The company needed a site that reads as established and makes it obvious what they do and how to reach them, without burying contact details behind a form.',
		solution:
			'Designed a multi-section marketing site with an auto-rotating hero carousel, dedicated services and projects pages, and a persistent top bar carrying the address, phone number, email and social links.',
		results:
			'Every page keeps a call to action and direct contact details in view, so a visitor can go from landing to enquiry without hunting for the contact page.',
		gallery: [clemyImg]
	},
	{
		id: 3,
		slug: 'eco-mint',
		title: 'Eco Mint',
		category: 'mobile',
		year: '2025',
		size: 'tall',
		image: ecomintImg,
		description:
			'Mobile app design for a waste-collection service — onboarding flow, subscription plan tracking, payments and pickup scheduling.',
		tech: ['React', 'Tailwind CSS', 'Mobile-first UI'],
		link: 'https://app-seven-beta-73.vercel.app/',
		role: 'Product Designer & Frontend Developer',
		timeline: '2025',
		challenge:
			'A waste-pickup service is a recurring subscription, so the app had to explain the value fast during onboarding and then make plan, payment and pickup status easy to check at a glance.',
		solution:
			'Built a stepped onboarding flow with illustrated screens and a progress indicator, then a home surface where customers track their plan, manage payments and update pickups in one place.',
		results:
			'A mobile-first flow that carries a new user from first screen to an active plan, with the recurring admin — payments and pickup changes — kept one tap away.',
		gallery: [ecomintImg]
	},
	{
		id: 4,
		slug: 'foodieorder',
		title: 'Foodieorder',
		category: 'fullstack',
		year: '2024',
		size: 'wide',
		image: foodieorderImg,
		description:
			'Restaurant ordering app with a browsable menu, category filtering, a live cart and customer accounts.',
		tech: ['React', 'Node.js', 'Express', 'MongoDB'],
		link: 'https://my-restaurant-three.vercel.app/',
		role: 'Fullstack Developer',
		timeline: '2024',
		challenge:
			'Customers browsing a menu online lose patience quickly — the menu needed to be filterable by dish type and the cart had to stay visible and accurate while they browsed.',
		solution:
			'Built a menu grid fed from the backend with toggleable category filters, a cart with a live item count pinned in the navigation, and account handling so orders belong to a signed-in customer.',
		results:
			'Diners can filter to a dish type, add items, and watch the cart update without leaving the menu — the browse-and-order loop stays on one page.',
		gallery: [foodieorderImg]
	},
	{
		id: 5,
		slug: 'drc-joblist',
		title: 'DRC JobList',
		category: 'fullstack',
		year: '2024',
		size: 'normal',
		image: joblistImg,
		description:
			'Job board with keyword and location search, user accounts, and a dashboard for managing listings and applications.',
		tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
		link: 'https://joblisting-project.vercel.app/',
		role: 'Fullstack Developer',
		timeline: '2024',
		challenge:
			'A job board is only useful if candidates can narrow a long list quickly, and if posters have somewhere to manage what they have published.',
		solution:
			'Put a combined keyword-and-location search directly in the hero so filtering starts on arrival, and built registration, login and a dashboard behind it for managing listings and applications.',
		results:
			'Search is the first thing on the page rather than something to scroll for, and both sides of the marketplace work from their own dashboard.',
		gallery: [joblistImg]
	},
	{
		id: 6,
		slug: 'tasker',
		title: 'Tasker',
		category: 'fullstack',
		year: '2023',
		size: 'normal',
		image: taskerImg,
		description:
			'Task management and reminder app with authenticated accounts and a personal dashboard for tracking what is due.',
		tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
		link: 'https://adeshola-task-reminder.netlify.app/',
		role: 'Fullstack Developer',
		timeline: '2023',
		challenge:
			"A to-do list stops being useful the moment tasks vanish on refresh or live only on one device — tasks had to persist and belong to a specific person.",
		solution:
			'Added sign-up and sign-in with token-based auth, persisted every task against its owner, and built a dashboard where a signed-in user sees only their own tasks and reminders.',
		results:
			'Tasks survive across sessions and devices, and each account gets a private dashboard rather than a list scoped to one browser.',
		gallery: [taskerImg]
	},
	{
		id: 7,
		slug: 'vanlife',
		title: '#VANLIFE',
		category: 'frontend',
		year: '2022',
		size: 'wide',
		image: vanlifeImg,
		description:
			'Van rental marketplace with a filterable van catalogue, detail pages, and a protected host area for managing listings.',
		tech: ['React', 'React Router', 'Vite'],
		link: 'https://react-test-tau-five.vercel.app/',
		role: 'Frontend Developer',
		timeline: '2022',
		challenge:
			'The app needed nested layouts, filtered list views and a host section that stays closed to anyone who is not signed in — all handled on the client.',
		solution:
			'Built the whole thing on React Router with nested routes and shared layouts, search-param-driven filtering on the van catalogue, and route guards that redirect anonymous visitors to sign-in before the host dashboard renders.',
		results:
			'Filters live in the URL, so a filtered view of the catalogue is shareable and survives a refresh, and the host area stays behind an auth redirect.',
		gallery: [vanlifeImg]
	}
];

export const skills: Skill[] = [
	{ name: 'JavaScript / TypeScript', level: 95, color: '#6366F1' },
	{ name: 'React / Next.js', level: 92, color: '#6366F1' },
	{ name: 'Node.js / Express', level: 90, color: '#6366F1' },
	{ name: 'PostgreSQL / MongoDB', level: 90, color: '#6366F1' },
	{ name: 'Vue / Svelte', level: 85, color: '#6366F1' },
	{ name: 'Laravel / PHP', level: 82, color: '#6366F1' },
	{ name: 'REST APIs / GraphQL', level: 88, color: '#6366F1' },
	{ name: 'Docker / AWS', level: 80, color: '#6366F1' }
];

export const timelineMilestones: TimelineMilestone[] = [
	{
		year: '2019',
		title: 'Started as Junior Developer',
		description: 'Cut my teeth building internal tools and learning what "production" actually means.'
	},
	{
		year: '2021',
		title: 'Moved into Fullstack Engineering',
		description: 'Started owning features end to end — schema design, API, and the UI on top of it.'
	},
	{
		year: '2023',
		title: 'Senior Fullstack Engineer',
		description: 'Led architecture decisions on multi-tenant systems and mentored newer engineers.'
	},
	{
		year: '2026',
		title: 'Open for new opportunities',
		description: 'Taking on freelance contracts and full-time roles building products end to end.'
	}
];

export const beyondCode: BeyondCodePhoto[] = [
	{
		src: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=600&q=80',
		caption: 'Coffee-fueled debugging',
		rotate: -3
	},
	{
		src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
		caption: 'Side-project weekends',
		rotate: 2
	},
	{
		src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
		caption: 'Reading up on systems design',
		rotate: -2
	},
	{
		src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
		caption: 'Late-night keyboard tinkering',
		rotate: 3
	},
	{
		src: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=600&q=80',
		caption: 'Exploring new cities between contracts',
		rotate: -1
	}
];

export const testimonials: Testimonial[] = [
	{
		name: 'Sarah Johnson',
		role: 'CEO, TechStart',
		content: 'Exceptional fullstack work — the API he built handles 10,000 req/s without breaking a sweat.',
		avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80'
	},
	{
		name: 'Michael Chen',
		role: 'CTO, InnovateCo',
		content:
			'He delivered a complete SaaS platform in 8 weeks. Clean code, great docs, zero bugs in production.',
		avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80'
	},
	{
		name: 'Emily Davis',
		role: 'Founder, DesignHub',
		content:
			"The best fullstack developer I've worked with — he owns the whole stack and communicates clearly.",
		avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80'
	}
];

export const socials = [
	{ id: 'github', url: 'https://github.com/ayomideadeshola' },
	{ id: 'linkedin', url: 'https://www.linkedin.com/in/josephayomide-aj-5j4549252' },
	{ id: 'twitter', url: 'https://x.com/AdesholaJoseph2' }
];
