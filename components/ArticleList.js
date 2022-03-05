import React from "react";
import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";
const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => {
        return (
          <>
            <ArticleItem article={article} key={article.id} />
          </>
        );
      })}
    </div>
  );
};

export default ArticleList;
