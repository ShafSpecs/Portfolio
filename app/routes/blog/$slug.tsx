import { useEffect, useRef } from "react";
import { useLoaderData, useTransition } from "remix";
import { format } from "date-fns";
import JSConfetti from 'js-confetti';

import type { LoaderFunction } from "remix";

import style from "../../styles/blog-slug.css";
import frame from "../../styles/frame.css";
import github from "../../styles/github.css";
import { getSinglePost } from "~/utils/server/github.server";

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: style,
    },
    {
      rel: "stylesheet",
      href: frame,
    },
    {
      rel: "stylesheet",
      href: github,
    },
  ];
};

export const loader: LoaderFunction = async ({ params }) => {
  //@ts-ignore
  const data = await getSinglePost(`${params.slug}.md`);

  return {
    content: data.data,
    data: data.frontmatter,
  };
};

export default function Slug() {
  const data = useLoaderData();
  const transition = useTransition();
  const bodyRef = useRef<HTMLDivElement>(null!);

  const blogRef = useRef<HTMLDivElement>(null!);
  const avgRef = useRef<HTMLDivElement>(null!);
  const dateRef = useRef<HTMLDivElement>(null!);
  const copyRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const jsConfetti = new JSConfetti()

    if (transition.state == "idle") {
      blogRef.current && (blogRef.current.innerHTML = data.content);

      setReadingTime();

      // Estimate the average reading time of the post

      function setReadingTime() {
        let count = getWordCount();
        //@ts-ignore
        let time = Math.ceil(count / 240);

        avgRef.current && (avgRef.current.innerText = time + " min read");
      }

      function getWordCount() {
        //@ts-ignore
        if (blogRef.current) {
          //@ts-ignore
          return blogRef.current?.innerText.match(/\w+/g).length;
        }
      }

      const match = data.data.date.match(/[^-]+/g);
      const formatted = format(
        new Date(match[0], match[1] - 1, match[2].slice(0, 2)),
        "MMMM dd, yyyy"
      );

      dateRef.current && (dateRef.current.innerText = formatted);
      document.addEventListener("click", function (e) {
        //@ts-ignore
        if (e.target && e.target.id == "copy-btn") {
          if(navigator.clipboard) {
            //@ts-ignore
            navigator.clipboard.writeText(e.target.getAttribute("data-clipboard-text"));
            // jsConfetti.addConfetti()
            copyRef.current && (copyRef.current.style.display = "flex")
            setTimeout(() => {
              copyRef.current && (copyRef.current.style.display = "none")
            }, 2500)
          } else {
            //@ts-ignore
            document.execCommand("copy", false, e.target.getAttribute("data-clipboard-text"));
            // jsConfetti.addConfetti()
            copyRef.current && (copyRef.current.style.display = "flex")
            setTimeout(() => {
              copyRef.current && (copyRef.current.style.display = "none")
            }, 2500)
          }
        }
      });
    }
  });

  return (
    <div className="page-div" ref={bodyRef}>
      <a href="/blog">
        <section className="go-back">
          <span>&#8592;</span> Return back to overview
        </section>
      </a>
      <section className="copy" ref={copyRef}>
        Copied!
      </section>
      <section className="head">
        <section className="blog-meta">
          <h1>{data?.data.title}</h1>
          <div className="stat">
            <span>
              <span className="date" ref={dateRef}></span> -{" "}
              <span className="avg-time" ref={avgRef}></span>
            </span>
          </div>
        </section>
        <div
          className="image"
          style={{
            background: `url(${data?.data.image})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
          }}
        ></div>
      </section>
      <section
        className="markdown-body"
        ref={blogRef}
        style={{ fontSize: "1.1275rem", pointerEvents: "all" }}
      ></section>
      <section className="action-call">
        {/* <div className="newsletter">
          <h3>Sign Up</h3>
          <span style={{ fontSize: "0.875rem", textAlign: "center" }}>
            Sign up for the newsletter to get access to exclusive posts and
            early access to articles
          </span>
          <input
            type="email"
            name="newsletter"
            id="newsletter"
            placeholder="Email Address"
          />
          <button type="submit">
            Sign Up{" "}
            <FiSend
              color="#fff"
              fontSize={"1rem"}
              style={{ position: "relative", top: "0.125rem" }}
            />
          </button>
        </div>
        <div className="wrapper">
          <div className="or-separator">
            <div className="vertical-line"></div>
            <div>or</div>
            <div className="vertical-line"></div>
          </div>
        </div>
        <hr hidden /> */}
        <div className="bmac">
          <span>You could support me by buying a digital coffee 😁</span>
          <a
            href="https://www.buymeacoffee.com/shafspecs"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Digital Coffee"
              style={{ height: "3rem", width: "100%", marginTop: "0.25rem" }}
            />
          </a>
        </div>
      </section>
    </div>
  );
}
