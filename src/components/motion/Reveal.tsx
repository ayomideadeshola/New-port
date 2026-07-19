import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';

export const EASE_OUT = [0.25, 0.46, 0.45, 0.94] as const;

export const revealItemVariants: Variants = {
	hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
	visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: EASE_OUT } }
};

interface RevealProps extends HTMLMotionProps<'div'> {
	delay?: number;
}

/** Fade-up + blur entrance for a single block, triggered at 15% viewport intersection. */
export function Reveal({ children, delay = 0, ...props }: RevealProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
			whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
			viewport={{ once: true, amount: 0.15 }}
			transition={{ duration: 0.6, ease: EASE_OUT, delay }}
			{...props}
		>
			{children}
		</motion.div>
	);
}

interface RevealGroupProps extends HTMLMotionProps<'div'> {
	stagger?: number;
}

/** Stagger container — wrap RevealItem children to reveal them 80-120ms apart. */
export function RevealGroup({ children, stagger = 0.1, ...props }: RevealGroupProps) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.15 }}
			variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
			{...props}
		>
			{children}
		</motion.div>
	);
}

export function RevealItem({ children, ...props }: HTMLMotionProps<'div'>) {
	return (
		<motion.div variants={revealItemVariants} {...props}>
			{children}
		</motion.div>
	);
}
