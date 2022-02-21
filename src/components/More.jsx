import React from "react";
import "./More.scss";



const More = ({ ...props }) => {
  return (
    <div>
      <div className="languagesCard">
        <h2>Idiomas</h2>
        <div className="flexVertical">
          {props.languages.map((item) => {
            return (
              <div className="languagesItem" key={JSON.stringify(item)}>
                <h5>{item.language}</h5>
                <p>🖊 <span>Nivel (escritura): </span>{item.wrlevel}</p>
                <p>🗣 <span>Nivel (hablado): </span>{item.splevel}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="card">
        <h2>Otras Habilidades</h2>
        <div className="flexHorizontal">
          {props.habilities.map((item) => {
            return (
              <div className="habilitiesItem" key={JSON.stringify(item)}>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default More;
