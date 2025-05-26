import Calculator from "./component/Calculator";
import CardList from "./component/Card";
import UseEffect from "./component/UseEffect";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", margin: "2rem" }}>Card List</h1>
      <CardList />
      <Calculator />
      <UseEffect />
    </div>
  );
}

export default App;