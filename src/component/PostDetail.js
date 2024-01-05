import React from 'react';
import '../css/PostDetail.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const burl='https://instabackend-011h.onrender.com';
 
const PostDetail = ({ item, toggleDetails }) => {
  const navigate = useNavigate();

   const notifyA=(msg)=>toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  const removePost = (postId) => {
    if (window.confirm("Do you really want to delete this post?")) {
      fetch(`${burl}/deletePost/${postId}`, {
        method: "delete",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
        .then((res) => res.json())
        .then((result) => {
          toggleDetails();
          notifyB(result.message);
          navigate("/");
        })
    }
  };
  return (

    <div className='showComment'>
      <div className='container'>
        <div className='postPic'>
          <img src={item.photo} alt='' />
        </div>
        <div className='details'>
          <div className='card-header' style={{ borderBottom: "1px solid #00000029" }}>
            <div className='card-pic'>
              <img src='' alt="" />
            </div>
            <h5>{item.postedBy.name}</h5>
            <div className='deletePost' onClick={() => { removePost(item._id) }}>
              <span className='material-symbols-outlined'>delete</span>
            </div>
          </div>
          <div className='comment-section' style={{ borderBottom: "1px solid #000000029" }}>
            {item.comments.map((comment) => {
              return (
                <p className='comm'>
                  <span className='commenter' style={{ fontWeight: "bolder" }}>
                    {comment.postedBy.name}{" "}</span>
                  <span className='commentText'>{comment.comment}</span>
                </p>
              )
            })}
          </div>
          <div className='card-content'>
            <p>{item.likes.lenght} Likes</p>
            <p>{item.body}</p>
          </div>
          <div className='add-comment'>
            <span className="material-symbols-outlined">mood</span>

            <input type='text' placeholder='Add a comment'
            // value={comment} onChange={(e)=>{setComment(e.target.value);}}
            />
            <button className='comment'
              onClick={() => {
                // makeComment(comment,item._id);
                // toggleComment();
              }}
            >Post</button>
          </div>
        </div>
      </div>
      <div className='close-comment' onClick={() => { toggleDetails() }}
      >
        <span className='material-symbols-outlined material-symbols-outlined-comment'>close</span>
      </div>
    </div>
  )
}
export default PostDetail;