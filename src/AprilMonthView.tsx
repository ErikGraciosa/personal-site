import Main from "./blogDemoFiles/Main";
import post1 from "./blogDemoFiles/blog-post.1.md";
import post2 from "./blogDemoFiles/blog-post.2.md";

const posts = [post2, post1];

export default function AprilMonthView() {
  return <Main title="April 2024" posts={posts} />;
}
