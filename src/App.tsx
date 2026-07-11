import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function Page() {
	const { darkMode } = useTheme();

	return (
		<div
			className={`min-h-screen transition-colors duration-300 ${
				darkMode ? 'dark bg-gray-950 text-white' : 'bg-white text-gray-900'
			}`}
		>
			<Nav />
			<Hero />
			<Stats />
			<About />
			<Services />
			<Projects />
			<Testimonials />
			<Contact />
			<Footer />
		</div>
	);
}

export default function App() {
	return (
		<ThemeProvider>
			<Page />
		</ThemeProvider>
	);
}
