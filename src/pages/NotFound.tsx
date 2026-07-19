import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
			<span className="font-mono text-sm tracking-widest text-accent uppercase">404</span>
			<h1 className="mt-4 mb-6 text-4xl font-bold tracking-tight text-text md:text-5xl">Page not found</h1>
			<p className="mb-10 max-w-md text-text-secondary">
				The page you're looking for doesn't exist or has moved.
			</p>
			<Link
				to="/"
				data-cursor-hover
				className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent/50"
			>
				<ArrowLeft size={16} /> Back home
			</Link>
		</section>
	);
}
