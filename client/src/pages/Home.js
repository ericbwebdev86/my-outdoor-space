import React from 'react';
import ThreadForm from '../components/ThreadForm';

const Home = () => {

  return (
    <main>
      <div className="container">
        This is the home.
      </div>

      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
          <ThreadForm />
        </div>
      </div>
    </main>


  );
};

export default Home;

