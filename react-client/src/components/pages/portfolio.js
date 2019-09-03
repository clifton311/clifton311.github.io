import React from 'react';
import FEC from './photos/FEC.png';

const portfolio = () => {
  return (
    <div>
       <h2>Here are some of the fullstack projects I have been working on!</h2>

       <div className="fec">
          <p>
            A full stack movie reviews application. For this project, I designed a back-end artitecture for a micro service
          </p>
          <div className='mask'>
            <img src={FEC} className="fec-image" alt='FEC'></img>
            <a href="https://github.com/team-goldwasser/Audience_Review_clifton" target="_blank" >Github</a>
          </div>
       </div>

          <p>
            A full stack housing microservice application. For this project, I designed the front rendering of housing attributes.
          </p>
       <div>
         <a href="https://github.com/code-voyage/zillowish-clifton" target="_blank" >Github</a>
       </div>

       <div>
         <a href="https://github.com/team-goldwasser/Audience_Review_clifton" target="_blank" >Github</a>
       </div>
    </div>
  )
}

export default portfolio;