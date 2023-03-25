const Form = ({ currentUser, showReplyForm }) => {
  return (
    <form action="" className={showReplyForm ? "reply-form" : "comment-form"}>
      <img
        src={require("../images/avatars/image-juliusomo.png")}
        alt={currentUser.username}
      />
      <textarea name="" id=""></textarea>
      <button>submit</button>
    </form>
  );
};

export default Form;
