const config = require("./config");
const express = require("express");
const passport = require("passport");
require("../backend/auth/passport");
const { auth } = require("./middlewares/auth.middleware");
const comicsRouter = require("./routes/comics.routes");
const productsRouter = require("./routes/products.routes");
const usersRouter = require("./routes/users.routes");
const database = require("./database");

const PORT = config.PORT;

const server = express();

//JWT in Express
server.set("jwt-secret", config.JWT_SECRET);

//Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use(passport.initialize());

server.get("/", (req, res) => {
  res.status(200).send("Server is up & running");
});

server.use("/users", usersRouter);
server.use("/comics", comicsRouter);
server.use("/products", productsRouter);

server.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});

server.use((err, _req, res, _next) => {
  return res
    .status(err.status || 500)
    .json(err.message || "Error inesperado en Servidor");
});

database.connectDB().then(() => {
  console.log("Connected to Mongo database");
  server.listen(PORT, () => {
    console.log(`Initiated express server on port ${PORT}`);
  });
});
