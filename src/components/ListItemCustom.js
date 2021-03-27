import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import { Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 220,
      minHeight: 220,
      maxWidth: 345,
      margin: 'auto',
    },
    media: {
      height: 200,
      width: 200,
    },
  }));

const ListItemCustom = ({ itemObject, index }) => {
  const classes = useStyles();
  return (
    <Draggable draggableId={itemObject.id} key={itemObject.id} index={index}>
      {(provided) => (
        <ListItem
          key={itemObject.id}
          // role={undefined}
          // dense
          // button
          ContainerComponent="li"
          ContainerProps={{ ref: provided.innerRef }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className={classes.root} style={{display: 'inline-block'}}>
            {/* <CardHeader title={`${itemObject.name}`} /> */}
            <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {itemObject.name}
                    </Typography>
                </CardContent>
            <CardMedia
              className={classes.media}
              image={`${itemObject.image}`}
            />
          </Card>
         
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="comments"
              question-uid={itemObject.id}
            >
              {/* <DeleteIcon /> */}
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )}
    </Draggable>
  );
};

export default ListItemCustom;
