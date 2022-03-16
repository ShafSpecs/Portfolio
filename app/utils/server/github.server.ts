import { Octokit } from "@octokit/core";
import { Repo } from "../handlers/github-api";
import { toHTML } from "markdown-components";
import { markdownItEngine, components, md } from './markdown.server';
const grayMatter = require("gray-matter")

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

interface PostData {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  _links: {
    git: string;
    self: string;
    html: string;
  };
}

// Get all posts from the repository
async function getPosts() {
  const postDir = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      ...Repo,
      path: "posts",
    }
  );

  return postDir;
}

/*
*  Extract required post data from the GitHub API response
*
*/

export async function PostsData() {
  const posts = await getPosts();

  //@ts-ignore
  const postsInfo = Promise.all(posts.data.map(async (post: PostData) => {
    const { name, download_url, sha } = post;
    const content = await fetch(download_url).then(res => res.text())
    const { data } = grayMatter(content);

    return { name, frontmatter: data };
  }));

  return postsInfo;
}

export async function getSinglePost(name: string) {
  const post = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      ...Repo,
      path: `posts/${name}`,
    }
  );
  
  // @ts-ignore
  const decoded = decodeURIComponent(escape(atob(post.data.content)));
  
  const parsed = grayMatter(decoded);
  const { data, content } = parsed;

  const html = md.render(content);

  return {
    data: html,
    frontmatter: data,
  };
}