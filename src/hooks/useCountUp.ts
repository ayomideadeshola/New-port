import { useEffect, useRef, useState } from 'react';

export function useCountUp<T extends HTMLElement>(target: number, duration = 2000) {
	const [value, setValue] = useState(0);
	const ref = useRef<T>(null);
	const startedRef = useRef(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting || startedRef.current) return;
				startedRef.current = true;

				if (reduceMotion) {
					setValue(target);
					return;
				}

				const start = performance.now();
				function tick(now: number) {
					const progress = Math.min((now - start) / duration, 1);
					const eased = 1 - Math.pow(1 - progress, 3);
					setValue(Math.round(eased * target));
					if (progress < 1) requestAnimationFrame(tick);
				}
				requestAnimationFrame(tick);
			},
			{ threshold: 0.5 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, [target, duration]);

	return { value, ref };
}
