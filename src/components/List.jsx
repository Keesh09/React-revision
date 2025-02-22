import React from "react";
import { BiXCircle } from "react-icons/bi";

const List = () => {
  return (
    <ul className="list-none w-full md:w-1/3 flex flex-col gap-y-4">
      <li className="bg-gray-600 text-gray-200 hover:bg-gray-700 py-4 px-3 rounded-lg flex justify-between items-center">
        <p>To record React Lessons</p>
        <BiXCircle className="text-2xl" />
      </li>
      <li className="bg-gray-600 text-gray-200 hover:bg-gray-700 py-4 px-3 rounded-lg flex justify-between items-center">
        <p>To record React Lessons</p>
        <BiXCircle className="text-2xl" />
      </li>
      <li className="bg-gray-600 text-gray-200 hover:bg-gray-700 py-4 px-3 rounded-lg flex justify-between items-center">
        <p>To record React Lessons</p>
        <BiXCircle className="text-2xl" />
      </li>
    </ul>
  );
};

export default List;
