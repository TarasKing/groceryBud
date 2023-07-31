import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      toast.error(`Please enter a value`);
      return;
    }
    addItem(newItem);
    setNewItem("");
    toast.success(`Item: "${newItem}" added successfully`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Grocery bud</h2>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
