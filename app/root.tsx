import React, { useState, useRef, createContext, useEffect } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  NavLink,
  Link,
  useLocation,
  useMatches
} from "remix";

import type { MetaFunction, LinksFunction } from "remix";

import styles from "./styles/index.css";
import sun from "./projects/sun-svgrepo-com.svg";
import moon from "./projects/moon-svgrepo-com.svg";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => {
  return {
    title: "ShafSpecs",
    viewport: "width=device-width, initial-scale=1.0",
    keywords: "Remix,ShafSpecs,Shaf,Blog,Portfolio,Fashola,Abdur-Rahman",
    "twitter:image": "https://ucarecdn.com/4293195b-df49-4886-ab16-3b045b3fb185/Freecodecamp.png",
    "og:image": "https://ucarecdn.com/4293195b-df49-4886-ab16-3b045b3fb185/Freecodecamp.png",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@ShafSpecs",
    "twitter:site": "@ShafSpecs",
    "twitter:title": "ShafSpecs",
    "og:title": "ShafSpecs",
    "og:type": "website",
    "og:url": "https://shafspecs.fly.dev",
    "twitter:description": "Hello there friends. My name is Abdur-Rahman, welcome to my site where I showcase my projects, share my thoughts & experiences, and my Digital Garden. I am ShafSpecs and welcome to my Universe.",
    "og:locale": "en_US",
    "og:image:alt": "ShafSpecs",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
    "og:image:secure_url": "https://ucarecdn.com/4293195b-df49-4886-ab16-3b045b3fb185/Freecodecamp.png",
    "og:image:url": "https://ucarecdn.com/4293195b-df49-4886-ab16-3b045b3fb185/Freecodecamp.png",
    "og:description": "Hello there friends. My name is Abdur-Rahman and welcome to my site where I showcase my projects, share my thoughts & experiences, and my Digital Garden. I am ShafSpecs and welcome to my Universe.",
  };
};

export default function App() {
  let location = useLocation();
  let matches = useMatches();

  let isMount = true;

  React.useEffect(() => {
    let mounted = isMount;
    isMount = false;
    if ("serviceWorker" in navigator) {
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller?.postMessage({
          type: "REMIX_NAVIGATION",
          isMount: mounted,
          location,
          matches,
          manifest: window.__remixManifest,
        });
      } else {
        let listener = async () => {
          await navigator.serviceWorker.ready;
          navigator.serviceWorker.controller?.postMessage({
            type: "REMIX_NAVIGATION",
            isMount: mounted,
            location,
            matches,
            manifest: window.__remixManifest,
          });
        };
        navigator.serviceWorker.addEventListener("controllerchange", listener);
        return () => {
          navigator.serviceWorker.removeEventListener(
            "controllerchange",
            listener
          );
        };
      }
    }
  }, [location]);

  return (
    <html lang="en" style={{ height: "100%" }} data-theme="dark">
      <head>
        <meta charSet="utf-8" /> 
        <meta name="viewport" content="wclassNameth=device-wclassNameth,initial-scale=1"/> 
        <Meta />
        <link rel="manifest" href="/resources/manifest.json" /> 
        <link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-icon" />
        <Links /> 
      </head> 
      <body>
          <Header /> 
          <Outlet /> 
        <ScrollRestoration /> 
        <Scripts /> 
        <LiveReload /> 
      </body> 
    </html>
  );
}
export function Header() {
  const [darkMode, setDarkmode] = useState<boolean>(true);

  const activeClassName = "active-nav";
  const activeMobileClassName = "active-nav-mobile";

  const btnRef = useRef<HTMLButtonElement>(null!);
  const mobileRef = useRef<HTMLDivElement>(null!);
  const mobileToggleRef = useRef<HTMLButtonElement>(null!);

  const toggleMobileNav = () => {
    if (mobileRef.current.style.display == "none") {
      mobileRef.current.style.display = "flex";
      mobileToggleRef.current.innerHTML = "&times;";
    } else {
      mobileRef.current.style.display = "none";
      mobileToggleRef.current.innerHTML = "&#9776;";
    }
  };

  function toggleDarkMode() {
    if (typeof document !== undefined && !darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else if (typeof document !== undefined && darkMode) {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }

  return (
    <header className="header">  
      <Link to="/">   
        <h1 className="page-title">ShafSpecs</h1> 
      </Link> 
      <nav className="navbar">  
        <ul className="nav-wrapper"> 
          <li className="nav-item">   
            <NavLink to="portfolio">    
              {({ isActive }) => (
                <span className={isActive ? activeClassName : undefined}>     
                  Portfolio 
                </span>
              )} 
            </NavLink> 
          </li> 
          <li className="nav-item">  
            <NavLink to="blog">   
              {({ isActive }) => (
                <span className={isActive ? activeClassName : undefined}>       
                  Blog 
                </span>
              )} 
            </NavLink> 
          </li> 
          <li className="nav-item">
            <NavLink to="about">   
              {({ isActive }) => (
                <span className={isActive ? activeClassName : undefined}>      
                  About 
                </span>
              )} 
            </NavLink> 
          </li> 
        </ul> 
      </nav> 
      <nav className="mobileNav" ref={mobileRef} style={{ display: "none" }}>   
        <ul>
          <li>     
            <NavLink to="portfolio">     
              {({ isActive }) => (
                <span className={isActive ? activeMobileClassName : undefined}>      
                  Portfolio 
                </span>
              )} 
            </NavLink> 
          </li> 
          <li>       
            <NavLink to="blog">         
              {({ isActive }) => (
                <span className={isActive ? activeMobileClassName : undefined}>        
                  Blog 
                </span>
              )} 
            </NavLink> 
          </li> 
          <li>      
            <NavLink to="about">        
              {({ isActive }) => (
                <span className={isActive ? activeMobileClassName : undefined}>             
                  About 
                </span>
              )} 
            </NavLink> 
          </li> 
        </ul> 
      </nav> 
      <section className="mobileNav1">  
        <button ref={mobileToggleRef} onClick={toggleMobileNav}>   
          &#9776; 
        </button> 
      </section> 
      <div className="theme-toggle">    
        <button
          ref={btnRef}
          className="btn-mode"
          onClick={() => {
            toggleDarkMode();
            setDarkmode((prev) => !prev);
          }}
        >       
          {darkMode ? (
            <img src={moon} alt="moon" />
          ) : (
            <img src={sun} alt="sun" />
          )} 
        </button> 
      </div> 
    </header>
  );
}
