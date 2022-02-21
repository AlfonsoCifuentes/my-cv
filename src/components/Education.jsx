import React from 'react'
import "./Education.scss"

const Education = ({ education }) => {
  return (
<div>

      <div className="educationCard">
      <h2>Formación</h2>
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <h4 className="name">📚 {item.name}</h4>
              <div>
                <p>{item.where}</p>
                <p>{item.date}</p>
              </div>

              <p>{item.info}</p>
              <h5>Conocimientos adquiridos</h5>
              <p>{item.skills}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Education