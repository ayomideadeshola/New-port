import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTextScramble } from '../../hooks/useTextScramble';
import { MagneticButton } from '../motion/MagneticButton';
import CodeTerminal from './CodeTerminal';

export default function Hero() {
	const headline = useTextScramble('Building digital experiences that perform.', 800);

	return (
		<section className="relative flex min-h-screen items-center overflow-hidden pt-20">
			<div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
				<div>
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="mb-8 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-1.5"
					>
						<span className="relative flex h-2 w-2">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
							<span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
						</span>
						<span className="font-mono text-xs tracking-wide text-success">Available for work</span>
					</motion.div>

					<h1 className="mb-6 min-h-[168px] text-5xl leading-[1.05] font-extrabold tracking-tight text-text sm:text-6xl md:min-h-[220px] md:text-7xl">
						{headline}
					</h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.9 }}
						className="mb-10 max-w-lg text-lg leading-relaxed text-text-secondary"
					>
						I'm a fullstack developer who architects, builds and ships production-grade web apps —
						from database schema to polished, performant UI.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 1.05 }}
						className="flex flex-wrap items-center gap-4"
					>
						<MagneticButton>
							<Link
								to="/work"
								data-cursor-hover
								className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent bg-[length:200%_100%] bg-left px-7 py-3.5 text-sm font-semibold text-white transition-[background-position] duration-500 hover:bg-right"
								style={{ backgroundImage: 'linear-gradient(110deg, #6366f1 40%, #818cf8 50%, #6366f1 60%)' }}
							>
								View Projects
								<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
							</Link>
						</MagneticButton>

						<MagneticButton>
							<Link
								to="/contact"
								data-cursor-hover
								className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-text transition-colors hover:border-accent/50"
							>
								Get in Touch
								<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
							</Link>
						</MagneticButton>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className="hidden justify-center lg:flex"
				>
					<CodeTerminal />
				</motion.div>
			</div>

			<motion.div
				className="absolute bottom-10 left-1/2 -translate-x-1/2"
				animate={{ opacity: [0.3, 1, 0.3] }}
				transition={{ duration: 2, repeat: Infinity }}
			>
				<div className="h-14 w-px bg-gradient-to-b from-transparent via-text-secondary to-transparent" />
			</motion.div>
		</section>
	);
}
