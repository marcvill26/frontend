//requerimos dotenv
const dotenv = require("dotenv");
dotenv.config();

//requerimos mongoose
const mongoose = require("mongoose");

//guardamos URL
const mongoDb = require("mongoose");

//se configura la connect
const connect = async () => {
  try {
    const db = await mongoose.connect(mongoDb, {
      useNewUrlParser: true,
      useUnitfiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(`Connected with db: ${name}, in host ${host}`);
  } catch (error) {
    console.log(`Error to connect with DB`, error);
  }
};
module.exports = { connect };
