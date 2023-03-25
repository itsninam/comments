const Reply = ({ reply, currentUser }) => {
  const { content, createdAt, score, replyingTo, user } = reply;
  return (
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
              <button className="reply-btn">
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
  );
};

export default Reply;
