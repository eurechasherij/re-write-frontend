import { AuthenticatedNavbar } from "@/components/authenticatedNavbar";
import { AuthenticatedRoute } from "@/components/authenticatedRoute";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthenticatedRoute>
      <div className="relative flex flex-col h-screen">
        <AuthenticatedNavbar />
        <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
          {children}
        </main>
        <footer className="w-full flex items-center justify-center py-3">
          <p className="text-default-600">© 2024 re write.. ReMatcha</p>
        </footer>
      </div>
    </AuthenticatedRoute>
  );
}
