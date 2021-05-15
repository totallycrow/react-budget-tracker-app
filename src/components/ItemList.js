import React from "react";
import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ItemList = ({ id, onInputChange, type, label }) => {
  const [inputValue, setInputValue] = useLocalStorage(label, 0);

  useEffect(() => {
    onInputChange(id, inputValue, type);
    // Set LocalStorage key-value pairs
    localStorage.setItem(`${label}`, `${inputValue}`);
  }, [inputValue]);

  return (
    <div>
      <h3>Title</h3>
      <div class="flex">
        <div class="flex justify-center content-center text-sm border border-2 rounded-l px-20 py-2 bg-gray-300 whitespace-nowrap w-2 ">
          <div>{label}</div>
        </div>
        <input
          name="field_name"
          class="border border-2 rounded-r px-4 py-2 w-full"
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ItemList;