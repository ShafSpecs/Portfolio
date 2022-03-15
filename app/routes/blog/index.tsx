import { useEffect, useRef, useState } from "react";
import { useLoaderData, Link } from "remix";
import { format } from "date-fns";
import { PostsData } from "~/utils/server/github.server"

import type { ActionFunction, LoaderFunction } from "remix";

import styles from "../../styles/blog.css"

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const loader: LoaderFunction = async () => {
  const posts = await PostsData();
  const matter: any[] = posts.map((post: any) => {
    const { frontmatter } = post;
    return frontmatter
  })

  const sortedPosts = matter.sort((a: any, b: any) => {
    return b.id - a.id
  });
  
  return sortedPosts;
};

function Card({ title, image, id, date }: any) {
  const statRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const match = date.match(/[^-]+/g);
    const formatted = format(
      new Date(match[0], match[1] - 1, match[2].slice(0, 2)),
      "MMMM dd, yyyy"
    );

    statRef.current.innerText = `Published: ${formatted}`;
  }, []);

  return (
    <div
      className="blog-card-rec"
      style={{
        background: `url(${image})`,
        objectFit: "contain",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
      key={id}
    >
      <div className="blog-card-info">
        <p>{title}</p>
        <span className="stats" ref={statRef}></span>
      </div>
    </div>
  );
}

function Tag({ tagName, nowRun }: any) {
  const [checked, setChecked] = useState<boolean>(false);

  const tagRef = useRef<HTMLInputElement>(null!);
  const labelRef = useRef<HTMLLabelElement>(null!);

  useEffect(() => {
    if (tagRef.current.checked) {
      labelRef.current.classList.add("checked");
    } else {
      labelRef.current.classList.remove("checked");
    }
  }, [checked]);

  const checkStatus = () => {
    setChecked(!checked);
  };

  return (
    <label
      className="tag-capsule"
      htmlFor={tagName}
      ref={labelRef}
      onClick={() => nowRun()}
    >
      <input
        type="checkbox"
        id={tagName}
        name={tagName}
        ref={tagRef}
        onChange={checkStatus}
      />
      <span>{tagName}</span>
    </label>
  );
}

export default function Blog() {
  const data = useLoaderData();

  const postRef = useRef<HTMLDivElement>(null!);

  return (
    <div>
      <section className="hero">
        <div className="hero-body">
          Welcome to my digital notepad. Teaching development skills, sharing my
          knowledge and experiences out there, and helping with building a
          brighter future.
        </div>
        <div className="hero-image">📚</div>
      </section>
      <section className="blog">
        <div className="blog-container">
          <div className="blog-content">
            {/* <div className="featured">
              <div className="blog-header">
                <h2>Featured Article</h2>
              </div>
              <div className="featured">
                <div className="blog-card blog-card-featured">
                  <div className="blog-card-info blog-card-info-featured">
                    <span className="feat">Featured article</span>
                    <div className="feat-meta">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec
                      </p>
                      <span className="stats-featured">
                        23rd of February, 2022 - 3 min read
                      </span>
                    </div>
                    <img className="feat-img" />
                    {/* <div className="spinner">
                      Read the article <button className="spinn circle">&#8594;</button>
                    </div> 
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="search-tags">
              <div className="blog-header">
                <h3>Search Articles by Topics:</h3>
              </div>
              <div className="tags" ref={tagParentRef}>
                {data?.tags.map((tag: any) => (
                  <Tag tagName={tag.name} nowRun={nowRun} />
                ))}
              </div>
            </div> */}
            <div className="blog-header">
              <h2>Recent Articles..</h2>
            </div>
            <div className="posts" ref={postRef}>
              {data?.map((post: any) => (
                 <Link to={post.slug} key={post.id}>
                   <Card
                     title={post.title}
                     date={post.date}
                     image={post.image}
                     id={post.id}
                   />
                 </Link>
               ))}
            </div>
          </div>
        </div>
      </section>
      <section className="extra">
        <div className="newsletter"></div>
      </section>
    </div>
  );
}
