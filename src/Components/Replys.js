import { useState } from "react";
import Form from "./Form";

const Reply = ({
  reply,
  currentUser,
  addComment,
  index,
  deleteComment,
  comment,
  comments,
  setComments,
}) => {
  const { content, createdAt, score, replyingTo, user } = reply;

  const [replyVote, setReplyVote] = useState(score);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [showEditComment, setShowEditComment] = useState(false);
  const [commentContent, setCommentContent] = useState(content);

  const editComment = (clickedComment, clickedReply, event) => {
    event.preventDefault();

    const updatedComment = comments.map((comment) => {
      if (comment.id === clickedComment.id) {
        comment.replies.filter((reply) => reply.id === clickedReply.id);
        //update reply content with edited content
        reply.content = commentContent;
      }
      //return previous comments
      return { ...comment };
    });

    setComments(updatedComment);
    setShowEditComment(false);
  };
  return (
    <>
      <div className="reply-container">
        <div className="reply">
          <div className="vote-container">
            <button
              className="upvote-btn"
              onClick={() => setReplyVote(score + 1)}
            >
              +
            </button>
            <p className="score">{replyVote}</p>
            <button
              className="downvote-btn"
              onClick={() => setReplyVote(score - 1)}
            >
              -
            </button>
          </div>
          <div className="content-container">
            <div className="user-info">
              <img src={require(`${user.image.png}`)} alt={user.username} />
              <p className="username">{user.username}</p>
              <p className="created-at">{createdAt}</p>
              {/* if reply is by current user, display edit/delete buttons */}
              {user.username === currentUser.username ? (
                <div className="button-container">
                  <button
                    className="edit-btn"
                    onClick={() => {
                      setShowEditComment(!showEditComment);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={(event) => deleteComment(reply, event)}
                  >
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
            {showEditComment ? (
              <form className="edit-form">
                <textarea
                  name=""
                  id=""
                  value={commentContent}
                  onChange={(event) => setCommentContent(event.target.value)}
                ></textarea>
                <button onClick={(event) => editComment(comment, reply, event)}>
                  update
                </button>
              </form>
            ) : (
              <div className="comment-body">
                <p>
                  {/* <span>@{replyingTo}, </span> */}
                  {content}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {showReplyForm && (
        <Form
          currentUser={currentUser}
          showReplyForm={showReplyForm}
          setShowReplyForm={setShowReplyForm}
          addComment={addComment}
          selectedComment={reply}
          reply={reply}
          index={index}
        />
      )}
    </>
  );
};

export default Reply;
