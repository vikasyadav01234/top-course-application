import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { apiUrl,filterData} from "./data";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner"
const App = () => {
  
  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect ( ()=>{
    const fetchData = async() =>{
      setLoading(true);
      try{
        const res =await fetch(apiUrl);
        const output = await res.json();
        //save data into a variable
        setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    fetchData();
  },[]);
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      
      <div>
      <Filter
        filterData = {filterData}
      />
      </div>
      <div>
        {loading?(<Spinner/>):(<Cards/>)}
      </div>
            

      <Cards courses={courses}/>
    </div>
  )
};

export default App;
