import React from "react";
import ArticlesList from "../components/ArticlesList";
import articleContent from "./article-content";

function ArticleListPage() {
  return (
    <div className="warpper">
      <h1>Articles</h1>
      <ArticlesList articles={articleContent} />
    </div>
  );
}

export default ArticleListPage;
