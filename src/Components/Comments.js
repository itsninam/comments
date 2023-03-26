import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";
import Reply from "./Replys";
import Form from "./Form";
import { useState } from "react";

const Comments = ({ comment, comments, currentUser, setComments }) => {
  const { content, createdAt, replies, score, user } = comment;

  const [commentVote, setCommentVote] = useState(comment.score);
  const [showCommentForm, setShowCommentForm] = useState(false);

  const addComment = (event, clickedComment, userInput) => {
    event.preventDefault();
    console.log(clickedComment);

    //reply object
    const reply = {
      id: parseInt(Date.now() * Math.random()),
      content: userInput,
      createdAt: new Date().toLocaleString(),
      score: 0,
      replyingTo: clickedComment.user.username,
      user: {
        image: {
          png: currentUser.image.png,
          webp: currentUser.image.webp,
        },
        username: currentUser.username,
      },
    };

    if (!userInput) {
      alert("Please enter a comment");
    } else {
      const updatedComment = comments.map((comment) => {
        console.log(comment, comment.replyingTo, comment.user.username);
        //if clicked object matches, return current comments and replies, and add new reply
        //also check if selected comment is a reply
        if (
          comment.id === clickedComment.id ||
          clickedComment.replyingTo === comment.user.username
        ) {
          return { ...comment, replies: [...comment.replies, reply] };
        }
        return comment;
      });
      //update comment obj to include new reply
      setComments(updatedComment);
      //hide form on submit
      setShowCommentForm(false);
    }
  };

  return (
    <>
      <div className="comment-container">
        <div className="comment">
          <div className="vote-container">
            <button
              className="upvote-btn"
              onClick={() => setCommentVote(score + 1)}
            >
              +
            </button>
            <p className="score">{commentVote}</p>
            <button
              className="downvote-btn"
              onClick={() => setCommentVote(score - 1)}
            >
              -
            </button>
          </div>
          <div className="content-container">
            <div className="user-info">
              <img
                src={require("../images/avatars/image-amyrobson.png")}
                alt={user.username}
              />
              <p className="username">{user.username}</p>
              <p className="created-at">{createdAt}</p>
              <button
                className="reply-btn"
                onClick={() => setShowCommentForm(!showCommentForm)}
              >
                <span></span>
                Reply
              </button>
            </div>
            <div className="comment-body">
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
      {showCommentForm && (
        <Form
          currentUser={currentUser}
          addComment={addComment}
          selectedComment={comment}
        />
      )}

      {replies.map((reply) => {
        return (
          <Reply
            key={reply.id}
            reply={reply}
            currentUser={currentUser}
            addComment={addComment}
          />
        );
      })}
    </>
  );
};

export default Comments;
