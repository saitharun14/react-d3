import Link from "next/link";
import { redirect } from "next/navigation";
import DropDown from "../components/lib/DropDown";

const conversionRate = {
  USD: 1,
  CAD: 0.8,
} as const;

const Page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) => {
  const cur = searchParams.cur;
  if (cur === undefined) redirect(`/serverexp/?cur=${"USD"}`);
  return (
    <>
      <h1>Price</h1>
      <Link href={`?cur=USD`}>click for USD</Link>
      <Link href={`?cur=CAD`}>click for CAD</Link>
      <p>{2 * +conversionRate[cur as "USD" | "CAD"]}</p>
      <DropDown
        width={72}
        label={"Currency"}
        options={["USD", "CAD"]}
        className="mr-[5px] md:mr-0"
        currentCur={cur as string}
      />
    </>
  );
};

export default Page;
