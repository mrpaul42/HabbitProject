import React from "react";
import Card from "../UI/Card";
import HabbitView from "./HabbitView";
import classes from "./ListHabbit.module.css";

const ListHabbit = (props) => {
  const deleteHandler=(event)=>{
    props.onDeleting(event)
  }

  return (
    <Card className={classes.users}>
      <ul>
        {props.habbits.map((habbit) => (
          <li key={habbit.id}>
          <HabbitView
            id={habbit.id}
            title={habbit.title}
            description={habbit.description}
            url={habbit.url}
            onDelete={deleteHandler}
          />
        </li>
        ))}
      </ul>
    </Card>
  );
};

export default ListHabbit;
