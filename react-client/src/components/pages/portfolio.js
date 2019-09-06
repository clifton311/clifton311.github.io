import React from 'react';
import FEC from './photos/FEC.png';
import Recipe from './photos/recipe.png'
import SDC from './photos/sdc.png';

const portfolio = () => {
  return (
    <div>
       <h3 className="portfolioHeader">Here are some of the fullstack projects I have been working on!</h3> <br/>
        <div className="grid-container">
            <div className='grid-item-photo'>
              <img src={FEC} className="fec-image" alt='FEC'></img>
            </div>
            <p className="grid-item">
              Movie reviews microservice designed with service oriented architecture. Back end was build with Express/Node and deployed to AWS EC2, load balanced with NGINX and cached responses with Redis
            <br></br>   
                  
              <div className="github">
                <a href="https://github.com/team-goldwasser/Audience_Review_clifton" target="_blank" >Github</a>
              </div>
            </p>
          
              <div className="grid-item-photo">
                <img src={SDC} className="fec-image" alt='FEC'></img> 
              </div>

              <p className="grid-item">
                A fullstack application renders housing information. Designed the rendering of housing features.
                <br/>
                <div className="github">
                  <a href="https://github.com/code-voyage/zillowish-clifton" target="_blank" >Github</a>
                </div>
              </p>

            <div className="grid-item-photo">
              <img src={Recipe} className="fec-image" alt='FEC'></img> 
            </div>
            <p className="grid-item">
              Full stack recipe finder application.
              <br />
              <div className="github">
                <a href="https://github.com/team-goldwasser/Audience_Review_clifton" target="_blank" >Github</a>
              </div>
            </p>
      </div>
  </div>
  )
}

export default portfolio;