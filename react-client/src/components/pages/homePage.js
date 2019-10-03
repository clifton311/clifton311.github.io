import React, { Component } from 'react';
import photo from './photos/airplace.jpg'
import developer from './photos/develop.jpg'


class HomePage extends Component {
  render() {
    return (
      <div id='particles.js'>
        <div className='homepage'>
          <p > 
            Hi! I'm Clifton! <br></br> 
          </p>
          <p > I am a Developer, Travel Enthusiatist & Adventurer </p>
          <br></br>
        </div>


        <div className='photo-container'>
          <div className='photo-item'>
            {/* <img src={developer} className='developer'alt="profile_pic" style={{width:"550px", height:"400px"}}></img> */}
          </div>
          <div className='photo-item'>
              <img src={photo} className='airplane'alt="profile_pic" style={{width:"550px", height:"400px"}} ></img>  

            
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;