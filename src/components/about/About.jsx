import React from 'react'
import './About.css';
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import Tittle from '../Tittle/Tittle';
const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <Tittle title="ABOUT UNIVERSITY" subTitle="Lorem ipsum dolor sit amet consectetur"/>
      </div>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>      
        <img src={play_icon} alt="" className='play-icon'/>      
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt commodi totam voluptate facilis est, natus saepe, autem obcaecati molestiae cum iusto? Sunt, ullam necessitatibus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam vero possimus eum aliquam et beatae voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quasi! earum tenetur, vel veniam?</p>
      </div>
    </div>
  )
}

export default About
