import "./styles.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1> Data Fetching Demo </h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.id}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
