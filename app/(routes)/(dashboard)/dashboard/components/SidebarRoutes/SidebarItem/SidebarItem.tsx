import Link from "next/link";
import { SidebarItemProps } from "./SidebarItem.type";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function SidebarItem(props: SidebarItemProps) {
  const { item } = props;
  const { icon: Icon, href, label } = item;

  const Pathname = usePathname();
  const activePath = Pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        `flex gap-x-2 mt-2 text-slate-700 text-sm item-center hover:bg-slate-300/20
         p-2 rounded-lg cursor-pointer`,
        activePath && "bg-slate-400/20"
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1}></Icon>
      {label}
    </Link>
  );
}
