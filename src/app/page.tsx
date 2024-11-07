'use client';

import { FunctionComponent, useEffect, useState } from 'react';
import ExperienceTile from './components/ExperienceTile';
import ScrollLink from './components/ScrollLink';

import './globals.css';

const Home: FunctionComponent = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/experiences.json');
      const data = await response.json();
      setExperiences(data);
    };

    fetchData();
  }, []);

  return (
    <div className='mx-auto min-h-screen max-w-screen-xl p-5'>
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <div
          id='navigation-container'
          className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'
        >
          <div>
            <h1 className='text-5xl pb-2 font-bold'>Marcos Gonzalez</h1>
            <h3 className='text-3xl pb-10'>Software Engineer</h3>
            <p className='text-md pb-16 max-w-xs'>
              Versatile Software Engineer with Full-Stack and Platform focus,
              driving impactful solutions
            </p>

            <ul className='hidden lg:block pl-10'>
              <li>
                <ScrollLink id='About'>About</ScrollLink>
              </li>
              <li>
                <ScrollLink id='Experience'>Experience</ScrollLink>
              </li>
              <li>
                <ScrollLink id='Projects'>Projects</ScrollLink>
              </li>
            </ul>
          </div>
          <div id='social-links' className='flex space-x-5'>
            <a href='https://github.com/mrcos-g' target='_blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
            </a>
            <a
              href='https://www.linkedin.com/in/marcos-gonzalez1/'
              target='_blank'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
              </svg>
            </a>
          </div>
        </div>
        <div id='main-container' className='pt-24 lg:w-1/2 lg:py-24'>
          <div id='About' className='pb-20'>
            Since 2017, I’ve been on a dynamic journey in software development,
            beginning with one-page projects and advancing through a coding
            bootcamp. In 2019, I started my professional coding career at a
            startup, where I developed my skills in both front-end and back-end
            development. By 2023, I had grown into a Platform Engineer role in a
            large corporation, diving deep into cloud infrastructure and
            comprehensive software systems. My focus now is on leveraging my
            full-stack and platform experience to deliver solutions across all
            stages of the development process, always ready to tackle complex
            challenges.
          </div>
          <div id='Experience' className='pb-20'>
            <ExperienceTile experiences={experiences} />
          </div>
          <div id='Projects'>Projects Coming Soon...</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
