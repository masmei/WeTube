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
          <img src={Aisha} alt="Aisha" height="300px" />
          <a href="https://github.com/AishaCKleemoff">
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
          <img src={Jorge} alt="Jorge" height="300px" />
          <a href="https://github.com/Jorge-Carrera">
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
          <img src={Mason} alt="Mason" height="300px"/>
          <a href="https://github.com/masmei">
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
          <img src={Jahvon} alt="Jahvon" height="300px"/>
          <a href="https://github.com/Just-Jayy">
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

