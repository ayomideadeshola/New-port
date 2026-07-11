import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { sections } from '../data';
import logo from '../assets/logo.png';

function SunIcon() {
	return (
		<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
			/>
		</svg>
	);
}

function MoonIcon() {
	return (
		<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
			/>
		</svg>
	);
}

export default function Nav() {
	const { darkMode, toggleTheme } = useTheme();
	const [activeSection, setActiveSection] = useState('home');
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		function handleScroll() {
			const sp = window.scrollY + 100;
			for (const id of sections) {
				const el = document.getElementById(id);
				if (el && sp >= el.offsetTop && sp < el.offsetTop + el.offsetHeight) {
					setActiveSection(id);
					break;
				}
			}
		}
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className={`fixed z-50 w-full border-b backdrop-blur-xl transition-colors duration-300
              ${
									darkMode
										? 'border-gray-800/60 bg-gray-950/90 shadow-gray-900/60'
										: 'border-gray-200/60 bg-white/90 shadow-gray-100'
								}`}
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<a href="#home" className="flex flex-shrink-0 items-center gap-2">
						<img src={logo} className="h-40 w-auto" alt="" />
					</a>

					{/* Desktop */}
					<div className="hidden items-center gap-1 md:flex">
						{sections.map((s) => (
							<a
								key={s}
								href={`#${s}`}
								className={`relative rounded-lg px-4 py-2 text-sm font-semibold capitalize transition-all duration-200
                      ${
												activeSection === s
													? darkMode
														? 'bg-violet-950/50 text-violet-400'
														: 'bg-violet-50 text-violet-600'
													: darkMode
														? 'text-gray-400 hover:bg-gray-800/60 hover:text-white'
														: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
											}`}
							>
								{s}
							</a>
						))}

						<button
							onClick={toggleTheme}
							className={`ml-3 cursor-pointer rounded-xl border p-2.5 transition-all duration-200 active:scale-95
                         ${
														darkMode
															? 'border-gray-700 bg-gray-800 text-amber-400 hover:bg-gray-700'
															: 'border-gray-200 bg-gray-100 text-slate-600 hover:bg-gray-200'
													}`}
							aria-label="Toggle theme"
						>
							{darkMode ? <MoonIcon /> : <SunIcon />}
						</button>
					</div>

					{/* Mobile */}
					<div className="flex items-center gap-1 md:hidden">
						<button
							onClick={toggleTheme}
							className={`cursor-pointer rounded-lg p-2 transition-colors ${
								darkMode ? 'text-amber-400 hover:bg-gray-800' : 'text-slate-600 hover:bg-gray-100'
							}`}
						>
							{darkMode ? <MoonIcon /> : <SunIcon />}
						</button>
						<button
							onClick={() => setMobileMenuOpen((v) => !v)}
							className={`rounded-lg p-2 transition-colors ${
								darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
							}`}
						>
							<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								{mobileMenuOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>
			</div>

			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.2 }}
						className={`overflow-hidden border-t backdrop-blur-xl md:hidden ${
							darkMode ? 'border-gray-800 bg-gray-950/95' : 'border-gray-200 bg-white/95'
						}`}
					>
						<div className="space-y-1 px-4 py-3">
							{sections.map((s) => (
								<a
									key={s}
									href={`#${s}`}
									onClick={() => setMobileMenuOpen(false)}
									className={`flex cursor-pointer items-center rounded-xl px-4 py-3 text-sm font-semibold capitalize transition-colors
                      ${
												activeSection === s
													? darkMode
														? 'bg-violet-950/40 text-violet-400'
														: 'bg-violet-50 text-violet-600'
													: darkMode
														? 'text-gray-300 hover:bg-gray-800/60'
														: 'text-gray-700 hover:bg-gray-50'
											}`}
								>
									{s}
								</a>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
