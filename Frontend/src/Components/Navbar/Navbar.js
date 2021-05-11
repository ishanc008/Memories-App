import { AppBar, Typography } from '@material-ui/core';
import memories from "../../images/memories.png"
import makeStyles from "./styles"

const Navbar = () => {
    const classes = makeStyles();
    return (
        <AppBar className={classes.appBar} position="static" color="primary">
            <div className={classes.brandContainer}>
                <Typography variant="h2" align="left" className={classes.heading}>
                    Memories
                </Typography>
                <img src={memories} className={classes.image} alt="memories" height="100" width="100" />
            </div>
        </AppBar>
    )
}

export default Navbar