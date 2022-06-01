import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/search/search";
import Footer from "./components/footer/footer";
import Marvelcomics from "./pages/MarvelComics/MarvelComics";
import Admincomics from "./pages/adminComics/adminComics";
import ShopCards from "./components/carShop/carShop";
import DcComic from "./pages/DcComics/DcComics";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <Router>
      <NavBar />
      <Search />
      <div className="App">
        <Routes>
          <Route path="/marvelComics" element={<Marvelcomics />}></Route>
          <Route path="/adminComics" element={<Admincomics />}></Route>
          <Route path="/shop" element={<ShopCards />}></Route>
          <Route path="/dcComics" element={<DcComic />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
