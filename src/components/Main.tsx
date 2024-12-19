import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">      
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D5635AQFejAzf64CL5A/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1702298582661?e=1735095600&v=beta&t=-Vp_SQH6Gwl0aPpMi9S87aIapgOVU1tPiqIH4TpRIGg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Falco830" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/alecmichel/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Alec Michel</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Falco830" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/alecmichel/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;