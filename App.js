import React from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";

const App = () => {

  return (
    <div>
      <Navbar></Navbar>

      <Filter filterData={filterData}></Filter>

      {/* <Cards></Cards> */}
      <h1>Hello</h1>
    </div>
    );
};

export default App;
