import { ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { skills } from '../data';
import sideImg from '../assets/sideimg.png';

export default function About() {
	const { darkMode } = useTheme();

	return (
		<section id="about" className={`py-28 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'} relative overflow-hidden`}>
			<div
				className="pointer-events-none absolute inset-0"
				style={{
					backgroundImage: `linear-gradient(${
						darkMode ? 'rgba(99,102,241,0.06)' : 'rgba(99,102,241,0.04)'
					} 1px, transparent 1px), linear-gradient(90deg, ${
						darkMode ? 'rgba(99,102,241,0.06)' : 'rgba(99,102,241,0.04)'
					} 1px, transparent 1px)`,
					backgroundSize: '48px 48px'
				}}
			></div>

			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-16 flex items-center gap-4">
					<div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500"></div>
					<span className="text-xs font-black tracking-[0.3em] text-violet-600 uppercase dark:text-violet-400">
						About Me
					</span>
					<div className={`h-px flex-1 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}></div>
				</div>

				<div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
					<div
						className={`relative overflow-hidden rounded-3xl border p-8 md:p-10 lg:col-span-7
					${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}
					shadow-sm`}
					>
						<div
							className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-20"
							style={{ background: 'radial-gradient(circle, #7C3AED, #3B82F6)', filter: 'blur(60px)' }}
						></div>

						<h2
							className={`relative mb-6 text-4xl leading-[1.1] font-black tracking-tight md:text-5xl
						${darkMode ? 'text-white' : 'text-gray-900'}`}
						>
							Building robust apps
							<br />
							<span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
								end to end.
							</span>
						</h2>

						<p className={`relative mb-6 text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
							I'm a fullstack developer who loves owning the entire product lifecycle — from designing
							relational schemas and building APIs to crafting responsive UIs that users actually enjoy.
						</p>
						<p className={`relative text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
							My focus is on{' '}
							<span className={`font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
								clean, maintainable code
							</span>
							, pragmatic architecture and shipping features that move the needle.
						</p>

						<div className="relative mt-10 flex flex-wrap gap-3">
							<a
								href="#projects"
								className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600
							px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/25
							transition-all duration-200 hover:-translate-y-0.5 hover:shadow-violet-500/40"
							>
								View Projects
								<ChevronRight />
							</a>
							<a
								href="#contact"
								className={`inline-flex items-center gap-2 rounded-xl border-2 px-6 py-3 text-sm font-bold
							transition-all duration-200 hover:-translate-y-0.5
							${
								darkMode
									? 'border-gray-700 text-gray-300 hover:border-violet-500 hover:text-violet-400'
									: 'border-gray-300 text-gray-700 hover:border-violet-500 hover:text-violet-600'
							}`}
							>
								Let's Talk
							</a>
						</div>
					</div>

					<div className="relative lg:col-span-5">
						<div
							className={`relative h-full min-h-[340px] overflow-hidden rounded-3xl border shadow-sm
						${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
						>
							<div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-500 opacity-80"></div>
							<div className="absolute inset-[2px] overflow-hidden rounded-[calc(1.5rem-2px)]">
								<img src={sideImg} alt="Developer workspace" className="h-full w-full object-cover" />
								<div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-gray-950/20 to-transparent"></div>
								<div className="absolute right-6 bottom-6 left-6 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
									<div className="flex items-center gap-3">
										<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500">
											<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
												/>
											</svg>
										</div>
										<div className="text-white">
											<div className="text-sm leading-tight font-bold">Clean Code</div>
											<div className="text-xs opacity-70">Always maintainable</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					className={`mt-8 rounded-3xl border p-8 shadow-sm md:p-10
				${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}
				>
					<div className="mb-8 flex items-center justify-between">
						<h3 className={`text-xl font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>
							Technical Proficiency
						</h3>
						<span className={`text-xs font-semibold tracking-widest uppercase ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
							Skill Levels
						</span>
					</div>

					<div className="relative">
						<div className="absolute top-0 bottom-0 left-[27px] w-px bg-gradient-to-b from-violet-500/60 via-blue-500/40 to-transparent md:left-[31px]"></div>

						<div className="space-y-8">
							{skills.map((skill, i) => (
								<div key={skill.name} className="group/skill relative flex items-start gap-5 md:gap-7">
									<div className="relative z-10 flex-shrink-0">
										<div
											className="absolute inset-0 scale-125 rounded-full opacity-30 transition-transform duration-300 group-hover/skill:scale-150"
											style={{ background: skill.color }}
										></div>
										<div
											className={`relative flex h-14 w-14 items-center justify-center rounded-full text-xs font-black text-white shadow-lg ring-4
										${darkMode ? 'ring-gray-900' : 'ring-white'}`}
											style={{
												background: `linear-gradient(135deg, ${skill.color}ee, ${skill.color}99)`
											}}
										>
											{i + 1}
										</div>
										<div
											className="absolute top-1/2 left-full h-px w-4 -translate-y-1/2 md:w-6"
											style={{ background: `linear-gradient(90deg, ${skill.color}80, transparent)` }}
										></div>
									</div>

									<div className="flex-1 pt-2">
										<div className="mb-3 flex items-center justify-between">
											<span className={`text-sm font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
												{skill.name}
											</span>
											<span className="text-sm font-black tabular-nums" style={{ color: skill.color }}>
												{skill.level}%
											</span>
										</div>

										<div
											className={`relative h-3 w-full overflow-hidden rounded-full ${
												darkMode ? 'bg-gray-800' : 'bg-gray-100'
											}`}
										>
											<div className="absolute inset-0 flex gap-px">
												{Array.from({ length: 10 }).map((_, gridIdx) => (
													<div
														key={gridIdx}
														className={`flex-1 ${
															darkMode ? 'border-r border-gray-700/60' : 'border-r border-gray-200/60'
														} last:border-0`}
													></div>
												))}
											</div>
											<div
												className="relative h-full overflow-hidden rounded-full transition-all duration-1000 ease-out"
												style={{
													width: `${skill.level}%`,
													background: `linear-gradient(90deg, ${skill.color}bb, ${skill.color})`
												}}
											>
												<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-[1.2s] ease-in-out group-hover/skill:translate-x-[200%]"></div>
												<div className="absolute top-0 right-0 bottom-0 w-6 rounded-full bg-gradient-to-l from-white/50 to-transparent"></div>
											</div>
										</div>

										<div className="mt-1.5 text-right">
											<span
												className={`text-[10px] font-semibold tracking-wider uppercase
											${skill.level >= 90 ? 'text-emerald-500' : skill.level >= 80 ? 'text-blue-500' : 'text-amber-500'}`}
											>
												{skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Proficient'}
											</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
