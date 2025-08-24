"use client";
import { Rocket, Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

interface ServiceProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#benefits",
    label: "Pourquoi Kickup",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

const serviceList: ServiceProps[] = [
  {
    title: "Projets clés en main",
    description: "Sites, apps, logiciels sur mesure de A à Z",
  },
  {
    title: "Expertises en régie",
    description: "Renforcez vos équipes avec nos talents tech",
  },
  {
    title: "Conseil & Accompagnement",
    description: "Stratégie digitale et pilotage de projet",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="flex items-center">
        <div className="w-10 h-10 relative">
          <Image
            src="/kickup-logo-round.png"
            alt="Kickup"
            width={40}
            height={40}
            className="w-full h-full object-contain"
          />
        </div>
      </Link>

      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <div className="w-10 h-10 relative">
                      <Image
                        src="/kickup-logo-round.png"
                        alt="Kickup"
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[500px] grid-cols-1 gap-3 p-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-emerald-50 to-purple-50 dark:from-emerald-950/20 dark:to-purple-950/20">
                  <div className="w-12 h-12 relative flex-shrink-0">
                    <Image
                      src="/kickup-logo-round.png"
                      alt="Kickup"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      L'ESN nouvelle génération
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Partenaire digital sur mesure pour PME et ETI
                    </p>
                  </div>
                </div>

                <ul className="flex flex-col gap-2">
                  {serviceList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted transition-colors"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link
                  href={href}
                  className="text-base px-2 hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex items-center gap-2">
        <ToggleTheme />

        <Button
          asChild
          size="sm"
          className="bg-gradient-to-r from-emerald-500 to-purple-600 hover:from-emerald-600 hover:to-purple-700"
        >
          <Link href="#contact">Nous contacter</Link>
        </Button>
      </div>
    </header>
  );
};
