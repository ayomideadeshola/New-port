import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data';
import { Reveal } from '../motion/Reveal';

const featured = projects.slice(0, 4);

export default function FeaturedWork() {
	return (
		<section className="py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<Reveal className="mb-12 flex items-end justify-between gap-6">
					<div>
						<span className="mb-3 block font-mono text-xs tracking-[0.3em] text-text-muted uppercase">
							Selected work
						</span>
						<h2 className="text-4xl font-bold tracking-tight text-text md:text-5xl">Featured Projects</h2>
					</div>
					<Link
						to="/work"
						data-cursor-hover
						className="link-underline hidden shrink-0 items-center gap-2 font-mono text-sm text-text-secondary hover:text-text md:flex"
					>
						View all work <ArrowRight size={14} />
					</Link>
				</Reveal>
			</div>

			<Reveal
				className="scrollbar-hidden flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 lg:px-8"
				delay={0.1}
			>
				{featured.map((project) => (
					<Link
						key={project.id}
						to={`/work/${project.slug}`}
						data-cursor-hover
						className="group relative w-[340px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 sm:w-[420px]"
					>
						<div className="aspect-[4/3] overflow-hidden">
							<img
								src={project.image}
								alt={project.title}
								className="h-full w-full object-cover object-top brightness-[0.55] transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
							/>
						</div>
						<div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink via-ink/40 to-transparent p-6">
							<span className="mb-2 font-mono text-xs tracking-widest text-accent uppercase">
								{project.category}
							</span>
							<h3 className="mb-2 text-xl font-bold text-text">{project.title}</h3>
							<div className="mb-4 flex flex-wrap gap-2">
								{project.tech.slice(0, 3).map((t) => (
									<span key={t} className="font-mono text-xs text-text-secondary">
										{t}
									</span>
								))}
							</div>
							<span className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-text opacity-0 transition-opacity duration-300 group-hover:opacity-100">
								View Case Study <ArrowRight size={14} />
							</span>
						</div>
					</Link>
				))}
			</Reveal>
		</section>
	);
}
