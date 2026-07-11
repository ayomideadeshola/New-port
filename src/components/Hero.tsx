import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
	const { darkMode } = useTheme();

	return (
		<section
			id="home"
			className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
		>
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div
					className="animate-blob absolute -top-40 -right-40 h-96 w-96 rounded-full opacity-40 dark:opacity-20"
					style={{ background: 'radial-gradient(circle,#7C3AED,#3B82F6)', filter: 'blur(80px)' }}
				></div>
				<div
					className="animate-blob animation-delay-2000 absolute -bottom-40 -left-40 h-96 w-96 rounded-full opacity-30 dark:opacity-20"
					style={{ background: 'radial-gradient(circle,#3B82F6,#06B6D4)', filter: 'blur(80px)' }}
				></div>
			</div>

			<div
				className="pointer-events-none absolute inset-0"
				style={{
					backgroundImage: `linear-gradient(${
						darkMode ? 'rgba(99,102,241,0.07)' : 'rgba(99,102,241,0.04)'
					} 1px, transparent 1px), linear-gradient(90deg, ${
						darkMode ? 'rgba(99,102,241,0.07)' : 'rgba(99,102,241,0.04)'
					} 1px, transparent 1px)`,
					backgroundSize: '60px 60px'
				}}
			></div>

			<div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.9, delay: 0.25 }}
					className={`mb-6 text-5xl leading-[1.05] font-black tracking-tight sm:text-6xl md:text-6xl
                   ${darkMode ? 'text-white' : 'text-gray-900'}`}
				>
					Hi, I'm
					<br className="sm:hidden" />
					<span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
						Ayomide Adeshola
					</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.9, delay: 0.4 }}
					className={`mx-auto mb-10 max-w-2xl text-lg leading-relaxed sm:text-xl
                  ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
				>
					Fullstack Developer — I architect, build and ship{' '}
					<span className={`${darkMode ? 'text-gray-100' : 'text-gray-800'} font-semibold`}>
						production-grade web apps
					</span>{' '}
					from database schema all the way to polished UI.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.9, delay: 0.55 }}
					className="flex flex-col justify-center gap-3 sm:flex-row"
				>
					<a
						href="#projects"
						className="group inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3.5
                    text-base font-medium text-white shadow-lg
                    transition-all duration-200 hover:scale-105 hover:from-violet-700 hover:to-blue-700 hover:shadow-violet-500/40"
					>
						See My Work
						<ChevronRight />
					</a>
					<a
						href="#contact"
						className={`inline-flex items-center justify-center gap-2 rounded-md border px-7 py-3.5 text-base font-medium transition-all duration-200 hover:scale-105
                    ${
											darkMode
												? 'border-gray-700 bg-gray-900 text-gray-200 hover:border-violet-500'
												: 'border-gray-200 bg-white text-gray-800 hover:border-violet-400'
										}`}
					>
						Hire Me
					</a>
				</motion.div>
			</div>
		</section>
	);
}
