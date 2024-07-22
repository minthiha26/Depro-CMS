import {
  Bell,
  Car,
  Home,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="flex h-full fixed left-0 max-h-screen bg-[#242732] flex-col gap-2">
      <div className="flex justify-center h-[90px] items-center px-4 lg:px-6">
        <Link href="/" className="pt-3">
          <Image
            src={"/assets/images/Logo.png"}
            width={125}
            height={73.4}
            className="object-cover"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 mt-10 gap-4">
          <Link
            href={"/"}
            className="flex w-[244px] h-[70px] items-center gap-3 rounded-lg px-3 py-2 text-mutcustomeroverviewed-foreground transition-all hover:text-primary"
          >
            <Image
              src={"/assets/images/House.png"}
              width={26}
              height={26}
              className="object-cover"
              alt="House"
            />
            <span className="text-[18px]">Dashboard</span>
          </Link>
          <Link
            href={"/customers"}
            className="flex w-[244px] h-[70px] items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Image
              src={"/assets/images/UsersFour.png"}
              width={26}
              height={26}
              className="object-cover"
              alt="House"
            />
            <span className="text-[18px]">Customers</span>
          </Link>
          <Link
            href={""}
            className="flex w-[244px] h-[70px] items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Image
              src={"/assets/images/Gear.png"}
              width={26}
              height={26}
              className="object-cover"
              alt="Settings"
            />
            <span className="text-[18px]">Settings</span>
          </Link>
          <Link
            href={""}
            className="flex w-[244px] h-[70px] items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Image
              src={"/assets/images/UserCircleGear.png"}
              width={26}
              height={26}
              className="object-cover"
              alt="Admin’s Setting"
            />
            <span className="text-[18px]">Admin’s Setting</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
