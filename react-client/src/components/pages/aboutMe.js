import React from 'react';

const About = () => {
  return (
    <div>
      <p className='font'>
        My name is Clifton Ho and I am passionate about developing readable code and always have an insitable hungry to grow my engineering
        and values.
     </p>
     <p className='font'>
        I started in a finance background.
     </p>

      <h4>Technical Skills:</h4>
      <div>
        <h4>Front End</h4>
        <ul>
          <li><i className="devicon-javascript-plain colored"> Javascript</i> </li>
          <li><i class="devicon-react-original"> React</i> </li>
          <li><i class="devicon-html5-plain-wordmark colored"> HTML5</i> </li>
          <li><i class="devicon-css3-plain-wordmark colored"> CSS</i></li>
        </ul>
      </div>

      <div>
        <h4>Back End</h4>
        <ul>
          <li><i class="devicon-mysql-plain-wordmark colored"> MySQL</i></li>
          <li><i class="devicon-nodejs-plain-wordmark"> Node</i></li>
          <li><i class="devicon-postgresql-plain-wordmark colored"> Postgresql</i></li>
          <li><i class="devicon-mongodb-plain-wordmark colored"> MongoDB</i> </li>
          <li><i class="devicon-express-original-wordmark colored"> Express</i></li>
        </ul>
      </div>

      <div>
        <h4>Other Tools</h4>
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
  )
}

export default  About