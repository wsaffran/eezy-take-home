import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import ImageModal from './components/ImageModal';

test('opens image modal', async () => {
  const props = {
    images: ['img1', 'img2'],
    updateImages: () => {},
  };

  render(<ImageModal {...props} />);

  expect(await screen.findByText('See 2 Images')).toBeInTheDocument();

  userEvent.click(await screen.findByText('See 2 Images'));

  expect(await screen.findByText('Generate')).toBeInTheDocument();
});
