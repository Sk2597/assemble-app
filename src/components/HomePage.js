import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Link } from "react-router-dom";
// import DraggableComponent from './DraggableComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 'auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  buttonRight:{
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(15),
  },
}));


const HomePage = () => {
    const classes = useStyles();
    return (
        <div style = {{padding: '5%'}}>
              {/* <CssBaseline /> */}
              <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
              <div style = {{}}>
              <Card className={classes.root} variant="outlined">
                <CardHeader
                    title="Assemble"
                />
                <CardMedia
                    className={classes.media}
                    image="/static/images/car.jpeg"
                    title="Car"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    On the next screen the above image has been divide into 6 equal parts! Select the parts and assemble back as shown.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                <div className={classes.buttonRight} >  
                <Link to="/selectparts">
                    <Button variant="contained" color="primary">
                        Start
                    </Button>
                </Link>
                </div>  
                </CardActions>
                </Card>
            </div>

              </Typography>

        </div>
    )
}

export default HomePage


/* <Link to="/add">
<button
  type="button"
  className="btn btn-primary btn-sm float-right my-3"
>
  Add
</button>
</Link> */
