import React, { Component } from 'react';
import photo from './photos/airplace.jpg'
import developer from './photos/develop.jpg'


class HomePage extends Component {
  render() {
    return (
      <div>
        <div className='homepage'>
          <p style={{font:'55pt'}}> 
            Hi! I'm Clifton! <br></br> 
          </p>
          <p > I am a Developer, Travel Enthusiatist & Adventurer </p>
          <br></br>
        </div>


        <div className='homepage-row'>
          <div className='homepage-column'>
            <img src={developer} className='developer'alt="profile_pic" style={{width:'100%' , height:"390px"}}></img>
          </div>
          <div className='column'>
            <img src={photo} className='airplane'alt="profile_pic" style={{width:'80%', height: "390px"}}></img>
          </div>
        </div>

      </div>
    )
  }
}

export default HomePage;