import React from "react";

function CommentsList({ comments }) {
  return (
    <>
      {comments.map((comment, key) => {
        return (
          <div className="comment" key={key}>
            <h4>{comment.username}</h4>
            <p>{comment.text}</p>
          </div>
        );
      })}
    </>
  );
}

export default CommentsList;
