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
    <div className='mx-auto min-h-screen max-w-screen-xl px-2'>
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <div
          id='navigation-container'
          className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'
        >
          <div>
            <h1 className='text-5xl pb-2 font-bold'>Marcos Gonzalez</h1>
            <h3 className='text-3xl pb-10'>Software Engineer</h3>
            <p className='text-xl pb-16'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              deserunt cumque facilis ut eum, animi praesentium omnis fugit
              ipsam quia!
            </p>

            <ul className='pl-10'>
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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-7 w-7'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-7 w-7'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
            </svg>
          </div>
        </div>
        <div id='main-container' className='pt-24 lg:w-1/2 lg:py-24'>
          <div id='About' className='pb-20'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
            voluptatibus maiores fugit porro ipsum temporibus consequatur
            cumque, voluptatem aperiam nisi, officiis repellendus at et odio
            nihil quis. Nobis exercitationem odio incidunt, blanditiis,
            doloremque molestias dolores repellat sit eius sapiente voluptas
            quisquam labore fuga maxime earum perferendis nisi totam harum
            impedit quae laborum! Deserunt cum quae neque error dolore, omnis
            quasi autem voluptas quo iure quos. Obcaecati unde, repellendus
            accusamus voluptatum veritatis quod fugit corporis perferendis,
            eveniet quam magni consequatur repudiandae in quo, aspernatur esse
            animi! Adipisci debitis, eveniet odio natus ex, quis quidem
            reiciendis aliquam nesciunt excepturi aut ut. Ab dignissimos,
            deserunt a dolor atque vero optio quo maxime magnam eos placeat,
            commodi vitae similique, laborum ipsa aspernatur sapiente tempora
            soluta itaque fugit. Laudantium tempora dolorem fugiat? Quidem
            quaerat ut blanditiis saepe minus odio provident a nam impedit
            culpa, cum eaque voluptatibus, tempore odit tempora vero harum est,
            illo placeat quo distinctio inventore earum. Consequuntur
            exercitationem accusantium, optio deleniti quisquam similique
            impedit architecto laboriosam eligendi aliquid, officia quod nulla
            esse facere quo, aspernatur harum illo veniam? Quasi, ad! Quisquam
            officia quae dicta tempora. Perspiciatis vel amet, maiores
            consequuntur provident iure qui possimus. Veniam, dignissimos eos.
            Rerum, eaque molestiae perferendis accusantium nihil assumenda!
            Quidem, porro. Maxime vel eos nisi nihil voluptatibus, quos autem
            sit nostrum id cum quisquam amet ratione omnis tenetur deleniti
            ducimus animi ab eveniet. Recusandae dicta voluptatum magnam
            deleniti cum laborum veniam itaque maiores ut alias reprehenderit
            facilis, autem quod suscipit dignissimos dolorem facere et vel
            repellendus ex nisi. Eligendi, nesciunt doloremque in voluptate,
            harum reiciendis maxime asperiores optio iure rem quod omnis culpa
            aperiam voluptatibus nulla animi dolorum aut pariatur adipisci!
            Ratione excepturi unde ex tempore iste accusamus suscipit vitae
            illum ut, doloremque, autem sit debitis aut, amet dolorum delectus
            sint eos temporibus quod repellendus rem? Maiores!
          </div>
          <div id='Experience' className='pb-20'>
            <ExperienceTile experiences={experiences} />
          </div>
          <div id='Projects'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            vero delectus velit exercitationem, officiis molestiae enim!
            Deleniti, cupiditate eligendi id, libero quibusdam consequatur
            labore doloribus dolore delectus eius maiores autem repudiandae
            voluptates at nam quo sit, suscipit minima. Esse voluptatem alias,
            quaerat itaque dolorem in odit voluptatibus neque minima. Dolorem
            nisi ut ea rem unde praesentium similique, autem, quaerat eligendi
            provident, ex eaque cum rerum. Eos modi id recusandae voluptate
            ducimus autem amet corrupti numquam omnis debitis perspiciatis
            doloribus officia doloremque, cumque eveniet fugit ratione
            temporibus, odio suscipit exercitationem natus? Reiciendis veritatis
            consectetur quos doloribus, ad, odit nostrum consequuntur, totam
            ipsam alias minus fugiat labore! Excepturi ea similique obcaecati,
            ad esse aperiam officia, harum sunt animi, amet repudiandae aliquam
            modi blanditiis aut corrupti corporis porro illum molestiae?
            Nesciunt, dolorem esse. Quidem at, deleniti vero, fugiat,
            repudiandae maiores ipsum voluptates beatae suscipit illo sunt ab
            fugit. Repellat cumque, temporibus error nisi neque ipsum fugit
            perspiciatis soluta itaque voluptates similique autem sequi vitae
            dolore asperiores exercitationem magni doloremque perferendis
            pariatur. Accusantium nam quibusdam itaque, corrupti ut animi totam
            labore nobis doloribus odit eius earum impedit delectus architecto
            quo quia officiis perferendis eos voluptatibus sit cumque sint quos
            repudiandae. Esse, qui laboriosam aspernatur quasi odit quia!
            Sapiente perferendis atque officiis omnis enim soluta ipsam
            veritatis nostrum eligendi molestiae, fugit illo tenetur sequi vel
            maiores autem aperiam ea? Suscipit sapiente deserunt aspernatur
            dolorum, praesentium ex adipisci. Facilis deserunt hic asperiores
            possimus alias quasi amet tenetur dicta quo iusto ipsam officiis
            reprehenderit sit odio suscipit porro, voluptas voluptates sint
            blanditiis cum quae! Nam, quaerat, placeat mollitia vero odio
            reiciendis fuga autem quis quas dolorum vitae. Tenetur adipisci
            natus doloribus cum! Modi non ipsum autem expedita voluptatibus in
            doloribus, laboriosam adipisci facilis veniam nulla alias, eaque
            architecto! Iure velit alias error, quaerat perferendis mollitia
            iusto cupiditate.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
