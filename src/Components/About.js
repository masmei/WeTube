import React from 'react';
import "./About.css";
import Aisha from "./Images/Aisha_Kleemoff.jpeg";
import Jorge from "./Images/Jorge_Carrera.jpeg";
import Mason from "./Images/Mason_Mei.jpeg";
import Jahvon from "./Images/Jahvon_DeVine-Jones.jpeg";

export default function About() {
  return (
    <section className="aboutContainer">
       <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
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
      <ul className= "cards">
        <section className='row1'>  

        <li className="card">
          <h3>Aisha Kleemoff</h3>
          <img src={Aisha} alt="Aisha" height="300px" />
          <a href="https://github.com/AishaCKleemoff">
            <i class="devicon-github-original-wordmark colored" id="blue" />
          </a>
          <p> I'm a React Developer. I enjoy collaborating on projects with other Developers. I'm currently learning the PERN full-stack at the Pursuit Fellowship program located in Long Island City, NY (fully remote now due to the Covid-19 pandemic). I'm looking forward to learning new programming languages.
          </p>
        </li>
        <li className="card">
          <h3>Jorge Carrera</h3>
          <img src={Jorge} alt="Jorge" height="300px" />
          <a href="https://github.com/Jorge-Carrera">
            <i class="devicon-github-original-wordmark colored" id="red" />
          </a>
          <p>
          A developing Full-Stack engineer looking to advance the growth in technology that connects us worldwide. Eager to contribute to the development of Web3, blockchain, and the future of the internet, though only when the football season is over.
          </p>
        </li>
        </section>
        <section className="row2"> 
        
        <li className="card">
          <h3>Mason Mei</h3>
          <img src={Mason} alt="Mason" height="300px"/>
          <a href="https://github.com/masmei">
            <i class="devicon-github-original-wordmark colored" id="purple" />
          </a>
          <p>
          I'm a Software Engineer who is passionate in Web3 and Entrepreneurship. I started my tech journey in 2021 due to my obsession with blockchain technology. I want to be a builder in this new age and contribute to the growth and adoption of this new disruptive technology.
          </p>
        </li>
        <li className="card">
          <h3>Jahvon DeVine-Jones</h3>
          <img src={Jahvon} alt="Jahvon" height="300px"/>
          <a href="https://github.com/Just-Jayy">
            <i class="devicon-github-original-wordmark colored" id="purple" />
          </a>
          <p>
            I'm an fledgling Software Engineer looking to contribute however I can to improve the technology in the world we live in. I want to be able to help those in need and give back to those whow deserve it. Making the world a better place to live in through code!
          </p>
        </li>
        </section>
      </ul>
    </section>
  );
};

