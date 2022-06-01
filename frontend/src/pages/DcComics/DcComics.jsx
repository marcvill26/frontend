import React, { useState, useEffect } from "react";
import axios from "axios";
import DcComic from "../../dcCards/dcCards";

const DcComics = () => {
  const [dccomics, setDcComics] = useState([]);
  useEffect(() => {
    axios.get("dc.json").then((response) => setDcComics(response.data));
  }, []);

  return (
    <div className={"dc-list"}>
      {dccomics.map((comicsDc) => {
        return (
          <DcComic
            key={comicsDc.id}
            id={comicsDc.id}
            hero={comicsDc.hero}
            nameHero={comicsDc.nameHero}
            writer={comicsDc.writer}
            year={comicsDc.year}
            image={comicsDc.image}
            description={comicsDc.description}
            collections={comicsDc.collections}
            penciler={comicsDc.penciler}
            issues={comicsDc.issues}
          />
        );
      })}
    </div>
  );
};

export default DcComics;
