const Home = () => {
  return (
    <div className='mx-auto max-w-xl px-2 py-6'>
      <div className='flex justify-between gap-4 min-h-screen'>
        <div
          id='navigation-container'
          className='sticky flex top-0 max-h-screen w-1/2 flex-col py-20 justify-between'
        >
          <div>
            <h1>Marcos Gonzalez</h1>
            <h3>Software Engineer</h3>
          </div>
          <div>
            <ul>
              <li>About</li>
              <li>Experience</li>
              <li>Projects</li>
            </ul>
          </div>
          <div></div>
          <ul>
            <li>github</li>
            <li>linkedin</li>
          </ul>
        </div>
        <div className='pt-24 w-1/2 py-20'>
          <div>About</div>
          <div>Experience</div>
          <div>Projects</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
