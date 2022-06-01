const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const users = require("./routes/users.routes");
const comics = require("./routes/comics.routes");
const productsRouter = require("./routes/products.routes");
const HTTPSTATUSCODE = require("./utils/httpStatusCode");
const PORT = 3000;
const server = express();
//importamos la conexion
const { connect } = require("./database");
const { appendFileSync } = require("fs");

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});

//using server
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Header", "Content-Type");
  next();
});

server.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:4200"],
    credential: true,
  })
);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(logger("dev"));

//using routes  for
server.use("/api/users", users);
server.use("/api/comics", comics);
server.use("/api/products", productsRouter);

//status erros
server.use((req, res, next) => {
  let err = new Error();
  err.status = 404;
  err.message = HTTPSTATUSCODE[404];
  next(err);
});

server.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || "Unexpected error");
});

server.disable("x-powered-by");
