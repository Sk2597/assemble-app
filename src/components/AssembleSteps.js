import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Assemble from './Assemble';
import FinalProduct from './FinalProduct';
import SelectParts from './SelectParts';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
  }));
    
  function getSteps() {
    return ['Select Parts', 'Assemble', 'Final Product'];
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
            <div>
                <SelectParts/>
            </div>
        )
      case 1:
        return (
            <div>
                <Assemble/>
            </div>
        )
      case 2:
        return (
            <div>
                <FinalProduct/>
            </div>
        )
      default:
        return 'Homepage';
    }
  }
  

const AssembleSteps = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
    return (
        <div className={classes.root1}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div className={classes.instructions}>{getStepContent(activeStep)}</div>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
         </div>
        </div>
    )
}

export default withRouter(AssembleSteps);
