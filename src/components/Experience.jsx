import React from 'react'
import "./Experience.scss"

const Experience = ({ experience }) => {
  return (
<div>
      <div className="experienceCard">
      <h2>Experiencia Laboral</h2>
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <h4 className="name">📂 {item.name}</h4>
              <div>
                <p><strong>{item.where}</strong></p>
                <p>{item.date}</p>
              </div>

              <p>{item.info}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Experience