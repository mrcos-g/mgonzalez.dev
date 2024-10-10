const ExperienceTile = () => {
  return (
    <div className='flex'>
      <div className='flex-shrink-0 w-32'>
        <span>2023-2024</span>
      </div>
      <div className='flex-1 ml-4'>
        <h4>
          <span>Software Developer</span>
          <span> - </span>
          <span>Intelitics</span>
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta a,
          debitis quisquam fugit sit quas veniam ducimus. Incidunt qui magnam
          placeat ducimus molestias ea totam facilis deserunt architecto neque,
          praesentium quae ex culpa, dolore commodi, reiciendis est eius
          obcaecati quidem dignissimos ipsum laudantium! Iusto et impedit
          aliquam tempora maxime praesentium ut id vitae! Iste temporibus
          blanditiis atque quas ex vero quis non quibusdam, maiores tempore
          laboriosam totam ipsa assumenda illo rem error rerum facilis voluptas!
        </p>
        <div>
          <ul className='flex flex-wrap mt-3'>
            <li className='rounded-full bg-gray-500 px-3 py-1 text-sm mr-1 mt-2'>
              React
            </li>
            <li className='rounded-full bg-gray-500 px-3 py-1 text-sm mr-1 mt-2'>
              Material UI
            </li>
            <li className='rounded-full bg-gray-500 px-3 py-1 text-sm mr-1 mt-2'>
              Gatsby.js
            </li>
            <li className='rounded-full bg-gray-500 px-3 py-1 text-sm mr-1 mt-2'>
              Node.js
            </li>
            <li className='rounded-full bg-gray-500 px-3 py-1 text-sm mr-1 mt-2'>
              GraphQL
            </li>
            <li className='rounded-full bg-gray-500 px-3 py-1 text-sm mr-1 mt-2'>
              Postgres
            </li>
            <li className='rounded-full bg-gray-500 px-3 py-1 text-sm mr-1 mt-2'>
              AWS
            </li>
            <li className='rounded-full bg-gray-500 px-3 py-1 text-sm mr-1 mt-2'>
              Terraform
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTile;
