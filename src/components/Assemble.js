import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
// import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

const Assemble = () => {

    let parts = JSON.parse(localStorage.getItem("selectedParts") || "[]");
    // console.log("In Assemble", parts)
    let selectedParts = []
    parts.forEach(element => {
        if(element.selected)
        selectedParts.push(element);
    });
    // console.log('selectedParts',selectedParts)

  const initialColumns = {
    part: {
      id: "part",
      list: selectedParts,
      name: "Product Parts"
    },
    combine: {
      id: "combine",
      name: "To Assemble",
      list: [
      ]
    }
  };

  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = ({ source, destination }) => {
      // console.log('source, destination', source,destination)
    if (destination === undefined || destination === null) return null;

    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    const start = columns[source.droppableId];
    // console.log('start', start)
    const end = columns[destination.droppableId];
    // console.log('end', end)

    if (start === end) {
      // console.log(start);
      const newList = start.list.filter((_, idx) => idx !== source.index);
      // console.log('newList',newList)

      newList.splice(destination.index, 0, start.list[source.index]);

      const newCol = {
        id: start.id,
        list: newList
      };

      setColumns((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {

      const newStartList = start.list.filter((_, idx) => idx !== source.index);

      const newStartCol = {
        id: start.id,
        list: newStartList
      };

      const newEndList = end.list;

      newEndList.splice(destination.index, 0, start.list[source.index]);

      const newEndCol = {
        id: end.id,
        list: newEndList
      };


      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol
      }));
      return null;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container direction={"row"} justify={"center"}>
        {Object.values(columns).map((column) => {
          // console.log("this is getting rendered", column);
          return (
            <Grid item xs={6}>
              <Column column={column} key={column.id} />
            </Grid>
          );
        })}
      </Grid>
    </DragDropContext>
  );
};

export default Assemble;
