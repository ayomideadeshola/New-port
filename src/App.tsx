import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import PageTransition from './components/PageTransition';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetail';
import Work from './pages/Work';

export default function App() {
	const location = useLocation();

	return (
		<div className="relative min-h-screen bg-ink text-text">
			<ParticleBackground />
			<ScrollToTop />
			<Nav />

			<div className="relative z-10">
				<AnimatePresence mode="wait">
					<Routes location={location} key={location.pathname}>
						<Route
							path="/"
							element={
								<PageTransition>
									<Home />
								</PageTransition>
							}
						/>
						<Route
							path="/work"
							element={
								<PageTransition>
									<Work />
								</PageTransition>
							}
						/>
						<Route
							path="/work/:slug"
							element={
								<PageTransition>
									<ProjectDetail />
								</PageTransition>
							}
						/>
						<Route
							path="/about"
							element={
								<PageTransition>
									<About />
								</PageTransition>
							}
						/>
						<Route
							path="/contact"
							element={
								<PageTransition>
									<Contact />
								</PageTransition>
							}
						/>
						<Route
							path="*"
							element={
								<PageTransition>
									<NotFound />
								</PageTransition>
							}
						/>
					</Routes>
				</AnimatePresence>

				<Footer />
			</div>
		</div>
	);
}
