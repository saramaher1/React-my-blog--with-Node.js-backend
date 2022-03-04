import React, { useState } from "react";

function AddCommentForm({ articleName, setArticleInfo }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const addComment = async () => {
    const result = await fetch(`/api/article/${articleName}/add-comment`, {
      method: "post",
      body: JSON.stringify({ username: name, text: comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await result.json();
    setArticleInfo(body);
    setName("");
    setComment("");
  };
  return (
    <div id="add-comment-form">
      <h3>Add a Comment</h3>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Comment:
        <textarea
          rows="4"
          cols="50"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
      </label>
      <button onClick={() => addComment()}>Add Comment</button>
    </div>
  );
}

export default AddCommentForm;
