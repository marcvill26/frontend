const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const comicSchema = new Schema(
  {
    comic: { type: String, require: true },
    writer: { type: String, require: true },
    year: { type: Number },
    penciler: { type: String, require: true },
    image: { type: String },
    issue: { type: String },
  },
  {
    timestamps: true,
  }
);

const Comic = mongoose.model("Comic", comicSchema);

//exportamos models
module.exports = Comic;
