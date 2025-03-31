import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function QuizPage() {
  const [currentQuiz, setCurrentQuiz] = useState([]);

  const path = useParams();

  const id = path.id;

  useEffect(() => {
    // hent en quiz med id som er lik id variabelen
    // .GET(`/quiz/${id}`)
    // .then((res)=>setCurrentQuiz(res.data))
  }, []);

  return (
    <>
      <h1>quiz ID {id}</h1>
    </>
  );
}

export default QuizPage;
