import React, { useState } from 'react'
import Button from './UI/Button';
import PopUp from './PopUp';
import Card from './UI/Card';
import classes from './Input.module.css';
import styles from './UI/Button.module.css';

const Input = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    let info = {
      name: name,
      age: age
    }
    if (name.length === 0 || age.length === 0) {
      setError({
        title: "Invalid Input",
        msg: 'Please fill in the required fields'
      })
      return;
    }
    if (age < 0) {
      setError({
        title: "Invalid Age",
        msg: 'Enter an age greater than 0'
      })
      return;
    }
    props.onGetData(info);
    setName('');
    setAge('');
  }
  return (
    <Card>
    {error && <PopUp title={error.title} msg={error.msg} onConfirm={()=> setError(null)}/>}
      <form onSubmit={submitHandler} className="form">
        <div className={classes.field}>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className={classes.field}>
          <label htmlFor='age'>Age:</label>
          <input type='number' id='age' value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <Button className={styles.button} type='submit'>Add</Button>
      </form>
    </Card>
  )
}

export default Input