import React, { useState } from "react";
import Card from "@mui/material/Card";
import CheckIcon from "@mui/icons-material/Check";
import "../styles/cardx.css";
import ClearIcon from "@mui/icons-material/Clear";

const CardItem = ({ handleRemove, item }) => {
  const [color, setColor] = useState("card-content-id");

  // Change the id with state to change the color of the item container
  const changeColor = () => {
    if (color === "card-content-id") {
      setColor("card-content-id2");
    } else {
      setColor("card-content-id");
    }
  };

  return (
    <>
      <Card className="card-content" id={color}>
        <div className="card-text">
          <p>{item.value}</p>
        </div>
        <div className="card-icons">
          <CheckIcon className="check" onClick={changeColor} />
          <ClearIcon className="clear" onClick={() => handleRemove(item.id)} />
        </div>
      </Card>
    </>
  );
};

export default CardItem;
