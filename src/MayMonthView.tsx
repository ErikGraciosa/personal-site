import Main from "./blogDemoFiles/Main";
import post from "./blogDemoFiles/blog-post.3.md";

const posts = [post];

export default function AprilMonthView() {
  return <Main title="May 2024" posts={posts} />;
}
