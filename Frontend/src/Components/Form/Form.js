import React, { useState } from "react"
import makeStyles from "./styles"
import { Paper, Typography, TextField, Button } from "@material-ui/core"
import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux"
import { putPosts, updatePost, currId } from "../../actions/posts"


const Form = () => {
    const classes = makeStyles();
    const dispatch = useDispatch();
    const currentId = useSelector(state => state.currentId)

    const [user, setUser] = useState({
        title: "",
        message: "",
        creator: "",
        tags: "",
        selectedFile: ""
    })

    const post = useSelector(state => (currentId ? state.posts.find((post) => post._id === currentId) : null))

    useEffect(() => {
        if (post) {
            setUser(post);
        }
    }, [post])

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        if (!post) {
            console.log("post req");
            dispatch(putPosts(user));
        }
        else {
            console.log("update req");
            dispatch(updatePost(currentId, user));
            dispatch(currId(""));
        }
        handleClear();
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        //console.log("post req");
        dispatch(putPosts(user));
        handleClear();
    }


    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleOnSubmit}>
                <Typography variant="h6" align="center">Creating a Memory</Typography>
                <TextField name="creator" label="creator" variant="outlined" fullWidth value={user.creator} onChange={(e) => setUser({ ...user, creator: e.target.value })}></TextField>
                <TextField name="title" label="title" variant="outlined" fullWidth value={user.title} onChange={(e) => setUser({ ...user, title: e.target.value })}></TextField>
                <TextField name="message" label="message" variant="outlined" fullWidth value={user.message} onChange={(e) => setUser({ ...user, message: e.target.value })}></TextField>
                <TextField name="tags" label="tags" variant="outlined" fullWidth value={user.tags} onChange={(e) => setUser({ ...user, tags: e.target.value.split(",") })}></TextField>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setUser({ ...user, selectedFile: base64 })} />
                </div>
                <Button color="primary" variant="contained" size="large" fullWidth type="submit" className={classes.buttonSubmit}>Submit</Button>
                <Button color="secondary" variant="contained" size="small" fullWidth onClick={handleClear}>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form