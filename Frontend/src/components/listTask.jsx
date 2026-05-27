import React from "react";

const ListTask = ({ task, title, deletetask }) => {
  return (
    <div className="flex flex-col gap-3 mt-5">
      {task.map((t, idx) => {
        return (
          <div
            key={idx}
            className="w-full bg-white py-3 px-3 rounded-md flex justify-between items-center"
          >
            <div className="flex gap-3 items-center">
              <input type="checkbox" />
              <p>{t.title}</p>
            </div>

            <span
              className="cursor-pointer"
              onClick={() => {
                deletetask(t._id);
              }}
            >
              🗑️
            </span>
          </div>
        );
      })}

      {/* Progress Bar */}
      <div className="flex justify-center items-center w-full mt-5">
        <div className="w-56 h-4 bg-gray-300 rounded-2xl overflow-hidden">
          <div className="w-1/3 h-full bg-green-400 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ListTask;
