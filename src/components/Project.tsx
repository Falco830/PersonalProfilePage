import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import autoduo from '../assets/images/autoduo.png';
import pokemon6v6 from '../assets/images/pokemon6v6.png';
import akatsuki from '../assets/images/akatsuki.png';
import winequality from '../assets/images/winequality.png';
import castleclimbknights from '../assets/images/castleclimbknights.png';
import '../assets/styles/Project.scss';


function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://castleclimb.com/" target="_blank" rel="noreferrer"><img src={castleclimbknights} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://castleclimb.com/" target="_blank" rel="noreferrer"><h2>Castle Climb</h2></a>
                <p>The Game that will climb the world.</p>
                <p>+3 year Team Game Project that implements Unity multiplayer, a node.js web api, mongodb and mariadb database, and Smart Contracts 'Playable'</p>
            </div>
            <div className="project">
                <a href="https://drive.google.com/drive/folders/1VBPx7Gn0Aye5zkUgMlZuvMrpzWm_lvyT?usp=drive_link" target="_blank" rel="noreferrer"><img src={akatsuki} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/drive/folders/1VBPx7Gn0Aye5zkUgMlZuvMrpzWm_lvyT?usp=drive_link" target="_blank" rel="noreferrer"><h2>Red Moon</h2></a>
                <p>Designed, developed, and launched a 3D online multiplayer shooter game with C#, Unity and Photon. You must download and unzip both gamelauncher the launcher, to play the game. 'Playable with propper setup'</p>
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/1uE7oMe6VasnBMgng0cZ-b4UJF8gRuGiH/view?usp=sharing" target="_blank" rel="noreferrer"><img src={pokemon6v6} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1uE7oMe6VasnBMgng0cZ-b4UJF8gRuGiH/view?usp=sharing" target="_blank" rel="noreferrer"><h2>Pokemon 6v6</h2></a>
                <p>My first masterpiece I ever fully created, however it was on an old programming system, so the game is no longer playable, but here is a demonstration of what it was like. 'Video Demo'</p>
            </div>
            <div className="project">
                <a href="https://github.com/Falco830/ProjectRepository/tree/master/DuolingoHiragana1Auto" target="_blank" rel="noreferrer"><img src={autoduo} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Falco830/ProjectRepository/tree/master/DuolingoHiragana1Auto" target="_blank" rel="noreferrer"><h2>Auto Duo</h2></a>
                <p>Older Project that used Selenium to blaze through an older version of a Japanese Duolingo Lesson. Was used to gain the highest score in the world at the time without hurting my fingers. 'No Demo'</p>
            </div>
        </div>
        <h1>Smaller Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Falco830/PredictingWineQualityModel" target="_blank" rel="noreferrer"><img src={winequality} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Falco830/PredictingWineQualityModel" target="_blank" rel="noreferrer"><h2>Predicting Wine Quality Model</h2></a>
                <p>This is a small project of ustilizing AI to predict wine quality. 'No Demo'</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
                <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div>
            </div>
    </div>
    );
}

export default Project;