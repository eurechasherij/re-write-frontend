import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { useTheme } from "@heroui/use-theme";
import { Sun, Moon } from "lucide-react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navbar
        isBordered
        className="border-b border-gray-200 dark:border-gray-700"
      >
        <NavbarBrand className="text-2xl font-bold text-gray-900 dark:text-white">
          <Link
            href="/"
            className="text-2xl text-gray-900 dark:text-white hover:underline"
          >
            re-write
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:underline"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/about"
              className="text-gray-600 dark:text-gray-300 hover:underline"
            >
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/blog"
              className="text-gray-600 dark:text-gray-300 hover:underline"
            >
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              onPress={toggleTheme}
              isIconOnly
              className="ml-4 flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="text-yellow-500" />
              ) : (
                <Moon className="text-blue-500" />
              )}
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <main className="container mx-auto max-w-7xl px-6 flex-grow py-8">
        {children}
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-700 py-4">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 rematcha.dev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
