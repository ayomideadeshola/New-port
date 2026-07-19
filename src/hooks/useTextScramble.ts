import { useEffect, useRef, useState } from 'react';

const SCRAMBLE_CHARS = '!<>-_\\/[]{}—=+*^?#';

export function useTextScramble(text: string, duration = 800) {
	const [display, setDisplay] = useState(text);
	const frameRef = useRef<number>(0);

	useEffect(() => {
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduceMotion) {
			setDisplay(text);
			return;
		}

		let start: number | null = null;

		function tick(timestamp: number) {
			if (start === null) start = timestamp;
			const elapsed = timestamp - start!;
			const progress = Math.min(elapsed / duration, 1);
			const revealCount = Math.floor(progress * text.length);

			let output = '';
			for (let i = 0; i < text.length; i++) {
				if (text[i] === ' ' || i < revealCount) {
					output += text[i];
				} else {
					output += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
				}
			}
			setDisplay(output);

			if (progress < 1) {
				frameRef.current = requestAnimationFrame(tick);
			} else {
				setDisplay(text);
			}
		}

		frameRef.current = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frameRef.current);
	}, [text, duration]);

	return display;
}
