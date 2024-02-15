/* eslint-disable react/prop-types */
import { useState } from "react";
import { CategoryContext } from "../context";

export default function CategoryProvider({ children }) {
  const [category, setCategory] = useState({ state: null });
  //   console.log(category);
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}
