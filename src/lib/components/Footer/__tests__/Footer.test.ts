import { render } from '@testing-library/svelte';
import Footer from '../Footer.svelte';

describe('Footer', () => {
	it('renders footer text along with current year', () => {
		const { getByText } = render(Footer);

		const currentYear = new Date().getFullYear();

		expect(
			getByText(`© ${currentYear} Derrick Holleman. All Rights Reserved.`)
		).toBeInTheDocument();
	});
});
