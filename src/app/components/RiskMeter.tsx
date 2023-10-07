"use client";
import { useEffect } from "react";
import { select } from "d3-selection";
import { arc as d3Arc, pie as d3Pie, PieArcDatum } from "d3-shape";

interface IData {
  label: string;
  value: number;
}

interface IProps {
  width: number;
  height: number;
  value: number;
  isMain?: boolean;
  innerRadius?: number;
  outerRadius?: number;
  fontSize?: number;
}

const RiskMeter = (inputProps: IProps) => {
  const defaultProps = {
    isMain: false,
    innerRadius: 0,
    outerRadius: 1,
    fontSize: 16,
  };
  const props = {
    ...defaultProps,
    ...inputProps,
  };
  const radius = Math.min(props.width, props.height) / 2;

  const data = [
    {
      label: "1",
      value: props.value,
    },
    {
      label: "2",
      value: 100 - props.value,
    },
  ];
  const gradientData = [
    {
      offset: "0%",
      color: "#5C2F84",
    },
    {
      offset: "100%",
      color: "#D33766",
    },
  ];
  useEffect(() => {
    select("#semiPieContainer").selectAll("svg").remove();
    const span = document.querySelector("span");
    let spanWidth: number = 0;
    let spanHeight: number = 0;
    if (span) {
      span.style.display = "";
      span.style.fontSize = `${props.fontSize}px`;
      span.innerHTML = `${props.value}%`;
      spanWidth = span.offsetWidth;
      spanHeight = span.offsetHeight;
    }

    const svg = select("#semiPieContainer").append("svg");
    const chart = svg
      .attr("width", props.width)
      .attr("height", props.height + (props.isMain ? 10 : 0))
      .append("g")
      .attr("transform", `translate(${props.width / 2},${props.height / 2})`);

    const pie = d3Pie<IData>()
      .startAngle(-135 * (Math.PI / 180))
      .endAngle(135 * (Math.PI / 180))
      .sort(null)
      .value((d) => d.value);

    const arc = d3Arc<PieArcDatum<IData>>()
      .innerRadius(radius * props.innerRadius)
      .outerRadius(radius * props.outerRadius);

    const pieData = pie(data);

    const gradient = chart
      .append("g")
      .append("linearGradient")
      .attr("id", "colorGradient")
      .selectAll("stop")
      .data(gradientData)
      .enter()
      .append("stop")
      .attr("offset", (d) => d.offset)
      .attr("stop-color", (d) => d.color);

    const pieSlices = chart.append("g");
    pieSlices
      .selectAll("allSlice")
      .data(pieData)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => (i === 0 ? "url(#colorGradient)" : "#C4C4C4"));

    const valueText = chart.append("g");
    valueText
      .append("text")
      .text(`${data[0].value}%`)
      .style("font-size", props.fontSize)
      .attr(
        "transform",
        `translate(${-spanWidth * 0.45},${
          spanHeight * (props.isMain ? 1.5 : 0.25)
        })`
      );

    if (span) span.style.display = "none";
  });

  return (
    <>
      <div id="semiPieContainer">
        <span></span>
      </div>
    </>
  );
};

export default RiskMeter;
