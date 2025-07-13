"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

export function NavHeader() {
  const pathname = usePathname();

  return (
    <div className="bg-black w-full">
      <div className="flex items-center justify-between p-4 max-w-[1328px] mx-auto">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <Link href="/" className="cursor-pointer">
            <div className="bg-white p-2 rounded">
              <Image
                src="/logo.png"
                alt="Rio Travel India Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList className="text-white gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "cursor-pointer transition-colors",
                      pathname === "/"
                        ? "bg-white text-black"
                        : "hover:bg-white hover:text-black"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/packages"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "cursor-pointer transition-colors",
                      pathname === "/packages"
                        ? "bg-white text-black"
                        : "hover:bg-white hover:text-black"
                    )}
                  >
                    Packages
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Contact Us */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className={cn(
              navigationMenuTriggerStyle(),
              "text-white cursor-pointer transition-colors",
              pathname === "/contact"
                ? "bg-white text-black"
                : "hover:bg-white hover:text-black"
            )}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-white">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="mb-4">Menu</SheetTitle>
              <nav className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 pl-4">
                  <SheetClose asChild>
                    <Link href="/" className="text-sm">
                      Home
                    </Link>
                  </SheetClose>
                </div>
                <div className="flex flex-col gap-2 pl-4">
                  <SheetClose asChild>
                    <Link href="/packages" className="text-sm">
                      Packages
                    </Link>
                  </SheetClose>
                </div>

                <div className="h-px bg-border my-4" />
                <Link href="/contact" className="font-bold">
                  Contact Us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
