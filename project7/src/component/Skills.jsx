import React from 'react';
import skills from '../assets/skills.json';

function Skills() {
  return (
    <>
    <div className="container skills">
      <h1>Skills</h1>
      <div className="items" >
      {skills.map((go) => (
      <>
        
          <div className="item" key={go.id}>
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
