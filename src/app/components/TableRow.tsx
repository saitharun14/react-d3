import ExpandButton from "./lib/ExpandButton";
import useOpenController from "./lib/useOpenController";

const TableRow = ({
  details,
  index,
}: {
  details: {
    date: Date;
    key: string;
    value: string;
    value1: string;
    value2: string;
    value3: string;
    subRows: {
      date: Date;
      key: string;
      value: string;
      value1: string;
      value2: string;
      value3: string;
    }[];
  };
  index: number;
}) => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
      <tr>
        <td className="ml-1">{details.date.getDate().toString()}</td>
        <td>{details.value}</td>
        <td>{details.value1}</td>
        <td>{details.value2}</td>
        <td>{details.value3}</td>
        <td>
          <ExpandButton isOpen={isOpen} toggle={toggle} />
        </td>
      </tr>
      {isOpen &&
        details.subRows.map((da, j) => (
          <tr key={j}>
            <td className="ml-1">{da.date.getDate().toString()}</td>
            <td>{da.value}</td>
            <td>{da.value1}</td>
            <td>{da.value2}</td>
            <td>{da.value3}</td>
          </tr>
        ))}
    </tbody>
  );
};

export default TableRow;
