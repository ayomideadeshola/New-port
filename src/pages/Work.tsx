import { useState } from 'react';
import ProjectGrid from '../components/work/ProjectGrid';
import WorkHeader from '../components/work/WorkHeader';

export default function Work() {
	const [activeFilter, setActiveFilter] = useState('all');

	return (
		<>
			<WorkHeader activeFilter={activeFilter} onFilterChange={setActiveFilter} />
			<ProjectGrid activeFilter={activeFilter} />
		</>
	);
}
