import React from 'react'
import styles from './ListItem.module.css'

const ListItem = (props) => {
  return (
    <li className={styles.listItem}>{props.name} is {props.age} years old.</li>
  )
}

export default ListItem;