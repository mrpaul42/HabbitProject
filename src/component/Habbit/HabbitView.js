import React from "react";
import classes from "./HabbitView.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const HabbitView = (props) => {
  const deleteHandler=()=>{
    props.onDelete(props.id);
  }
  return (
    <Card>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <img src={props.url} alt="" />
        <p>{props.description}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={deleteHandler}>Delete</Button>
      </footer>
    </Card>
  );
};

export default HabbitView;
