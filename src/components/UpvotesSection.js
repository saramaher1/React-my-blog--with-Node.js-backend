import React from "react";

function UpvotesSection({ articleName, upvotes, setArticleInfo }) {
  const upvoteArticle = async () => {
    const result = await fetch(`/api/article/${articleName}/upvote`, {
      method: "post",
    });
    const body = await result.json();
    setArticleInfo(body);
  };
  return (
    <div id="upvotes-section">
      <button onClick={() => upvoteArticle()}>Add Upvote</button>
      <p>This article has been upvoted {upvotes} times!</p>
    </div>
  );
}

export default UpvotesSection;
