import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { testimonials } from '../../data';
import { Reveal } from '../motion/Reveal';

export default function TestimonialsCarousel() {
	const [index, setIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	useEffect(() => {
		if (paused) return;
		const id = window.setInterval(() => {
			setIndex((i) => (i + 1) % testimonials.length);
		}, 5000);
		return () => window.clearInterval(id);
	}, [paused]);

	const active = testimonials[index];

	return (
		<section className="py-24">
			<div className="mx-auto max-w-3xl px-6 lg:px-8">
				<Reveal className="mb-16 text-center">
					<span className="mb-4 block font-mono text-xs tracking-[0.3em] text-text-muted uppercase">
						Testimonials
					</span>
					<h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">What People Say</h2>
				</Reveal>

				<div
					onMouseEnter={() => setPaused(true)}
					onMouseLeave={() => setPaused(false)}
					className="glass relative overflow-hidden rounded-3xl p-10 md:p-16"
				>
					<span className="pointer-events-none absolute top-4 right-8 font-serif text-[10rem] leading-none text-accent/20 select-none">
						"
					</span>

					<AnimatePresence mode="wait">
						<motion.div
							key={index}
							initial={{ opacity: 0, x: 40, filter: 'blur(6px)' }}
							animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
							exit={{ opacity: 0, x: -40, filter: 'blur(6px)' }}
							transition={{ duration: 0.4 }}
							className="relative text-center"
						>
							<p className="mb-8 text-xl leading-relaxed font-medium text-text italic md:text-2xl">
								"{active.content}"
							</p>
							<div className="flex items-center justify-center gap-4">
								<img src={active.avatar} alt={active.name} className="h-14 w-14 rounded-full object-cover" />
								<div className="text-left">
									<div className="font-bold text-text">{active.name}</div>
									<div className="text-sm text-text-secondary">{active.role}</div>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>

					<div className="mt-10 flex justify-center gap-2">
						{testimonials.map((_, i) => (
							<button
								key={i}
								onClick={() => setIndex(i)}
								data-cursor-hover
								className={`h-2 rounded-full transition-all ${
									i === index ? 'w-6 bg-accent' : 'w-2 bg-white/20 hover:bg-white/40'
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
