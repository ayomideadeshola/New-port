import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, type MouseEvent, type ReactNode } from 'react';

interface MagneticButtonProps {
	children: ReactNode;
	className?: string;
	radius?: number;
	strength?: number;
}

/** Wraps a button/link so it pulls toward the cursor within `radius` px of its center. */
export function MagneticButton({ children, className, radius = 80, strength = 0.4 }: MagneticButtonProps) {
	const ref = useRef<HTMLDivElement>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
	const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

	function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const relX = e.clientX - (rect.left + rect.width / 2);
		const relY = e.clientY - (rect.top + rect.height / 2);
		const distance = Math.sqrt(relX * relX + relY * relY);
		if (distance < radius) {
			x.set(relX * strength);
			y.set(relY * strength);
		}
	}

	function handleMouseLeave() {
		x.set(0);
		y.set(0);
	}

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ x: springX, y: springY, display: 'inline-block' }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
