import React, { Component } from 'react'
import './home.css';
import ReactPlayer from 'react-player'
 
class ResponsivePlayer extends Component {
  render () {
    return <ReactPlayer className="video-component" url='https://www.youtube.com/watch?v=yGTj3HGtEqI&t=14s' playing />
  }
}

export default ResponsivePlayer; 