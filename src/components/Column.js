import React from "react";
import { Droppable } from "react-beautiful-dnd";
import RootRef from "@material-ui/core/RootRef";
import List from "@material-ui/core/List";
import ListItemCustom from "./ListItemCustom";
import Typography from "@material-ui/core/Typography";

const Column = ({ column }) => {
  return (
    <div
      style={{
        backgroundColor: '#cfe8fc',
        margin: 20,
        padding: 20,
        color: "#3A728E",
        
      }}
    >
      <Typography variant={"h6"}>{column.id}</Typography>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <RootRef rootRef={provided.innerRef}>
            <List>
              {column.list.map((itemObject, index) => {
                // return <ListItemCustom index={index} itemObject={itemObject} key={itemObject.id}  />;
                return <ListItemCustom index={index} itemObject={itemObject} key={itemObject.id}  />;
              })}
              {provided.placeholder}
            </List>
          </RootRef>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
