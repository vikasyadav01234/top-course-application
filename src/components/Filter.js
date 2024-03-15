import React from "react";

const Filter = ({filterData}) => {
    return (
        <div>
          {filterData.map((data, index) => (
          <button key={data.id}>{data.title}</button>
          ))}
        </div>
    )
}

export default Filter