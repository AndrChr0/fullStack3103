import CounterPage from "./components/CounterPage";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import QuizPage from "./components/QuizPage";
import TitleComponent from "./components/TitleComponent";
import ItemList from "./ItemList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <TitleComponent
    title={"count"}
    />
      <Routes>
        <Route path="/list" element={<ItemList />} />
        <Route path="/home/" element={<Home />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
      <footer>
        footer
      </footer>
    </>
  );
}

export default App;
