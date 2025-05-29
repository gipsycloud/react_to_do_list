import React from "react";
import Calculator from "./Calculator";
import CardList from "./Card";
import Reducer from "./Reducer";
import UseEffect from "./UseEffect";

const Home = () => {
  return (
    <div className="home">
      <CardList />
      <Calculator />
      <Reducer />
      <UseEffect />
    </div>
  );
}
export default Home;