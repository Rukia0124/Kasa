import React from "react";
import data from "../data/data.json";
import { useParams } from "react-router-dom";

const Tags = () => {
  const id = useParams();
  const fiche = data.find((data) => data.id === id.id);
  return (
    <div>
      <span>{fiche.tags}</span>
    </div>
  );
};

export default Tags;
