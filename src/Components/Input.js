import React, { useState, useRef } from 'react'
import Button from './UI/Button';
import PopUp from './PopUp';
import Card from './UI/Card';
import classes from './Input.module.css';
import styles from './UI/Button.module.css';

const Input = (props) => {
  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  const enteredName = useRef();
  const enteredAge = useRef();

  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    
    let info = {
      name: enteredName.current.value,
      age: enteredAge.current.value
    }
    if (enteredName.length === 0 || enteredAge.length === 0) {
      setError({
        title: "Invalid Input",
        msg: 'Please fill in the required fields'
      })
      return;
    }
    if (enteredAge < 0) {
      setError({
        title: "Invalid Age",
        msg: 'Enter an age greater than 0'
      })
      return;
    }
    props.onGetData(info);
    enteredName.current.value = '';
    enteredAge.current.value = '';
  }
  return (
    <Card>
    {error && <PopUp title={error.title} msg={error.msg} onConfirm={()=> setError(null)}/>}
      <form onSubmit={submitHandler} className="form">
        <div className={classes.field}>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' ref={enteredName} />
        </div>
        <div className={classes.field}>
          <label htmlFor='age'>Age:</label>
          <input type='number' id='age' ref={enteredAge} />
        </div>
        <Button className={styles.button} type='submit'>Add</Button>
      </form>
    </Card>
  )
}

export default Input