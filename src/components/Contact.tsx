import { useState, type FormEvent } from 'react';
import { useTheme } from '../context/ThemeContext';
import { socials } from '../data';

type FormStatus = 'idle' | 'sending' | 'success';

const socialIcons: Record<string, string> = {
	github:
		'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
	linkedin:
		'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
	twitter:
		'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
};

export default function Contact() {
	const { darkMode } = useTheme();
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [formStatus, setFormStatus] = useState<FormStatus>('idle');

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setFormStatus('sending');
		await new Promise((r) => setTimeout(r, 1500));
		setFormStatus('success');
		setFormData({ name: '', email: '', message: '' });
		setTimeout(() => setFormStatus('idle'), 3000);
	}

	const inputClasses = `w-full rounded-xl border px-4 py-3.5 text-sm font-medium transition-all duration-200 outline-none
                            ${
															darkMode
																? 'border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:ring-violet-500'
																: 'border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-violet-500'
														} focus:border-transparent focus:ring-2`;

	return (
		<section id="contact" className={`py-28 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-16 text-center">
					<span className="mb-4 block text-xs font-bold tracking-[0.25em] text-violet-600 uppercase dark:text-violet-400">
						Contact
					</span>
					<h2 className={`mb-4 text-4xl font-black tracking-tight md:text-5xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
						Let's Build Something Great
					</h2>
				</div>

				<div className="grid items-start gap-14 md:grid-cols-2">
					<div>
						<p className={`mb-10 text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
							Got a project that needs a fullstack developer? I'm open to freelance contracts,
							long-term collaborations and full-time roles.
						</p>

						<div className="space-y-4">
							<div
								className={`flex items-center gap-4 rounded-2xl border p-4 ${
									darkMode ? 'border-gray-800 bg-gray-900/60' : 'border-gray-200 bg-gray-50'
								}`}
							>
								<div
									className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${
										darkMode ? 'bg-violet-950/60 text-violet-400' : 'bg-violet-100 text-violet-600'
									}`}
								>
									<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<div>
									<div className={`mb-0.5 text-xs font-semibold tracking-wider uppercase ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
										Email
									</div>
									<a
										href="mailto:josephay125d@gmail.com"
										className={`font-semibold transition-colors hover:text-violet-600 dark:hover:text-violet-400 ${
											darkMode ? 'text-white' : 'text-gray-900'
										}`}
									>
										josephay125d@gmail.com
									</a>
								</div>
							</div>

							<div
								className={`flex items-center gap-4 rounded-2xl border p-4 ${
									darkMode ? 'border-gray-800 bg-gray-900/60' : 'border-gray-200 bg-gray-50'
								}`}
							>
								<div
									className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${
										darkMode ? 'bg-blue-950/60 text-blue-400' : 'bg-blue-100 text-blue-600'
									}`}
								>
									<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
									</svg>
								</div>
								<div>
									<div className={`mb-0.5 text-xs font-semibold tracking-wider uppercase ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
										Location
									</div>
									<div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Lagos, Nigeria</div>
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
									className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-200 hover:scale-110
            ${
							darkMode
								? 'border-gray-700 bg-gray-800 text-gray-400 hover:border-violet-600 hover:bg-violet-600 hover:text-white'
								: 'border-gray-200 bg-gray-100 text-gray-500 hover:border-violet-600 hover:bg-violet-600 hover:text-white'
						}`}
								>
									<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
										<path d={socialIcons[social.id]} />
									</svg>
								</a>
							))}
						</div>
					</div>

					<div
						className={`rounded-3xl border p-8 shadow-xl ${
							darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'
						}`}
					>
						<form onSubmit={handleSubmit} className="space-y-5">
							<div>
								<label htmlFor="name" className={`mb-2 block text-sm font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
									Name
								</label>
								<input
									type="text"
									id="name"
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									required
									placeholder="John Doe"
									className={inputClasses}
								/>
							</div>
							<div>
								<label htmlFor="email" className={`mb-2 block text-sm font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
									Email
								</label>
								<input
									type="email"
									id="email"
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									required
									placeholder="john@example.com"
									className={inputClasses}
								/>
							</div>
							<div>
								<label htmlFor="message" className={`mb-2 block text-sm font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
									Message
								</label>
								<textarea
									id="message"
									value={formData.message}
									onChange={(e) => setFormData({ ...formData, message: e.target.value })}
									required
									rows={5}
									placeholder="Tell me about your project..."
									className={`resize-none ${inputClasses}`}
								></textarea>
							</div>
							<button
								type="submit"
								disabled={formStatus === 'sending' || formStatus === 'success'}
								className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-bold transition-all duration-200
                           ${
															formStatus === 'success'
																? 'bg-emerald-500 text-white'
																: 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg hover:scale-[1.02] hover:from-violet-700 hover:to-blue-700 hover:shadow-xl'
														} disabled:cursor-not-allowed disabled:opacity-60`}
							>
								{formStatus === 'sending' ? (
									<>
										<svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
											<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											/>
										</svg>
										Sending…
									</>
								) : formStatus === 'success' ? (
									<>
										<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
										</svg>
										Message Sent!
									</>
								) : (
									<>
										Send Message
										<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
											/>
										</svg>
									</>
								)}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
