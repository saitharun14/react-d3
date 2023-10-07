"use client";
import { useState } from "react";

const Counter = ({
  count,
  callBack,
}: {
  count: number;
  callBack: (num: number) => void;
}) => {
  const [inc, setInc] = useState(count);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setInc(inc + 1);
          callBack(inc);
        }}
      >
        Click
      </button>
      <h1> {count}</h1>
    </>
  );
};

export default Counter;
