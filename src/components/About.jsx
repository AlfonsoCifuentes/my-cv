import React from 'react'

const About = ({ hero }) => {
  return (
<div>
      <div className="card">
      <h2>Sobre mí</h2>
        {hero.aboutMe.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default About