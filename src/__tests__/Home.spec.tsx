import { render } from '@testing-library/react';
import Home from 'components/Home';

test('renders learn react link', () => {
	const { getByText } = render(<Home />);
	const linkElement = getByText(/Learn React/i);
	expect(linkElement).toBeInTheDocument();
});
