import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Card, CardBody } from "@heroui/card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthUser } from "../hooks/networks/useAuthUser";
import { useAuthUserStore } from "@/store/useAuthUserStore";

const LoginPage = () => {
  const { login } = useAuthUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn } = useAuthUserStore();

  const handleSubmit = async () => {
    const success = await login(email, password);
    if (success) {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center mt-8">
        <div className="w-100">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login</h1>
            <p className="py-6">Access your account by logging in below.</p>
          </div>
          <Card className="max-w-md w-full">
            <CardBody className="flex flex-col gap-4">
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                variant="flat"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
                variant="flat"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button color="default" onPress={handleSubmit}>
                Login
              </Button>
            </CardBody>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default LoginPage;
