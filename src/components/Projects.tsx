import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { filters, projects } from '../data';

export default function Projects() {
	const { darkMode } = useTheme();
	const [activeFilter, setActiveFilter] = useState('all');

	const filteredProjects = useMemo(
		() => (activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)),
		[activeFilter]
	);

	return (
		<section id="projects" className={`py-28 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-12 text-center">
					<span className="mb-4 block text-xs font-bold tracking-[0.25em] text-violet-600 uppercase dark:text-violet-400">
						Portfolio
					</span>
					<h2 className={`mb-4 text-4xl font-black tracking-tight md:text-5xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
						Featured Projects
					</h2>

					<div className="mt-8 flex flex-wrap justify-center gap-2">
						{filters.map((filter) => (
							<button
								key={filter}
								onClick={() => setActiveFilter(filter)}
								className={`rounded-xl border px-5 py-2.5 text-sm font-bold capitalize transition-all duration-200
                           ${
															activeFilter === filter
																? 'border-transparent bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg'
																: darkMode
																	? 'border-gray-800 bg-gray-900 text-gray-400 hover:border-violet-500'
																	: 'border-gray-200 bg-white text-gray-600 hover:border-violet-400'
														}`}
							>
								{filter}
							</button>
						))}
					</div>
				</div>

				<motion.div layout className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
					<AnimatePresence>
					{filteredProjects.map((project) => (
						<motion.div
							layout
							key={project.id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.35 }}
							className={`group overflow-hidden rounded-3xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
                      ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}
						>
							<div className={`relative aspect-video overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
								<img
									src={project.image}
									alt={project.title}
									className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<div className="absolute top-3 left-3">
									<span className="rounded-lg border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-bold text-white capitalize backdrop-blur-sm">
										{project.category}
									</span>
								</div>
								<div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
									<a
										href={project.link}
										className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900"
									>
										View Project
										<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
										</svg>
									</a>
								</div>
							</div>
							<div className="p-6">
								<h3 className={`mb-2 text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
									{project.title}
								</h3>
								<p className={`mb-4 text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
									{project.description}
								</p>
								<div className="flex flex-wrap gap-1.5">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className={`rounded-lg px-2.5 py-1 text-xs font-medium
                             ${
																darkMode
																	? 'border border-gray-700 bg-gray-800 text-gray-400'
																	: 'border border-gray-200 bg-gray-100 text-gray-600'
															}`}
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
					</AnimatePresence>
				</motion.div>
			</div>
		</section>
	);
}
