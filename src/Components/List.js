import React from "react";
import ListItem from "./ListItem";
import Card from "./UI/Card";

const List = (props) => {
    return (
        <Card>
            <ul>
                {props.items.map((item) => (
                    <ListItem name={item.name} age={item.age} />
                ))}
            </ul>
        </Card>
    );
};

export default List;
