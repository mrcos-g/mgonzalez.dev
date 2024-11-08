import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe } from 'node:test';
import { FC } from 'react';

import Home from '../src/app/page';

jest.mock('../src/app/components/ScrollLink', () => {
  const MockScrollLink: FC<{ id: string; children: React.ReactNode }> = ({
    id,
    children,
  }) => (
    <a href={`#${id}`} data-testid={`scroll-link-${id}`}>
      {children}
    </a>
  );
  return MockScrollLink;
});

jest.mock('../src/app/components/ExperienceTile.tsx', () => {
  const MockExperienceTile = () => (
    <div data-testid='experience-tile'>Mock Experience Tile</div>
  );
  MockExperienceTile.displayName = 'MockExperienceTile';
  return MockExperienceTile;
});

describe('Home', () => {
  it('renders header elements and navigation links', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', { name: /Marcos Gonzalez/i })
    ).toBeInTheDocument();

    expect(screen.getByTestId('scroll-link-About')).toHaveTextContent('About');
  });
});
