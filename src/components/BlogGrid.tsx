import React from "react";
import { BlogPostGrid } from "./blog/BlogPostGrid";

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
    image: {
      // Define image properties here
    };
    tags: string[];
  };
}

interface BlogProps {
  blogPosts: BlogPost[];
}

const BlogGrid: React.FC<BlogProps> = ({ blogPosts }) => {
  return (
    <div className="container">
      {blogPosts && blogPosts.map(entry => {
       return (
       <BlogPostGrid blogPost={entry}></BlogPostGrid>
       )
      })}
    </div>
  );
};

export default BlogGrid;
