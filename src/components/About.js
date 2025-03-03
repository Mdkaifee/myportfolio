// frontend/src/components/About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p className="intro">
          I’m a full-stack developer who loves building beautiful and functional
          websites & apps. I specialize in React and Node.js and am passionate about
          learning new technologies.
        </p>
        <p>
          Welcome to my portfolio! I specialize in creating modern, responsive websites
          and applications with a strong focus on user experience and clean, maintainable
          code. With a solid foundation in web technologies like HTML, CSS, JavaScript,
          and frameworks like React, I aim to build seamless digital experiences.
        </p>
        <p>
          Explore my projects to see the work I've done, showcasing my expertise in
          front-end and back-end development, problem-solving, and design. If you're
          looking for a developer to bring your ideas to life or collaborate on an exciting
          project, feel free to reach out!
        </p>
      </div>
    </section>
  );
};

export default About;
