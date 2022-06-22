import React from 'react'
import Aisha from "./Images/Aisha_Kleemoff.jpeg"
import Jorge from "./Images/Jorge_Carrera.jpeg"
import Mason from "./Images/Mason_Mei.jpeg"
import Jahvon from "./Images/Jahvon_DeVine-Jones.jpeg"

const RevealInfo = (e) => {
  let x = document.getElementsByClassName("info1");
  let i;
  for (i = 0; i < x.length; i++) {
    if (x[i].style.display === "none") {
      x[i].style.display = "inline";
      document.getElementById("button").innerHTML = "Hide!";
    } else {
      x[i].style.display = "none";
      document.getElementById("button").innerHTML = "Reveal!";
    }
  }
};

export default function About() {
  return (
    <section className="aboutContainer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ff0000"
          fill-opacity="0.5"
          d="M0,128L6.2,106.7C12.3,85,25,43,37,42.7C49.2,43,62,85,74,122.7C86.2,160,98,192,111,208C123.1,224,135,224,148,213.3C160,203,172,181,185,165.3C196.9,149,209,139,222,149.3C233.8,160,246,192,258,202.7C270.8,213,283,203,295,213.3C307.7,224,320,256,332,272C344.6,288,357,288,369,250.7C381.5,213,394,139,406,101.3C418.5,64,431,64,443,101.3C455.4,139,468,213,480,229.3C492.3,245,505,203,517,192C529.2,181,542,203,554,224C566.2,245,578,267,591,240C603.1,213,615,139,628,106.7C640,75,652,85,665,85.3C676.9,85,689,75,702,90.7C713.8,107,726,149,738,170.7C750.8,192,763,192,775,176C787.7,160,800,128,812,149.3C824.6,171,837,245,849,277.3C861.5,309,874,299,886,298.7C898.5,299,911,309,923,288C935.4,267,948,213,960,165.3C972.3,117,985,75,997,74.7C1009.2,75,1022,117,1034,128C1046.2,139,1058,117,1071,122.7C1083.1,128,1095,160,1108,154.7C1120,149,1132,107,1145,74.7C1156.9,43,1169,21,1182,26.7C1193.8,32,1206,64,1218,74.7C1230.8,85,1243,75,1255,69.3C1267.7,64,1280,64,1292,85.3C1304.6,107,1317,149,1329,165.3C1341.5,181,1354,171,1366,144C1378.5,117,1391,75,1403,90.7C1415.4,107,1428,181,1434,218.7L1440,256L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"
        ></path>
      </svg>
      <h1>About Us</h1>
      <div className="description">
        <h3> Project Description </h3>
        <p>
          A simple Youtube website clone, where a user can search for a topic,
          select a video that uses the Youtube API and will open a new page that
          displays the selected video. User can also view the creators bio and
          the project description.
        </p>
      </div>
      <ul>
        <li className="card">
          <h3>Aisha Kleemoff</h3>
          <img src={Aisha} alt="YashiPic" height="220px" />
          <a href="https://github.com/yashiazize">
            <i class="devicon-github-original-wordmark colored" id="blue" />
          </a>
          <p>
            Software engineer with an unquenchable curiosity to learn. Hobbies
            includes drawing, watching movies, and gaming. I am passionate about
            sharing ideas and stories through the utilization of gaming,
            illustrations and other media technologies
          </p>
          <p className="info1">
            According to my screen time daily average, I spend 2hrs a day on
            Youtube. During that time, I enjoy watching walkthroughs of scary
            games
            <img
              src="https://media.tenor.com/images/7bdca2f9b0804aa3c9418d72c89bf8d1/tenor.gif"
              alt="vampirelady"
            />
          </p>
        </li>
        <li className="card">
          <h3>Jorge Carrera</h3>
          <img src={Jorge} alt="Headshot of Poonam" />
          <a href="https://github.com/PoonamDass">
            <i class="devicon-github-original-wordmark colored" id="red" />
          </a>
          <p>
            Software engineer in the making with a passion for utilizing data to
            tell stories in immigrant justice spaces. Hobbies include community
            organizing, knitting, and binge watching Parks and Recs.
          </p>
          <div className="info1">
            <p>
              My favorite part of Youtube is honestly the RickRolld' videos.
              Rick Astley is forever a legend.
            </p>
            <img
              src="https://media4.giphy.com/media/Ju7l5y9osyymQ/200.gif"
              alt="You just got Rick Rolld!"
            />
          </div>
        </li>
        <li className="card">
          <h3>Mason Mei</h3>
          <img src={Mason} alt="Jailene" />
          <a href="https://github.com/JDJ97">
            <i class="devicon-github-original-wordmark colored" id="purple" />
          </a>
          <p>
            Software engineer with a passion for robotics and AI. My hobbies
            include playing games, doing sudoku puzzles, and taking care of my
            cat Binx.
          </p>
          <p className="info1">
            I enjoy using youtube to watch people play games.
            <img
              src="https://media.tenor.com/images/ac6f92d52f856922881c00fee3651c4f/tenor.gif"
              alt="DashieGames"
            />
          </p>
        </li>
        <li className="card">
          <h3>Jahvon DeVine-Jones</h3>
          <img src={Jahvon} alt="Jailene" />
          <a href="https://github.com/JDJ97">
            <i class="devicon-github-original-wordmark colored" id="purple" />
          </a>
          <p>
            Software engineer with a passion for robotics and AI. My hobbies
            include playing games, doing sudoku puzzles, and taking care of my
            cat Binx.
          </p>
          <p className="info1">
            I enjoy using youtube to watch people play games.
            <img
              src="https://media.tenor.com/images/ac6f92d52f856922881c00fee3651c4f/tenor.gif"
              alt="DashieGames"
            />
          </p>
        </li>
      </ul>
      <button onClick={RevealInfo} id="button">
        Reveal!
      </button>
    </section>
  );
};

