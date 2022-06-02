import React from "react";
import "../styles/cardx.css";
import CardItem from "./CardItem";
import Button from "@mui/material/Button";

const Cardx = ({ items, setItems, setText }) => {
  const handleRemove = (id) => {
    // If confirm delete item from list
    if (window.confirm("Are you sure you want to delete this task?")) {
      const newList = items.filter((item) => item.id !== id);
      setItems(newList);
      // If not confirm leave item in the list
    } else {
      return;
    }
  };

  // Delete all of the items inside the list
  const deleteAll = () => {
    if (window.confirm("Are you sure you want to delete all tasks?")) {
      setItems([]);
    } else {
      return;
    }
  };

  return (
    <>
      <div className="card-container">
        {items.map((item) => (
          <CardItem
            handleRemove={handleRemove}
            item={item}
            key={item.id}
            setText={setText}
            setItems={setItems}
            items={items}
          />
        ))}

        {[...items].length > 0 ? null : (
          <div className="no-items-container">
            <h2 className="no-items-text">
              There are no tasks at the moment...
            </h2>
            <p className="no-items-text">Write your tasks above 👆</p>
          </div>
        )}

        {[...items].length > 1 ? (
          <div className="delete-button-container">
            <Button
              type="submit"
              variant="outlined"
              onClick={deleteAll}
              className="btn-delete"
              sx={{
                color: "rgb(242, 156, 65)",
                border: "1px solid rgb(242, 156, 65)",
              }}
            >
              DELETE ALL
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Cardx;
