import React from "react";
import NavBar from "./components/NavBar/NavBar";

import Home from "./pages/Home/Home";
import Marvelcomics from "./pages/MarvelComics/MarvelComics";
import DcComics from "../src/pages/DcComics/DcComics";
import Shop from "./pages/ShopCards/ShopCards";
import Login from "./pages/login/login";
import Footer from "./components/footer/footer";
import AdminPageComics from "./pages/adminComics/adminComics";
import AdminPageShop from "./pages/adminShop/adminShop";
import Search from "./components/search/search";
import ShopCards from "./pages/ShopCards/ShopCards";
import { paths } from "./constants";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

const { home, marvelComics, dcComics, shop, login, admin, adminShop } = paths;

function App() {
  return (
    <Router>
      <NavBar />
      <Search />
      <div className="App">
        <Routes>
          <Route path={home.url} element={<Home />}>
            {" "}
          </Route>
          <Route path={marvelComics.url} element={<Marvelcomics />}></Route>
          <Route path={dcComics.url} element={<DcComics />}></Route>
          <Route path={shop.url} element={<Shop />}></Route>
          <Route path={login.url} element={<Login />}></Route>
          <Route path={admin.url} element={<AdminPageComics />}></Route>
          <Route path={adminShop.url} element={<AdminPageShop />}></Route>
          <Route path={ShopCards.url} element={<ShopCards />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
