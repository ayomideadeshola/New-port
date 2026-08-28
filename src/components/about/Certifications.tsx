import { AnimatePresence, motion } from 'framer-motion';
import { Award, Download, Eye, X } from 'lucide-react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { certifications, resumeUrl } from '../../data';
import { Reveal } from '../motion/Reveal';

export default function Certifications() {
	const [lightbox, setLightbox] = useState<string | null>(null);

	return (
		<section className="py-24">
			<div className="mx-auto max-w-4xl px-6 lg:px-8">
				<Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
					<div>
						<span className="mb-4 block font-mono text-xs tracking-[0.3em] text-text-muted uppercase">
							Credentials
						</span>
						<h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
							Education & Certifications
						</h2>
					</div>

					<a
						href={resumeUrl}
						target="_blank"
						rel="noopener noreferrer"
						data-cursor-hover
						className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
					>
						<Download size={15} />
						Download CV
					</a>
				</Reveal>

				<div className="space-y-5">
					{certifications.map((cert) => (
						<Reveal key={cert.title}>
							<div className="rounded-2xl border border-white/10 bg-surface p-6 transition-colors duration-300 hover:border-accent/30 sm:p-8">
								<div className="mb-5 flex flex-wrap items-start gap-4">
									<span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
										<Award size={18} />
									</span>
									<div className="min-w-0 flex-1">
										<h3 className="text-lg font-bold text-text">{cert.title}</h3>
										<p className="mt-1 text-sm text-text-secondary">{cert.issuer}</p>
									</div>

									{cert.image && (
										<button
											onClick={() => setLightbox(cert.image!)}
											data-cursor-hover
											className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-xs tracking-wide text-text-secondary transition-colors hover:border-accent/50 hover:text-text"
										>
											<Eye size={14} />
											View certificate
										</button>
									)}
								</div>

								<dl className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
									<div>
										<dt className="font-mono text-xs tracking-widest text-text-muted uppercase">Awarded</dt>
										<dd className="mt-1 text-sm text-text">{cert.date}</dd>
									</div>
									<div>
										<dt className="font-mono text-xs tracking-widest text-text-muted uppercase">Result</dt>
										<dd className="mt-1 text-sm text-text">{cert.grade}</dd>
									</div>
									<div>
										<dt className="font-mono text-xs tracking-widest text-text-muted uppercase">
											Credential
										</dt>
										<dd className="mt-1 font-mono text-sm text-text">{cert.credentialId}</dd>
									</div>
								</dl>

								<div className="flex flex-wrap gap-2">
									{cert.covers.map((c) => (
										<span
											key={c}
											className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-text-secondary"
										>
											{c}
										</span>
									))}
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>

			{createPortal(
				<AnimatePresence>
					{lightbox && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setLightbox(null)}
							className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-6"
						>
							<button
								onClick={() => setLightbox(null)}
								data-cursor-hover
								aria-label="Close"
								className="absolute top-6 right-6 text-text-secondary hover:text-text"
							>
								<X size={28} />
							</button>
							<motion.img
								initial={{ scale: 0.95 }}
								animate={{ scale: 1 }}
								src={lightbox}
								alt="Certificate"
								className="max-h-[85vh] max-w-full rounded-xl object-contain"
							/>
						</motion.div>
					)}
				</AnimatePresence>,
				document.body
			)}
		</section>
	);
}
