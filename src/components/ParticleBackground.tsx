import { useEffect, useRef } from 'react';

interface Particle {
	x: number;
	y: number;
	vx: number;
	vy: number;
}

const PARTICLE_COUNT = 45;
const LINK_DISTANCE = 130;
const MOUSE_RADIUS = 110;

export default function ParticleBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduceMotion) return;

		const canvas = canvasRef.current;
		const ctx = canvas?.getContext('2d');
		if (!canvas || !ctx) return;

		let width = (canvas.width = window.innerWidth);
		let height = (canvas.height = window.innerHeight);
		let frame: number;
		const mouse = { x: -9999, y: -9999 };

		const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
			x: Math.random() * width,
			y: Math.random() * height,
			vx: (Math.random() - 0.5) * 0.3,
			vy: (Math.random() - 0.5) * 0.3
		}));

		function handleResize() {
			width = canvas!.width = window.innerWidth;
			height = canvas!.height = window.innerHeight;
		}
		function handleMouseMove(e: MouseEvent) {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		}

		window.addEventListener('resize', handleResize);
		window.addEventListener('mousemove', handleMouseMove);

		function tick() {
			ctx!.clearRect(0, 0, width, height);

			for (const p of particles) {
				const dx = p.x - mouse.x;
				const dy = p.y - mouse.y;
				const dist = Math.sqrt(dx * dx + dy * dy) || 1;
				if (dist < MOUSE_RADIUS) {
					const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
					p.x += (dx / dist) * force * 1.2;
					p.y += (dy / dist) * force * 1.2;
				}

				p.x += p.vx;
				p.y += p.vy;

				if (p.x < 0 || p.x > width) p.vx *= -1;
				if (p.y < 0 || p.y > height) p.vy *= -1;

				ctx!.beginPath();
				ctx!.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
				ctx!.fillStyle = 'rgba(148, 163, 184, 0.5)';
				ctx!.fill();
			}

			for (let i = 0; i < particles.length; i++) {
				for (let j = i + 1; j < particles.length; j++) {
					const a = particles[i];
					const b = particles[j];
					const dx = a.x - b.x;
					const dy = a.y - b.y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < LINK_DISTANCE) {
						ctx!.beginPath();
						ctx!.moveTo(a.x, a.y);
						ctx!.lineTo(b.x, b.y);
						ctx!.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / LINK_DISTANCE)})`;
						ctx!.lineWidth = 1;
						ctx!.stroke();
					}
				}
			}

			frame = requestAnimationFrame(tick);
		}

		tick();

		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="pointer-events-none fixed inset-0 z-0 opacity-70"
			aria-hidden="true"
		/>
	);
}
