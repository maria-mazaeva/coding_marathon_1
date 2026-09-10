import CartList from "./CartList"
import Headers from "./Headers"
import { items as initialItems } from "./items";
import { useState } from "react";
import PriceDetails from "./PriceDetails";
import "./ShoppingCart.css";

function ShoppingCart() {
  const [items, setItems] = useState(initialItems);
  const [checkedItems, setCheckedItems] = useState({});

  const allChecked = items.length > 0 && items.every((item) => checkedItems[item.product]);

  const toggleItem = (product) => {
    setCheckedItems((prev) => ({...prev, [product]: !prev[product]}));
  };

  const toggleAll = () => {
    if (allChecked) {
      setCheckedItems({});
    } else {
      const next = {};
      items.forEach((item) => { next[item.product] = true; });
      setCheckedItems(next);
    }
  };

    const removeSelected = () => {
    setItems((prevItems) => prevItems.filter((item) => !checkedItems[item.product]));
    setCheckedItems({});
  };

  const addQuantity = (product) => {
    setItems((prevItems) => 
      prevItems.map((item) => 
        item.product === product
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  };

  const removeQuantity = (product) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product === product
          ? { ...item, quantity: Math.max(item.quantity - 1, 0)}
          : item
      )
    )
  };


  return (
    <div className="shopping-cart-box">
      ShoppingCart
      <div className="product-list-box">
        <Headers allChecked={allChecked} onToggleAll={toggleAll} onRemoveSelected={removeSelected}/>
        <CartList 
          items={items} 
          checkedItems={checkedItems} 
          onToggleItem={toggleItem}
          onAddQuantity={addQuantity} 
          onRemoveQuantity={removeQuantity}
          /> 
      </div>
      <PriceDetails items={items}/>
    </div>
  )
}
 
export default ShoppingCart;

