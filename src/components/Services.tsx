import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { services } from '../data';

export default function Services() {
	const { darkMode } = useTheme();

	return (
		<section id="services" className={`py-28 ${darkMode ? 'bg-gray-900/30' : 'bg-gray-50'}`}>
			<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				<div className="mb-16 text-center">
					<span className="mb-4 block text-xs font-bold tracking-[0.25em] text-violet-600 uppercase dark:text-violet-400">
						What I Do
					</span>
					<h2 className={`mb-4 text-4xl font-black tracking-tight md:text-5xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
						Services
					</h2>
					<p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} mx-auto max-w-xl`}>
						End-to-end fullstack solutions — from frontend pixels to backend infrastructure.
					</p>
				</div>

				<div className="relative">
					<div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-violet-500/50 via-blue-500/50 to-transparent md:left-8"></div>

					<div className="space-y-12">
						{services.map((service, i) => (
							<motion.div
								key={service.title}
								className="group relative flex gap-6 md:gap-8"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
							>
								<div className="relative z-10 flex-shrink-0">
									<div
										className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 text-2xl
                            text-white shadow-lg shadow-violet-500/25 transition-transform duration-300 group-hover:scale-110
                            md:h-16 md:w-16 md:text-3xl"
									>
										<span className="material-symbols-outlined">{service.icon}</span>
									</div>
									<div className="absolute top-1/2 -right-3 h-2 w-2 -translate-y-1/2 rounded-full bg-violet-400"></div>
								</div>

								<div className="flex-1 pt-1 md:pt-2">
									<div
										className={`rounded-2xl border p-6 transition-all duration-300 group-hover:-translate-y-1 md:p-8
                            ${
															darkMode
																? 'border-gray-800 bg-gray-900/60 hover:border-violet-500/50'
																: 'border-gray-200 bg-white hover:border-violet-400/50'
														}`}
									>
										<h3 className={`mb-3 text-xl font-bold md:text-2xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
											{service.title}
										</h3>
										<p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
											{service.description}
										</p>

										<div className="flex flex-wrap gap-2">
											{service.features.map((feature) => (
												<span
													key={feature}
													className={`rounded-full px-3 py-1.5 text-xs font-medium
                                 ${
																		darkMode
																			? 'border border-violet-800 bg-violet-950/50 text-violet-300'
																			: 'border border-violet-200 bg-violet-50 text-violet-700'
																	}`}
												>
													{feature}
												</span>
											))}
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
