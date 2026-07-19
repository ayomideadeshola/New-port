import { filters } from '../../data';
import { Reveal } from '../motion/Reveal';

interface WorkHeaderProps {
	activeFilter: string;
	onFilterChange: (filter: string) => void;
}

export default function WorkHeader({ activeFilter, onFilterChange }: WorkHeaderProps) {
	return (
		<Reveal className="mx-auto max-w-7xl px-6 pt-40 pb-16 lg:px-8">
			<span className="mb-4 block font-mono text-xs tracking-[0.3em] text-text-muted uppercase">Work</span>
			<h1 className="mb-10 bg-gradient-to-r from-text to-text-secondary bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl">
				Selected Work
			</h1>

			<div className="flex flex-wrap gap-2">
				{filters.map((filter) => (
					<button
						key={filter}
						onClick={() => onFilterChange(filter)}
						data-cursor-hover
						className={`rounded-full border px-5 py-2 font-mono text-sm capitalize transition-colors duration-200 ${
							activeFilter === filter
								? 'border-accent bg-accent text-white'
								: 'border-white/15 text-text-secondary hover:border-accent/50 hover:text-text'
						}`}
					>
						{filter}
					</button>
				))}
			</div>
		</Reveal>
	);
}
