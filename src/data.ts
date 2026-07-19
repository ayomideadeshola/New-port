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

export const filters = ['all', 'web', 'api', 'database', 'devops'];

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
		slug: 'ecommerce-platform',
		title: 'E-Commerce Platform',
		category: 'web',
		year: '2023',
		size: 'wide',
		image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80',
		description:
			'Full-stack e-commerce solution with real-time inventory, cart, Stripe payments and admin dashboard.',
		tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
		link: '#',
		role: 'Lead Fullstack Engineer',
		timeline: 'Jan 2023 — Apr 2023',
		challenge:
			'The client\'s existing storefront couldn\'t handle flash-sale traffic spikes and had no real-time view of inventory across warehouses, leading to overselling.',
		solution:
			'Rebuilt the storefront on Next.js with ISR for catalog pages, added a PostgreSQL-backed inventory ledger with row-level locking, and integrated Stripe for payments plus a custom admin dashboard for order and stock management.',
		results:
			'Zero overselling incidents since launch, checkout completion up 22%, and the storefront now comfortably handles 10x traffic during flash sales.',
		gallery: [
			'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80',
			'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
			'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=1200&q=80'
		]
	},
	{
		id: 2,
		slug: 'rest-api-gateway',
		title: 'REST API Gateway',
		category: 'api',
		year: '2023',
		size: 'normal',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
		description:
			'High-performance API gateway with auth, rate limiting, caching and auto-generated Swagger docs.',
		tech: ['Node.js', 'Express', 'Redis', 'JWT'],
		link: '#',
		role: 'Backend Engineer',
		timeline: 'Sep 2022 — Dec 2022',
		challenge:
			'A growing microservice fleet had inconsistent auth, no shared rate limiting, and every team hand-rolled its own API docs.',
		solution:
			'Built a single Express-based gateway in front of all services with JWT auth, a Redis-backed sliding-window rate limiter, response caching, and Swagger docs generated straight from route schemas.',
		results:
			'Handles 10,000 requests/sec at p99 under 40ms, cut duplicate auth code across services to zero, and onboarding time for new API consumers dropped from days to hours.',
		gallery: [
			'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
			'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80'
		]
	},
	{
		id: 3,
		slug: 'realtime-chat-app',
		title: 'Real-Time Chat App',
		category: 'web',
		year: '2022',
		size: 'tall',
		image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80',
		description:
			'Scalable real-time messaging platform with rooms, presence indicators and message persistence.',
		tech: ['React', 'Socket.io', 'MongoDB', 'Redis'],
		link: '#',
		role: 'Fullstack Engineer',
		timeline: 'Mar 2022 — Jul 2022',
		challenge:
			'The product needed live messaging with presence and history, but the team had no experience scaling WebSocket connections past a single server.',
		solution:
			'Designed a Socket.io layer backed by a Redis pub/sub adapter for horizontal scaling, persisted message history to MongoDB, and shipped an optimistic-update React client for instant-feeling sends.',
		results:
			'Scaled to 15,000 concurrent connections across a 3-node cluster with sub-100ms message delivery, and message history queries stayed fast via targeted indexes.',
		gallery: [
			'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80',
			'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&q=80',
			'https://images.unsplash.com/photo-1587620931276-9a49b4257e7d?w=1200&q=80'
		]
	},
	{
		id: 4,
		slug: 'multi-tenant-saas',
		title: 'Multi-Tenant SaaS',
		category: 'database',
		year: '2022',
		size: 'normal',
		image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80',
		description:
			'Complex multi-tenant architecture with row-level security, schema isolation and per-tenant billing.',
		tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
		link: '#',
		role: 'Lead Fullstack Engineer',
		timeline: 'Nov 2021 — Feb 2022',
		challenge:
			'An internal tool needed to become a multi-tenant SaaS product without risking cross-tenant data leaks or a costly database-per-tenant rewrite.',
		solution:
			'Implemented PostgreSQL row-level security policies keyed on tenant ID, modeled billing per tenant with Stripe subscriptions, and used Prisma middleware to enforce tenant scoping on every query automatically.',
		results:
			'Shipped multi-tenancy with zero data-isolation incidents in production and onboarded the first 40 paying tenants within the first quarter.',
		gallery: [
			'https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80',
			'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80'
		]
	},
	{
		id: 5,
		slug: 'ci-cd-pipeline',
		title: 'CI/CD Pipeline',
		category: 'devops',
		year: '2021',
		size: 'normal',
		image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
		description:
			'Fully automated deployment pipeline with testing, Docker builds, blue-green deploys and monitoring.',
		tech: ['GitHub Actions', 'Docker', 'AWS ECS', 'Terraform'],
		link: '#',
		role: 'DevOps Engineer',
		timeline: 'Jun 2021 — Sep 2021',
		challenge:
			'Deploys were manual, took an engineer out of their day for an hour, and rollbacks meant SSH-ing into boxes under pressure.',
		solution:
			'Wrote Terraform for the whole AWS ECS footprint, built a GitHub Actions pipeline that tests, builds and pushes Docker images, and implemented blue-green deploys with automated health-check rollback.',
		results:
			'Deploy time dropped from ~45 minutes to under 6, rollbacks became a one-click action, and the team shipped 3x more often within a month.',
		gallery: [
			'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
			'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80'
		]
	},
	{
		id: 6,
		slug: 'analytics-dashboard',
		title: 'Analytics Dashboard',
		category: 'web',
		year: '2021',
		size: 'wide',
		image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
		description: 'Data-heavy analytics dashboard with real-time charts, custom reports and CSV export.',
		tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
		link: '#',
		role: 'Fullstack Engineer',
		timeline: 'Jan 2021 — Apr 2021',
		challenge:
			'Stakeholders were pulling numbers from raw SQL exports because the existing dashboard couldn\'t handle custom date ranges or large datasets without freezing the browser.',
		solution:
			'Rebuilt the dashboard with server-side aggregation in PostgreSQL, virtualized Chart.js rendering for large series, and added a custom report builder with CSV export.',
		results:
			'Dashboard load time went from ~8s to under 900ms on the largest accounts, and ad-hoc SQL requests to the data team dropped to near zero.',
		gallery: [
			'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
			'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
			'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80'
		]
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
