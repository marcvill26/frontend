const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dcComicSchema = new Schema(
  {
    comic: { type: String, require: true },
    writer: { type: String, require: true },
    year: { type: String, require: true },
    penciler: { type: String, require: true },
    image: { type: String },
    issue: { type: String },
  },
  {
    timestamps: true,
  }
);

const ComicDc = mongoose.model("ComicDc", dcComicSchema);

//exportamos esquema
module.exports = ComicDc;
