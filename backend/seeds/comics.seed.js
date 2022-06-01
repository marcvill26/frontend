const mongoose = require("mongoose");
const Comics = require("../models/Comics");
const database = require("../database");

const comics = [
  {
    comic: "Spider-man",
    writer: "Brian Bendis",
    year: "2000",
    penciler: "Mark Gagley",
    image:
      "https://www.zonanegativa.com/imagenes/2016/03/Ultimate-Spider-Man-5-cover.jpg",
    issue: 166,
  },
];

const comicsDocument = comics.map((comic) => new Comics(comic));

database
  .connect()
  .then(async () => {
    const allComics = await Comics.find();
    if (allComics.length > 0) {
      await Comics.collection.drop();
    }
  })
  .catch((err) => console.error(`Error deleting information from DB:${err}`))
  .then(async () => {
    await Comics.insertMany(comicsDocument);
  })

  //desconectamos
  .catch((err) => console.log(`Error creating documents from DB:${err}`))
  .finally(() => mongoose.disconnect());
