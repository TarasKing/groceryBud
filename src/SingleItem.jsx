import React, { useState } from "react";

const SingleItem = ({ item, removeItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.complete}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textDecoration: item.complete && "line-through",
        }}
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        remove
      </button>
    </div>
  );
};

export default SingleItem;
