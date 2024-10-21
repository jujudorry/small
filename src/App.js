import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="container mt-5">
      <Header />
      <h1 className="text-center mb-4">Product List</h1>
      <ProductList />
      <Footer/>
    </div>
  );
}

export default App;
