import { redirect } from "next/navigation";

const ServerComp = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  redirect(`http://localhost:3000?cur=USD`);
  return <div>ServerComp</div>;
};

export default ServerComp;
