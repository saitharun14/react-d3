"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useOpenController from "@/app/components/lib/useOpenController";
import ExpandButton from "@/app/components/lib/ExpandButton";
import TableRow from "@/app/components/TableRow";

const ExpandableTable = () => {
  const tempData = [
    {
      date: new Date("2022-12-31T18:30:00.000Z"),
      key: uuidv4(),
      value: "10",
      value1: "20",
      value2: "30",
      value3: "40",
      subRows: [
        {
          date: new Date("2022-12-31T18:30:00.000Z"),
          key: uuidv4(),
          value: "10",
          value1: "20",
          value2: "30",
          value3: "40",
        },
        {
          date: new Date("2023-01-01T18:30:00.000Z"),
          key: uuidv4(),
          value: "20",
          value1: "30",
          value2: "40",
          value3: "50",
        },
        {
          date: new Date("2023-01-02T18:30:00.000Z"),
          key: uuidv4(),
          value: "30",
          value1: "40",
          value2: "50",
          value3: "60",
        },
      ],
    },
    {
      date: new Date("2023-01-01T18:30:00.000Z"),
      key: uuidv4(),
      value: "20",
      value1: "30",
      value2: "40",
      value3: "50",
      subRows: [
        {
          date: new Date("2022-12-31T18:30:00.000Z"),
          key: uuidv4(),
          value: "10",
          value1: "20",
          value2: "30",
          value3: "40",
        },
        {
          date: new Date("2023-01-01T18:30:00.000Z"),
          key: uuidv4(),
          value: "20",
          value1: "30",
          value2: "40",
          value3: "50",
        },
        {
          date: new Date("2023-01-02T18:30:00.000Z"),
          key: uuidv4(),
          value: "30",
          value1: "40",
          value2: "50",
          value3: "60",
        },
      ],
    },
    {
      date: new Date("2023-01-02T18:30:00.000Z"),
      key: uuidv4(),
      value: "30",
      value1: "40",
      value2: "50",
      value3: "60",
      subRows: [
        {
          date: new Date("2022-12-31T18:30:00.000Z"),
          key: uuidv4(),
          value: "10",
          value1: "20",
          value2: "30",
          value3: "40",
        },
        {
          date: new Date("2023-01-01T18:30:00.000Z"),
          key: uuidv4(),
          value: "20",
          value1: "30",
          value2: "40",
          value3: "50",
        },
        {
          date: new Date("2023-01-02T18:30:00.000Z"),
          key: uuidv4(),
          value: "30",
          value1: "40",
          value2: "50",
          value3: "60",
        },
      ],
    },
    {
      date: new Date("2023-01-03T18:30:00.000Z"),
      key: uuidv4(),
      value: "40",
      value1: "50",
      value2: "60",
      value3: "70",
      subRows: [
        {
          date: new Date("2022-12-31T18:30:00.000Z"),
          key: uuidv4(),
          value: "10",
          value1: "20",
          value2: "30",
          value3: "40",
        },
        {
          date: new Date("2023-01-01T18:30:00.000Z"),
          key: uuidv4(),
          value: "20",
          value1: "30",
          value2: "40",
          value3: "50",
        },
        {
          date: new Date("2023-01-02T18:30:00.000Z"),
          key: uuidv4(),
          value: "30",
          value1: "40",
          value2: "50",
          value3: "60",
        },
      ],
    },
    {
      date: new Date("2023-01-04T18:30:00.000Z"),
      key: uuidv4(),
      value: "50",
      value1: "60",
      value2: "70",
      value3: "80",
      subRows: [
        {
          date: new Date("2022-12-31T18:30:00.000Z"),
          key: uuidv4(),
          value: "10",
          value1: "20",
          value2: "30",
          value3: "40",
        },
        {
          date: new Date("2023-01-01T18:30:00.000Z"),
          key: uuidv4(),
          value: "20",
          value1: "30",
          value2: "40",
          value3: "50",
        },
        {
          date: new Date("2023-01-02T18:30:00.000Z"),
          key: uuidv4(),
          value: "30",
          value1: "40",
          value2: "50",
          value3: "60",
        },
      ],
    },
    {
      date: new Date("2023-01-05T18:30:00.000Z"),
      key: uuidv4(),
      value: "60",
      value1: "70",
      value2: "80",
      value3: "90",
      subRows: [
        {
          date: new Date("2022-12-31T18:30:00.000Z"),
          key: uuidv4(),
          value: "10",
          value1: "20",
          value2: "30",
          value3: "40",
        },
        {
          date: new Date("2023-01-01T18:30:00.000Z"),
          key: uuidv4(),
          value: "20",
          value1: "30",
          value2: "40",
          value3: "50",
        },
        {
          date: new Date("2023-01-02T18:30:00.000Z"),
          key: uuidv4(),
          value: "30",
          value1: "40",
          value2: "50",
          value3: "60",
        },
      ],
    },
    {
      date: new Date("2023-01-06T18:30:00.000Z"),
      key: uuidv4(),
      value: "70",
      value1: "80",
      value2: "90",
      value3: "100",
      subRows: [
        {
          date: new Date("2022-12-31T18:30:00.000Z"),
          key: uuidv4(),
          value: "10",
          value1: "20",
          value2: "30",
          value3: "40",
        },
        {
          date: new Date("2023-01-01T18:30:00.000Z"),
          key: uuidv4(),
          value: "20",
          value1: "30",
          value2: "40",
          value3: "50",
        },
        {
          date: new Date("2023-01-02T18:30:00.000Z"),
          key: uuidv4(),
          value: "30",
          value1: "40",
          value2: "50",
          value3: "60",
        },
      ],
    },
  ];
  const isDisplayed = tempData.map((d) => false);
  // console.log(isDisplayed);
  const [count, setCount] = useState(false);
  const { isOpen, toggle } = useOpenController(false);
  return (
    <>
      <div>{count}</div>
      <table className="table-auto">
        <thead>
          <tr>
            <td>date</td>
            <td>value</td>
            <td>value1</td>
            <td>value2</td>
            <td>value3</td>
            <td></td>
          </tr>
        </thead>
        {tempData.map((d, i) => (
          <TableRow key={i} details={d} index={i} />
        ))}
      </table>
    </>
  );
};

export default ExpandableTable;
