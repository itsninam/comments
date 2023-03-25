import "./App.scss";
import data from "./data.json";
import { useState, useEffect } from "react";
import Comments from "./Components/Comments";

const App = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(data.comments);
  }, []);

  return (
    <section>
      {comments.map((comment) => {
        return <Comments key={comment.id} comment={comment} />;
      })}
    </section>
  );
};

export default App;
