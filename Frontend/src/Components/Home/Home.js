import React, { useEffect } from 'react'
import { Container, Grid, Grow } from '@material-ui/core';
import Posts from "../Posts/Posts"
import Form from "../Form/Form"
import { useDispatch } from "react-redux"
import { getPosts } from "../../actions/posts"

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={2}>
                    <Grid item xs={12} sm={7}>
                        <Posts />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
