import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import TestFile from './TestFile.svelte';

test('should render Hello text', () => {
	const { getByText } = render(TestFile);
	expect(getByText('Hello!')).toBeTruthy();
});
