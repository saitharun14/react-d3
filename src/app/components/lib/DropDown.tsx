"use client";
import { MdArrowForwardIos } from "react-icons/md";
import { useEffect, useId, useState } from "react";
import Link from "next/link";

type TCurrency = "USD" | "CAD";

interface Iprops {
  width: number;
  label: string;
  options: Array<string>;
  className?: string;
  currentCur: string;
}

const DropDown = ({ width, label, options, className, currentCur }: Iprops) => {
  const [isOpen, setOpenStatus] = useState(false);
  const dropDownId = `drop-down-${useId()}`;

  const handleOutsideClick = (event: MouseEvent) => {
    const ref = document.getElementById(dropDownId);
    if (ref && !ref.contains(event.target as Node)) {
      setOpenStatus(false);
    }
  };

  const closeOnScroll = () => {
    if (isOpen) setOpenStatus(!isOpen);
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    document.addEventListener("scroll", closeOnScroll, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  });
  return (
    <div className={`flex items-center gap-[9px] ${className}`}>
      <label className="text-sm" htmlFor="dropDown">
        {label}
      </label>
      <div
        id={dropDownId}
        className="relative w-fit"
        onClick={() => {
          setOpenStatus(!isOpen);
        }}
      >
        <button
          type="button"
          className={`flex items-center gap-2 bg-[#616F76] text-white text-sm py-[5px] pl-[15px] pr-[10px] rounded-2xl`}
          name="dropDown"
          style={{ width: width }}
        >
          {currentCur}
          <MdArrowForwardIos className={isOpen ? "-rotate-90" : "rotate-90"} />
        </button>
        {isOpen && (
          <div
            className={`absolute top-[34px] z-10 bg-white border-[1px] border-[#616F76] text-sm rounded-[4px]`}
            style={{ width: width }}
          >
            {options.map((option, i) => (
              <Link
                key={i}
                href={`?cur=${option}`}
                className={`block
                 text-center hover:bg-[#616f7633] cursor-pointer`}
                onClick={() => {
                  setOpenStatus(!isOpen);
                }}
              >
                {option}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
