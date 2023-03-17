import React from "react";
import data from "../data/data.json";
import { useParams } from "react-router-dom";

const Tags = () => {
  const id = useParams();
  const fiche = data.find((data) => data.id === id.id);
  const tags = fiche.tags || [];
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
