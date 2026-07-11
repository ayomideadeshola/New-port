import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { stats } from '../data';

export default function Stats() {
	const { darkMode } = useTheme();
	const [statsVisible, setStatsVisible] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const el = sectionRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => setStatsVisible(e.isIntersecting));
			},
			{ threshold: 0.5 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<section
			id="stats"
			ref={sectionRef}
			className={`py-20 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'} border-y ${
				darkMode ? 'border-gray-800' : 'border-gray-200'
			}`}
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
					{stats.map((stat) => (
						<div key={stat.label} className="text-center">
							<div className="mb-2 bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
								<AnimatePresence mode="wait">
									{statsVisible ? (
										<motion.span
											key="value"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
										>
											{stat.value}
											{stat.suffix}
										</motion.span>
									) : (
										<span key="zero">
											0{stat.suffix}
										</span>
									)}
								</AnimatePresence>
							</div>
							<div
								className={`text-sm tracking-widest uppercase ${
									darkMode ? 'text-gray-500' : 'text-gray-600'
								}`}
							>
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
