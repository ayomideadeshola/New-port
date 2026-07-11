import { sections } from '../data';

export default function Footer() {
	return (
		<footer className="border-t border-gray-800 bg-gray-950 py-14 text-white">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center justify-between gap-8 md:flex-row">
					<div className="text-center md:text-left">
						<div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
							<div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-blue-500">
								<span className="text-xs font-black text-white">A</span>
							</div>
							<span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-xl font-black tracking-tight text-transparent">
								Ayomide
							</span>
						</div>
						<p className="text-sm text-gray-500">Fullstack developer — shipping quality products.</p>
					</div>
					<div className="flex gap-6 text-sm text-gray-500">
						{sections.map((s) => (
							<a key={s} href={`#${s}`} className="font-medium capitalize transition-colors hover:text-white">
								{s}
							</a>
						))}
					</div>
					<div className="text-xs font-medium text-gray-600">© 2024 Ayomide Adeshola. All rights reserved.</div>
				</div>
			</div>
		</footer>
	);
}
