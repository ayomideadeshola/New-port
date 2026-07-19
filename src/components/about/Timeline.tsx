import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { timelineMilestones } from '../../data';
import { Reveal } from '../motion/Reveal';

export default function Timeline() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] });

	return (
		<section className="py-24">
			<div className="mx-auto max-w-4xl px-6 lg:px-8">
				<Reveal className="mb-16">
					<span className="mb-4 block font-mono text-xs tracking-[0.3em] text-text-muted uppercase">
						Journey
					</span>
					<h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">Career Timeline</h2>
				</Reveal>

				<div ref={ref} className="relative pl-10">
					<div className="absolute top-0 bottom-0 left-0 w-px bg-white/10" />
					<motion.div
						style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
						className="absolute top-0 bottom-0 left-0 w-px bg-accent"
					/>

					<div className="space-y-14">
						{timelineMilestones.map((m) => (
							<Reveal key={m.year} className="relative">
								<span className="absolute top-1.5 left-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent ring-4 ring-ink" />
								<span className="mb-1 block font-mono text-sm text-accent">{m.year}</span>
								<h3 className="mb-1 text-xl font-bold text-text">{m.title}</h3>
								<p className="text-text-secondary">{m.description}</p>
							</Reveal>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
