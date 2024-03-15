import React from "react";
import Navbar from "./components/Navbar";
import { apiUrl,filterData} from "./data";
import Filter from "./components/Filter";
const App = () => {
  return (
    <div>
      <Navbar/>
      <Filter
        filterData = {filterData}
      />

      <Cards/>
    </div>
  )
};

export default App;
