import robotBuilding from "@/components/animations/robot-building.json";
import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <section className="container mx-auto max-w-3xl px-6 py-20 flex flex-col items-center text-center">
      <Card className="w-full sm:w-auto p-6 shadow-md border border-gray-200 dark:border-gray-700">
        <CardHeader className="flex flex-col items-center gap-4">
          {/* <Hammer className="h-16 w-16 text-yellow-500 animate-bounce" /> */}
          <Lottie animationData={robotBuilding} className="max-h-70" />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            ⚙️ Still Putting Things Into Place...
          </h1>
        </CardHeader>
        <CardBody className="text-gray-600 dark:text-gray-300 mt-4 space-y-4">
          <p>
            This page is currently under construction. But don’t worry— progress
            is being made by a slightly overworked (and possibly caffeinated)
            robot.
          </p>
          <p>
            Meanwhile, you can check out my{" "}
            <Link
              to="/about"
              className="underline text-blue-600 dark:text-blue-400 font-medium"
            >
              About page
            </Link>{" "}
            to see what I’ve been up to.
          </p>
          <Button
            as={Link}
            to="/about"
            variant="solid"
            color="primary"
            className="mt-2"
          >
            Go to About
          </Button>
        </CardBody>
      </Card>
    </section>
  );
}
