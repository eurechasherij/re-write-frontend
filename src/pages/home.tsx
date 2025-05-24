import { Snippet } from "@heroui/snippet";

import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Interactive&nbsp;</span>
          <span className={title({ color: "violet" })}>digital message&nbsp;</span>
          <br />
          <span className={title()}>for your events.</span>
            <div className={subtitle({ class: "mt-4" })}>
            Connect, engage, and celebrate together.
            </div>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Register now to get started.
              <Button className="ml-2" color="primary" size="md">
                Register
              </Button>
            </span>
          </Snippet>
        </div>
      </section>
    </DefaultLayout>
  );
}
