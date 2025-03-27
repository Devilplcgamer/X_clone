import React, { useState } from "react";
import postsData from "../data.json";
import Post from "./Post";
import SearchBar from "./Searchbar";

const Feed = () => {
  const [posts, setPosts] = useState(postsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All"); 

  const handleLike = (id) => {
    setPosts(posts.map((post) => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleRetweet = (id) => {
    setPosts(posts.map((post) => 
      post.id === id ? { ...post, retweets: post.retweets + 1 } : post
    ));
  };

  
  console.log("Category Value:", category);

  const filteredPosts = posts.filter(
    (post) =>
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === "All" || post.category === category)
  );

  return (
    <div className="feed container mt-3">
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        category={category} 
        setCategory={setCategory} 
      />
      {filteredPosts.map((post) => (
        <Post key={post.id} post={post} onLike={handleLike} onRetweet={handleRetweet} />
      ))}
      {filteredPosts.length === 0 && <p className="text-muted">No matching posts found.</p>}
    </div>
  );
};

export default Feed;
