import React from "react";
import { BiXCircle } from "react-icons/bi";

const Card = ({ todos }) => {
  if (!todos) {
    return <div className="">Loading...</div>;
  }
  return (
    <div>
      {todos.map((todo, index) => (
        <li
          key={index}
          className="bg-gray-600 mb-3 text-gray-200 hover:bg-gray-700 py-4 px-3 rounded-lg flex justify-between items-center"
        >
          {todo.task}
          <BiXCircle />
        </li>
      ))}
    </div>
  );
};

export default Card;
