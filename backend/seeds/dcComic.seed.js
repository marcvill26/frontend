const mongoose = require("mongoose"); //requerimos de mongoose
const ComicsDc = require("../models/ComicsDc"); //requerimos modelo de DC comic
const database = require("../database"); //requerimos a la base de datos

//creamos nuestra array de objeto dc
const dcComics = [
  {
    comic: "BATMAN",
    writer: "Tom King",
    year: "2022",
    penciler: "David Marquez",
    image:
      "https://www.ecccomics.com/content/productos/8208/cubierta_batman_victoria_oscura_black_label_WEB.jpg",
    issue: 3,
  },
];

const dcComicDocument = dcComics.map((comic) => new ComicsDc(comic));

//nos conectamos a la base de datos
database
  .connectDB()
  .then(async () => {
    const allComics = await ComicsDc.find();
    if (allComics.length > 0) {
      await ComicsDc.collection.drop();
    }
  })
  .catch((err) => console.error(`Error deleting information from DB:${err}`))
  .then(async () => {
    await ComicsDc.insertMany(dcComicDocument);
  })

  //desconectamos
  .catch((err) => console.log(`Error creating documents from DB:${err}`))
  .finally(() => mongoose.disconnect());
