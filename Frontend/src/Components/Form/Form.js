import React, { useState, useEffect } from "react"
import makeStyles from "./styles"
import { Paper, Typography, TextField, Button } from "@material-ui/core"
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux"
import { putPosts, updatePost, currId } from "../../actions/posts"


const Form = () => {
    const classes = makeStyles();
    const dispatch = useDispatch();
    const currentId = useSelector(state => state.currentId)
    const currentUser = JSON.parse(localStorage.getItem("profile"));

    const [user, setUser] = useState({
        title: "",
        message: "",
        tags: "",
        selectedFile: ""
    })

    const post = useSelector(state => (currentId ? state.posts.find((post) => post._id === currentId) : null))

    useEffect(() => {
        if (post) {
            setUser(post);
        }
    }, [post])

    const handleClear = () => {
        setUser({
            title: "",
            message: "",
            tags: "",
            selectedFile: ""
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        if (!post) {
            console.log("post req");
            dispatch(putPosts({ ...user, name: currentUser?.profile?.name }));
        }
        else {
            console.log("update req");
            dispatch(updatePost(currentId, user));
            dispatch(currId(""));
        }
        handleClear();
    }

    return (
        <>
            {currentUser ?
                <Paper className={classes.paper}>
                    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleOnSubmit}>
                        <Typography variant="h6" align="center">{!post ? "Creating" : "Update"} a Memory</Typography>
                        <TextField name="title" label="Title" variant="outlined" fullWidth value={user.title} onChange={(e) => setUser({ ...user, title: e.target.value })}></TextField>
                        <TextField name="message" label="Message" variant="outlined" fullWidth multiline rows={3} value={user.message} onChange={(e) => setUser({ ...user, message: e.target.value })}></TextField>
                        <TextField name="tags" label="Tags(separated by , and without #)" variant="outlined" fullWidth value={user.tags} onChange={(e) => setUser({ ...user, tags: e.target.value.split(",") })}></TextField>
                        <div className={classes.fileInput}>
                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setUser({ ...user, selectedFile: base64 })} />
                        </div>
                        <Button color="primary" variant="contained" size="large" fullWidth type="submit" className={classes.buttonSubmit}>Submit</Button>
                        <Button color="secondary" variant="contained" size="small" fullWidth onClick={handleClear}>Clear</Button>
                    </form>
                </Paper> :
                <Paper className={classes.paper}>
                    <Typography variant="h6" align="center">
                        Please Sign In to create your own memories and like other's memories.
                    </Typography>
                </Paper>
            }
        </>
    )
}

export default Form