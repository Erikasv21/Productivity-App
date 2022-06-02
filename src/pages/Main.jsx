import React, { useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Cardx from "../components/Cardx";
import { v4 as uuidv4 } from "uuid";

const Main = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Item props
  const item = {
    id: uuidv4(),
    value: text,
  };

  // Add item to the list function
  const addItem = (e) => {
    e.preventDefault();

    // Alert if no text inside the value
    if (!text) {
      alert("Enter your task!");
      return;
    }

    // Alert if text is too long
    if (text.length > 20) {
      alert("Task is too long!");
      return;
    }

    // Alert if too many tasks
    if ([...items].length >= 6) {
      alert("There are too many tasks...");
      return;
    }

    setItems((oldList) => [...oldList, item]);
    setText("");
  };

  return (
    <>
      <Header />
      <Search text={text} handleChange={handleChange} addItem={addItem} />
      <Cardx
        items={items}
        item={item}
        setItems={setItems}
        setText={setText}
        text={text}
      />
    </>
  );
};

export default Main;
