import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./state";

export default () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);
  const handleAdd = () => {
    setTodoList((pre) => {
      return [
        ...pre,
        {
          id: Date.now(),
          text: inputValue,
        },
      ];
    });
  };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
