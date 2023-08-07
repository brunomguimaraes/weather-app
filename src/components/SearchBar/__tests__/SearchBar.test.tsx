import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import SearchBar from '..'; // Make sure this path is correct.

test('calls onSearch prop after debounced duration', async () => {
  const onSearchMock = jest.fn();
  render(<SearchBar onSearch={onSearchMock} />);

  const input = screen.getByPlaceholderText('Search...');

  fireEvent.change(input, { target: { value: 'Sample Address' } });

  // The onSearchMock shouldn't be called immediately due to debouncing
  expect(onSearchMock).not.toHaveBeenCalled();

  // Wait for the debounce duration
  await waitFor(() => expect(onSearchMock).toHaveBeenCalledTimes(1));
});
