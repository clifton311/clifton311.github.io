import React from 'react';
import photo from './photos/Photo.png'

const About = () => {
  return (
    <div>
      <div className='about-me'>
        <div className='row-aboutme'>
          <div className="column-aboutme">
            <div className="photo"> 
              <img src={photo} alt="profile" style={{height: "500px"}}/>
            </div> 
          </div>
          <div className="column-aboutme">
            <p style={{padding: "1px"}}>
              My name is Clifton Ho and I am passionate about developing readable code and always have an insatiable hungry to grow my engineering
              and values.
          
              When I am not working on strengthening my coding skills, you can catch my traveling to destinations all over the world 
              and exploring nature via hikes or bikes.
            </p>
          </div>
        </div>  
      </div>
      <br></br>
      <div className="technical">
        <h4 className="otherTools">Technical Skills:</h4>
         <div className="frontend">
          <div className='otherTools'>Other Tools:</div>
            <br></br>
            <ul>
              <li><i className="devicon-javascript-plain colored"> Javascript</i> </li>
              <li><i class="devicon-react-original"> React</i> </li>
              <li><i class="devicon-html5-plain-wordmark colored"> HTML5</i> </li>
              <li><i class="devicon-css3-plain-wordmark colored"> CSS</i></li>
            </ul>
        </div>

        <div className="backend">
          <div className='otherTools'>Client Side:</div>
          <br></br>
          <ul>
            <li><i class="devicon-mysql-plain-wordmark colored"> MySQL</i></li>
            <li><i class="devicon-nodejs-plain-wordmark"> Node</i></li>
            <li><i class="devicon-postgresql-plain-wordmark colored"> Postgresql</i></li>
            <li><i class="devicon-mongodb-plain-wordmark colored"> MongoDB</i> </li>
            <li><i class="devicon-express-original-wordmark colored"> Express</i></li>
          </ul>
        </div>

        <div className="other">
          <div className='otherTools'>Server Side:</div>
          <br></br>
          <ul>
            <li><i class="devicon-nginx-original colored"> NGINX</i> </li>
            <li><i class="devicon-webpack-plain-wordmark colored"> Webpack</i></li>
            <li><i class="devicon-redis-plain-wordmark colored"> Redis</i></li>
            <li><i class="devicon-github-plain-wordmark colored"> GitHub</i> </li>
            <li><i class="devicon-docker-plain-wordmark colored"> Docker</i></li>
            <li><i class="devicon-amazonwebservices-plain-wordmark colored"> AWS</i></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About