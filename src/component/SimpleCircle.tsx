import * as d3 from "d3";
import { useEffect } from "react";

const SimpleCircle = () => {
  const size = 500;
  const radius = 100;
  useEffect(() => {
    const svg = d3
      .select("#circleContainer")
      .append("svg")
      .attr("width", size)
      .attr("height", size)
      .append("g");

    svg
      .append("circle")
      .attr("transform", "translate(150,150)")
      .attr("r", radius)
      .attr("fill", "tomato")
      .on("click", () => console.log("hi"))
      .on("mouseover", () => console.log("mouse"));
  });

  return <div id="circleContainer" />;
};

export default SimpleCircle;
