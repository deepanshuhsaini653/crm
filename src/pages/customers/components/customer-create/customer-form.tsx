import React, { Fragment } from 'react';
import { Stepper, Step, StepLabel, StepContent, Typography, Button, Paper, Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';


const CustomerFormComponent = (props: any) => {

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

    const firstStepForm = () => {
        return (
            <Fragment>
                <Grid container style={{ marginTop: "15px" }}>
                    <Grid item md={4}>
                        <div className="formGroup">
                            <TextField
                                label="Enter Company Name"
                                fullWidth
                                variant="outlined"
                                value=""
                            />
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="formGroup">
                            <TextField
                                label="Enter VAT Number"
                                fullWidth
                                variant="outlined"
                                value=""
                            />
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="formGroup">
                            <TextField
                                label="Enter Website"
                                fullWidth
                                variant="outlined"
                                value=""
                            />
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="formGroup">
                            <FormControl variant="outlined">
                                <InputLabel >Groups</InputLabel>
                                <Select
                                    value=""
                                    label="Groups"
                                    className="select"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>High Budget</MenuItem>
                                    <MenuItem value={20}>Low Budget</MenuItem>
                                    <MenuItem value={30}>VIP</MenuItem>
                                    <MenuItem value={40}>Wholesaler</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="formGroup">
                            <FormControl variant="outlined">
                                <InputLabel >Currency</InputLabel>
                                <Select
                                    value=""
                                    label="Currency"
                                    className="select"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>INR</MenuItem>
                                    <MenuItem value={20}>USD</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="formGroup">
                            <FormControl variant="outlined">
                                <InputLabel >Language</InputLabel>
                                <Select
                                    value=""
                                    label="Language"
                                    className="select"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>English</MenuItem>
                                    <MenuItem value={20}>Hindi</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="formGroup">
                            <FormControl variant="outlined">
                                <InputLabel >Country</InputLabel>
                                <Select
                                    value=""
                                    label="Country"
                                    className="select"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>India</MenuItem>
                                    <MenuItem value={20}>USA</MenuItem>
                                    <MenuItem value={20}>Germany</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="formGroup">
                            <FormControl variant="outlined">
                                <InputLabel >State</InputLabel>
                                <Select
                                    value=""
                                    label="State"
                                    className="select"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Uttar Pradesh</MenuItem>
                                    <MenuItem value={20}>Delhi NCR</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="formGroup">
                            <FormControl variant="outlined">
                                <InputLabel >City</InputLabel>
                                <Select
                                    value=""
                                    label="City"
                                    className="select"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Hapur</MenuItem>
                                    <MenuItem value={10}>Noida</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="formGroup">
                            <TextField
                                label="Enter Zip Code"
                                fullWidth
                                variant="outlined"
                                value=""
                            />
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="formGroup">
                            <TextField
                                label="Enter Address"
                                fullWidth
                                variant="outlined"
                                value=""
                            />
                        </div>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
    const secondStepForm = () => {
        return (
            <Fragment>
                <Grid container style={{ marginTop: "15px" }}>

                    <Grid item md={4}>
                        <div className="formGroup">
                            <FormControl variant="outlined">
                                <InputLabel >Country</InputLabel>
                                <Select
                                    value=""
                                    label="Country"
                                    className="select"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>India</MenuItem>
                                    <MenuItem value={20}>USA</MenuItem>
                                    <MenuItem value={20}>Germany</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="formGroup">
                            <FormControl variant="outlined">
                                <InputLabel >State</InputLabel>
                                <Select
                                    value=""
                                    label="State"
                                    className="select"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Uttar Pradesh</MenuItem>
                                    <MenuItem value={20}>Delhi NCR</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="formGroup">
                            <FormControl variant="outlined">
                                <InputLabel >City</InputLabel>
                                <Select
                                    value=""
                                    label="City"
                                    className="select"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Hapur</MenuItem>
                                    <MenuItem value={10}>Noida</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="formGroup">
                            <TextField
                                label="Enter Zip Code"
                                fullWidth
                                variant="outlined"
                                value=""
                            />
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="formGroup">
                            <TextField
                                label="Enter Address"
                                fullWidth
                                variant="outlined"
                                value=""
                            />
                        </div>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
    const thirdStepForm = () => {
        return (
            <Fragment>
                <Grid container style={{ marginTop: "15px" }}>

                    <Grid item md={4}>
                        <div className="formGroup">
                            <FormControl variant="outlined">
                                <InputLabel >Country</InputLabel>
                                <Select
                                    value=""
                                    label="Country"
                                    className="select"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>India</MenuItem>
                                    <MenuItem value={20}>USA</MenuItem>
                                    <MenuItem value={20}>Germany</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="formGroup">
                            <FormControl variant="outlined">
                                <InputLabel >State</InputLabel>
                                <Select
                                    value=""
                                    label="State"
                                    className="select"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Uttar Pradesh</MenuItem>
                                    <MenuItem value={20}>Delhi NCR</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="formGroup">
                            <FormControl variant="outlined">
                                <InputLabel >City</InputLabel>
                                <Select
                                    value=""
                                    label="City"
                                    className="select"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Hapur</MenuItem>
                                    <MenuItem value={10}>Noida</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="formGroup">
                            <TextField
                                label="Enter Zip Code"
                                fullWidth
                                variant="outlined"
                                value=""
                            />
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="formGroup">
                            <TextField
                                label="Enter Address"
                                fullWidth
                                variant="outlined"
                                value=""
                            />
                        </div>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }


    function getSteps() {
        return ['Customer Details', 'Billing Address', 'Shipping Address'];
    }

    function getStepContent(step: number) {
        switch (step) {
            case 0:
                return firstStepForm();
            case 1:
                return secondStepForm();
            case 2:
                return thirdStepForm();
            default:
                return 'Unknown step';
        }
    }



    return (
        <Paper elevation={1}>
            <div>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            <StepContent>
                                <Typography>{getStepContent(index)}</Typography>
                                <div >
                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}

                                        >
                                            Back
                  </Button>
                                        <Button
                                            variant="contained"
                                            className="button"
                                            onClick={handleNext}

                                        >
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} className="submitContainer" >
                        <Typography style={{ marginBottom: "20px" }}>All steps completed - Please submit your form</Typography>
                        <Button onClick={handleReset} className="button">
                            Submit
                        </Button>
                    </Paper>
                )}
            </div>
        </Paper>
    )
}

export const CustomerForm = CustomerFormComponent;
