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

  const handleBackspace = (event) => {
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((textArea) => {
      //if textarea contains the username, prevent backspace so user does not delete the username
      if (
        (showReplyForm &&
          textArea.textContent === `@${reply.user.username},`) ||
        textArea.textContent === `@${selectedComment.user.username},`
      ) {
        if (event.keyCode == 8) event.preventDefault();
      }
    });
  };

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
        onKeyDown={handleBackspace}
      ></textarea>
      <button
        className="submit-btn"
        onClick={(event) => {
          addComment(event, selectedComment, userInput, index);
          //hide form after commenting on a reply
          showReplyForm && setShowReplyForm(false);
        }}
      >
        Reply
      </button>
    </form>
  );
};

export default Form;
