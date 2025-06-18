import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
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
      <Navbar isBordered className="border-b border-gray-200 dark:border-gray-700">
        <NavbarBrand className="text-2xl font-bold text-gray-900 dark:text-white">
          re-write
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <a href="/" className="text-gray-600 dark:text-gray-300 hover:underline">
              Home
            </a>
          </NavbarItem>
          <NavbarItem>
            <a href="/about" className="text-gray-600 dark:text-gray-300 hover:underline">
              About
            </a>
          </NavbarItem>
          <NavbarItem>
            <a href="/blog" className="text-gray-600 dark:text-gray-300 hover:underline">
              Blog
            </a>
          </NavbarItem>
          <NavbarItem>
            <button
              onClick={toggleTheme}
              className="ml-4 flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="text-yellow-500" />
              ) : (
                <Moon className="text-blue-500" />
              )}
            </button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <main className="container mx-auto max-w-7xl px-6 flex-grow py-8 prose dark:prose-dark">
        {children}
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-700 py-4">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 re-write. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
