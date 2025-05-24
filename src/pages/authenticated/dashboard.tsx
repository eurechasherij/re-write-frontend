import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";

const DashboardPage = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-8">
      <h1>Dashboard</h1>
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Card>
          <CardBody>
            <h2>Card Title 1</h2>
            <p>Some description for card 1.</p>
            <Button color="primary">Action 1</Button>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <h2>Card Title 2</h2>
            <p>Some description for card 2.</p>
            <Button color="primary">Action 2</Button>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <h2>Card Title 3</h2>
            <p>Some description for card 3.</p>
            <Button color="primary">Action 3</Button>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default DashboardPage;
