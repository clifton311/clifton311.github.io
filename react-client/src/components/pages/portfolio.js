import React from 'react';
import FEC from './photos/FEC.png';
import Recipe from './photos/recipe.png'
import SDC from './photos/sdc.png';

const portfolio = () => {
  return (
    <div>
       <h3 className="portfolioHeader">Here are some of the fullstack projects I have built:</h3> <br/>
        <div className="grid-container">
            <div className='grid-item-photo'>
              <img src={FEC} className="fec-image" alt='FEC'></img>
            </div>
            <p className="grid-item">
              Movie reviews microservice designed with Service Oriented Architecture. Back end was build with Express/Node and deployed to AWS EC2, load balanced with NGINX and cached responses with Redis.
            <br></br>   
                  
              <div className="github">
                <a href="https://github.com/team-goldwasser/Audience_Review_clifton" target="_blank" >Github</a>
              </div>
            </p>
          
              <div className="grid-item-photo">
                <img src={SDC} className="fec-image" alt='FEC'></img> 
              </div>

              <p className="grid-item">
                A fullstack application that renders housing information. Designed the rendering of housing features with React for the front end and Node for the backend. Used MySQL for the database.
                <br/>
                <div className="github">
                  <a href="https://github.com/code-voyage/zillowish-clifton" target="_blank" >Github</a>
                </div>
              </p>

            <div className="grid-item-photo">
              <img src={Recipe} className="fec-image" alt='FEC'></img> 
            </div>
            <p className="grid-item">
              Full stack recipe finder application built with React, React-Router and incorporated OAuth via Passport.JS with a MySQL backend.
              <br />
              <div className="github">
                <a href="https://github.com/clifton311/recipes" target="_blank" >Github</a>
              </div>
            </p>
      </div>
  </div>
  )
}

export default portfolio;