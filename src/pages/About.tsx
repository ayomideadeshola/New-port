import AboutHero from '../components/about/AboutHero';
import BeyondCode from '../components/about/BeyondCode';
import SkillsCloud from '../components/about/SkillsCloud';
import TestimonialsCarousel from '../components/about/TestimonialsCarousel';
import Timeline from '../components/about/Timeline';

export default function About() {
	return (
		<>
			<AboutHero />
			<Timeline />
			<SkillsCloud />
			<BeyondCode />
			<TestimonialsCarousel />
		</>
	);
}
