import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const navLink: { title: string; url: string }[] = [
  { title: "Home", url: "#" },
  { title: "FAQ", url: "#" },
  { title: "Changelog", url: "#" },
  { title: "Blog", url: "#" },
  { title: "Download", url: "#" },
  { title: "Contact", url: "#" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center-safe justify-around bg-white sticky top-0 left-0">
      <div>
        <span className="text-2xl font-bold text-[#130B2D]">
          CS — Ticket System
        </span>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          {navLink.map((nav) => (
            <NavigationMenuItem key={nav.title}>
              <NavigationMenuLink href={nav.url}>
                {nav.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <NavigationMenuLink>
              {" "}
              <Button
                variant={"default"}
                size={"lg"}
                className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded text-white"
              >
                <Plus color="white" /> New Ticket
              </Button>{" "}
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
