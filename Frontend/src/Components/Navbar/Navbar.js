import { Link } from "react-router-dom"
import { AppBar, Button, Typography, Avatar, Toolbar } from '@material-ui/core';
import memories from "../../images/memories.png"
import makeStyles from "./styles"

const Navbar = () => {
    const classes = makeStyles();
    const user = null;
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
                        <div className={classes.profile}>
                            <Avatar className={classes.purple}>Dp</Avatar>
                            <Typography className={classes.username} variant="h6">Username</Typography>
                            <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                        </div>
                    ) : (
                        <Button component={Link} to="/Auth" variant="contained" >Sign In</Button>
                    )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar