<script>
	import { onMount } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import L from '$lib/assets/logo.png';
	import SI from '$lib/assets/sideimg.png';
	import { ChevronRight } from 'lucide-svelte';

	let darkMode = false;
	let mounted = false;

	let activeSection = 'home';
	let mobileMenuOpen = false;

	let activeFilter = 'all';
	const filters = ['all', 'web', 'api', 'database', 'devops'];

	let formData = { name: '', email: '', message: '' };
	let formStatus = 'idle';

	let statsVisible = false;
	const stats = [
		{ value: 40, suffix: '+', label: 'Projects Shipped' },
		{ value: 25, suffix: '+', label: 'Happy Clients' },
		{ value: 5, suffix: '+', label: 'Years Experience' },
		{ value: 99, suffix: '%', label: 'Uptime Delivered' }
	];

	const projects = [
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
			description:
				'Data-heavy analytics dashboard with real-time charts, custom reports and CSV export.',
			tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
			link: '#'
		}
	];

	const skills = [
		{ name: 'JavaScript / TypeScript', level: 95, color: '#3B82F6' },
		{ name: 'React / Next.js', level: 92, color: '#3B82F6' },
		{ name: 'Node.js / Express', level: 90, color: '#3B82F6' },
		{ name: 'MySQL / MongoDB', level: 90, color: '#3B82F6' },
		{ name: 'Vue / Svelte ', level: 92, color: '#3B82F6' },
		{ name: 'Laravel / PHP ', level: 90, color: '#3B82F6' },
		{ name: 'REST APIs / GraphQL', level: 88, color: '#3B82F6' }
	];

	const services = [
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
			description:
				'Schema design, query optimisation and migrations for PostgreSQL, MongoDB and Redis.',
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

	const testimonials = [
		{
			name: 'Sarah Johnson',
			role: 'CEO, TechStart',
			content:
				'Exceptional fullstack work — the API he built handles 10,000 req/s without breaking a sweat.',
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

	let currentTestimonial = 0;


	onMount(() => {
		mounted = true;
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			darkMode = true;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.target.id === 'stats') statsVisible = e.isIntersecting;
				});
			},
			{ threshold: 0.5 }
		);

		const statsEl = document.getElementById('stats');
		if (statsEl) observer.observe(statsEl);

		return () => observer.disconnect();
	});

	function toggleTheme() {
		darkMode = !darkMode;
	}

	function handleScroll() {
		const sp = window.scrollY + 100;
		for (const id of ['home', 'about', 'services', 'projects', 'contact']) {
			const el = document.getElementById(id);
			if (el && sp >= el.offsetTop && sp < el.offsetTop + el.offsetHeight) {
				activeSection = id;
				break;
			}
		}
	}

	async function handleSubmit() {
		formStatus = 'sending';
		await new Promise((r) => setTimeout(r, 1500));
		formStatus = 'success';
		formData = { name: '', email: '', message: '' };
		setTimeout(() => (formStatus = 'idle'), 3000);
	}

	$: filteredProjects =
		activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);
</script>

<svelte:window on:scroll={handleScroll} />

<div
	class="min-h-screen transition-colors duration-300 {darkMode
		? 'dark bg-gray-950 text-white'
		: 'bg-white text-gray-900'}"
>
	<nav
		class="fixed z-50 w-full border-b backdrop-blur-xl transition-colors duration-300
              {darkMode
			? 'border-gray-800/60 bg-gray-950/90 shadow-gray-900/60'
			: 'border-gray-200/60 bg-white/90 shadow-gray-100'}"
	>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<a href="#home" class="flex flex-shrink-0 items-center gap-2">
					<img src={L} class="h-40 w-auto" alt="" />
				</a>

				<!-- Desktop -->
				<div class="hidden items-center gap-1 md:flex">
					{#each ['home', 'about', 'services', 'projects', 'contact'] as s}
						<a
							href="#{s}"
							class="relative rounded-lg px-4 py-2 text-sm font-semibold capitalize transition-all duration-200
                      {activeSection === s
								? darkMode
									? 'bg-violet-950/50 text-violet-400'
									: 'bg-violet-50 text-violet-600'
								: darkMode
									? 'text-gray-400 hover:bg-gray-800/60 hover:text-white'
									: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}"
						>
							{s}
						</a>
					{/each}

					<button
						on:click={toggleTheme}
						class="ml-3 cursor-pointer rounded-xl border p-2.5 transition-all duration-200 active:scale-95
                         {darkMode
							? 'border-gray-700 bg-gray-800 text-amber-400 hover:bg-gray-700'
							: 'border-gray-200 bg-gray-100 text-slate-600 hover:bg-gray-200'}"
						aria-label="Toggle theme"
					>
						{#if darkMode}
							<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
								/>
							</svg>
						{:else}
							<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
								/>
							</svg>
						{/if}
					</button>
				</div>

				<!-- Mobile -->
				<div class="flex items-center gap-1 md:hidden">
					<button
						on:click={toggleTheme}
						class="cursor-pointer rounded-lg p-2 transition-colors {darkMode
							? 'text-amber-400 hover:bg-gray-800'
							: 'text-slate-600 hover:bg-gray-100'}"
					>
						{#if darkMode}
							<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
								/>
							</svg>
						{:else}
							<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
								/>
							</svg>
						{/if}
					</button>
					<button
						on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
						class="rounded-lg p-2 transition-colors {darkMode
							? 'text-gray-300 hover:bg-gray-800'
							: 'text-gray-700 hover:bg-gray-100'}"
					>
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							{#if mobileMenuOpen}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							{:else}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							{/if}
						</svg>
					</button>
				</div>
			</div>
		</div>

		{#if mobileMenuOpen}
			<div
				class="border-t backdrop-blur-xl md:hidden {darkMode
					? 'border-gray-800 bg-gray-950/95'
					: 'border-gray-200 bg-white/95'}"
				transition:slide={{ duration: 200 }}
			>
				<div class="space-y-1 px-4 py-3">
					{#each ['home', 'about', 'services', 'projects', 'contact'] as s}
						<a
							href="#{s}"
							on:click={() => (mobileMenuOpen = false)}
							class="flex cursor-pointer items-center rounded-xl px-4 py-3 text-sm font-semibold capitalize transition-colors
                      {activeSection === s
								? darkMode
									? 'text-violet-4bbbb b00  bg-violet-950/40'
									: 'bg-violet-50 text-violet-600'
								: darkMode
									? 'text-gray-300 hover:bg-gray-800/60'
									: 'text-gray-700 hover:bg-gray-50'}"
						>
							{s}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</nav>

	<section
		id="home"
		class="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
	>
		<div class="pointer-events-none absolute inset-0 overflow-hidden">
			<div
				class="animate-blob absolute -top-40 -right-40 h-96 w-96 rounded-full opacity-40 dark:opacity-20"
				style="background:radial-gradient(circle,#7C3AED,#3B82F6);filter:blur(80px);"
			></div>
			<div
				class="animate-blob animation-delay-2000 absolute -bottom-40 -left-40 h-96 w-96 rounded-full opacity-30 dark:opacity-20"
				style="background:radial-gradient(circle,#3B82F6,#06B6D4);filter:blur(80px);"
			></div>
		</div>

		<div
			class="pointer-events-none absolute inset-0"
			style="
				background-image:
					linear-gradient({darkMode
				? 'rgba(99,102,241,0.07)'
				: 'rgba(99,102,241,0.04)'} 1px, transparent 1px),
					linear-gradient(90deg, {darkMode
				? 'rgba(99,102,241,0.07)'
				: 'rgba(99,102,241,0.04)'} 1px, transparent 1px);
				background-size: 60px 60px;
			"
		></div>

		<div class="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			{#if mounted}
				<h1
					in:fly={{ y: 40, duration: 900, delay: 250 }}
					class="mb-6 text-5xl leading-[1.05] font-black tracking-tight sm:text-6xl md:text-6xl
                   {darkMode ? 'text-white' : 'text-gray-900'}"
				>
					Hi, I'm<br class="sm:hidden" />
					<span
						class="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent"
					>
						Ayomide Adeshola
					</span>
				</h1>

				<p
					in:fly={{ y: 40, duration: 900, delay: 400 }}
					class="mx-auto mb-10 max-w-2xl text-lg leading-relaxed sm:text-xl
                  {darkMode ? 'text-gray-400' : 'text-gray-500'}"
				>
					Fullstack Developer — I architect, build and ship
					<span class="{darkMode ? 'text-gray-100' : 'text-gray-800'} font-semibold"
						>production-grade web apps</span
					>
					from database schema all the way to polished UI.
				</p>

				<div
					in:fly={{ y: 40, duration: 900, delay: 550 }}
					class="flex flex-col justify-center gap-3 sm:flex-row"
				>
					<a
						href="#projects"
						class="group inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3.5
                    text-base font-medium text-white shadow-lg
                    transition-all duration-200 hover:scale-105 hover:from-violet-700 hover:to-blue-700 hover:shadow-violet-500/40"
					>
						See My Work
						<ChevronRight />
					</a>
					<a
						href="#contact"
						class="inline-flex items-center justify-center gap-2 rounded-md border px-7 py-3.5 text-base font-medium transition-all duration-200 hover:scale-105
                    {darkMode
							? 'border-gray-700 bg-gray-900 text-gray-200 hover:border-violet-500'
							: 'border-gray-200 bg-white text-gray-800 hover:border-violet-400'}"
					>
						Hire Me
					</a>
				</div>
			{/if}
		</div>
	</section>

	<section
		id="stats"
		class="py-20 {darkMode ? 'bg-gray-900/50' : 'bg-gray-50'} border-y {darkMode
			? 'border-gray-800'
			: 'border-gray-200'}"
	>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
				{#each stats as stat, i}
					<div class="text-center">
						<div
							class="mb-2 bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
						>
							{#if statsVisible}
								<span in:fade>{stat.value}{stat.suffix}</span>
							{:else}
								0{stat.suffix}
							{/if}
						</div>
						<div
							class="text-sm tracking-widest uppercase {darkMode
								? 'text-gray-500'
								: 'text-gray-600'}"
						>
							{stat.label}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section
		id="about"
		class="py-28 {darkMode ? 'bg-gray-950' : 'bg-gray-50'} relative overflow-hidden"
	>
		<div
			class="pointer-events-none absolute inset-0"
			style="background-image: linear-gradient({darkMode
				? 'rgba(99,102,241,0.06)'
				: 'rgba(99,102,241,0.04)'} 1px, transparent 1px), linear-gradient(90deg, {darkMode
				? 'rgba(99,102,241,0.06)'
				: 'rgba(99,102,241,0.04)'} 1px, transparent 1px); background-size: 48px 48px;"
		></div>

		<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 flex items-center gap-4">
				<div class="h-px w-12 bg-gradient-to-r from-transparent to-violet-500"></div>
				<span
					class="text-xs font-black tracking-[0.3em] text-violet-600 uppercase dark:text-violet-400"
					>About Me</span
				>
				<div class="h-px flex-1 {darkMode ? 'bg-gray-800' : 'bg-gray-200'}"></div>
			</div>

			<div class="grid grid-cols-1 gap-5 lg:grid-cols-12">
				<div
					class="relative overflow-hidden rounded-3xl border p-8 md:p-10 lg:col-span-7
				{darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}
				shadow-sm"
				>
					<div
						class="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-20"
						style="background: radial-gradient(circle, #7C3AED, #3B82F6); filter: blur(60px);"
					></div>

					<h2
						class="relative mb-6 text-4xl leading-[1.1] font-black tracking-tight md:text-5xl
					{darkMode ? 'text-white' : 'text-gray-900'}"
					>
						Building robust apps<br />
						<span
							class="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent"
						>
							end to end.
						</span>
					</h2>

					<p
						class="relative mb-6 text-lg leading-relaxed {darkMode
							? 'text-gray-400'
							: 'text-gray-600'}"
					>
						I'm a fullstack developer who loves owning the entire product lifecycle — from designing
						relational schemas and building APIs to crafting responsive UIs that users actually
						enjoy.
					</p>
					<p
						class="relative text-lg leading-relaxed {darkMode ? 'text-gray-400' : 'text-gray-600'}"
					>
						My focus is on
						<span class="font-semibold {darkMode ? 'text-gray-100' : 'text-gray-900'}"
							>clean, maintainable code</span
						>, pragmatic architecture and shipping features that move the needle.
					</p>

					<!-- CTA row -->
					<div class="relative mt-10 flex flex-wrap gap-3">
						<a
							href="#projects"
							class="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600
						px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/25
						transition-all duration-200 hover:-translate-y-0.5 hover:shadow-violet-500/40"
						>
							View Projects
							<ChevronRight />
						</a>
						<a
							href="#contact"
							class="inline-flex items-center gap-2 rounded-xl border-2 px-6 py-3 text-sm font-bold
						transition-all duration-200 hover:-translate-y-0.5
						{darkMode
								? 'border-gray-700 text-gray-300 hover:border-violet-500 hover:text-violet-400'
								: 'border-gray-300 text-gray-700 hover:border-violet-500 hover:text-violet-600'}"
						>
							Let's Talk
						</a>
					</div>
				</div>

				<div class="relative lg:col-span-5">
					<div
						class="relative h-full min-h-[340px] overflow-hidden rounded-3xl border shadow-sm
					{darkMode ? 'border-gray-800' : 'border-gray-200'}"
					>
						<div
							class="absolute inset-0 bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-500 opacity-80"
						></div>
						<div class="absolute inset-[2px] overflow-hidden rounded-[calc(1.5rem-2px)]">
							<img src={SI} alt="Developer workspace" class="h-full w-full object-cover" />
							<!-- scrim -->
							<div
								class="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-gray-950/20 to-transparent"
							></div>
							<!-- floating code badge -->
							<div
								class="absolute right-6 bottom-6 left-6 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md"
							>
								<div class="flex items-center gap-3">
									<div
										class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500"
									>
										<svg
											class="h-5 w-5 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
											/>
										</svg>
									</div>
									<div class="text-white">
										<div class="text-sm leading-tight font-bold">Clean Code</div>
										<div class="text-xs opacity-70">Always maintainable</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class="mt-8 rounded-3xl border p-8 shadow-sm md:p-10
			{darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}"
			>
				<div class="mb-8 flex items-center justify-between">
					<h3 class="text-xl font-black {darkMode ? 'text-white' : 'text-gray-900'}">
						Technical Proficiency
					</h3>
					<span
						class="text-xs font-semibold tracking-widest uppercase {darkMode
							? 'text-gray-600'
							: 'text-gray-400'}"
					>
						Skill Levels
					</span>
				</div>

				<!-- Timeline -->
				<div class="relative">
					<!-- Vertical spine -->
					<div
						class="absolute top-0 bottom-0 left-[27px] w-px
					bg-gradient-to-b from-violet-500/60 via-blue-500/40 to-transparent md:left-[31px]"
					></div>

					<div class="space-y-8">
						{#each skills as skill, i}
							<div class="group/skill relative flex items-start gap-5 md:gap-7">
								<div class="relative z-10 flex-shrink-0">
									<div
										class="absolute inset-0 scale-125 rounded-full opacity-30 transition-transform duration-300 group-hover/skill:scale-150"
										style="background: {skill.color};"
									></div>
									<div
										class="relative flex h-14 w-14 items-center justify-center rounded-full text-xs font-black text-white shadow-lg ring-4
									{darkMode ? 'ring-gray-900' : 'ring-white'}"
										style="background: linear-gradient(135deg, {skill.color}ee, {skill.color}99);"
									>
										{i + 1}
									</div>
									<div
										class="absolute top-1/2 left-full h-px w-4 -translate-y-1/2 md:w-6"
										style="background: linear-gradient(90deg, {skill.color}80, transparent);"
									></div>
								</div>

								<div class="flex-1 pt-2">
									<div class="mb-3 flex items-center justify-between">
										<span class="text-sm font-bold {darkMode ? 'text-gray-100' : 'text-gray-900'}">
											{skill.name}
										</span>
										<span class="text-sm font-black tabular-nums" style="color:{skill.color}">
											{skill.level}%
										</span>
									</div>

									<div
										class="relative h-3 w-full overflow-hidden rounded-full {darkMode
											? 'bg-gray-800'
											: 'bg-gray-100'}"
									>
										<div class="absolute inset-0 flex gap-px">
											{#each Array(10) as _}
												<div
													class="flex-1 {darkMode
														? 'border-r border-gray-700/60'
														: 'border-r border-gray-200/60'} last:border-0"
												></div>
											{/each}
										</div>
										<div
											class="relative h-full overflow-hidden rounded-full transition-all duration-1000 ease-out"
											style="width:{skill.level}%; background: linear-gradient(90deg, {skill.color}bb, {skill.color});"
										>
											<div
												class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent
											transition-transform duration-[1.2s] ease-in-out group-hover/skill:translate-x-[200%]"
											></div>
											<div
												class="absolute top-0 right-0 bottom-0 w-6 rounded-full bg-gradient-to-l from-white/50 to-transparent"
											></div>
										</div>
									</div>

									<div class="mt-1.5 text-right">
										<span
											class="text-[10px] font-semibold tracking-wider uppercase
										{skill.level >= 90 ? 'text-emerald-500' : skill.level >= 80 ? 'text-blue-500' : 'text-amber-500'}"
										>
											{skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Proficient'}
										</span>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="services" class="py-28 {darkMode ? 'bg-gray-900/30' : 'bg-gray-50'}">
		<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<span
					class="mb-4 block text-xs font-bold tracking-[0.25em] text-violet-600 uppercase dark:text-violet-400"
					>What I Do</span
				>
				<h2
					class="mb-4 text-4xl font-black tracking-tight md:text-5xl {darkMode
						? 'text-white'
						: 'text-gray-900'}"
				>
					Services
				</h2>
				<p class="{darkMode ? 'text-gray-400' : 'text-gray-500'} mx-auto max-w-xl">
					End-to-end fullstack solutions — from frontend pixels to backend infrastructure.
				</p>
			</div>

			<div class="relative">
				<div
					class="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-violet-500/50 via-blue-500/50 to-transparent md:left-8"
				></div>

				<div class="space-y-12">
					{#each services as service, i}
						<div
							class="group relative flex gap-6 md:gap-8"
							in:fly={{ y: 30, duration: 500, delay: i * 100 }}
						>
							<!-- Icon (snapped to start/left) -->
							<div class="relative z-10 flex-shrink-0">
								<div
									class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 text-2xl
                            text-white shadow-lg shadow-violet-500/25 transition-transform duration-300 group-hover:scale-110
                            md:h-16 md:w-16 md:text-3xl"
								>
									<span class="material-symbols-outlined">{service.icon}</span>
								</div>
								<!-- Connector dot -->
								<div
									class="absolute top-1/2 -right-3 h-2 w-2 -translate-y-1/2 rounded-full bg-violet-400"
								></div>
							</div>

							<!-- Content -->
							<div class="flex-1 pt-1 md:pt-2">
								<div
									class="rounded-2xl border p-6 transition-all duration-300 group-hover:-translate-y-1 md:p-8
                            {darkMode
										? 'border-gray-800 bg-gray-900/60 hover:border-violet-500/50'
										: 'border-gray-200 bg-white hover:border-violet-400/50'}"
								>
									<h3
										class="mb-3 text-xl font-bold md:text-2xl {darkMode
											? 'text-white'
											: 'text-gray-900'}"
									>
										{service.title}
									</h3>
									<p class="mb-4 leading-relaxed {darkMode ? 'text-gray-400' : 'text-gray-600'}">
										{service.description}
									</p>

									<!-- Features -->
									<div class="flex flex-wrap gap-2">
										{#each service.features as feature}
											<span
												class="rounded-full px-3 py-1.5 text-xs font-medium
                                 {darkMode
													? 'border border-violet-800 bg-violet-950/50 text-violet-300'
													: 'border border-violet-200 bg-violet-50 text-violet-700'}"
											>
												{feature}
											</span>
										{/each}
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section id="projects" class="py-28 {darkMode ? 'bg-gray-950' : 'bg-white'}">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-12 text-center">
				<span
					class="mb-4 block text-xs font-bold tracking-[0.25em] text-violet-600 uppercase dark:text-violet-400"
					>Portfolio</span
				>
				<h2
					class="mb-4 text-4xl font-black tracking-tight md:text-5xl {darkMode
						? 'text-white'
						: 'text-gray-900'}"
				>
					Featured Projects
				</h2>

				<div class="mt-8 flex flex-wrap justify-center gap-2">
					{#each filters as filter}
						<button
							on:click={() => (activeFilter = filter)}
							class="rounded-xl border px-5 py-2.5 text-sm font-bold capitalize transition-all duration-200
                           {activeFilter === filter
								? 'border-transparent bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg'
								: darkMode
									? 'border-gray-800 bg-gray-900 text-gray-400 hover:border-violet-500'
									: 'border-gray-200 bg-white text-gray-600 hover:border-violet-400'}"
						>
							{filter}
						</button>
					{/each}
				</div>
			</div>

			<div class="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
				{#each filteredProjects as project (project.id)}
					<div
						class="group overflow-hidden rounded-3xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
                      {darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}"
						animate:flip={{ duration: 350 }}
					>
						<div
							class="relative aspect-video overflow-hidden {darkMode
								? 'bg-gray-800'
								: 'bg-gray-100'}"
						>
							<img
								src={project.image}
								alt={project.title}
								class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
							/>
							<div class="absolute top-3 left-3">
								<span
									class="rounded-lg border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-bold text-white capitalize backdrop-blur-sm"
								>
									{project.category}
								</span>
							</div>
							<div
								class="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							>
								<a
									href={project.link}
									class="inline-flex items-center gap-2 rounded-xl border border-white/40 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900"
								>
									View Project
									<svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2.5"
											d="M17 8l4 4m0 0l-4 4m4-4H3"
										/>
									</svg>
								</a>
							</div>
						</div>
						<div class="p-6">
							<h3 class="mb-2 text-lg font-bold {darkMode ? 'text-white' : 'text-gray-900'}">
								{project.title}
							</h3>
							<p
								class="mb-4 text-sm leading-relaxed {darkMode ? 'text-gray-400' : 'text-gray-500'}"
							>
								{project.description}
							</p>
							<div class="flex flex-wrap gap-1.5">
								{#each project.tech as tech}
									<span
										class="rounded-lg px-2.5 py-1 text-xs font-medium
                             {darkMode
											? 'border border-gray-700 bg-gray-800 text-gray-400'
											: 'border border-gray-200 bg-gray-100 text-gray-600'}"
									>
										{tech}
									</span>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-28 {darkMode ? 'bg-gray-900/30' : 'bg-gray-50'}">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<span
					class="mb-4 block text-xs font-bold tracking-[0.25em] text-violet-600 uppercase dark:text-violet-400"
					>Testimonials</span
				>
				<h2
					class="mb-4 text-4xl font-black tracking-tight md:text-5xl {darkMode
						? 'text-white'
						: 'text-gray-900'}"
				>
					Client Testimonials
				</h2>
			</div>

			<div class="mx-auto max-w-3xl">
				<div
					class="relative overflow-hidden rounded-3xl border p-8 shadow-xl md:p-14
                    {darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}"
				>
					<div
						class="pointer-events-none absolute top-6 right-8 text-[9rem] leading-none font-black select-none {darkMode
							? 'text-gray-800'
							: 'text-gray-100'}"
					>
						"
					</div>
					{#key currentTestimonial}
						<div in:fade={{ duration: 350 }} class="relative text-center">
							<p
								class="mb-10 text-xl leading-relaxed font-medium italic md:text-2xl {darkMode
									? 'text-gray-300'
									: 'text-gray-700'}"
							>
								"{testimonials[currentTestimonial].content}"
							</p>
							<div class="flex items-center justify-center gap-4">
								<img
									src={testimonials[currentTestimonial].avatar}
									alt={testimonials[currentTestimonial].name}
									class="h-16 w-16 rounded-2xl border-2 border-violet-500 object-cover shadow-lg"
								/>
								<div class="text-left">
									<div class="font-bold {darkMode ? 'text-white' : 'text-gray-900'}">
										{testimonials[currentTestimonial].name}
									</div>
									<div class="text-sm {darkMode ? 'text-gray-400' : 'text-gray-500'}">
										{testimonials[currentTestimonial].role}
									</div>
								</div>
							</div>
						</div>
					{/key}
					<div class="mt-10 flex justify-center gap-2">
						{#each testimonials as _, i}
							<button
								on:click={() => (currentTestimonial = i)}
								class="h-2.5 rounded-full transition-all duration-300
                             {currentTestimonial === i
									? 'w-8 bg-gradient-to-r from-violet-600 to-blue-600'
									: darkMode
										? 'w-2.5 bg-gray-700 hover:bg-gray-600'
										: 'w-2.5 bg-gray-200 hover:bg-gray-300'}"
							/>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="contact" class="py-28 {darkMode ? 'bg-gray-950' : 'bg-white'}">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-16 text-center">
				<span
					class="mb-4 block text-xs font-bold tracking-[0.25em] text-violet-600 uppercase dark:text-violet-400"
					>Contact</span
				>
				<h2
					class="mb-4 text-4xl font-black tracking-tight md:text-5xl {darkMode
						? 'text-white'
						: 'text-gray-900'}"
				>
					Let's Build Something Great
				</h2>
			</div>

			<div class="grid items-start gap-14 md:grid-cols-2">
				<div>
					<p class="mb-10 text-lg leading-relaxed {darkMode ? 'text-gray-400' : 'text-gray-500'}">
						Got a project that needs a fullstack developer? I'm open to freelance contracts,
						long-term collaborations and full-time roles.
					</p>

					<div class="space-y-4">
						<div
							class="flex items-center gap-4 rounded-2xl border p-4 {darkMode
								? 'border-gray-800 bg-gray-900/60'
								: 'border-gray-200 bg-gray-50'}"
						>
							<div
								class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl {darkMode
									? 'bg-violet-950/60 text-violet-400'
									: 'bg-violet-100 text-violet-600'}"
							>
								<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<div>
								<div
									class="mb-0.5 text-xs font-semibold tracking-wider uppercase {darkMode
										? 'text-gray-500'
										: 'text-gray-500'}"
								>
									Email
								</div>
								<a
									href="mailto:josephay125d@gmail.com"
									class="font-semibold transition-colors hover:text-violet-600 dark:hover:text-violet-400 {darkMode
										? 'text-white'
										: 'text-gray-900'}">josephay125d@gmail.com</a
								>
							</div>
						</div>

						<div
							class="flex items-center gap-4 rounded-2xl border p-4 {darkMode
								? 'border-gray-800 bg-gray-900/60'
								: 'border-gray-200 bg-gray-50'}"
						>
							<div
								class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl {darkMode
									? 'bg-blue-950/60 text-blue-400'
									: 'bg-blue-100 text-blue-600'}"
							>
								<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
								</svg>
							</div>
							<div>
								<div
									class="mb-0.5 text-xs font-semibold tracking-wider uppercase {darkMode
										? 'text-gray-500'
										: 'text-gray-500'}"
								>
									Location
								</div>
								<div class="font-semibold {darkMode ? 'text-white' : 'text-gray-900'}">
									Lagos, Nigeria
								</div>
							</div>
						</div>
					</div>

					<div class="mt-8 flex gap-3">
						{#each [{ id: 'github', url: 'https://github.com/ayomideadeshola' }, { id: 'linkedin', url: 'https://www.linkedin.com/in/josephayomide-aj-5j4549252' }, { id: 'twitter', url: 'https://x.com/AdesholaJoseph2' }] as social}
							<a
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								class="flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-200 hover:scale-110
            {darkMode
									? 'border-gray-700 bg-gray-800 text-gray-400 hover:border-violet-600 hover:bg-violet-600 hover:text-white'
									: 'border-gray-200 bg-gray-100 text-gray-500 hover:border-violet-600 hover:bg-violet-600 hover:text-white'}"
							>
								<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
									{#if social.id === 'github'}
										<path
											d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
										/>
									{:else if social.id === 'linkedin'}
										<path
											d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
										/>
									{:else}
										<path
											d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
										/>
									{/if}
								</svg>
							</a>
						{/each}
					</div>
				</div>

				<div
					class="rounded-3xl border p-8 shadow-xl {darkMode
						? 'border-gray-800 bg-gray-900'
						: 'border-gray-200 bg-white'}"
				>
					<form on:submit|preventDefault={handleSubmit} class="space-y-5">
						<div>
							<label
								for="name"
								class="mb-2 block text-sm font-bold {darkMode ? 'text-gray-300' : 'text-gray-700'}"
								>Name</label
							>
							<input
								type="text"
								id="name"
								bind:value={formData.name}
								required
								placeholder="John Doe"
								class="w-full rounded-xl border px-4 py-3.5 text-sm font-medium transition-all duration-200 outline-none
                            {darkMode
									? 'border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:ring-violet-500'
									: 'border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-violet-500'} focus:border-transparent focus:ring-2"
							/>
						</div>
						<div>
							<label
								for="email"
								class="mb-2 block text-sm font-bold {darkMode ? 'text-gray-300' : 'text-gray-700'}"
								>Email</label
							>
							<input
								type="email"
								id="email"
								bind:value={formData.email}
								required
								placeholder="john@example.com"
								class="w-full rounded-xl border px-4 py-3.5 text-sm font-medium transition-all duration-200 outline-none
                            {darkMode
									? 'border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:ring-violet-500'
									: 'border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-violet-500'} focus:border-transparent focus:ring-2"
							/>
						</div>
						<div>
							<label
								for="message"
								class="mb-2 block text-sm font-bold {darkMode ? 'text-gray-300' : 'text-gray-700'}"
								>Message</label
							>
							<textarea
								id="message"
								bind:value={formData.message}
								required
								rows="5"
								placeholder="Tell me about your project..."
								class="w-full resize-none rounded-xl border px-4 py-3.5 text-sm font-medium transition-all duration-200 outline-none
                               {darkMode
									? 'border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:ring-violet-500'
									: 'border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-violet-500'} focus:border-transparent focus:ring-2"
							></textarea>
						</div>
						<button
							type="submit"
							disabled={formStatus === 'sending' || formStatus === 'success'}
							class="flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-bold transition-all duration-200
                           {formStatus === 'success'
								? 'bg-emerald-500 text-white'
								: 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg hover:scale-[1.02] hover:from-violet-700 hover:to-blue-700 hover:shadow-xl'} disabled:cursor-not-allowed disabled:opacity-60"
						>
							{#if formStatus === 'sending'}
								<svg class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
									<circle
										class="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										stroke-width="4"
									/>
									<path
										class="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									/>
								</svg>
								Sending…
							{:else if formStatus === 'success'}
								<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2.5"
										d="M5 13l4 4L19 7"
									/>
								</svg>
								Message Sent!
							{:else}
								Send Message
								<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
									/>
								</svg>
							{/if}
						</button>
					</form>
				</div>
			</div>
		</div>
	</section>

	<!-- ╔══════════════════════════════════════════════════════╗
       ║  FOOTER                                              ║
       ╚══════════════════════════════════════════════════════╝ -->
	<footer
		class="py-14 {darkMode
			? 'border-gray-800 bg-black'
			: 'border-gray-800 bg-gray-950'} border-t text-white"
	>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col items-center justify-between gap-8 md:flex-row">
				<div class="text-center md:text-left">
					<div class="mb-2 flex items-center justify-center gap-2 md:justify-start">
						<div
							class="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-blue-500"
						>
							<span class="text-xs font-black text-white">A</span>
						</div>
						<span
							class="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-xl font-black tracking-tight text-transparent"
							>Ayomide</span
						>
					</div>
					<p class="text-sm text-gray-500">Fullstack developer — shipping quality products.</p>
				</div>
				<div class="flex gap-6 text-sm text-gray-500">
					{#each ['home', 'about', 'services', 'projects', 'contact'] as s}
						<a href="#{s}" class="font-medium capitalize transition-colors hover:text-white">{s}</a>
					{/each}
				</div>
				<div class="text-xs font-medium text-gray-600">
					© 2024 Ayomide Adeshola. All rights reserved.
				</div>
			</div>
		</div>
	</footer>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

	:global(html) {
		scroll-behavior: smooth;
	}
	:global(body) {
		margin: 0;
		font-family: 'Inter', sans-serif;
	}

	:global(.material-symbols-outlined) {
		font-variation-settings:
			'FILL' 0,
			'wght' 400,
			'GRAD' 0,
			'opsz' 24;
	}

	/* Animations */
	@keyframes blob {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		33% {
			transform: translate(30px, -40px) scale(1.1);
		}
		66% {
			transform: translate(-20px, 20px) scale(0.9);
		}
	}

	@keyframes shimmer {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(200%);
		}
	}

	.animate-blob {
		animation: blob 7s infinite;
	}

	.animation-delay-2000 {
		animation-delay: 2s;
	}

	.animate-shimmer {
		animation: shimmer 2s infinite;
	}

	:global(::-webkit-scrollbar) {
		width: 8px;
	}
	:global(::-webkit-scrollbar-track) {
		background: transparent;
	}
	:global(::-webkit-scrollbar-thumb) {
		background: #7c3aed;
		border-radius: 4px;
	}
	:global(::-webkit-scrollbar-thumb:hover) {
		background: #6d28d9;
	}
</style>
