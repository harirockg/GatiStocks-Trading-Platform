import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/Harivansh.png"
            style={{ borderRadius: "100%", width: "50%",  }}
          />
          <h4 className="mt-5">Harivansh Chauhan</h4>
          <h6>Full-Stack Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            GatiStocks was developed as a project to address common challenges
            faced by traders, such as complex interfaces and lack of intuitive
            tools. It focuses on delivering a seamless and user-friendly trading
            experience using modern web technologies.
          </p>
          <p>
            I am a final-year Computer Science student with a strong interest in
            full-stack development and financial technology. This project
            reflects my ability to build scalable applications and design
            intuitive user interfaces.
          </p>
          <p>
            I enjoy solving real-world problems through code and continuously
            improving my skills in software development.
          </p>
          <p>
            Connect on 
            <a href="https://x.com/Harivan14290719"> Twitter</a> /
            <a href="https://www.linkedin.com/in/harivanshchauhan/"> Linkedin</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
