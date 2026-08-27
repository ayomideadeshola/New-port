import { motion } from 'framer-motion';
import { useState, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../../data';

const aspectBySize: Record<Project['size'], string> = {
	normal: 'aspect-[4/3]',
	tall: 'aspect-[3/4]',
	wide: 'aspect-[16/9]'
};

export default function ProjectCard({ project }: { project: Project }) {
	const [pos, setPos] = useState({ x: 0, y: 0 });
	const [hovering, setHovering] = useState(false);

	function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
		const rect = e.currentTarget.getBoundingClientRect();
		setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
	}

	return (
		<Link
			to={`/work/${project.slug}`}
			data-cursor-hover
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
			onMouseMove={handleMouseMove}
			className="group relative mb-6 block break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-surface transition-colors duration-300 hover:border-accent/30"
		>
			<div className={`relative overflow-hidden ${aspectBySize[project.size]}`}>
				<img
					src={project.image}
					alt={project.title}
					className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
				/>
			</div>
			<div className="p-6">
				<span className="mb-2 block font-mono text-xs tracking-widest text-text-muted uppercase">
					{project.category} · {project.year}
				</span>
				<h3 className="mb-2 text-xl font-bold text-text">{project.title}</h3>
				<p className="mb-4 line-clamp-2 text-sm leading-relaxed text-text-secondary">{project.description}</p>
				<div className="flex flex-wrap gap-3">
					{project.tech.slice(0, 3).map((t) => (
						<span key={t} className="flex items-center gap-1.5 font-mono text-xs text-text-muted">
							<span className="h-1.5 w-1.5 rounded-full bg-accent" />
							{t}
						</span>
					))}
				</div>
			</div>

			{hovering && (
				<motion.div
					initial={{ opacity: 0, scale: 0.6 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.6 }}
					style={{ left: pos.x, top: pos.y }}
					className="pointer-events-none absolute z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-xs font-bold text-white"
				>
					View
				</motion.div>
			)}
		</Link>
	);
}
