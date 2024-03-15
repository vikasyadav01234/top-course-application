import React from "react";

const Filter = ({filterData}) => {
    return (
        <div>
      {filterData.map((data, index) => (
        <button key={index}>{data.title}</button>
      ))}
    </div>
    )
}

export default Filter