"use client";

import * as d3 from "d3";
import { useEffect, useState } from "react";

interface IData {
  date: string;
  value: number;
  value1: number;
  value2: number;
  value3: number;
}

const StackedAreaChart = () => {
  const [dat, setDat] = useState();
  // const temp = d3
  //   .dsv(",", "/data/br.csv", (d) => {
  //     const res = d as unknown as IData;
  //     const date = d3.timeParse("%m/%d/%Y")(res.date) as Date;
  //     return {
  //       date,
  //       value: res.value,
  //       value1: res.value1,
  //       value2: res.value2,
  //       value3: res.value3,
  //     };
  //   })
  //   .then((res) => setDat(res));
  // console.log(dat);
  const tempData = [
    {
      date: new Date("2022-12-31T18:30:00.000Z"),
      value: "10",
      value1: "20",
      value2: "30",
      value3: "40",
    },
    {
      date: new Date("2023-01-01T18:30:00.000Z"),
      value: "20",
      value1: "30",
      value2: "40",
      value3: "50",
    },
    {
      date: new Date("2023-01-02T18:30:00.000Z"),
      value: "30",
      value1: "40",
      value2: "50",
      value3: "60",
    },
    {
      date: new Date("2023-01-03T18:30:00.000Z"),
      value: "40",
      value1: "50",
      value2: "60",
      value3: "70",
    },
    {
      date: new Date("2023-01-04T18:30:00.000Z"),
      value: "50",
      value1: "60",
      value2: "70",
      value3: "80",
    },
    {
      date: new Date("2023-01-05T18:30:00.000Z"),
      value: "60",
      value1: "70",
      value2: "80",
      value3: "90",
    },
    {
      date: new Date("2023-01-06T18:30:00.000Z"),
      value: "70",
      value1: "80",
      value2: "90",
      value3: "100",
    },
    {
      date: new Date("2023-01-07T18:30:00.000Z"),
      value: "80",
      value1: "90",
      value2: "100",
      value3: "110",
    },
    {
      date: new Date("2023-01-08T18:30:00.000Z"),
      value: "90",
      value1: "100",
      value2: "110",
      value3: "120",
    },
    {
      date: new Date("2023-01-09T18:30:00.000Z"),
      value: "100",
      value1: "110",
      value2: "120",
      value3: "130",
    },
    {
      date: new Date("2023-01-10T18:30:00.000Z"),
      value: "110",
      value1: "120",
      value2: "130",
      value3: "140",
    },
    {
      date: new Date("2023-01-11T18:30:00.000Z"),
      value: "120",
      value1: "130",
      value2: "140",
      value3: "150",
    },
    {
      date: new Date("2023-01-12T18:30:00.000Z"),
      value: "130",
      value1: "140",
      value2: "150",
      value3: "160",
    },
    {
      date: new Date("2023-01-13T18:30:00.000Z"),
      value: "140",
      value1: "150",
      value2: "160",
      value3: "170",
    },
    {
      date: new Date("2023-01-14T18:30:00.000Z"),
      value: "150",
      value1: "160",
      value2: "170",
      value3: "180",
    },
  ];

  const data = tempData.map((d) => {
    return {
      date: d.date,
      value: +d.value,
      value1: +d.value1,
      value2: +d.value2,
      value3: +d.value3,
    };
  });

  const width = 800;
  const height = 400;
  const xScale = d3
    .scaleTime()
    .domain(data.map((d) => d.date))
    .range([0, width]);
  const StackGenerator = d3
    .stack()
    .keys(["value", "value1", "value2", "value3"]);
  console.log(StackGenerator);

  return <div>StackedAreaChart</div>;
};

export default StackedAreaChart;
