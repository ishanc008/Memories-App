import { Link, useHistory, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { AppBar, Button, Typography, Avatar, Toolbar } from '@material-ui/core';
import memories from "../../images/memories.png"
import makeStyles from "./styles"
import decode from "jwt-decode";
import { useEffect, useState } from "react";

const Navbar = () => {
    const classes = makeStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [user, setUser] = useState(null)
    const currentUser = JSON.parse(localStorage.getItem("profile"));

    const handleLogout = () => {
        dispatch({ type: "LOGOUT", payload: "" })
        history.push("/Auth");
        setUser(null);
    }

    useEffect(() => {
        const token = currentUser?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                handleLogout();
            }
        }

        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location])

    //console.log(user);


    return (
        <AppBar className={classes.appBar} position="static" color="primary">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" variant="h2" align="left" className={classes.heading}>
                    Memories
                </Typography>
                <img src={memories} className={classes.image} alt="memories" height="100" width="100" />
            </div>
            <Toolbar className={classes.toolbar}>
                {
                    user ? (
                        <div className={classes.logout}>
                            <div className={classes.profile}>
                                <Avatar className={classes.purple} src={user.profile.imageUrl} alt={user.profile.name}>{user.profile.name.charAt(0)}</Avatar>
                                <Typography className={classes.username} variant="h6">{user.profile.name}</Typography>
                            </div>
                            <Button variant="contained" color="secondary" onClick={handleLogout}>Logout</Button>
                        </div>
                    ) : (
                        <Button component={Link} to="/Auth" variant="contained" >Sign In</Button>
                    )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar