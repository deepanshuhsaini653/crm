import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { RouteComponentProps } from "react-router";
import { TextField, InputAdornment, IconButton, Button, CircularProgress, Divider } from "@material-ui/core";
import { VisibilitySharp, VisibilityOffSharp, EmailSharp } from '@material-ui/icons';
import { setAuthToken } from "../../utils/types";
import { GetUSer } from "../../store/actions/user.action";

import Logo from './../../assets/images/logo.png'


const loginValidateSchema = yup.object().shape({
    email: yup.string().required().email().max(50),
    password: yup.string().required().max(50)
});

interface LoginCompoonentProps extends RouteComponentProps {
    getUser: () => any;
}

interface LoginFrom {
    email: string;
    password: string;
}


const LoginComponent: React.FC<LoginCompoonentProps> = (props) => {
    const { history, getUser } = props;

    const [showInput, setShowInput] = useState(false);
    const [continueLoder, setContinueLoder] = useState(false);
    const [showEye, setShowEye] = useState(false);
    const [btnLoader, setbtnLoader] = useState(false);

    const showPassword = () => {
        setShowEye(true)
    }
    const hidePassword = () => {
        setShowEye(false)
    }
    const continueHandler = () => {
        setContinueLoder(true);
        setTimeout(() => {
            setContinueLoder(false);
            setShowInput(true);
        }, 1000);
    }

    const loginSubmitHandler = (values: LoginFrom) => {
        const token = '122xzc32x1vxc32v1xc5v1xcv12cx1v1JHJJ';
        setbtnLoader(true);
        setAuthToken(token);
        getUser().then(() => {
            history.push('/dashboard');
        })
    }

    return (
        <div className="login_wrapper">
            <div className="login__card">
                <div className="ring"></div>
                <div className="ring2"></div>
                <div className="login__card--header">
                    {/* <h1 className="login-title">perfex <span><cite>crm</cite></span></h1> */}
                    <img src={Logo} alt="" />
                </div>
                <div className="login__card--content">
                    <h4>Login to "Air Pollution Action Dashboard"</h4>
                    <Formik initialValues={{ email: "admin@gmail.com", password: "123456" }} onSubmit={loginSubmitHandler} validationSchema={loginValidateSchema}>
                        {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit, isValid }) =>
                            (
                                <form onSubmit={handleSubmit} autoComplete="off">
                                    <TextField
                                        label="Enter Email"
                                        fullWidth
                                        variant="outlined"
                                        className="textField"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="email"
                                        error={!!errors.email && touched.email}
                                        helperText={touched.email && errors.email}
                                        value={values.email}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton className="iconStyle">
                                                        <EmailSharp />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    {showInput && (
                                        <Fragment>
                                            <TextField
                                                label="Enter Password"
                                                fullWidth
                                                variant="outlined"
                                                type={showEye ? "text" : "password"}
                                                className="textField"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                name="password"
                                                error={!!errors.password && touched.password}
                                                helperText={touched.password && errors.password}
                                                value={values.password}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            {!showEye ? <IconButton className="showHidePassIcon iconStyle" onClick={showPassword}><VisibilitySharp /></IconButton> : <IconButton className="showHidePassIcon iconStyle" onClick={hidePassword}><VisibilityOffSharp /></IconButton>}
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            <Button type="submit" disabled={btnLoader} variant="contained" fullWidth className="btn-primary">{!btnLoader ? "Login" : <CircularProgress size={25} className="btn-progress" />}</Button>
                                        </Fragment>
                                    )}
                                    {!showInput && (<Button type="button" variant="contained" onClick={continueHandler} fullWidth className="btn-primary">{!continueLoder ? "Continue" : <CircularProgress size={25} className="btn-progress" />}</Button>)}

                                </form>
                            )}
                    </Formik>
                </div>
                <div className="login__card--footer">
                    <Divider />
                    <Button color="primary" fullWidth className="linkone"> Forgot Password...?</Button>
                    <Button color="primary" fullWidth className="linkone"> I have not account...? Sign Up</Button>
                </div>
            </div>
        </div>
    );
};

export const Login = connect(null, { getUser: GetUSer })(LoginComponent);
