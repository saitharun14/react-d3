"use client";
import RiskMeter from "@/app/components/RiskMeter";
import SimpleBar from "@/app/components/SimpleBar";
import SimpleCircle from "@/app/components/SimpleCircle";
import SimpleLineChart from "@/app/components/SimpleLineChart";
import SimplePie from "@/app/components/SimplePie";
import StackedAreaChart from "@/app/components/StackedAreaChart";
import ExpandableTable from "@/app/components/ExpandableTable";
import CSSTriangle from "@/app/components/CSSTriangle";
import DataExtraction from "./components/DataExtraction";
import ScrollSpy from "./components/ScrollSpy";
import ServerComp from "./components/ServerComp";
import { middleware } from "./serverexp/middleware";
import { redirect, useRouter } from "next/navigation";
import { headers } from "next/headers";
import Link from "next/link";
import ButtonGroup from "./components/ButtonGroup";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) {
  // DataExtraction();
  // const data = [

  //   label: "Seed Sale",
  //   value: 25.6,
  //   ,

  //   label: "Validator Sale",
  //   value: 8.2,
  //   ,

  //   label: "Founding Sale",
  //   value: 20.4,
  //   ,

  //   label: "Strategic Sale",
  //   value: 3,
  //   ,

  //   label: "Team",
  //   value: 20.2,
  //   ,

  //   label: "Public Auction Sale",
  //   value: 2.6,
  //   ,

  //   label: "Foundation",
  //   value: 20.2,
  //   ,
  // ];

  const color = [
    "#7A3C9A",
    "#3F74CE",
    "#CA94D9",
    "#8FD1FF",
    "#358A84",
    "#E05B00",
    "#79CCEF",
  ];
  const width = 1000;
  const height = 500;
  const innerRadius = 0.5;
  const outerRadius = 0.8;
  const router = useRouter();
  const defaultCur = "USD";
  const type = searchParams.type;
  const data = [
    {
      key: "a",
      value: "a1",
    },
    {
      key: "a",
      value: "a2",
    },
    {
      key: "b",
      value: "b1",
    },
    {
      key: "b",
      value: "b2",
    },
    {
      key: "b",
      value: "b3",
    },
    {
      key: "c",
      value: "c1",
    },
    {
      key: "c",
      value: "c2",
    },
    {
      key: "c",
      value: "c3",
    },
    {
      key: "c",
      value: "c4",
    },
  ];
  let displayData: Array<{ key: string; value: string }>;
  if (type === undefined) displayData = data;
  else if (typeof type === "string")
    displayData = data.filter((d) => d.key === type);
  else displayData = data.filter((d) => type.includes(d.key));
  return (
    <>
      <div>This is home</div>
      <Link href={"/serverexp"}>click to redirect</Link>
      <ButtonGroup typeSearchParam={type} />
      {/* <SimpleBar />
      <SimpleCircle />
      <SimplePie
        data=data
        width=width
        height=height
        innerRadius=innerRadius
        outerRadius=outerRadius
        color=color
        strokeLength=1.5
        arcLinkLabelsSkipAngle=0
      /> 
      <RiskMeter
        width=97
        height=97
        value=68
        fontSize=26
        innerRadius=0.8
        outerRadius=0.9
      /> 
      <div className="bg-green-500 w-28 h-28 before:content-[''] before:w-10 before:h-10 before:bg-red-400 "></div>
      <SimpleLineChart />
      <StackedAreaChart />
      <ExpandableTable />
      <CSSTriangle /> */}
      <div>
        {displayData.map((d, i) => (
          <div key={i}>
            <div>{d.key} : </div>
            <div>{d.value}</div>
          </div>
        ))}
      </div>
    </>
  );
}

interface metrics {
  present: string;
  oneDayAgo: string;
  weekAgo: string;
  halfMonthAgo: string;
  monthAgo: string;
}
