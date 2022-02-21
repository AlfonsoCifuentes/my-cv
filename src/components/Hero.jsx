import React from 'react'
import "./Hero.scss";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.image} alt="" />
        <div className="heroCard">
        <h1>
            {hero.firstname} {hero.name}
        </h1>
            <p>🌍{hero.city} </p>
            <p>📅{hero.birthDate}</p>
            <p>
            📧
            <a href={"mailto:" + hero.email}>
            alfonsocifuentes83@gmail.com
            </a>
            </p>
            <p>📞{hero.phone}</p>
            <div className='linkDiv'>
              <img className='linkDiv__linkLogo' src={require('../images/GitHub-Mark-32px.png')} alt='GitHubLogo' />
              <a href={hero.gitHub}>GitHub</a>
            </div>
            <div className='linkDiv'>
              <img className='linkDiv__linkLogo' src={require('../images/linkedin.png')} alt='GitHubLogo' />
              <a href={hero.linkedIn}>Linked In</a>
            </div>
            <div className='linkDiv'>
              <img className='linkDiv__linkLogo' src={require('../images/artstation.png')} alt='GitHubLogo' />
              <a href={hero.artStation}>Art Station</a>
            </div>
            <div className='linkDiv'>
              <img className='linkDiv__linkLogo' src={require('../images/soundcloud.png')} alt='GitHubLogo' />
              <a href={hero.soundCloud}>soundCloud</a>
            </div>
        </div>
    </div>
  )
}

export default Hero