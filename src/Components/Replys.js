import { useState } from "react";
import Form from "./Form";

const Reply = ({ comment, reply, currentUser, addComment }) => {
  const { content, createdAt, score, replyingTo, user } = reply;
  const [showReplyForm, setShowReplyForm] = useState(false);

  return (
    <>
      <div className="reply-container">
        <div className="reply">
          <div className="vote-container">
            <button className="upvote-btn">+</button>
            <p className="score">{score}</p>
            <button className="downvote-btn">-</button>
          </div>
          <div className="content-container">
            <div className="user-info">
              <img
                src={require("../images/avatars/image-amyrobson.png")}
                alt={user.username}
              />
              <p className="username">{user.username}</p>
              <p className="created-at">{createdAt}</p>
              {/* if reply is by current user, display edit/delete buttons */}
              {user.username === currentUser.username ? (
                <div className="button-container">
                  <button className="edit-btn">
                    <span></span>
                    Edit
                  </button>
                  <button className="delete-btn">
                    <span></span>
                    Delete
                  </button>
                </div>
              ) : (
                <button
                  className="reply-btn"
                  onClick={() => setShowReplyForm(!showReplyForm)}
                >
                  <span></span>
                  Reply
                </button>
              )}
            </div>
            <div className="comment-body">
              <p>
                <span>@{replyingTo}, </span>
                {content}
              </p>
            </div>
          </div>
        </div>
      </div>
      {showReplyForm && (
        <Form
          currentUser={currentUser}
          showReplyForm={showReplyForm}
          setShowReplyForm={setShowReplyForm}
          addComment={addComment}
          selectedComment={comment}
          reply={reply}
        />
      )}
    </>
  );
};

export default Reply;
