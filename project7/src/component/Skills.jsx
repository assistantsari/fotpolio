import React from 'react';
import skills from '../assets/skills.json';

function Skills() {
  return (
    <>
    <div className="container skills " id='skill'>
      <h1>Skills</h1>
      <div className="items">
      {skills.map((go) => (
      <>
        
          <div className="item" key={go.id}
          data-aos="flip-left"
          data-aos-duration="1000">
            <img src={`/src/assets/${go.imageSrc}`} alt={go.name} />
            <h3>{go.tittle}</h3>
          
        </div>
        </>
      ))}
      </div>
    </div>
    </>
  );
}

export default Skills;
