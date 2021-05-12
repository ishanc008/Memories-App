import { Link, useHistory, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { AppBar, Button, Typography, Avatar, Toolbar } from '@material-ui/core';
import memories from "../../images/memories.png"
import makeStyles from "./styles"
import { useEffect, useState } from "react";

const Navbar = () => {
    const classes = makeStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location])

    console.log(user);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT", payload: "" })
        history.push("/Auth");
        setUser(null);
    }

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
                                <Avatar className={classes.purple} src={user.profile.imageUrl} alt={user.profile.imageUrl}></Avatar>
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