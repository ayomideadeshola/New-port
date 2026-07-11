export interface Project {
	id: number;
	title: string;
	category: string;
	year: string;
	image: string;
	description: string;
	tech: string[];
	link: string;
}

export interface Skill {
	name: string;
	level: number;
	color: string;
}

export interface Service {
	icon: string;
	title: string;
	description: string;
	features: string[];
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

export const sections = ['home', 'about', 'services', 'projects', 'contact'];

export const filters = ['all', 'web', 'api', 'database', 'devops'];

export const stats: Stat[] = [
	{ value: 40, suffix: '+', label: 'Projects Shipped' },
	{ value: 25, suffix: '+', label: 'Happy Clients' },
	{ value: 5, suffix: '+', label: 'Years Experience' },
	{ value: 99, suffix: '%', label: 'Uptime Delivered' }
];

export const projects: Project[] = [
	{
		id: 1,
		title: 'E-Commerce Platform',
		category: 'web',
		year: '2023',
		image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
		description:
			'Full-stack e-commerce solution with real-time inventory, cart, Stripe payments and admin dashboard.',
		tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
		link: '#'
	},
	{
		id: 2,
		title: 'REST API Gateway',
		category: 'api',
		year: '2023',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
		description:
			'High-performance API gateway with auth, rate limiting, caching and auto-generated Swagger docs.',
		tech: ['Node.js', 'Express', 'Redis', 'JWT'],
		link: '#'
	},
	{
		id: 3,
		title: 'Real-Time Chat App',
		category: 'web',
		year: '2022',
		image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
		description:
			'Scalable real-time messaging platform with rooms, presence indicators and message persistence.',
		tech: ['React', 'Socket.io', 'MongoDB', 'Redis'],
		link: '#'
	},
	{
		id: 4,
		title: 'Multi-Tenant SaaS',
		category: 'database',
		year: '2022',
		image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
		description:
			'Complex multi-tenant architecture with row-level security, schema isolation and per-tenant billing.',
		tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
		link: '#'
	},
	{
		id: 5,
		title: 'CI/CD Pipeline',
		category: 'devops',
		year: '2021',
		image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
		description:
			'Fully automated deployment pipeline with testing, Docker builds, blue-green deploys and monitoring.',
		tech: ['GitHub Actions', 'Docker', 'AWS ECS', 'Terraform'],
		link: '#'
	},
	{
		id: 6,
		title: 'Analytics Dashboard',
		category: 'web',
		year: '2021',
		image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
		description: 'Data-heavy analytics dashboard with real-time charts, custom reports and CSV export.',
		tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
		link: '#'
	}
];

export const skills: Skill[] = [
	{ name: 'JavaScript / TypeScript', level: 95, color: '#3B82F6' },
	{ name: 'React / Next.js', level: 92, color: '#3B82F6' },
	{ name: 'Node.js / Express', level: 90, color: '#3B82F6' },
	{ name: 'MySQL / MongoDB', level: 90, color: '#3B82F6' },
	{ name: 'Vue / Svelte ', level: 92, color: '#3B82F6' },
	{ name: 'Laravel / PHP ', level: 90, color: '#3B82F6' },
	{ name: 'REST APIs / GraphQL', level: 88, color: '#3B82F6' }
];

export const services: Service[] = [
	{
		icon: 'desktop_windows',
		title: 'Frontend Development',
		description:
			'Pixel-perfect, performant React & Next.js interfaces with clean state management and great UX.',
		features: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'State Management']
	},
	{
		icon: 'dns',
		title: 'Backend & APIs',
		description:
			'Robust REST and GraphQL APIs with Node.js, authentication, caching and thorough documentation.',
		features: ['Node.js & Express', 'REST & GraphQL', 'Authentication', 'API Documentation']
	},
	{
		icon: 'storage',
		title: 'Database Architecture',
		description: 'Schema design, query optimisation and migrations for PostgreSQL, MongoDB and Redis.',
		features: ['PostgreSQL', 'MongoDB', 'Redis', 'Query Optimization']
	},
	{
		icon: 'rocket_launch',
		title: 'DevOps & Deployment',
		description:
			'CI/CD pipelines, Docker containerisation, cloud infrastructure on AWS/GCP and uptime monitoring.',
		features: ['Docker & Kubernetes', 'CI/CD Pipelines', 'AWS/GCP', 'Monitoring']
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
