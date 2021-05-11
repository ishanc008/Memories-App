import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import React, { useState } from 'react'
import useStyles from "./styles"
import Input from "./Input"

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSignedUp, setIsSignedUp] = useState(false);

    const handleOnSubmit = () => {

    }

    const handleChange = () => {

    }

    const toggle = () => {
        setIsSignedUp((prev) => !prev);
    }

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    }

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword((prev) => !prev);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockIcon />
                </Avatar>
                <Typography variant="h5">{isSignedUp ? "Sign In" : "Sign Up"}</Typography>
                <form className={classes.form} onSubmit={handleOnSubmit}>
                    <Grid container spacing={2}>
                        {
                            !isSignedUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} half autofocus />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} handleShowPassword={handleShowPassword} type={showPassword ? "text" : "password"} />
                        {
                            !isSignedUp && (
                                <Input name="confirmPassword" label="Confirm Password" handleShowPassword={handleShowConfirmPassword} handleChange={handleChange} type={showConfirmPassword ? "text" : "password"} />
                            )
                        }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignedUp ? "Sign in" : "Sign up"}
                    </Button>
                    <Grid container justify="flex-end">
                        <Button onClick={toggle}>
                            {isSignedUp ? "Don't have an account??Sign Up" : "Already have an account!! Sign In"}
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
