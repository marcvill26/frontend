const express = require("express");
const {
  upload,
  uploadToCloudinary,
} = require("../middlewares/file.middleware");

//requerimos el modelo de dc comic
const DcComics = require("../models/ComicsDc");

//requerimos la authenticate
const auth = require("../middlewares/auth.middleware");

// llamamos a Router
const dcComicsRouter = express.Router();

const comicDc = [
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

//creamos los endpoints comenzando gon GET / alls
dcComicsRouter.get("/", async (req, res, next) => {
  let filtro = {};
  if (req.query.comic) {
    filtro = { ...filtro, comic: req.query.comic };
  }
  console.log("filtro /DcComic", filtro);
  return DcComics.find(filtro)
    .then((dccomicsLeidos) => {
      return res.status(200).json(dccomicsLeidos);
    })
    .catch((err) => {
      const error = new Error(error);
      error.status = 500;
      return next(error);
    });
});

//Creating GET by ID:
dcComicsRouter.get("/:id", (req, res, next) => {
  const id = req.params.id;
  return DcComics.findById(id)
    .then((dccomic) => {
      if (!dccomic) {
        const error = new Error("Dc comic not found");
        error.status = 404;
        return next(error);
      }
      return next(error);
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    });
});

//Creating POST endpoint first / all
dcComicsRouter.post("/", (req, res, next) => {
  const imageComicDc = req.file_url ? req.file_url : undefined;

  const newDcComic = new DcComics({
    comic: req.body.comic,
    writer: req.body.writer,
    year: req.body.year,
    penciler: req.body.penciler,
    image: req.body.image,
    issues: req.body.issues,
    image: imageComicDc,
  });

  return newDcComic
    .save()
    .then(() => {
      return res.status(201).json(newDcComic);
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    });
});

//creating PUT endpoint
dcComicsRouter.put("/:id", (req, res, next) => {
  const id = req.params.id;

  return DcComics.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then((comicActualizado) => {
      return res.status(200).json(comicActualizado);
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    });
});

//DELETE endpoint

dcComicsRouter.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  return DcComics.findByIdAndDelete(id)
    .then(() => {
      return res.status().json(`Dc comic with id: ${id} deleted`);
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    });
});

//esportamos router
module.exports = dcComicsRouter;
