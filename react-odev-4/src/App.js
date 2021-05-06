import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { products } from "./constants";
import ProductsGrid from "./components/ProductsGrid";

const App = () => {
  const [item, setItem] = useState(
    {
      cart: [
        { id: 0, value: 0 },
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
        { id: 5, value: 0 },
      ],
      itemCount: 0,
    }
  );

  function handleIncrement(product) {
    // cart array'inin kopyasını oluştur
    const cart = [...item.cart];
    // parametre olarak gelen product'ın cart array'i içerisindeki index'ini bul
    const index = item.cart.indexOf(product);
    // kopyalanan cart array'ine bu ürünü ekle ve value property'sini 1 artır
    cart[index] = { ...item.cart[index] };
    cart[index].value++;
    // getItemCount fonksiyonunu kullanarak sepetteki ürün sayısını bul
    const itemCount = getItemCount(cart);
    // state'i güncelle
    setItem({ cart, itemCount });
  };

  function handleDecrement(product) {
    const cart = [...item.cart];
    const index = item.cart.indexOf(product);
    cart[index] = { ...item.cart[index] };
    cart[index].value--;
    const itemCount = getItemCount(cart);
    setItem({ cart, itemCount });
  };

  function getItemCount(cart) {
    // Sepetteki toplam ürün sayısını bul
    let itemCount = cart.reduce((total, product) => total + product.value);

    return itemCount;
  };


    return (
      <div className="App">
        <Navbar totalItems={item.itemCount} />
        <ProductsGrid
          products={products}
          cart={item.cart}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
    );
  }


export default App;
