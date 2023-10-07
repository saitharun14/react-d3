"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSearchParams } from "next/router";

interface IProps {
  typeSearchParam: string | Array<string> | undefined;
}

const ButtonGroup = ({ typeSearchParam }: IProps) => {
  const router = useRouter();
  let arr: Array<string> = [];
  if (typeSearchParam !== undefined) {
    if (typeof typeSearchParam === "string") arr.push(typeSearchParam);
    else arr = typeSearchParam;
  }
  const [allParams, setAllParams] = useSearchParams();
  console.log(allParams.toString());
  allParams.set("type", "hi");
  console.log(allParams.toString());

  useEffect(() => {
    const inputList = document
      .getElementById("filtersContainer")
      ?.getElementsByTagName("input");
    const filterList = document
      .getElementById("container")
      ?.getElementsByTagName("section");
    if (typeSearchParam !== undefined && filterList) {
      filterList[1]
        .getElementsByTagName("div")[0]
        .getElementsByTagName("div")[0].style.backgroundColor = "#000";
      filterList[0]
        .getElementsByTagName("div")[0]
        .getElementsByTagName("div")[0].style.backgroundColor = "";
    }
    if (inputList) {
      for (let i = 0; i < inputList?.length; i++) {
        if (arr.includes(inputList[i].name)) {
          inputList[i].checked = true;
        }
      }
    }
  });

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const filterList =
      e.currentTarget.parentElement?.getElementsByTagName("section");
    const elementId = e.currentTarget.id;
    if (filterList) {
      for (var i = 0; i < filterList.length; i++) {
        if (filterList[i].id === elementId) {
          filterList[i]
            .getElementsByTagName("div")[0]
            .getElementsByTagName("div")[0].style.backgroundColor = "#000";
        } else
          filterList[i]
            .getElementsByTagName("div")[0]
            .getElementsByTagName("div")[0].style.backgroundColor = "";
      }
    }
  };

  const checkBoxOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const inputList = e.currentTarget.getElementsByTagName("input");
    for (let i = 0; i < inputList.length; i++) {
      if (inputList[i].checked) {
        if (!arr.includes(inputList[i].name)) arr.push(inputList[i].name);
      } else {
        const index = arr.indexOf(inputList[i].name);
        if (index !== -1) arr.splice(index, 1);
      }
    }
    router.push(
      "?" +
        arr
          .sort((a: string, b: string) => (a < b ? -1 : 1))
          .map((d) => `type=${d}`)
          .join("&")
    );
  };

  const onClickClose = () => {
    const filterList = document
      .getElementById("container")
      ?.getElementsByTagName("section");
    if (filterList !== undefined) {
      if (
        filterList[1]
          .getElementsByTagName("div")[0]
          .getElementsByTagName("div")[0].style.backgroundColor ===
          "rgb(0, 0, 0)" &&
        typeSearchParam === undefined
      ) {
        filterList[1]
          .getElementsByTagName("div")[0]
          .getElementsByTagName("div")[0].style.backgroundColor = "";
        filterList[0]
          .getElementsByTagName("div")[0]
          .getElementsByTagName("div")[0].style.backgroundColor = "#000";
        router.push("/");
      } else if (
        filterList[0]
          .getElementsByTagName("div")[0]
          .getElementsByTagName("div")[0].style.backgroundColor ===
        "rgb(0, 0, 0)"
      )
        router.push("/");
    }
  };

  return (
    <>
      <div id="container" className="flex flex-col gap-1 ml-10">
        <section
          className="flex gap-4 items-center"
          id="all-assets"
          onClick={onClick}
        >
          <div className="w-[18px] h-[18px] border-[1px] border-black rounded-[50%] relative ">
            <div
              className="w-2.5 h-2.5 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 indicator"
              id="indicator-1"
              style={{ backgroundColor: "#000" }}
            />
          </div>
          <p>All Asset Types</p>
        </section>
        <section
          className="grid grid-row-[18px_auto] grid-cols-[18px_auto] items-center gap-x-3 gap-y-1"
          id="choose-assets"
          onClick={onClick}
        >
          <div className="w-[18px] h-[18px] border-[1px] border-black rounded-[50%] relative">
            <div
              className="w-2.5 h-2.5 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 indicator"
              id="indicator-2"
            />
          </div>
          <p>I’ll Chose</p>
          <div
            className="col-span-2 flex flex-col gap-1 pl-[30px]"
            onClick={checkBoxOnClick}
            id="filtersContainer"
          >
            <div className="inline-flex items-center gap-3">
              <input type="checkbox" name="Cryptocurrencies" />
              <label htmlFor="Cryptocurrencies">Cryptocurrencies</label>
            </div>
            <div className="inline-flex items-center gap-3">
              <input type="checkbox" name="Network Tokens" />
              <label htmlFor="Network Tokens">Network Tokens</label>
            </div>
            <div className="inline-flex items-center gap-3">
              <input type="checkbox" name="Exchange Tokens" />
              <label htmlFor="Exchange Tokens">Exchange Tokens</label>
            </div>
            <div className="inline-flex items-center gap-3">
              <input type="checkbox" name="Stablecoins" />
              <label htmlFor="Stablecoins">Stablecoins</label>
            </div>
            <div className="inline-flex items-center gap-3">
              <input type="checkbox" name="DeFi" />
              <label htmlFor="DeFi">DeFi</label>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ButtonGroup;
