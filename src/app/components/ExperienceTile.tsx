import { FunctionComponent } from 'react';

interface IExperience {
  startYear: number;
  endYear: number;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

interface ExperienceTileProps {
  experiences: IExperience[];
}

const ExperienceTile: FunctionComponent<ExperienceTileProps> = ({
  experiences,
}) => {
  return (
    <div>
      {experiences.map((experience, index) => (
        <div key={index} className='lg:flex mb-8'>
          <div className='flex-shrink-0 w-32'>
            <span>{`${experience.startYear} - ${experience.endYear}`}</span>
          </div>
          <div className='flex-1 lg:ml-4'>
            <h4 className='font-bold'>
              <span>{experience.role}</span>
              <span> - </span>
              <span>{experience.company}</span>
            </h4>
            <p>{experience.description}</p>
            <ul className='flex flex-wrap mt-1'>
              {experience.technologies.map((technology, techIndex) => (
                <li
                  key={techIndex}
                  className='rounded-full bg-gray-500 px-3 py-1 text-sm mr-1 mt-2 text-white'
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTile;
