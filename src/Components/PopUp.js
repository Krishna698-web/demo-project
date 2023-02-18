import React from 'react';
import ReactDOM from 'react-dom';
import Button from './UI/Button'
import Card from './UI/Card'
import styles from './PopUp.module.css';
import classes from './UI/Button.module.css';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
}

const Overlay = (props) => {
  return (
    <Card className={styles.popUp}>
      <header>
        <h2>{props.title}</h2>
      </header>
      <section>
        <p>{props.msg}</p>
      </section>
      <Button onClick={props.onConfirm} className={classes.button}>Okay</Button>
    </Card>
  )
}
const PopUp = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('back-drop'))}
      {ReactDOM.createPortal(<Overlay title={props.title} msg={props.msg} onConfirm={props.onConfirm}/>, document.getElementById('overlay'))}
    </>
  )
}

export default PopUp