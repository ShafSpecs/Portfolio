import { LoaderFunction, useLoaderData } from "remix";
import { FaCodepen } from "react-icons/fa";
import Nighty from "../projects/NightyNight.png";
import CodePlay from "../projects/CodePlay_Banner_ALPHA.png";
import Tracker from "../projects/tracker.svg";

import style from "../styles/portfolio.css";
import type { LinksFunction, MetaFunction } from "remix";
import { BiCoffeeTogo } from "react-icons/bi";

export const links = () => {
  return [{ rel: "stylesheet", href: style }];
};

export const meta: MetaFunction = () => {
  return {
    title: "ShafSpecs - Portfolio",
    description:
      "View my showcased projects and view their source code, if available :wink:, on my portfolio.",
    keywords: "ShafSpecs, Abdur-Rahman, Fashola, Shaf, Portfolio, Projects",
  };
};

export const loader: LoaderFunction = async () => {
  const err = new Error("Not implemented yet!");
  return err;
};

function Card({ image, alt, title, desc, github, preview }: any) {
  return (
    <div className="card">
      <img src={image} alt={alt} className="img" />
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{desc}</p>
      <div>
        <a href={github} className="btn-link">
          <button className="card-btn">Github</button>
        </a>
        {preview && (
          <a href={preview} className="btn-link">
            <button className="card-btn">Preview</button>
          </a>
        )}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const data = useLoaderData();

  return (
    <div className="portfolio">
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
                className="feather-github"
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
        </ul>
      </div>
      <main className="fillHeight">
        <div className="portfolio-title">My Portfolio</div>
        <section className="cards">
          <Card
            image={Nighty}
            alt="Portfolio"
            title="Nighty Night Theme"
            desc="A minimal, dark bluish-black theme for VS Code, with calming colors and high contrast, it is a 👍. Available on Visual Studio Marketplace."
          />
          <Card
            image={Tracker}
            alt="Portfolio"
            title="Get It Done Task Tracker"
            desc="A simple task tracker for managing your daily tasks. It is a 👍."
          />
        </section>
        <div className="spin"></div>
        <div className="more">
          ShafSpecs is working to add more cleaned up projects here...
        </div>
        {/* Footer for Mobile */}
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
      <div className="hazard">
        <div className="wip">🚧 Page is still being constructed!👷‍♂️ 🚧</div>
      </div>
    </div>
  );
}
