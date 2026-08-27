import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import profilePhoto from '../../assets/profileay-portrait.jpeg';
import { Reveal } from '../motion/Reveal';

export default function AboutHero() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
	const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

	return (
		<section className="pt-40 pb-24">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-5 lg:px-8">
				<div ref={ref} className="relative lg:col-span-2">
					<div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
						<motion.img
							style={{ y }}
							src={profilePhoto}
							alt="Ayomide Adeshola"
							className="h-[120%] w-full object-cover"
						/>
					</div>
					<div className="pointer-events-none absolute -right-4 -bottom-4 h-full w-full rounded-3xl border border-accent/40" />
				</div>

				<div className="lg:col-span-3">
					<Reveal>
						<span className="mb-4 block font-mono text-xs tracking-[0.3em] text-text-muted uppercase">
							About Me
						</span>
						<h1 className="mb-8 text-4xl font-bold tracking-tight text-text md:text-5xl">
							Engineer by trade, problem-solver by nature.
						</h1>
					</Reveal>
					<Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-text-secondary">
						<p>
							I'm a fullstack developer based in Lagos, Nigeria, who loves owning the entire product
							lifecycle — from designing relational schemas and building APIs to crafting responsive UIs
							people actually enjoy using.
						</p>
						<p>
							Over the last 5+ years I've shipped everything from high-throughput API gateways to
							multi-tenant SaaS platforms. My focus stays the same regardless of the stack: clean,
							maintainable code and pragmatic architecture that ships.
						</p>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
