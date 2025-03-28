"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { id: number; title: string; href: string; description: string }[] = [
  {
    id:1,
    title: "Retratos",
    href: "/category/retrato",
    description:
      "Los mejores retratos de algunas de las personas que conocí en mis viajes.",
  },
  {
    id:2,
    title: "Paisajes",
    href: "/category/paisaje",
    description:
      "Los mejores paisajes que conocí en mis viajes.",
  },
  {
    id:3,
    title: "Históricas",
    href: "/category/historia",
    description:
      "Lugares ancestrales donde casi no se repiten, únicos y especiales.",
  },
  {
    id:4,
    title: "Ciudades",
    href: "/category/ciudad",
    description:
      "Fotos de algunas de las ciudades que visité en mis viajes.",
  },
]

const NavegationD= () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="cursor-pointer">About Me</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <p>Home</p>
                    <div className="mb-2 mt-4 text-lg font-medium">
                        Pato Turri
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Viajar por el mundo con mi cámara.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/category" title="Shop">
                Entra para poder ver todas mis fotos.
              </ListItem>
              <ListItem href="/ofertas" title="Ofertas">
                Entra para ver las ofertas y descuentos del momento.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="cursor-pointer">Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.id}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
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
  )
})
ListItem.displayName = "ListItem"

export default NavegationD
