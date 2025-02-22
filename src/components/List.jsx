import React from "react";
import Card from "./Card";

const List = ({ todos }) => {
  return (
    <>
      <ul className="list-none w-full md:w-1/3 flex flex-col gap-y-4">
        <Card todos={todos} />
      </ul>
    </>
  );
};

export default List;
