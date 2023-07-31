import React from "react";
import SingleItem from "./SingleItem";

// eslint-disable-next-line react/prop-types
const Items = ({ items, removeItem, editItem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            removeItem={removeItem}
            item={item}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

export default Items;
