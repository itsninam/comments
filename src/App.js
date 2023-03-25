import "./App.scss";
import data from "./data.json";
import { useState, useEffect } from "react";
import Comments from "./Components/Comments";

const App = () => {
  const [comments, setComments] = useState([]);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    setComments(data.comments);
    setCurrentUser(data.currentUser);
  }, []);

  return (
    <section className="wrapper">
      {comments.map((comment) => {
        return (
          <Comments
            key={comment.id}
            comment={comment}
            currentUser={currentUser}
          />
        );
      })}
    </section>
  );
};

export default App;
