import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { EASE_OUT } from './motion/Reveal';

export default function PageTransition({ children }: { children: ReactNode }) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.98 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.98 }}
			transition={{ duration: 0.4, ease: EASE_OUT }}
		>
			{children}
		</motion.div>
	);
}
