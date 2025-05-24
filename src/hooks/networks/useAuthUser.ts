import { addToast } from "@heroui/toast";
import { baseResource } from "../../networks/baseResource";
import { useAuthUserStore } from "@/store/useAuthUserStore";

export const useAuthUser = () => {
  const { user, setUser, setLoggedIn } = useAuthUserStore();

  const {
    trigger: loginTrigger,
    isMutating: isLoggingIn,
  } = baseResource.usePost("/login");
  const {
    trigger: logoutTrigger,
    isMutating: isLoggingOut,
  } = baseResource.usePost("/logout");

  const handleError = (message: string, error: any) => {
    addToast({
      title: "Error",
      description: message,
      color: "danger",
    });
    console.error(error);
  };

  const login = async (email: string, password: string) => {
    try {
      const data = await loginTrigger({ email, password });
      setUser(data.user);
      setLoggedIn(true);
      return true;
    } catch (error) {
      handleError("Login failed. Please check your credentials.", error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await logoutTrigger({});
      setUser(null);
      setLoggedIn(false);
      return true;
    } catch (error) {
      handleError("Logout failed. Please try again.", error);
      return false;
    }
  };

  return { login, logout, user, isLoggingIn, isLoggingOut };
};

// export const useLogin = () => useSWRMutation("/login", postFetcher);
// export const useLogout = () => useSWRMutation("/logout", postFetcher);
