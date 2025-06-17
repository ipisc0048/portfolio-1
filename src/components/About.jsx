import React from "react";
const About = () => {
  const info = [
    // { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "10" },
    { text: "Companies Work", count: "02" },
  ];

  const googleDriveLink =
    "https://drive.google.com/file/d/1Mas73JS8TKf_5ik33AG8l_Wt89wEarqc/view";

  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
               I’m currently pursuing my B.Tech in Computer Science from Kali Charan Nigam Institute of Technology, Banda,  <br/> and  I’m expected to graduate in 2025.  I have
                hands-on experience with React, Node.js, and MySQL,  and  I’m
                passionate <br/> about   developing  scalable and efficient applications. 
                I’m completing my internship as a Full Stack Developer at pando india
                Software Consult, where I’m learning and applying my skills in a
                real-world environment. <br/> Additionally, I’m working as a Full
                Stack Developer at Pando India Software Consult, contributing to
                projects and strengthening my technical expertise.  I’m also
                interning at Datence Technology, further expanding my knowledge
                and skills. Beyond coding,  I possess leadership skills,
                adaptability, and a strong willingness to learn and grow with
                challenging opportunities.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map(content => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <button className="btn-primary" onClick={navigateToResume}>
                Check Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
