import { AnimatePresence, motion } from 'framer-motion';
import { Check, Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { contactSubjects } from '../../data';

type FormStatus = 'idle' | 'sending' | 'success';

interface ConfettiPiece {
	id: number;
	x: number;
	y: number;
	rotate: number;
	color: string;
}

const CONFETTI_COLORS = ['#6366F1', '#818CF8', '#10B981', '#F8FAFC'];

function FloatingField({
	id,
	label,
	type = 'text',
	value,
	onChange,
	textarea = false
}: {
	id: string;
	label: string;
	type?: string;
	value: string;
	onChange: (value: string) => void;
	textarea?: boolean;
}) {
	const sharedClasses =
		'peer w-full border-b border-white/15 bg-transparent px-1 pt-6 pb-3 text-text outline-none transition-colors focus:border-accent/60';

	return (
		<div className="relative">
			{textarea ? (
				<textarea
					id={id}
					required
					rows={4}
					placeholder=" "
					value={value}
					onChange={(e) => onChange(e.target.value)}
					className={`${sharedClasses} resize-none`}
				/>
			) : (
				<input
					id={id}
					type={type}
					required
					placeholder=" "
					value={value}
					onChange={(e) => onChange(e.target.value)}
					className={sharedClasses}
				/>
			)}
			<label
				htmlFor={id}
				className="pointer-events-none absolute top-6 left-1 text-text-secondary transition-all duration-200 peer-focus:top-1 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
			>
				{label}
			</label>
			<span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-center scale-x-0 bg-accent transition-transform duration-300 peer-focus:scale-x-100" />
		</div>
	);
}

export default function ContactForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState(contactSubjects[0]);
	const [message, setMessage] = useState('');
	const [status, setStatus] = useState<FormStatus>('idle');
	const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setStatus('sending');
		await new Promise((r) => setTimeout(r, 1400));
		setStatus('success');

		setConfetti(
			Array.from({ length: 20 }, (_, i) => ({
				id: i,
				x: (Math.random() - 0.5) * 220,
				y: -Math.random() * 140 - 20,
				rotate: Math.random() * 360,
				color: CONFETTI_COLORS[i % CONFETTI_COLORS.length]
			}))
		);

		setName('');
		setEmail('');
		setSubject(contactSubjects[0]);
		setMessage('');

		setTimeout(() => {
			setStatus('idle');
			setConfetti([]);
		}, 3000);
	}

	return (
		<form onSubmit={handleSubmit} className="glass space-y-8 rounded-3xl p-8 md:p-10">
			<FloatingField id="name" label="Name" value={name} onChange={setName} />
			<FloatingField id="email" label="Email" type="email" value={email} onChange={setEmail} />

			<div className="relative">
				<select
					id="subject"
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
					data-cursor-hover
					className="w-full appearance-none border-b border-white/15 bg-transparent px-1 pt-6 pb-3 text-text outline-none focus:border-accent/60"
				>
					{contactSubjects.map((s) => (
						<option key={s} value={s} className="bg-surface text-text">
							{s}
						</option>
					))}
				</select>
				<label htmlFor="subject" className="pointer-events-none absolute top-1 left-1 text-xs text-text-secondary">
					Subject
				</label>
			</div>

			<FloatingField id="message" label="Message" value={message} onChange={setMessage} textarea />

			<div className="relative">
				<motion.button
					type="submit"
					disabled={status !== 'idle'}
					data-cursor-hover
					animate={{ width: status === 'sending' ? 56 : '100%', borderRadius: status === 'sending' ? 28 : 9999 }}
					transition={{ duration: 0.3 }}
					className={`mx-auto flex h-14 items-center justify-center gap-2 text-sm font-semibold transition-colors ${
						status === 'success' ? 'bg-success text-white' : 'bg-accent text-white hover:bg-[#4f46e5]'
					} disabled:cursor-not-allowed`}
				>
					<AnimatePresence mode="wait">
						{status === 'idle' && (
							<motion.span
								key="idle"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="flex items-center gap-2"
							>
								Send Message <Send size={16} />
							</motion.span>
						)}
						{status === 'sending' && (
							<motion.span
								key="sending"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1, rotate: 360 }}
								exit={{ opacity: 0 }}
								transition={{ rotate: { duration: 0.8, repeat: Infinity, ease: 'linear' } }}
								className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
							/>
						)}
						{status === 'success' && (
							<motion.span
								key="success"
								initial={{ opacity: 0, scale: 0.6 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0 }}
								className="flex items-center gap-2"
							>
								<Check size={16} /> Message Sent!
							</motion.span>
						)}
					</AnimatePresence>
				</motion.button>

				<div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					{confetti.map((piece) => (
						<motion.span
							key={piece.id}
							initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
							animate={{ x: piece.x, y: piece.y, opacity: 0, rotate: piece.rotate }}
							transition={{ duration: 0.9, ease: 'easeOut' }}
							className="absolute h-1.5 w-1.5 rounded-sm"
							style={{ backgroundColor: piece.color }}
						/>
					))}
				</div>
			</div>
		</form>
	);
}
