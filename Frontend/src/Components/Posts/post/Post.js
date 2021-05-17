import { Card, CardMedia, CardContent, Typography, Button, CardActions } from "@material-ui/core"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import makeStyles from "./styles"
import moment from "moment"
import { useDispatch } from "react-redux"
import { deletePost, likeInc, currId } from "../../../actions/posts"

const Post = ({ post }) => {
    const classes = makeStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"));
    //console.log(post);

    const Like = () => {
        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.profile._id || user?.profile.googleId)) ?
                <>
                    <ThumbUpAltIcon fontSize="small" />
                    {post.likes.length > 1 ? `You and ${post.likes.length - 1} others` : "You liked it"}
                </> :
                <>
                    <ThumbUpAltOutlinedIcon fontSize="small" />
                    {post.likes.length > 1 ? "LIKES" : "LIKE"}
                    &nbsp;{post.likes.length}
                </>
        }
        return (
            <ThumbUpAltOutlinedIcon fontSize="small" />
        )
    }
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                {(user?.profile.googleId === post?.creator || user?.profile._id === post?.creator) && (
                    <Button style={{ color: "white" }} size="small" onClick={() => { dispatch(currId(post._id)) }}>
                        <MoreHorizIcon fontSize="default" />
                    </Button>
                )}
            </div>
            <div className={classes.details}>
                <Typography variant="body2">{post.tags.map((tag) => `#${tag}`)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography className={classes.message} variant="body2" color="textSecondary" >{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                {user ? (
                    <Button size="small" color="primary" onClick={() => { dispatch(likeInc(post._id)) }}>
                        <Like />
                    </Button>
                ) :
                    <div>
                        <ThumbUpAltOutlinedIcon fontSize="small" />&nbsp;{post.likes.length > 1 ? "LIKES" : "LIKE"} {post.likes.length}
                    </div>
                }
                {(user?.profile.googleId === post?.creator || user?.profile._id === post?.creator) && (
                    <Button size="small" color="primary" onClick={() => { dispatch(deletePost(post._id)) }}>
                        <DeleteIcon fontSize="small" />
                        DELETE
                    </Button>
                )}
            </CardActions>
        </Card>
    )
}

export default Post