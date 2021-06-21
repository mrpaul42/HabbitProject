import React, { useState } from "react";
import classes from "./AddHabbit.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddHabbit = (props) => {
  const [title, setTitle] = useState("");
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const [desc, setDesc] = useState("");
  const descHandler = (event) => {
    setDesc(event.target.value);
  };

  const [fileName, setFile] = useState("");
  const imgHandler = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  const [error,setError]=useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if(title.trim().length===0 || desc.trim().length===0){
      setError({
        title:"Invalid input",
        message:"Enter the valid Title and description"
      })
      return;
    }
    if(desc.trim().length<150){
      setError({
        title:"Invalid Description",
        message:"Description should be more than 150 words"
      })
      return;
    }
    const habbit={
      title:title,
      description:desc,
      url:fileName
    }
    props.onAdd(habbit);
    setTitle('');
    setDesc('');
    setFile('')
  };

  const errorHandler=()=>{
    setError(null);
  }

  return (
    <React.Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input type="text" value={title} id="title" onChange={titleHandler} />
        <label htmlFor="desc">Decsription:</label>
        <input type="text" value={desc} id="desc" onChange={descHandler} />
        <label htmlFor="img">Upload an image</label>
        <input type="file" onChange={imgHandler} id="img" />
        <img src={fileName} alt="" />
        <div>
          <Button type="submit">Add Habbit</Button>
        </div>
      </form>
    </Card>
    </React.Fragment>
  );
};

export default AddHabbit;
