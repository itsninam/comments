import { useState } from "react";

const Form = ({
  currentUser,
  showReplyForm,
  setShowReplyForm,
  addComment,
  selectedComment,
  reply,
  index,
}) => {
  const [userInput, setUserInput] = useState(
    showReplyForm
      ? `@${reply.user.username}, `
      : `@${selectedComment.user.username}, `
  );

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
        autoFocus
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
