import FeaturedWork from '../components/home/FeaturedWork';
import Hero from '../components/home/Hero';
import StatsRow from '../components/home/StatsRow';
import TechMarquee from '../components/home/TechMarquee';

export default function Home() {
	return (
		<>
			<Hero />
			<FeaturedWork />
			<TechMarquee />
			<StatsRow />
		</>
	);
}
