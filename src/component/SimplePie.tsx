"use client";

import { useEffect } from "react";
import { select } from "d3-selection";
import { pie as d3Pie, arc as d3Arc, PieArcDatum } from "d3-shape";
import { scaleOrdinal } from "d3-scale";

interface IData {
  label: string;
  value: number;
}

interface IProps {
  data: Array<IData>;
  width: number;
  height: number;
  color: Array<string>;
  outerRadius?: number;
  innerRadius?: number;
  strokeLength?: number;
  chartOpacity?: number;
  strokeColor?: string;
  strokeWidth?: number;
  arcLinkLabelsSkipAngle?: number;
}

const SimplePie = (inputProps: IProps) => {
  const defaultProps = {
    outerRadius: 1,
    innerRadius: 0,
    strokeLength: 1,
    chartOpacity: 1,
    strokeColor: "#000",
    strokeWidth: 1,
    arcLinkLabelsSkipAngle: 0,
  };

  const props = {
    ...defaultProps,
    ...inputProps,
  };

  const radius = Math.min(props.width, props.height) / 2;

  useEffect(() => {
    const span = document.querySelector("span");
    if (span) span.style.display = "";

    select("#pieChartContainer").selectAll("*").remove();
    const pieChart = select("#pieChartContainer")
      .append("svg")
      .attr("width", props.width)
      .attr("height", props.height)
      .append("g")
      .attr("transform", `translate(${props.width / 2},${props.height / 2})`);

    const pie = d3Pie<IData>()
      .sort(null)
      .value((d) => d.value);

    const arc = d3Arc<PieArcDatum<IData>>()
      .innerRadius(radius * props.innerRadius)
      .outerRadius(radius * props.outerRadius);

    const outerArcForLabelsPostion = d3Arc<PieArcDatum<IData>>()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9);

    // const colorScale = scaleOrdinal().range(props.color);

    const pieData = pie(props.data);

    const pieSlices = pieChart.append("g");
    pieSlices
      .selectAll("allSlice")
      .data(pieData)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => props.color[i])
      .style("opacity", props.chartOpacity);

    // label Lines
    const labelLines = pieChart.append("g");
    labelLines
      .selectAll("polylines")
      .data(pieData)
      .enter()
      .append("polyline")
      .attr("stroke", props.strokeColor)
      .attr("fill", "none")
      .attr("stroke-width", `${props.strokeWidth}px`)
      .attr("points", (d) => {
        const posA = arc.centroid(d);
        // const posB = outerArcForLabelsPostion.centroid(d);
        const posC = arc.centroid(d);
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        posC[0] = radius * props.strokeLength * (midAngle < Math.PI ? 1 : -1);
        const angle = ((d.endAngle - d.startAngle) * 180) / Math.PI;
        return angle > props.arcLinkLabelsSkipAngle
          ? ([posA, posC] as unknown as number)
          : [0, 0];
      });

    //Label name
    const labels = pieChart.append("g");
    labels
      .selectAll("allLabels")
      .data(pieData)
      .enter()
      .append("text")
      .text((d) => {
        const angle = ((d.endAngle - d.startAngle) * 180) / Math.PI;
        return angle > props.arcLinkLabelsSkipAngle ? d.data.label : "";
      })
      .attr("transform", (d) => {
        const pos = arc.centroid(d);
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius * props.strokeLength * (midAngle < Math.PI ? 1 : -1);
        if (span) {
          span.innerHTML = d.data.label;
          pos[0] =
            midAngle < Math.PI
              ? pos[0] - span.offsetWidth
              : pos[0] + span.offsetWidth;
        }
        pos[1] = pos[1] - 6;
        const angle = ((d.endAngle - d.startAngle) * 180) / Math.PI;
        return `translate(${pos[0]},${pos[1]})`;
      })
      .style("text-anchor", (d) => {
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        return midAngle < Math.PI ? "start" : "end";
      });

    //label value
    const labelValue = pieChart.append("g");
    labelValue
      .selectAll("allLabels")
      .data(pieData)
      .enter()
      .append("text")
      .text((d) => {
        const angle = ((d.endAngle - d.startAngle) * 180) / Math.PI;
        return angle > props.arcLinkLabelsSkipAngle ? `${d.data.value}%` : "";
      })
      .attr("transform", (d) => {
        const pos = arc.centroid(d);
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius * props.strokeLength * (midAngle < Math.PI ? 1 : -1);
        if (span) {
          span.innerHTML = `${d.data.value}%`;
          pos[0] =
            midAngle < Math.PI
              ? pos[0] - span.offsetWidth
              : pos[0] + span.offsetWidth;
          pos[1] = pos[1] + span.offsetHeight - 6;
        }
        return `translate(${pos[0]},${pos[1]})`;
      })
      .style("text-anchor", (d) => {
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        return midAngle < Math.PI ? "start" : "end";
      });

    const indicationDots = pieChart.append("g");
    indicationDots
      .selectAll("point")
      .data(pieData)
      .enter()
      .append("circle")
      .attr("r", (d) => {
        const angle = ((d.endAngle - d.startAngle) * 180) / Math.PI;
        return angle > props.arcLinkLabelsSkipAngle ? 2 : 0;
      })
      .attr("transform", (d) => `translate(${arc.centroid(d)})`);

    if (span) span.style.display = "none";
  });
  return (
    <>
      <span id="span"></span>
      <div id="pieChartContainer"></div>
    </>
  );
};

export default SimplePie;
