import { CircularProgress, Grid } from "@material-ui/core"
import React from "react"
import { useSelector } from "react-redux"
import makeStyles from "./styles"
import Post from "./post/Post"


const Posts = () => {
    const posts = useSelector(state => state.posts)
    const classes = makeStyles();
    console.log(posts);
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid container className={classes.mainContainer} alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid item key={post._id} xs={12} sm={6}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts