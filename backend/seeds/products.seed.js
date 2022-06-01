const mongoose = require("mongoose");
const Products = require("../models/Products");
const database = require("../database");

const comics = [
  {
    article: "Spider-man funko",
    price: "12 euros",
    Stock: 20,
    urlImage:
      "https://cdnfuturartshop-9d53.kxcdn.com/83862-large_default/marvel-pop-80%C2%BA-spider-man-593.jpg",
  },
];

const productsDocument = Products.map((product) => new Products(product));

database
  .connectDB()
  .then(async () => {
    const allproducts = await Products.find();
    if (allproducts.length > 0) {
      await Products.collection.drop();
    }
  })
  .catch((err) => console.error(`Error deleting information from DB:${err}`))
  .then(async () => {
    await Products.insertMany(productsDocument);
  })

  //desconectamos
  .catch((err) => console.log(`Error creating documents from DB:${err}`))
  .finally(() => mongoose.disconnect());
