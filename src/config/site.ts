export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    // {
    //   label: "Docs",
    //   href: "/docs",
    // },
    // {
    //   label: "Pricing",
    //   href: "/pricing",
    // },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    {
      label: "About",
      href: "/about",
    },
  ],
  navLoginItems: [
    {
      label: "Events",
      href: "/events",
    },
  ],
};
