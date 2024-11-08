import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { describe } from 'node:test';
import { FC } from 'react';

import Home from '../src/app/page';

jest.mock('../src/app/components/ScrollLink', () => {
  const MockScrollLink: FC<{ id: string; children: React.ReactNode }> = ({
    id,
    children,
  }) => {
    const isActive = id === 'About';
    return (
      <a
        href={`#${id}`}
        data-testid={`scroll-link-${id}`}
        style={{
          fontWeight: isActive ? 'bold' : 'normal',
          color: isActive ? 'white' : '#94a3b8',
        }}
      >
        {children}
      </a>
    );
  };
  return MockScrollLink;
});

jest.mock('../src/app/components/ExperienceTile.tsx', () => {
  const MockExperienceTile = () => (
    <div data-testid='experience-tile'>Mock Experience Tile</div>
  );
  MockExperienceTile.displayName = 'MockExperienceTile';
  return MockExperienceTile;
});

const mockExperience = [
  {
    startYear: 2023,
    endYear: 2024,
    role: 'Software Engineer',
    company: 'Mock Company Two',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, laboriosam maxime nostrum omnis minus exercitationem similique tempore facilis est deleniti.',
    technologies: ['AWS', 'Terraform', 'Azure Devops', 'Appdynamics', 'Linux'],
  },
  {
    startYear: 2019,
    endYear: 2023,
    role: 'Software Engineer',
    company: 'Mock Company One',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, laboriosam maxime nostrum omnis minus exercitationem similique tempore facilis est deleniti.',
    technologies: [
      'Typescript',
      'React',
      'Material UI',
      'Gatsby.js',
      'Node.js',
      'GraphQL',
      'Postgres',
      'AWS',
      'Terraform',
      'Serverless',
    ],
  },
];

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({ json: () => Promise.resolve(mockExperience) } as Response)
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Home', () => {
  it('renders header elements and navigation links', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', { name: /Marcos Gonzalez/i })
    ).toBeInTheDocument();

    expect(screen.getByTestId('scroll-link-About')).toHaveTextContent('About');
  });

  it('renders the experience data fetched', async () => {
    render(<Home />);

    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith('/data/experiences.json')
    );

    expect(screen.getByTestId('experience-tile')).toBeInTheDocument();
  });

  it('scrolls to the corresponding section when navigation link is clicked', async () => {
    render(<Home />);

    const aboutLink = screen.getByTestId('scroll-link-About');
    expect(aboutLink).toHaveStyle('font-weight: bold; color: white');
  });
});
