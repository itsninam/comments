import { useState, useEffect } from "react";

const Form = ({
  currentUser,
  showReplyForm,
  setShowReplyForm,
  addComment,
  selectedComment,
  reply,
  index,
  autoFocus,
}) => {
  const [userInput, setUserInput] = useState(
    showReplyForm
      ? `@${reply.user.username},`
      : `@${selectedComment.user.username},`
  );

  useEffect(() => {
    autoFocus("textarea");
  }, [autoFocus]);

  return (
    <form action="" className={showReplyForm ? "reply-form" : "comment-form"}>
      <img
        src={require(`${currentUser.image.png}`)}
        alt={currentUser.username}
      />
      <textarea
        name="form"
        id="form"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      ></textarea>
      <button
        onClick={(event) => {
          addComment(event, selectedComment, userInput, index);
          //hide form after commenting on a reply
          showReplyForm && setShowReplyForm(false);
        }}
      >
        submit
      </button>
    </form>
  );
};

export default Form;
