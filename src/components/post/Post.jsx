import { MoreVert } from '@mui/icons-material';
import './Post.css';
import {Users} from "../../dummyData";
import { useState } from 'react';

const Post = ({ post }) => {
    const [like,setLike] = useState(post.like);
    const [isLiked,setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1 )
        setIsLiked(!isLiked)
    }
  return (
    <div className='postContainer'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter(u=> u.id == post.userId)[0].profilePicture} alt="person Pic"  className='postProfileImg'/>
                    <span className="postUserName"> {Users.filter(u=> u.id === post.userId)[0].username} </span>
                    <span className="postUserDate"> {post?.date} </span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText"> {post?.desc} </span>
                <img src={post.photo} alt="post pic" className='postImg' />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="assets/like.png" alt=""  onClick={likeHandler}/>
                    <img className='likeIcon' src="assets/heart.png" alt=""  onClick={likeHandler}/>
                    <span className="postLikeCounter"> {like} peoples like it </span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText"> {post?.comment} comments </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post