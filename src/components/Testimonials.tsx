import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { testimonials } from '../data';

export default function Testimonials() {
	const { darkMode } = useTheme();
	const [currentTestimonial, setCurrentTestimonial] = useState(0);
	const active = testimonials[currentTestimonial];

	return (
		<section className={`py-28 ${darkMode ? 'bg-gray-900/30' : 'bg-gray-50'}`}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-16 text-center">
					<span className="mb-4 block text-xs font-bold tracking-[0.25em] text-violet-600 uppercase dark:text-violet-400">
						Testimonials
					</span>
					<h2 className={`mb-4 text-4xl font-black tracking-tight md:text-5xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
						Client Testimonials
					</h2>
				</div>

				<div className="mx-auto max-w-3xl">
					<div
						className={`relative overflow-hidden rounded-3xl border p-8 shadow-xl md:p-14
                    ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}
					>
						<div
							className={`pointer-events-none absolute top-6 right-8 text-[9rem] leading-none font-black select-none ${
								darkMode ? 'text-gray-800' : 'text-gray-100'
							}`}
						>
							"
						</div>
						<AnimatePresence mode="wait">
							<motion.div
								key={currentTestimonial}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.35 }}
								className="relative text-center"
							>
								<p
									className={`mb-10 text-xl leading-relaxed font-medium italic md:text-2xl ${
										darkMode ? 'text-gray-300' : 'text-gray-700'
									}`}
								>
									"{active.content}"
								</p>
								<div className="flex items-center justify-center gap-4">
									<img
										src={active.avatar}
										alt={active.name}
										className="h-16 w-16 rounded-2xl border-2 border-violet-500 object-cover shadow-lg"
									/>
									<div className="text-left">
										<div className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{active.name}</div>
										<div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{active.role}</div>
									</div>
								</div>
							</motion.div>
						</AnimatePresence>
						<div className="mt-10 flex justify-center gap-2">
							{testimonials.map((_, i) => (
								<button
									key={i}
									onClick={() => setCurrentTestimonial(i)}
									className={`h-2.5 rounded-full transition-all duration-300
                             ${
																currentTestimonial === i
																	? 'w-8 bg-gradient-to-r from-violet-600 to-blue-600'
																	: darkMode
																		? 'w-2.5 bg-gray-700 hover:bg-gray-600'
																		: 'w-2.5 bg-gray-200 hover:bg-gray-300'
															}`}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
