import { techMarquee } from '../../data';

function Row({ direction }: { direction: 'left' | 'right' }) {
	const items = [...techMarquee, ...techMarquee];
	return (
		<div className="scrollbar-hidden overflow-hidden">
			<div className={`flex w-max gap-10 ${direction === 'left' ? 'marquee-track-left' : 'marquee-track-right'}`}>
				{items.map((tech, i) => (
					<span
						key={`${tech}-${i}`}
						className="font-mono text-2xl font-medium text-text-muted transition-colors duration-300 hover:text-accent md:text-3xl"
					>
						{tech}
					</span>
				))}
			</div>
		</div>
	);
}

export default function TechMarquee() {
	return (
		<section className="border-y border-white/10 py-16">
			<div className="space-y-6">
				<Row direction="left" />
				<Row direction="right" />
			</div>
		</section>
	);
}
