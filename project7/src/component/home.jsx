import React, { useEffect, useRef } from 'react';
import umair from './pdf/umair.pdf';
import Typed from 'typed.js';

function Home() {
  const typeRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["I am UMAIR KHAN", "Web Developer", "React Developer", "MERN STACK Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typeRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right"
    data-aos-duration="1000">
          <h1>
            <span ref={typeRef}></span>
          </h1>
          <a href={umair} download="umair.pdf" className="btn btn-outline-warning">
            Download Resume
          </a>
        </div>
        <div className="right" data-aos="fade-up-right"
    data-aos-duration="1000">
          <div className="image">
            <img src="/4360.jpg" alt="Umair Khan" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
