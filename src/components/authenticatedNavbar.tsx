import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { Logo } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import { useAuthUserStore } from "@/store/useAuthUserStore";

export const AuthenticatedNavbar = () => {
  const { isLoggedIn } = useAuthUserStore();

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">re write.</p>
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {isLoggedIn &&
            siteConfig.navLoginItems.map((item) => (
              <NavbarItem key={item.href}>
                <Link
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            ))}
        </div>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <Link className="hidden lg:flex" href="/profile">
          <Button color="default" size="md">
            Profile
          </Button>
        </Link>
      </NavbarContent>
    </HeroUINavbar>
  );
};
