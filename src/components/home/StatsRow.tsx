import { stats } from '../../data';
import { useCountUp } from '../../hooks/useCountUp';
import { Reveal } from '../motion/Reveal';

function StatItem({ value, suffix, label }: (typeof stats)[number]) {
	const { value: current, ref } = useCountUp<HTMLDivElement>(value, 2000);
	return (
		<div ref={ref} className="text-center">
			<div className="mb-2 font-mono text-4xl font-bold text-text md:text-5xl">
				{current}
				{suffix}
			</div>
			<div className="text-xs tracking-widest text-text-muted uppercase">{label}</div>
		</div>
	);
}

export default function StatsRow() {
	return (
		<section className="py-28">
			<Reveal className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 md:grid-cols-4 lg:px-8">
				{stats.map((stat) => (
					<StatItem key={stat.label} {...stat} />
				))}
			</Reveal>
		</section>
	);
}
