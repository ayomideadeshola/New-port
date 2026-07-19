import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks, socials } from '../data';

export default function Footer() {
	const [showBackToTop, setShowBackToTop] = useState(false);

	useEffect(() => {
		function handleScroll() {
			setShowBackToTop(window.scrollY > 500);
		}
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<footer className="border-t border-white/10 py-16">
				<div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 text-center lg:px-8">
					<span className="font-mono text-2xl font-bold tracking-tight text-text">
						AY<span className="text-accent">.</span>
					</span>

					<div className="flex flex-wrap justify-center gap-6">
						{navLinks.map((link) => (
							<Link
								key={link.path}
								to={link.path}
								data-cursor-hover
								className="link-underline text-sm text-text-secondary hover:text-text"
							>
								{link.label}
							</Link>
						))}
					</div>

					<div className="flex gap-3">
						{socials.map((social) => (
							<a
								key={social.id}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								data-cursor-hover
								className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-mono text-text-secondary transition-colors hover:border-accent/50 hover:text-accent"
							>
								{social.id[0].toUpperCase()}
							</a>
						))}
					</div>

					<p className="font-mono text-xs text-text-muted">© 2026 Ayomide Adeshola. All rights reserved.</p>
				</div>
			</footer>

			<AnimatePresence>
				{showBackToTop && (
					<motion.button
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						data-cursor-hover
						aria-label="Back to top"
						className="glass fixed right-6 bottom-6 z-40 flex h-12 w-12 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-accent"
					>
						<motion.span animate={{ y: [0, -3, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
							<ArrowUp size={18} />
						</motion.span>
					</motion.button>
				)}
			</AnimatePresence>
		</>
	);
}
