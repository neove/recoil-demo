import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "./state";
import Creator from "./creator";
export default () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <div>
      <Creator></Creator>
      {todoList.map((item) => {
        return <div key={item.id}>{item.text}</div>;
      })}
    </div>
  );
};
