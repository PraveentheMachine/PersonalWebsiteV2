import React from "react";
import { BlogPostItem } from "./BlogPostItem";
import "./BlogGrid.css";

export interface BlogPost {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    topText: string;
    bottomText: string;
    pubDate: Date;
    description: string;
    author: string;
    technical: boolean;
    image: {
    };
    tags: string[];
  };
  
}

interface BlogProps {
  blogPosts: BlogPost[];
}

const BlogGrid: React.FC<BlogProps> = ({ blogPosts }) => {
  return (
    <div className="blog-grid-container">
      {blogPosts &&
        blogPosts.map((entry) => {
          // if (entry.data.technical) {
          //   return <></>;
          // }
          return <BlogPostItem blogPost={entry}></BlogPostItem>;
        })}
    </div>
  );
};

export default BlogGrid;
