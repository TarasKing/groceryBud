import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";

const setLocalStorage = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
};

const getLocalStorage = () => {
  let items = localStorage.getItem("items");
  if (items) {
    items = JSON.parse(items);
  } else {
    items = [];
  }
  return items;
};

//Alternatime approach to getLocalStorage
// const defaultItems = JSON.parse(localStorage.getItem("items") || "[]");

function App() {
  // const [items, setItems] = useState(defaultItems);
  const [items, setItems] = useState(getLocalStorage());

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      complete: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success(`Item: "${itemName}" added successfully`);
  };

  const removeItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    setLocalStorage(updatedItems);
    toast.success(`Item removed successfully`);
  };

  const editItem = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        const updatedItem = { ...item, complete: !item.complete };
        return updatedItem;
      } else {
        return item;
      }
    });
    setItems(updatedItems);
    setLocalStorage(updatedItems);
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
}

export default App;
