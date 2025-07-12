"use client";

import * as React from "react";
import Link from "next/link";
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavHeader() {
  const pathname = usePathname();

  return (
    <div className="bg-black w-full">
      <div className="flex items-center justify-between p-4 max-w-[1328px] mx-auto">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <Link href="/" className="cursor-pointer">
            LOGO
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList className="text-white gap-4">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "cursor-pointer transition-colors",
                      pathname === "/"
                        ? "bg-white text-black"
                        : "hover:bg-white hover:text-black"
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/packages" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "cursor-pointer transition-colors",
                      pathname === "/packages"
                        ? "bg-white text-black"
                        : "hover:bg-white hover:text-black"
                    )}
                  >
                    Packages
                  </NavigationMenuLink>
                </Link>
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
              <nav className="flex flex-col gap-4">
                <Link href="/docs" className="font-bold">
                  Documentation
                </Link>

                <Link href="#" className="font-bold">
                  Components
                </Link>
                <div className="flex flex-col gap-2 pl-4">
                  {components.map((component) => (
                    <Link
                      key={component.title}
                      href={component.href}
                      className="text-sm"
                    >
                      {component.title}
                    </Link>
                  ))}
                </div>

                <Link href="/docs" className="font-bold">
                  Documentation
                </Link>

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
