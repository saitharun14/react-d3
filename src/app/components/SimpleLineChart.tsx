"use client";
import { useEffect, useState } from "react";
import * as d3 from "d3";

interface IData {
  date: Date;
  value: number;
}

const SimpleLineChart = () => {
  // const [dat, setDat] = useState();
  // const temp = d3
  //   .dsv(",", "/data/br.csv", (d) => {
  //     const res = d as unknown as IData;
  //     const date = d3.timeParse("%d/%m/%y")(res.date);
  //     return {
  //       date,
  //       value: res.value,
  //     };
  //   })
  //   .then((res) => setDat(res));
  // console.log(dat);
  const data = [
    { date: new Date("2022-09-05T18:30:00.000Z"), value: "166.539993" },
    { date: new Date("2022-09-06T18:30:00.000Z"), value: "168.419998" },
    { date: new Date("2022-09-07T18:30:00.000Z"), value: "168.559998" },
    { date: new Date("2022-09-08T18:30:00.000Z"), value: "171.800003" },
    { date: new Date("2022-09-11T18:30:00.000Z"), value: "172.899994" },
    { date: new Date("2022-09-12T18:30:00.000Z"), value: "169.759995" },
    { date: new Date("2022-09-13T18:30:00.000Z"), value: "168.110001" },
    { date: new Date("2022-09-14T18:30:00.000Z"), value: "166.199997" },
    { date: new Date("2022-09-15T18:30:00.000Z"), value: "163.619995" },
    { date: new Date("2022-09-18T18:30:00.000Z"), value: "162.820007" },
    { date: new Date("2022-09-19T18:30:00.000Z"), value: "164.259995" },
    { date: new Date("2022-09-20T18:30:00.000Z"), value: "163.289993" },
    { date: new Date("2022-09-21T18:30:00.000Z"), value: "159.479996" },
    { date: new Date("2022-09-22T18:30:00.000Z"), value: "155.710007" },
    { date: new Date("2022-09-25T18:30:00.000Z"), value: "154" },
    { date: new Date("2022-09-26T18:30:00.000Z"), value: "154.839996" },
    { date: new Date("2022-09-27T18:30:00.000Z"), value: "146.990005" },
    { date: new Date("2022-09-28T18:30:00.000Z"), value: "148.520004" },
    { date: new Date("2022-09-29T18:30:00.000Z"), value: "147.449997" },
    { date: new Date("2022-10-02T18:30:00.000Z"), value: "145.929993" },
    { date: new Date("2022-10-03T18:30:00.000Z"), value: "150.330002" },
    { date: new Date("2022-10-04T18:30:00.000Z"), value: "149.649994" },
    { date: new Date("2022-10-05T18:30:00.000Z"), value: "150.539993" },
    { date: new Date("2022-10-06T18:30:00.000Z"), value: "144" },
    { date: new Date("2022-10-09T18:30:00.000Z"), value: "143.690002" },
    { date: new Date("2022-10-10T18:30:00.000Z"), value: "143.449997" },
    { date: new Date("2022-10-11T18:30:00.000Z"), value: "142.649994" },
    { date: new Date("2022-10-12T18:30:00.000Z"), value: "136.690002" },
    { date: new Date("2022-10-13T18:30:00.000Z"), value: "144.419998" },
    { date: new Date("2022-10-16T18:30:00.000Z"), value: "141.089996" },
    { date: new Date("2022-10-17T18:30:00.000Z"), value: "145.889999" },
    { date: new Date("2022-10-18T18:30:00.000Z"), value: "144.75" },
    { date: new Date("2022-10-19T18:30:00.000Z"), value: "144.089996" },
    { date: new Date("2022-10-20T18:30:00.000Z"), value: "139.869995" },
    { date: new Date("2022-10-23T18:30:00.000Z"), value: "142.559998" },
  ];

  const newData = data.map((d) => ({
    date: d.date,
    value: +d.value,
  }));
  const width = 800;
  const height = 400;
  const xScale = d3
    .scaleTime()
    .domain(d3.extent(data, (d) => d.date) as [Date, Date])
    .range([0, width - 50]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(newData, (d) => d.value)] as [number, number])
    .range([height, 0]);

  useEffect(() => {
    // console.log(yScale.domain());
    d3.select("#lineChartContainer").selectAll("*").remove();
    const chart = d3
      .select("#lineChartContainer")
      .append("svg")
      .attr("width", width + 50)
      .attr("height", height + 50)
      .append("g")
      .attr("transform", `translate(${25}, ${0})`);

    const xAxis = chart
      .append("g")
      .attr("transform", `translate(${0},${height})`)
      .call(d3.axisBottom(xScale).tickSizeOuter(0).tickSize(0).tickPadding(9));

    const yAxis = chart
      .append("g")
      .call(
        d3
          .axisLeft(yScale)
          .ticks(20)
          .tickSizeOuter(0)
          .tickSize(0)
          .tickPadding(9)
      );

    const line = d3
      .line<IData>()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.value));

    const graph = chart
      .append("g")
      .append("path")
      .datum(newData)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 1)
      .attr("d", line);
  });
  return <div id="lineChartContainer" />;
};

export default SimpleLineChart;
