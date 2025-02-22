import React, { useState } from "react";

const Form = ({ newTodoList }) => {
  const [value, setValue] = useState([]);

  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        newTodoList(value);
        setValue("");
      }}
      className="block w-full md:w-1/3 mb-5"
    >
      <div className="flex gap-4 w-full">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Add New Task"
          className="bg-gray-700 text-gray-200 py-2 px-3 rounded-lg w-2/3"
        />
        <button
          type="submit"
          className="bg-amber-600 text-light w-1/3 rounded-lg text-white"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default Form;
