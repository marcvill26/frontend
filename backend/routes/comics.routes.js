const express = require("express");
const {
  upload,
  uploadToCloudinary,
} = require("../middlewares/file.middleware");

const Comics = require("../models/Comics");
const auth = require("../middlewares/auth.middleware");

//importando ruta
const comicsRouter = express.Router();

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

//get comics from
comicsRouter.get("/", async (req, res, next) => {
  let filtro = {};
  if (req.query.comic) {
    filtro = { ...filtro, comic: req.query.comic };
  }
  console.log("Filtro de /comics", filtro);
  return Comics.find(filtro)
    .then((comicsLeidos) => {
      return res.status(200).json(comicsLeidos);
    })
    .catch((err) => {
      const error = new Error(error);
      error.status = 500;
      return next(error);
    });
});

comicsRouter.get("/:id", (req, res, next) => {
  const id = req.params.id;
  return Comics.findById(id)
    .then((comic) => {
      if (!comic) {
        const error = new Error("Marvel comic not found");
        error.status = 404;
        return next(error);
      }
      return res.status(200).json(comic);
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    });
});

//POST
comicsRouter.post("/", (req, res, next) => {
  const imageComic = req.file_url ? req.file_url : undefined;
  const newComic = new Comics({
    comic: req.body.comic,
    writer: req.body.writer,
    year: req.body.year,
    penciler: req.body.penciler,
    image: req.body.image,
    issues: req.body.issues,
    imagen: imageComic,
  });
  return newComic
    .save()
    .then(() => {
      return res.status(201).json(newComic);
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    });
});

//PUT
comicsRouter.put("/:id", (req, res, next) => {
  const id = req.params.id;

  return Comics.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then((comicActualizado) => {
      return res.status(200).json(comicActualizado);
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    });
});

//DELETE

comicsRouter.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  return Comics.findByIdAndDelete(id)
    .then(() => {
      return res.status(200).json(`Comic con id: ${id} eliminado`);
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    });
});

module.exports = comicsRouter;
