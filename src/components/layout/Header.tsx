import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";

// interface headerType{
//   inProgress:string[];
//   resolved:string[];
// }

export default function Header() {
  const headerData: { title: string; value: number }[] = [
    { title: "In Progress", value:0 },
    { title: "Resolved", value:0 },
  ];
  return (
    <header className="flex items-center justify-center gap-2 container m-auto mt-20 px-5">
      {headerData.map((item) => (
        <Card
          key={item.title}
          className={cn(
            `w-full  grid grid-cols-3 items-center p-0 `,
            item.title === "In Progress"
              ? "bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"
              : "bg-gradient-to-r from-[#54CF68] to-[#00827A]"
          )}
        >
          <img src="/vector1.png" alt="" />
          <CardContent className="text-center text-white">
            <span className="text-2xl font-normal">{item.title}</span>
            <br /><br />
            <span className="text-6xl font-semibold">{item.value}</span>
          </CardContent>
          <img src="/vector1.png" alt="" className="-scale-x-100 w-full" />
        </Card>
      ))}
    </header>
  );
}
