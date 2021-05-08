import { Card, CardMedia, CardContent, Typography, Button, CardActions } from "@material-ui/core"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import makeStyles from "./styles"
import moment from "moment"
import { useDispatch } from "react-redux"
import { deletePost, likeInc, currId } from "../../../actions/posts"

const Post = ({ post }) => {
    const classes = makeStyles();
    const dispatch = useDispatch();
    //console.log(post);
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: "white" }} size="small" onClick={() => { dispatch(currId(post._id)) }}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2">{post.tags.map((tag) => `#${tag}`)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography className={classes.message} variant="body2" color="textSecondary" >{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => { dispatch(likeInc(post._id)) }}>
                    <ThumbUpAltIcon fontSize="small" />
                    LIKES {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => { dispatch(deletePost(post._id)) }}>
                    <DeleteIcon fontSize="small" />
                    DELETE
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post