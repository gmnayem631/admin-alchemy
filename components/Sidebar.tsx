import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  CreditCard,
  Folders,
  LayoutDashboard,
  Newspaper,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <Command className="max-w-sm rounded-none border bg-secondary">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList className="max-h-none overflow-visible">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <LayoutDashboard className="w-4 h-4 mr-2" />
            <Link href={"/"}>Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className="w-4 h-4 mr-2" />
            <Link href={"/posts"}>Posts</Link>
          </CommandItem>
          <CommandItem>
            <Folders className="w-4 h-4 mr-2" />
            <Link href={"/categories"}>Categories</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="h-4 w-4 mr-2" />
            <span>Profile</span>
            <CommandShortcut>Ctrl + P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="h-4 w-4 mr-2" />
            <span>Billing</span>
            <CommandShortcut>Ctrl + B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="h-4 w-4 mr-2" />
            <span>Settings</span>
            <CommandShortcut>Ctrl + S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Sidebar;
