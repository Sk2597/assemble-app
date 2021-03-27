    import React, { useState, useEffect } from 'react';
    import { makeStyles } from '@material-ui/core/styles';
    import GridList from '@material-ui/core/GridList';
    import GridListTile from '@material-ui/core/GridListTile';
    import GridListTileBar from '@material-ui/core/GridListTileBar';
    import Checkbox from '@material-ui/core/Checkbox';
    import { Typography } from '@material-ui/core';
    // import { purple } from '@material-ui/core/colors';
    import Button from '@material-ui/core/Button';
    import { Link } from "react-router-dom";

    const useStyles = makeStyles((theme) => ({
        // root: {
        //     display: 'flex',
        //     flexWrap: 'wrap',
        //     justifyContent: 'space-around',
        //     overflow: 'hidden',
        //     backgroundColor: theme.palette.background.paper,
        //   },
        gridList: {
            flexWrap: 'nowrap',
            transform: 'translateZ(0)',
        },
        
        image: {
            height: "80%",
            width: "90%",
            marginRight: "20%"
        },
        submitButton: {
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(3),
        },
        }));

    const SelectParts = () => { 
    let selectedPartNames = []
    let selectedParts = []
    let selectAllCheckbox = false

    const classes = useStyles();
    const [partState, setPartState] = useState([]);

    useEffect(() => {
        let partState = [
            {id: "1",name: 'LeftWheel', selected: false, image:'static/images/LeftWheel.jpg', disableCheckbox: false},
            {id: "2",name: 'Trunk', selected: false, image:'static/images/Trunk.jpg', disableCheckbox: false},
            {id: "3",name: 'RightWheel', selected: false, image:'static/images/RightWheel.jpg', disableCheckbox: false},
            {id: "4",name: 'Roof', selected: false, image:'static/images/Roof.jpg', disableCheckbox: false},
            {id: "5",name: 'Hood', selected: false, image:'static/images/Hood.jpg', disableCheckbox: false},
            {id: "6",name: 'Floor', selected: false, image:'static/images/Floor.jpg', disableCheckbox: false},
        ]

        setPartState(
        partState.map(d => {
            return {
            id: d.id,
            selected: false,
            name: d.name,
            image: d.image,
            disableCheckbox: d.disableCheckbox
            };
        })
        );
    }, []);

    const submit = () => {
        //   console.log('submit called')
        localStorage.setItem("selectedParts", JSON.stringify(partState));
    }

    const handleCheckboxDisable = () => {
    // selectAllCheckbox =  partState!= null && partState.every(t => t.selected)
    //     console.log('selectAllCheckbox',selectAllCheckbox)
    if(partState)
    partState.forEach(t => {
        let index = selectedPartNames.indexOf(t.name);
        // console.log('index for name',index,t.name)
        // console.log('t.selected and name',t.selected,t.name)
        if(t.selected&&index===-1){
            // val not found, pushing onto array
            selectedPartNames.push(t.name);
            selectedParts.push(t);
            // console.log("if selected parts names", selectedPartNames)
        //   console.log("if selected parts", selectedParts)
        } 

        else if(!t.selected&&index!==-1){
        // val is found, removing from array
        selectedPartNames.splice(index,1);
        selectedParts.splice(index,1);
        // console.log("else selected part names", selectedPartNames)
        // console.log("else selected parts", selectedParts)
        }
        }
    )
    // console.log("final selected parts", selectedParts)
    // console.log("partState", partState)

    if(selectedPartNames.length>=3&&!selectAllCheckbox){
        partState.forEach(t => {
            if(t.selected !== true){
                t.disableCheckbox = true
            }

        })
    }

    if(selectedPartNames.length<3&&!selectAllCheckbox){
        partState.forEach(t => {
           t.disableCheckbox = selectAllCheckbox
        })
    }

    // pushElement(partState);
    }

        // const handleCheckboxDisable = () => {
        
        // }

    return (
        <div style = {{padding: '5%'}}>
            <span>
            <Typography variant="h6">Select All</Typography>
            <Checkbox
                name="allSelected"
                color="primary"
                label="Start"
                onChange={e => {
                    let checked = e.target.checked;
                    setPartState(
                    partState.map(d => {
                        selectAllCheckbox = checked;
                        d.selected = checked;
                        // console.log('all name selected', d.name,d.selected)
                        // console.log("partState", partState)
                        handleCheckboxDisable();
                        return d;
                    })
                    );
                }}
            />
            </span>
            
            <GridList cellHeight={300} className={classes.gridList} cols={4.5}>
                {partState.map((part,i) => (
                <GridListTile key={part.name}>
                    <img src={part.image} alt={part.name} className={classes.image} />
                <GridListTileBar
                title={part.name}
                actionIcon={
                    <div>
                    <Checkbox
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    onChange={event => {
                        let checked = event.target.checked;
                        setPartState(
                        partState.map(data => {
                            if (part.name === data.name) {
                            data.selected = checked;
                            // console.log('single name,selected',data.name,data.selected)
                            // console.log('parts selected', partState)
                            handleCheckboxDisable();
                            
                            }
                            return data;
                        })
                        );
                    }}
                    checked = {part.selected}
                    disabled = {part.disableCheckbox}
                />
                </div>
                }
                />
                </GridListTile>
                ))}
            </GridList> 

            <div>
                <div className={classes.submitButton}></div>
                <div>
                <Link to="/assemble">
                <Button variant="contained" color="primary" onClick={submit}>
                            Submit
                    </Button>
                </Link>
                
                </div>
            </div>
            
        
        </div>
    );
    }

    export default SelectParts







