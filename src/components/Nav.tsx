import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../data';

export default function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		function handleScroll() {
			setScrolled(window.scrollY > 100);
		}
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		setMenuOpen(false);
	}, [location.pathname]);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [menuOpen]);

	return (
		<nav
			className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
				scrolled ? 'border-b border-white/10 bg-black/50 backdrop-blur-md' : 'border-b border-transparent'
			}`}
		>
			<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
				<NavLink to="/" className="font-mono text-lg font-bold tracking-tight text-text" data-cursor-hover>
					AY//IMMORTAL<span className="text-accent">.</span>
				</NavLink>

				<div className="hidden items-center gap-10 md:flex">
					{navLinks.map((link) => (
						<NavLink
							key={link.path}
							to={link.path}
							end={link.path === '/'}
							data-cursor-hover
							className={({ isActive }) =>
								`link-underline text-sm font-medium tracking-wide ${
									isActive ? 'active text-text' : 'text-text-secondary hover:text-text'
								}`
							}
						>
							{link.label}
						</NavLink>
					))}
				</div>

				<div className="flex items-center gap-4">
					<a
						href="/resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						data-cursor-hover
						className="hidden rounded-full border border-white/15 px-5 py-2 font-mono text-xs tracking-wide text-text-secondary transition-colors hover:border-accent/50 hover:text-text md:inline-block"
					>
						Resume
					</a>

					<button
						onClick={() => setMenuOpen((v) => !v)}
						data-cursor-hover
						aria-label="Toggle menu"
						className="relative z-50 flex h-9 w-9 items-center justify-center md:hidden"
					>
						<span className="relative block h-4 w-5">
							<motion.span
								className="absolute left-0 block h-px w-5 bg-text"
								animate={menuOpen ? { top: '50%', rotate: 45 } : { top: 0, rotate: 0 }}
								transition={{ duration: 0.25 }}
							/>
							<motion.span
								className="absolute top-1/2 left-0 block h-px w-5 bg-text"
								animate={{ opacity: menuOpen ? 0 : 1 }}
								transition={{ duration: 0.15 }}
							/>
							<motion.span
								className="absolute left-0 block h-px w-5 bg-text"
								animate={menuOpen ? { bottom: '50%', rotate: -45 } : { bottom: 0, rotate: 0 }}
								transition={{ duration: 0.25 }}
							/>
						</span>
					</button>
				</div>
			</div>

			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 top-20 z-40 flex flex-col bg-ink/98 backdrop-blur-xl md:hidden"
					>
						<div className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
							{navLinks.map((link, i) => (
								<motion.div
									key={link.path}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, delay: i * 0.08 }}
								>
									<NavLink
										to={link.path}
										end={link.path === '/'}
										className={({ isActive }) =>
											`font-display text-4xl font-bold tracking-tight ${isActive ? 'text-accent' : 'text-text'}`
										}
									>
										{link.label}
									</NavLink>
								</motion.div>
							))}
							<motion.a
								href="/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: navLinks.length * 0.08 }}
								className="mt-6 font-mono text-sm tracking-wide text-text-secondary"
							>
								Resume ↗
							</motion.a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
