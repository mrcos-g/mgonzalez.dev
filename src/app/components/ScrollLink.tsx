'use client';
import { MouseEvent, ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';

interface ScrollLingProps {
  id: string;
  children: ReactNode;
}

// https://glensea.com/article/how-to-create-scroll-links-to-navigate-to-specific-sections-of-an-spa-in-nextjs#implementation-example
const ScrollLink: React.FC<ScrollLingProps> = ({ id, children }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const targetElement = document.getElementById(id);

    if (!targetElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true);
          } else {
            setIsActive(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(targetElement);

    return () => {
      observer.disconnect();
    };
  }, [id]);
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link href={`#${id}`} passHref>
      <div
        onClick={handleClick}
        role='link'
        style={{
          cursor: 'pointer',
          fontWeight: isActive ? 'bold' : 'normal',
          color: isActive ? 'white' : '#94a3b8',
        }}
      >
        {children}
      </div>
    </Link>
  );
};

export default ScrollLink;
