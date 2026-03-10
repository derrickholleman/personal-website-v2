import { render } from '@testing-library/svelte';
import ProjectCard from '../ProjectCard.svelte';

const defaultProps = {
	name: 'TaskPilot',
	description: 'A todo app built with Angular.',
	screenshot: '/task-pilot-home-screen.png',
	frameworkIcon: '/angular-icon.svg',
	frameworkName: 'Angular',
	demoUrl: 'https://taskpilott.netlify.app/'
};

describe('ProjectCard', () => {
	it('renders the project name', () => {
		const { getByText } = render(ProjectCard, { props: defaultProps });

		expect(getByText('TaskPilot')).toBeInTheDocument();
	});

	it('renders the description', () => {
		const { getByText } = render(ProjectCard, { props: defaultProps });

		expect(getByText('A todo app built with Angular.')).toBeInTheDocument();
	});

	it('renders the screenshot with correct src and alt', () => {
		const { getByAltText } = render(ProjectCard, { props: defaultProps });

		const screenshot = getByAltText('TaskPilot screenshot');
		expect(screenshot).toBeInTheDocument();
		expect(screenshot).toHaveAttribute('src', '/task-pilot-home-screen.png');
	});

	it('renders the framework icon with correct src and alt', () => {
		const { getByAltText } = render(ProjectCard, { props: defaultProps });

		const icon = getByAltText('Angular');
		expect(icon).toBeInTheDocument();
		expect(icon).toHaveAttribute('src', '/angular-icon.svg');
	});

	it('links to the demo URL in a new tab', () => {
		const { getByRole } = render(ProjectCard, { props: defaultProps });

		const link = getByRole('link');
		expect(link).toHaveAttribute('href', 'https://taskpilott.netlify.app/');
		expect(link).toHaveAttribute('target', '_blank');
	});
});
