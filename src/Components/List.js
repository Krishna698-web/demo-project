import React from "react";
import ListItem from "./ListItem";
import Card from "./UI/Card";
import styles from './List.module.css';

const List = (props) => {
    return (
        <Card className={styles.list}>
            <ul>
                {props.items.map((item) => (
                    <ListItem name={item.name} age={item.age} />
                ))}
            </ul>
        </Card>
    );
};

export default List;
