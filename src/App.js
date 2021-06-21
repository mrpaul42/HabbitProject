import "./App.css";
import React, { useState } from "react";
import AddHabbit from "./component/Habbit/AddHabbit";
import ListHabbit from "./component/Habbit/ListHabbit";

function App() {
  const [habbitList, setHabbitList] = useState([]);
  const deleteHandler=(event)=>{
    setHabbitList((prev)=>{
      return prev.filter(goal=>goal.id!==event)
    })
  }

  const habbitHandler = (event) => {
    setHabbitList((prev) => {
      return [
        ...prev,
        {
          title: event.title,
          description: event.description,
          url: event.url,
          id:Math.random().toString()
        },
      ];
    });
  };
  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center" }}>Add Your Habbit</h1>
      <AddHabbit onAdd={habbitHandler} />
      <ListHabbit habbits={habbitList} onDeleting={deleteHandler}/>
    </div>
  );
}

export default App;
