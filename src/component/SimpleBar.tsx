"use client";
import * as d3 from "d3";
import { useEffect } from "react";

const SimpleBar = () => {
  const size = 500;
  const barWidth = 80;
  const data = [100, 200, 300, 400, 500];
  useEffect(() => {
    const svg = d3
      .select("#container")
      .append("svg")
      .attr("width", size)
      .attr("height", size);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, idx) => 5 + idx * (barWidth + 5))
      .attr("y", (d, i) => size - d)
      .attr("width", barWidth)
      .attr("height", size)
      .attr("fill", "green");
  });
  return <div id="container"></div>;
};

export default SimpleBar;
