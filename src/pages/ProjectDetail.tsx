import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Reveal } from '../components/motion/Reveal';
import { projects } from '../data';

export default function ProjectDetail() {
	const { slug } = useParams();
	const navigate = useNavigate();
	const index = projects.findIndex((p) => p.slug === slug);
	const project = projects[index];
	const [lightbox, setLightbox] = useState<string | null>(null);

	useEffect(() => {
		if (!project) navigate('/work', { replace: true });
	}, [project, navigate]);

	if (!project) return null;

	const next = projects[(index + 1) % projects.length];

	return (
		<article>
			<div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
				<img src={project.image} alt={project.title} className="h-full w-full object-cover" />
				<div className="absolute inset-0 bg-ink/55" />
				<div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
				<div className="absolute inset-0 flex items-end">
					<div className="mx-auto w-full max-w-7xl px-6 pb-12 lg:px-8">
						<Link
							to="/work"
							data-cursor-hover
							className="mb-6 inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-text"
						>
							<ArrowLeft size={14} /> Back to work
						</Link>
						<h1 className="text-4xl font-bold tracking-tight text-text md:text-6xl">{project.title}</h1>
						{project.link !== '#' && (
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								data-cursor-hover
								className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
							>
								Visit live site
								<ExternalLink size={15} />
							</a>
						)}
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
					<Reveal className="space-y-5 lg:col-span-3">
						<div>
							<span className="block font-mono text-xs tracking-widest text-text-muted uppercase">Role</span>
							<span className="text-text">{project.role}</span>
						</div>
						<div>
							<span className="block font-mono text-xs tracking-widest text-text-muted uppercase">Timeline</span>
							<span className="text-text">{project.timeline}</span>
						</div>
						<div>
							<span className="block font-mono text-xs tracking-widest text-text-muted uppercase">Stack</span>
							<div className="flex flex-wrap gap-2 pt-1">
								{project.tech.map((t) => (
									<span
										key={t}
										className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-text-secondary"
									>
										{t}
									</span>
								))}
							</div>
						</div>
					</Reveal>

					<div className="space-y-12 lg:col-span-9">
						<Reveal>
							<h2 className="mb-3 font-mono text-sm tracking-widest text-accent uppercase">Challenge</h2>
							<p className="text-lg leading-relaxed text-text-secondary">{project.challenge}</p>
						</Reveal>
						<Reveal>
							<h2 className="mb-3 font-mono text-sm tracking-widest text-accent uppercase">Solution</h2>
							<p className="text-lg leading-relaxed text-text-secondary">{project.solution}</p>
						</Reveal>
						<Reveal>
							<h2 className="mb-3 font-mono text-sm tracking-widest text-accent uppercase">Results</h2>
							<p className="text-lg leading-relaxed text-text-secondary">{project.results}</p>
						</Reveal>
					</div>
				</div>

				<Reveal className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2">
					{project.gallery.map((src) => (
						<button
							key={src}
							onClick={() => setLightbox(src)}
							data-cursor-hover
							className="overflow-hidden rounded-2xl border border-white/10"
						>
							<img
								src={src}
								alt=""
								className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
							/>
						</button>
					))}
				</Reveal>
			</div>

			<Link
				to={`/work/${next.slug}`}
				data-cursor-hover
				className="group flex flex-col items-center justify-center gap-4 border-t border-white/10 py-24 text-center"
			>
				<span className="font-mono text-xs tracking-widest text-text-muted uppercase">Next Project</span>
				<span className="flex items-center gap-3 text-4xl font-bold text-text transition-colors group-hover:text-accent md:text-5xl">
					{next.title}
					<ArrowRight className="transition-transform group-hover:translate-x-2" />
				</span>
			</Link>

			<AnimatePresence>
				{lightbox && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setLightbox(null)}
						className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-6"
					>
						<button
							onClick={() => setLightbox(null)}
							data-cursor-hover
							className="absolute top-6 right-6 text-text-secondary hover:text-text"
						>
							<X size={28} />
						</button>
						<motion.img
							initial={{ scale: 0.95 }}
							animate={{ scale: 1 }}
							src={lightbox}
							alt=""
							className="max-h-[85vh] max-w-full rounded-xl object-contain"
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</article>
	);
}
