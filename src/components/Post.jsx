import React from "react";
import { FaHeart, FaRetweet } from "react-icons/fa";

const Post = ({ post, onLike, onRetweet }) => {

  const formattedDate = new Date(post.timestamp).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="post card mb-3 bg-dark text-white">
      <div className="card-body">
        <div className="d-flex align-items-center mb-2">
          <img
            src={post.profilepic}
            alt="profile"
            className="profile-pic me-2 rounded-circle"
            style={{ width: "40px", height: "40px" }}
          />
          <h5 className="card-title mb-0">{post.user}</h5>
        </div>
        <p className="card-text">{post.content}</p>
        <p className="text-white-50 small">{formattedDate}</p>
        <button className="btn btn-outline-light btn-sm me-2" onClick={() => onLike(post.id)}>
          <FaHeart /> {post.likes || 0}
        </button>
        <button className="btn btn-outline-light btn-sm" onClick={() => onRetweet(post.id)}>
          <FaRetweet /> {post.retweets || 0}
        </button>
      </div>
    </div>
  );
};

export default Post;
