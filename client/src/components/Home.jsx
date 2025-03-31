import { useParams, Link } from "react-router-dom";
function Home() {

    const path = useParams()

    console.log(path)



  return (
    <>
      <h1>Home</h1>
      <Link to={"/list"}>list</Link>
      <br />
      <Link to={`/quiz/${4}`}>quiz 4</Link>
      
    </>
  );
}

export default Home;
