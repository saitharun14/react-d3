"use client";
import { useState } from "react";

const useSetState = (defaultCount: number) => {
  const [count, setCount] = useState(defaultCount);
  const setState = (num: number) => {
    setCount(count);
  };
  return { count, setState };
};

export default useSetState;
