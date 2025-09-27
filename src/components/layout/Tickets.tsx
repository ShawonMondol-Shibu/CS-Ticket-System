import { Calendar, Circle } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import data from "../../assets/data.json";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ToastContainer } from "react-toastify";

export default function Tickets({
  handleCard,
  handleComplete,
  progress,
  resolve,
}) {
  console.log(progress, resolve);

  return (
    <main className="flex flex-wrap items-start justify-between gap-8 container m-auto my-20 px-5">
      <section className="flex-3">
        <ToastContainer />
        <h1 className="text-2xl font-semibold text-[#34485A] mb-4">
          {data.title}
        </h1>
        <div className="grid grid-cols-2 flex-1/2 items-center gap-4">
          {data.tickets.map((item) => {
            const {
              ticket_id,
              title,
              description,
              priority,
              status,
              status_color,
              customer_name,
              date,
            } = item;
            return (
              <Card
                key={ticket_id}
                onClick={() => handleCard(title)}
                className="rounded py-2 border-none hover:cursor-pointer"
              >
                <CardContent className="px-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <CardTitle>{title}</CardTitle>
                    <Badge
                      variant={"secondary"}
                      className={cn(
                        `px-2 py-1 rounded-full`,
                        status === "Open"
                          ? "bg-green-500/30 text-green-900"
                          : status === "In-Progress"
                          ? "bg-yellow-300/40 text-yellow-900"
                          : "bg-green-500/30 text-green-900"
                      )}
                    >
                      {" "}
                      <Circle
                        color={status_color}
                        fill={status_color}
                        size={16}
                      />{" "}
                      {status}
                    </Badge>
                  </div>
                  <CardDescription>{description}</CardDescription>
                  <div className="flex items-center gap-2 justify-between text-sm text-[#627382]">
                    <div className="flex items-center gap-2 font-medium">
                      <span>{ticket_id}</span>
                      <span
                        className={cn(
                          priority === "HIGH PRIORITY"
                            ? " text-red-500"
                            : priority === "MEDIUM PRIORITY"
                            ? " text-yellow-500"
                            : " text-green-600"
                        )}
                      >
                        {priority}
                      </span>
                    </div>
                    <div className="font-normal space-x-2 flex items-center">
                      <span>{customer_name}</span>
                      <span className="uppercase flex items-center">
                        <Calendar size={24} />
                        {date}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* SideBar TaskBar */}
      <aside className="flex-1 space-y-10">
        {/* Task Status */}
        <div>
          <h1 className="text-2xl font-semibold text-[#34485A] mb-4">
            Task Status
          </h1>
          <div className="space-y-4">
            {progress.length === 0 ? (
              <span className="text-[#627382]">
                Select a ticket to add to Task Status
              </span>
            ) : (
              progress.map((item: string) => (
                <Card key={item} className="border-none rounded ">
                  <CardContent className="grid gap-3">
                    <h2>{item}</h2>
                    <Button
                      variant={"default"}
                      size={"lg"}
                      onClick={() => handleComplete(item)}
                      className="rounded bg-green-600"
                    >
                      Complete
                    </Button>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>

        {/* Resolved Task */}
        <div>
          <h2 className="text-2xl font-semibold text-[#34485A] mb-4">
            Resolved Task
          </h2>
          <div className="space-y-4">
            {resolve.length === 0 ? (
              <span className="text-[#627382]">No resolved tasks yet.</span>
            ) : (
              resolve.map((item: string) => (
                <Card key={item} className="border-none rounded bg-[#E0E7FF]">
                  <CardContent className="">{item}</CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </aside>
    </main>
  );
}
