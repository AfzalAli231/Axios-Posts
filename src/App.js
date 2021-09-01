import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import Post from './Post';
import './App.css'

export default function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
const url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("something went wrong while requesting posts");
      })
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <h1>{error}</h1>;

  return (
    <div>
      {posts.length > 0 ? (
        <>
          <Pagination
            data={posts}
            RenderComponent={Post}
            title="Posts"
            pageLimit={5}
            dataLimit={10}
          />
        </>
      ) : (
       <h1>No Posts to display</h1>
      )}
    </div>
  );
}
