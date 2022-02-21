import { useState } from "react";
import "./App.scss";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import More from "./components/More";
import { CV } from "./CV/CV";


const { hero, education, experience, languages, habilities } = CV;


function App() {

  
const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
    <Hero hero={hero}/>
    <About hero={hero}/>
      <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(true)}
            >
              Formación
            </button>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(false)}
            >
              Experiencia
      </button>

      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>

    <More
    languages={languages}
    habilities={habilities}
    />
    </div>
  );
}

export default App;
