import Calculator from "./component/Calculator";
import CardList from "./component/Card";
import Reducer from "./component/Reducer";
import UseEffect from "./component/UseEffect";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", margin: "2rem" }}>Card List</h1>
      <CardList />
      <Calculator />
      <UseEffect />
      <Reducer />
    </div>
  );
}

export default App;