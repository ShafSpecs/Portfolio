import { Link } from "remix";
import { FaCodepen } from "react-icons/fa";
import { BiCoffeeTogo } from "react-icons/bi";

import styles from "../styles/homepage.css";

import Nighty from "../projects/NightyNight.png";
import CodePlay from "../projects/CodePlay_Banner_ALPHA.png";
import Tracker from "../projects/tracker.svg";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    },
  ];
}

function ProjectCard({ title, desc, git, link, pic, svg }: any) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            style={svg ? { backgroundColor: "#7e7e7e" } : {}}
            src={pic}
            alt="Project"
          />
        </div>
        <div className="flip-card-back">
          <h1 className="title">{title}</h1>
          <p>{desc}</p>
          <span className="links">
            <a href={link} target="_blank">
              <button className="card-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                  }}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                {"  "}View Demo
              </button>
            </a>
            <a href={git} target="_blank">
              <button className="card-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  style={{
                    width: "1.325rem",
                    height: "1.325rem",
                  }}
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                {"  "}Github
              </button>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <div className="div">
      <div className="links">
        <ul className="u-list">
          <li className="feather">
            <a
              href="https://github.com/ShafSpecs"
              target="_blank"
              className="a-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-link feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </li>
          <li className="feather">
            <a
              href="https://twitter.com/ShafSpecs"
              target="_blank"
              className="a-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-link feather-twitter"
              >
                <title>Twitter</title>
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </li>
          <li className="feather">
            <a
              href="https://dev.to/shafspecs"
              target="_blank"
              className="a-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 32 447.99999999999994 448"
                role="img"
                width="2500"
                height="2321"
                className="dev feather-github"
                fill="currentColor"
              >
                <title>DEV.to</title>
                <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z" />
              </svg>
            </a>
          </li>
          <li className="feather">
            <a
              href="https://codepen.io/ShafSpecs"
              target="_blank"
              className="a-link"
            >
              <FaCodepen className="feather-codepen" title="CodePen"/>
            </a>
          </li>
          <li className="feather">
            <a
              href="https://github.com/ShafSpecs"
              target="_blank"
              className="a-link"
            >
              <BiCoffeeTogo title="Buy Me A Coffee" className="feather-bmac"/>
            </a>
          </li>
          {/* <li className="feather">
            <a
              href="https://ng.linkedin.com/in/abdur-rahman-fashola-14612a215"
              target="_blank"
              className="a-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-link feather-linkedin"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </li> */}
        </ul>
      </div>
      <main className="fillHeight">
        <section style={{ height: "max-content", display: "block" }}>
          <span className="greetings">Hello there 👋, my name is</span>
          <br />
          <span className="name">Abdur-Rahman Fashola.</span>
          <p className="spin"></p>
          <p className="description">
            I'm a Full-Stack Developer specializing in building and designing
            quality softwares and exceptional user experiences.
          </p>
        </section>
        <section className="project">
          <h3>My Work</h3>
          <div className="projects">
            <ProjectCard
              pic={Nighty}
              svg={false}
              title="Nighty Night 🌙"
              desc="A minimal, dark bluish-black theme for VS Code, with calming colors and high contrast, it is a 👍. Available on Visual Studio Marketplace."
              git="https://github.com/ShafSpecs/Nighty-Night-Theme"
              link="https://marketplace.visualstudio.com/items?itemName=ShafSpecs.nighty-night"
            />
            <ProjectCard
              pic={CodePlay}
              svg={false}
              title="👨‍💻 CodePlay"
              desc="A simple, yet powerful, code playground for learning and practicing basic Web Development languages."
              git="https://github.com/ShafSpecs/CodePlay-Editor"
              link=""
            />
            <ProjectCard
              pic={Tracker}
              svg={true}
              title="🏃‍♂️ Task Tracker"
              desc="A simple task tracker for managing your daily tasks. It is a 👍."
              git="https://github.com/ShafSpecs/Task-Tracker_Remix"
              link="https://task-tracker-remix.vercel.app/"
            />
            <div className="next-work">
              <Link to="/portfolio">
                <p>Check out my portfolio &#8594;</p>
              </Link>
            </div>
          </div>
        </section>
        <section className="about">
          <h3>About Me</h3>
          <div>
            <p>
              Hello! My name is Abdur-Rahman and I enjoy creating things that
              live on the internet. I started my programming journey by
              attending a WordPress-hosted event and after one thing that led to
              the other, eventually landed in the world of web development. I
              love learning new technologies and often amazed by the progress we
              humans have made so far in this amazing field.
            </p>
            <Link to="/about">
              <button>Who is ShafSpecs?</button>
            </Link>
          </div>
        </section>
        <section className="contact">
          <h3>Get in Touch</h3>
          <p>
            Wanna get in touch? Have a question, or an offer, or you just feel
            like saying hi, send me an email and let's connect! 😄
          </p>
          <a href="mailto:abbadshaf05@gmail.com">
            <button>Get in touch</button>
          </a>
        </section>
        <footer className="footer">
          <div className="mobile-div">
            <ul className="mobile-ul">
              <li className="feather">
                <a
                  href="https://github.com/ShafSpecs"
                  target="_blank"
                  className="a-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="svg-link feather-github"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </li>
              <li className="feather">
                <a
                  href="https://twitter.com/ShafSpecs"
                  target="_blank"
                  className="a-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="svg-link feather-twitter"
                  >
                    <title>Twitter</title>
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </li>
              <li className="feather">
                <a
                  href="https://dev.to/shafspecs"
                  target="_blank"
                  className="a-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 32 447.99999999999994 448"
                    role="img"
                    width="2500"
                    height="2321"
                    className="dev feather-github"
                    fill="currentColor"
                  >
                    <title>DEV.to</title>
                    <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z" />
                  </svg>
                </a>
              </li>
              <li className="feather">
                <a
                  href="https://codepen.io/ShafSpecs"
                  target="_blank"
                  className="a-link"
                >
                  <FaCodepen className="feather-github" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </div>
  );
}
