import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../../data';
import ProjectCard from './ProjectCard';

export default function ProjectGrid({ activeFilter }: { activeFilter: string }) {
	const filtered = activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

	return (
		<div className="mx-auto max-w-7xl px-6 pb-32 lg:px-8">
			<AnimatePresence mode="wait">
				<motion.div
					key={activeFilter}
					initial="hidden"
					animate="visible"
					exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
					variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
					className="columns-1 gap-6 sm:columns-2 lg:columns-3"
				>
					{filtered.map((project) => (
						<motion.div
							key={project.id}
							variants={{
								hidden: { opacity: 0, y: 30 },
								visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
							}}
						>
							<ProjectCard project={project} />
						</motion.div>
					))}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
