import React from "react";

const FilterTask = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-evenly items-center mt-5">
      <button
        onClick={() => setFilter("All")}
        className={`${filter == "All" ? "bg-blue-500 text-white" : "bg-white text-black"} py-2 px-4 rounded-md cursor-pointer`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("Pending")}
        className={`${filter == "Pending" ? "bg-blue-500 text-white" : "bg-white text-black"} py-2 px-4 rounded-md cursor-pointer`}
      >
        Pending
      </button>

      <button
        onClick={() => setFilter("Completed")}
        className={`${filter == "Completed" ? "bg-blue-500 text-white" : "bg-white text-black"} py-2 px-4 rounded-md cursor-pointer`}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterTask;
