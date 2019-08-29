import React, { Component } from 'react';
import photo from './photos/Photo.png'


class HomePage extends Component {
  render() {
    return (
      <div>
        <img src={photo} className='thumbNail'alt="profile_pic"></img>
        <p className='homepage'> Hi! I'm Clifton!</p>
        <p className="homepage">
          I am a Developer...Travel Enthusiatist...Adventurer
        </p>
      </div>
    )
  }
}

export default HomePage;