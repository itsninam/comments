import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";
import Reply from "./Replys";

const Comments = ({ comment, currentUser }) => {
  const { content, createdAt, replies, score, user } = comment;

  return (
    <>
      <div className="comment-container">
        <div className="comment">
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
              <button className="reply-btn">
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

      {replies.map((reply) => {
        return <Reply reply={reply} currentUser={currentUser} />;
      })}
    </>
  );
};

export default Comments;
