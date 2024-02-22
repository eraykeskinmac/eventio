import React from "react";
import { useStringParam } from "../../utils/utils";

const BlogPostPage = () => {
  const slug = useStringParam("slug");
  return <div>Blog post: {slug}</div>;
};

export default BlogPostPage;
