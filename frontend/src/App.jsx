import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/search/search";
import Footer from "./components/footer/footer";
import Marvelcomics from "./pages/MarvelComics/MarvelComics";
import Admincomics from "./pages/adminComics/adminComics";
import ShopCards from "./components/carShop/carShop";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
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

          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
