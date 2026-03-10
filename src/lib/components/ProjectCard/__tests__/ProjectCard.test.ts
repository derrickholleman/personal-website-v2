import { render } from '@testing-library/svelte';
import ProjectCard from '../ProjectCard.svelte';

const defaultProps = {
	name: 'Test Project',
	description: 'A test project description.',
	screenshot: '/test-screenshot.png',
	frameworkIcon: '/test-icon.svg',
	frameworkName: 'TestFramework',
	demoUrl: 'https://example.com/'
};

describe('ProjectCard', () => {
	it('renders the project name', () => {
		const { getByText } = render(ProjectCard, { props: defaultProps });

		expect(getByText('Test Project')).toBeInTheDocument();
	});

	it('renders the description', () => {
		const { getByText } = render(ProjectCard, { props: defaultProps });

		expect(getByText('A test project description.')).toBeInTheDocument();
	});

	it('renders the screenshot with correct src and alt', () => {
		const { getByAltText } = render(ProjectCard, { props: defaultProps });

		const screenshot = getByAltText('Test Project screenshot');
		expect(screenshot).toBeInTheDocument();
		expect(screenshot).toHaveAttribute('src', '/test-screenshot.png');
	});

	it('renders the framework icon with correct src and alt', () => {
		const { getByAltText } = render(ProjectCard, { props: defaultProps });

		const icon = getByAltText('TestFramework');
		expect(icon).toBeInTheDocument();
		expect(icon).toHaveAttribute('src', '/test-icon.svg');
	});

	it('links to the demo URL in a new tab', () => {
		const { getByRole } = render(ProjectCard, { props: defaultProps });

		const link = getByRole('link');
		expect(link).toHaveAttribute('href', 'https://example.com/');
		expect(link).toHaveAttribute('target', '_blank');
	});
});
