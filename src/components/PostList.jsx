import Post from "./Post";
import classes from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";
function PostList() {
  // fetch("http://localhost:8080/posts").then((response) => response.json()).then(data=>setPosts(data.posts));
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                body={post.body}
                id={post.id}
                key={post.id}
              />
            );
          })}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "wheat" }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some</p>
        </div>
      )}
    </>
  );
}

export default PostList;
