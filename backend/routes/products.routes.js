const express = require("express");

const {
  upload,
  uploadToCloudinary,
} = require("../middlewares/file.middleware");
const Products = require("../models/Products");

//importamos ruta productos
const productsRouter = express.Router();

const products = [
  {
    article: "Spider-man funko",
    price: "12 euros",
    Stock: 20,
    urlImage: "https://img.dynos.es/img/1cb91/2062b/13912080605-0.jpg",
  },
];

//ENDPOINS  Get
productsRouter.get("/", async (req, res, next) => {
  let filtro = {};
  if (req.query.article) {
    filtro = { ...filtro, article: req.query.article };
  }
  console.log("Filtro de /products", filtro);
  return Products.find(filtro)
    .then((productsLeidos) => {
      return res.status(200).json(productsLeidos);
    })
    .catch((err) => {
      const error = new Error(error);
      error.status = 500;
      return next(error);
    });
});

//GET BY ID

productsRouter.get("/:id", (req, res, next) => {
  const id = req.params.id;
  return Products.findById(id)
    .then((product) => {
      if (!product) {
        const error = new Error("Product not found");
        error.status = 404;
        return next(error);
      }
      return res.status(200).json(product);
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    });
});

//post

productsRouter.post("/", (req, res, next) => {
  const imageProduct = req.file_url ? req.file_url : undefined;
  const newProduct = new Products({
    article: req.body.article,
    price: req.body.price,
    Stock: req.body.Stock,
    urlImage: req.body.urlImage,
    imagen: imageProduct,
  });
  return newProduct
    .save()
    .then(() => {
      return res.status(201).json(newProduct);
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = 500;
      return next();
    });
});

//put
productsRouter.put("/:id", (req, res, next) => {
  const id = req.params.id;
  return Products.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then((productActualizado) => {
      return res.status(200).json(productActualizado);
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    });
});

//DELETE

productsRouter.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  return Products.findByIdAndDelete(id)
    .then(() => {
      return res.status(200).json(`Produc with id: ${id} deleted`);
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    });
});

module.exports = productsRouter;
