import { useEffect, useState } from 'react';

const LINES = [
	{ prefix: 'const', text: ' engineer = {', color: 'text-text-secondary' },
	{ prefix: '  name:', text: " 'Ayomide Adeshola',", color: 'text-accent' },
	{ prefix: '  stack:', text: " ['React', 'Node', 'PostgreSQL'],", color: 'text-accent' },
	{ prefix: '  focus:', text: " 'shipping things that work',", color: 'text-accent' },
	{ prefix: '  available:', text: ' true', color: 'text-success' },
	{ prefix: '', text: '};', color: 'text-text-secondary' }
];

const FULL_TEXT = LINES.map((l) => l.prefix + l.text).join('\n');

export default function CodeTerminal() {
	const [charCount, setCharCount] = useState(0);

	useEffect(() => {
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduceMotion) {
			setCharCount(FULL_TEXT.length);
			return;
		}

		const interval = setInterval(() => {
			setCharCount((c) => (c >= FULL_TEXT.length ? c : c + 1));
		}, 28);
		return () => clearInterval(interval);
	}, []);

	const typed = FULL_TEXT.slice(0, charCount);
	const typedLines = typed.split('\n');

	return (
		<div className="glass w-full max-w-md rounded-2xl p-1 shadow-2xl shadow-accent/10">
			<div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
				<span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
				<span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
				<span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
				<span className="ml-3 font-mono text-xs text-text-muted">profile.ts</span>
			</div>
			<pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6">
				{LINES.map((line, i) => (
					<div key={i}>
						<span className="text-text-secondary">{typedLines[i]?.slice(0, line.prefix.length) ?? ''}</span>
						<span className={line.color}>{typedLines[i]?.slice(line.prefix.length) ?? ''}</span>
						{i === typedLines.length - 1 && charCount < FULL_TEXT.length && (
							<span className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 animate-pulse bg-accent" />
						)}
					</div>
				))}
			</pre>
		</div>
	);
}
