import type { BlogPost } from "./BlogGrid";
import "./BlogPostGrid.css";

interface BlogPostItem {
  blogPost: BlogPost;
}

export function BlogPostItem<BlogPostItem>({ blogPost }) {
  return (
    <div className="blog-grid-item">
      <a
        className="blog-grid-item-link"
        href={`${blogPost.collection}/${blogPost.slug}`}
      >
        <h2 className="p-title">{blogPost.data.title}{" "}</h2>
      </a>
    </div>
  );
}
