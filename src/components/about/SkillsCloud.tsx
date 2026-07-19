import { motion } from 'framer-motion';
import { skills } from '../../data';
import { Reveal, RevealGroup, RevealItem } from '../motion/Reveal';

function sizeForLevel(level: number) {
	if (level >= 92) return 'text-3xl md:text-4xl';
	if (level >= 88) return 'text-2xl md:text-3xl';
	if (level >= 84) return 'text-xl md:text-2xl';
	return 'text-lg md:text-xl';
}

export default function SkillsCloud() {
	return (
		<section className="py-24">
			<div className="mx-auto max-w-5xl px-6 lg:px-8">
				<Reveal className="mb-16 text-center">
					<span className="mb-4 block font-mono text-xs tracking-[0.3em] text-text-muted uppercase">
						Toolbox
					</span>
					<h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">Skills &amp; Focus</h2>
				</Reveal>

				<RevealGroup className="glass flex flex-wrap items-center justify-center gap-x-8 gap-y-6 rounded-3xl px-10 py-16">
					{skills.map((skill, i) => (
						<RevealItem key={skill.name}>
							<motion.span
								animate={{ y: [0, -8, 0] }}
								transition={{
									duration: 3 + (i % 4) * 0.5,
									repeat: Infinity,
									ease: 'easeInOut',
									delay: (i % 5) * 0.3
								}}
								className={`inline-block cursor-default font-bold text-text transition-colors hover:text-accent ${sizeForLevel(
									skill.level
								)}`}
								style={{ opacity: 0.5 + skill.level / 200 }}
							>
								{skill.name}
							</motion.span>
						</RevealItem>
					))}
				</RevealGroup>
			</div>
		</section>
	);
}
