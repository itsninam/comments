import { useState } from "react";

const Form = ({
  currentUser,
  showReplyForm,
  setShowReplyForm,
  addComment,
  selectedComment,
  reply,
}) => {
  const [userInput, setUserInput] = useState();

  return (
    <form action="" className={showReplyForm ? "reply-form" : "comment-form"}>
      <img
        src={require("../images/avatars/image-juliusomo.png")}
        alt={currentUser.username}
      />
      <textarea
        name="form"
        id="form"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
        placeholder={
          showReplyForm
            ? `@${reply.user.username}, `
            : `@${selectedComment.user.username} `
        }
        autoFocus
      ></textarea>
      <button
        onClick={(event) => {
          addComment(event, selectedComment, userInput);
          //hide form after commenting on a reply
          {
            showReplyForm && setShowReplyForm(false);
          }
        }}
      >
        submit
      </button>
    </form>
  );
};

export default Form;
