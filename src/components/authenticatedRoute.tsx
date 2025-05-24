import { useAuthUserStore } from "@/store/useAuthUserStore";
import { Navigate } from "react-router-dom";

export const AuthenticatedRoute = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = useAuthUserStore((state) => state.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
