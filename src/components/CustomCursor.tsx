import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, [data-cursor-hover]';

export default function CustomCursor() {
	const [enabled, setEnabled] = useState(false);
	const [hovering, setHovering] = useState(false);
	const x = useMotionValue(-100);
	const y = useMotionValue(-100);
	const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
	const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

	useEffect(() => {
		const fine = window.matchMedia('(pointer: fine)').matches;
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (!fine || reduceMotion) return;

		setEnabled(true);
		document.body.classList.add('has-custom-cursor');

		function handleMove(e: MouseEvent) {
			x.set(e.clientX);
			y.set(e.clientY);
		}
		function handleOver(e: MouseEvent) {
			const target = e.target as HTMLElement;
			setHovering(!!target.closest?.(INTERACTIVE_SELECTOR));
		}

		window.addEventListener('mousemove', handleMove);
		window.addEventListener('mouseover', handleOver);

		return () => {
			document.body.classList.remove('has-custom-cursor');
			window.removeEventListener('mousemove', handleMove);
			window.removeEventListener('mouseover', handleOver);
		};
	}, [x, y]);

	if (!enabled) return null;

	return (
		<motion.div
			className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full bg-accent"
			style={{
				x: springX,
				y: springY,
				translateX: '-50%',
				translateY: '-50%',
				mixBlendMode: 'difference'
			}}
			animate={{ width: hovering ? 40 : 8, height: hovering ? 40 : 8 }}
			transition={{ duration: 0.2 }}
			aria-hidden="true"
		/>
	);
}
