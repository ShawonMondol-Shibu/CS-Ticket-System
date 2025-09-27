import { Calendar, Circle } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import data from "../../assets/data.json";

export default function Tickets() {
  console.log(data.tickets);

  return (
    <main className="flex items-center gap-2 container m-auto mt-20 px-5">
      <section className="flex-5">
        <h1>{data.title}</h1>
        <div className="grid grid-cols-2 flex-1/2 items-center gap-4">
          {data.tickets.map((item) => {
            const {
              ticket_id,
              title,
              description,
              priority,
              priority_color,
              status,
              status_color,
              customer_name,
              date,
            } = item;
            return (
              <Card key={ticket_id} className="rounded py-2">
                <CardContent className="px-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <CardTitle>{title}</CardTitle>
                    <Badge
                      variant={"secondary"}
                      className={`bg-[${status_color}] px-2 py-1 rounded-full`}
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
                      <span className={`text-[${priority_color}]`}>
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
      <aside className="flex-2"></aside>
    </main>
  );
}
