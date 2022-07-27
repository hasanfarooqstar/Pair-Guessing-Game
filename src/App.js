import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <h1 className="heading">Pair Guessing Game</h1>
      <p className="game-info">
        Select two cards with same content consequtively to make them vanish{" "}
      </p>
      <Cards />
    </>
  );
}

export default App;
