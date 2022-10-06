import React from "react";
import {
  BlogBody,
  BlogContainer,
  BlogDate,
  BlogTitle,
  BlogFooter,
} from "./BlogElements";

const Blog = ({ date, title, description, url }) => {
  return (
    <BlogContainer>
      <BlogDate>{date}</BlogDate>
      <BlogTitle>
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
      </BlogTitle>
      <BlogBody>
        <p>{description}</p>
      </BlogBody>
      <BlogFooter>
        <a
          className="blog-btn color-black"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          Read
        </a>
      </BlogFooter>
    </BlogContainer>
  );
};

export default Blog;
