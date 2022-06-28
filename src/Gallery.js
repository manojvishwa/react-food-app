import React, { useState } from "react";
import "./index.css";
import Foodmenu from "./Foodmenu";
import MenuItem from "./MenuItem";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Category from "./Category";


const allCatCValues = [...new Set(Foodmenu.map((curElement) => curElement.category)), 'all'];


const Gallery = () => {

  const [items, setItem] = useState(Foodmenu);
  const [catItems, setCatItems] = useState(allCatCValues);

  const filterItem = (category) => {

    if(category === "all"){
      setItem(Foodmenu);
      return;
    }
    const updatedItems = Foodmenu.filter((curElement) => {
      return curElement.category === category;
    });
    setItem(updatedItems);
  }
  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        Order Your Favourite Dish
      </h1>
      <hr />

      <Category filterItem={filterItem}  catItems={catItems}/>
      <MenuItem items={items}/>

      
    </>
  );
};
export default Gallery;
