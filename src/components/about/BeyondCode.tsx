import { motion } from 'framer-motion';
import { beyondCode } from '../../data';
import { Reveal } from '../motion/Reveal';

export default function BeyondCode() {
	return (
		<section className="py-24">
			<div className="mx-auto max-w-5xl px-6 lg:px-8">
				<Reveal className="mb-16 text-center">
					<span className="mb-4 block font-mono text-xs tracking-[0.3em] text-text-muted uppercase">
						Beyond Code
					</span>
					<h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">Life Off-Screen</h2>
				</Reveal>

				<div className="flex flex-wrap justify-center gap-6 py-6">
					{beyondCode.map((photo, i) => (
						<motion.div
							key={photo.src}
							initial={{ opacity: 0, y: 30, rotate: photo.rotate }}
							whileInView={{ opacity: 1, y: 0, rotate: photo.rotate }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.5, delay: i * 0.08 }}
							whileHover={{ rotate: 0, scale: 1.08, zIndex: 20 }}
							className="glass w-40 shrink-0 rounded-xl p-2 sm:w-48"
							style={{ zIndex: i }}
						>
							<div className="overflow-hidden rounded-lg">
								<img src={photo.src} alt={photo.caption} className="aspect-square w-full object-cover" />
							</div>
							<p className="pt-2 pb-1 text-center font-mono text-xs text-text-secondary">{photo.caption}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
