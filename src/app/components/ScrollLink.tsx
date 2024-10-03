'use client';
import { ReactNode, MouseEvent } from 'react';
import Link from 'next/link';

interface ScrollLingProps {
  id: string;
  children: ReactNode;
}

const ScrollLink: React.FC<ScrollLingProps> = ({ id, children }) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link href={`#${id}`} passHref>
      <div onClick={handleClick} role='link' style={{ cursor: 'pointer' }}>
        {children}
      </div>
    </Link>
  );
};

export default ScrollLink;
