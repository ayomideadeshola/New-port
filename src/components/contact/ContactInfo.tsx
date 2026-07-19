import { AnimatePresence, motion } from 'framer-motion';
import { Copy, MapPin } from 'lucide-react';
import { useState } from 'react';
import { socials } from '../../data';
import { Reveal } from '../motion/Reveal';

const EMAIL = 'josephay125d@gmail.com';

const socialIcons: Record<string, string> = {
	github:
		'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
	linkedin:
		'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
	twitter:
		'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
};

export default function ContactInfo() {
	const [copied, setCopied] = useState(false);

	async function copyEmail() {
		await navigator.clipboard.writeText(EMAIL);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	}

	return (
		<Reveal>
			<span className="mb-4 block font-mono text-xs tracking-[0.3em] text-text-muted uppercase">Contact</span>
			<h1 className="mb-6 text-4xl font-bold tracking-tight text-text md:text-5xl">
				Let's build something great.
			</h1>
			<p className="mb-10 max-w-md text-lg leading-relaxed text-text-secondary">
				Open to freelance contracts, full-time roles, or just a coffee chat about your next idea.
			</p>

			<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-1.5">
				<span className="relative flex h-2 w-2">
					<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
					<span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
				</span>
				<span className="font-mono text-xs tracking-wide text-success">Typically responds in 24h</span>
			</div>

			<div className="space-y-3">
				<button
					onClick={copyEmail}
					data-cursor-hover
					className="glass flex w-full max-w-md items-center justify-between rounded-2xl px-5 py-4 text-left transition-colors hover:border-accent/30"
				>
					<div>
						<div className="mb-0.5 font-mono text-xs tracking-widest text-text-muted uppercase">Email</div>
						<div className="font-semibold text-text">{EMAIL}</div>
					</div>
					<div className="relative">
						<Copy size={16} className="text-text-secondary" />
						<AnimatePresence>
							{copied && (
								<motion.span
									initial={{ opacity: 0, y: 4 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0 }}
									className="absolute top-6 right-0 rounded-md bg-accent px-2 py-1 font-mono text-[10px] whitespace-nowrap text-white"
								>
									Copied!
								</motion.span>
							)}
						</AnimatePresence>
					</div>
				</button>

				<div className="glass flex max-w-md items-center gap-3 rounded-2xl px-5 py-4">
					<MapPin size={16} className="shrink-0 text-text-secondary" />
					<div>
						<div className="mb-0.5 font-mono text-xs tracking-widest text-text-muted uppercase">Location</div>
						<div className="font-semibold text-text">Lagos, Nigeria</div>
					</div>
				</div>
			</div>

			<div className="mt-8 flex gap-3">
				{socials.map((social) => (
					<a
						key={social.id}
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						data-cursor-hover
						className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-text-secondary transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white"
					>
						<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
							<path d={socialIcons[social.id]} />
						</svg>
					</a>
				))}
			</div>
		</Reveal>
	);
}
