import React from "react";
import type { BlogPost } from "../BlogGrid";

interface BlogPostGrid {
  blogPost: BlogPost;
}

export function BlogPostGrid<BlogPostGrid>({ blogPost }) {
  return (
    <a href={`${blogPost.collection}/${blogPost.slug}`}>
      <div className="">
        <p>{blogPost.data.title}</p>
      </div>
    </a>
  );
}
