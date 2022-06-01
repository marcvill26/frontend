const mongoose = require("mongoose");
const Products = require("../models/Products");
const database = require("../database");

const products = [
  {
    article: "Spider-man funko",
    price: "12 euros",
    Stock: 20,
    urlImage:
      "https://regalosde.es/8351-large_default/funko-pop-spider-man-far-from-home-spider-man-upgraded-suit.jpg",
  },
];

const productsDocument = products.map((product) => new Products(product));

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
