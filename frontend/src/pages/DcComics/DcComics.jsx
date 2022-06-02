import React, { useState, useEffect } from "react";
import axios from "axios";
import CardsMarvel from "../marvelCard/marvelCard";

const DcComics = () => {
  const baseURL = `http://localhost:3000`;
  const endpoint = "/dcComics";
  const [dccomics, setDcComics] = useState([]);
  useEffect(() => {
    axios
      .get(baseURL + endpoint)
      .then((response) => setDcComics(response.data));
  });
  return (
    <div className="dc-list">
      {dccomics.map((comicsDc) => {
        return (
          <CardsMarvel
            key={comicsDc.id}
            id={comicsDc.id}
            comic={comicsDc.comic}
            writer={comicsDc.writer}
            year={comicsDc.year}
            image={comicsDc.image}
            penciler={comicsDc.penciler}
            issues={comicsDc.issues}
          />
        );
      })}
    </div>
  );
};
export default DcComics;
