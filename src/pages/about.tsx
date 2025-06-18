import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
} from "@heroui/react";
import { Mail, Phone } from "lucide-react";
import { useMemo, useState } from "react";

export default function AboutPage() {
  const backendTech = new Set(["Laravel", "Golang (Learning)"]);

  const frontendTech = new Set(["React", "Vue", "Tailwind CSS"]);

  const mobileTech = new Set(["React Native", "Kotlin", "Java"]);

  const databaseTech = new Set(["PostgreSQL", "MongoDB"]);

  const devOpsTech = new Set(["Nginx", "Git", "CI/CD"]);

  const apiTech = new Set(["RESTful API"]);

  const cloudPlatforms = new Set(["AWS", "Google Cloud", "DigitalOcean"]);

  const otherTech = new Set(["And more..."]);

  const [searchKeyword, setSearchKeyword] = useState("");

  const filteredTech = useMemo(() => {
    const allTech = [
      ...backendTech,
      ...frontendTech,
      ...mobileTech,
      ...databaseTech,
      ...devOpsTech,
      ...apiTech,
      ...cloudPlatforms,
      ...otherTech,
    ];

    // switch (searchKeyword.toLowerCase()) {
    //   case "backend":
    //     return Array.from(backendTech);
    //   case "frontend":
    //     return Array.from(frontendTech);
    //   case "mobile":
    //     return Array.from(mobileTech);
    //   case "database":
    //     return Array.from(databaseTech);
    //   case "devops":
    //     return Array.from(devOpsTech);
    //   case "api":
    //     return Array.from(apiTech);
    //   case "cloud":
    //     return Array.from(cloudPlatforms);
    //   default:
    //     break;
    // }

    if (!searchKeyword) return allTech;

    return allTech.filter((tech) =>
      tech.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  }, [searchKeyword]);

  return (
    <section className="container mx-auto max-w-3xl px-6 pb-16 space-y-12">
      {/* Profile */}
      <Card radius="lg" shadow="md">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:gap-5 gap-4 text-center sm:text-left">
          <Avatar
            src="/re.JPG"
            alt="Eurecha Sherij Anakimesta"
            size="lg"
            radius="full"
            className="mx-auto sm:mx-0"
          />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Eurecha Sherij Anakimesta
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Full Stack Developer • Based in South Jakarta
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="prose dark:prose-invert max-w-none text-sm sm:text-base">
          <p>
            Hi, I’m Re — a systems-focused full stack developer with over five
            years of hands-on experience. I thrive at the crossroads of backend
            architecture, modern frontend development, and scalable system
            design. From building robust Laravel APIs to crafting sleek UIs with
            React and React Native, my work spans the full stack and beyond.
            I’ve even gone deep into advanced Linux sysadmin tasks — I don’t
            just debug the app — I trace the ripple back to the architecture.
            Above all, I love turning complexity into simplicity — creating
            technology that feels intuitive, reliable, and seamless for real
            users.
          </p>
        </CardBody>
      </Card>

      {/* Projects */}
      <section>
        <h2 className="text-xl font-semibold mb-4">🚀 Notable Projects</h2>
        <ul className="space-y-4 list-disc pl-6 text-gray-800 dark:text-gray-200">
          <li>
            <strong>SIPP 2.0 & SieKTA</strong> — Personnel and digital ID
            systems for the Indonesian National Police.
          </li>
          <li>
            <strong>SiSDM Mobile</strong> — Secure mobile access to personnel
            data for the Indonesian National Police.
          </li>
          <li>
            <strong>Amdalnet</strong> — Environmental permit system for KLHK.
          </li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="text-xl font-semibold mb-4">🧰 Tech & Tools</h2>
        <Input
          variant="bordered"
          placeholder="Search technologies..."
          className="max-w-xs mb-4"
          value={searchKeyword}
          onValueChange={setSearchKeyword}
        />
        <div className="flex flex-wrap gap-3">
          {filteredTech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xl font-semibold mb-4">📬 Connect With Me</h2>
        <div className="flex flex-wrap gap-3">
          {[
            {
              href: "https://linkedin.com/in/eurechasherij",
              icon: <LinkedInIcon size={18} />,
              label: "LinkedIn",
            },
            {
              href: "https://github.com/eurechasherij",
              icon: <GitHubIcon size={18} />,
              label: "GitHub",
            },
            {
              href: "mailto:eurechasherij@gmail.com",
              icon: <Mail size={18} />,
              label: "Email",
            },
            {
              href: "https://wa.me/6285121010940",
              icon: <Phone size={18} />,
              label: "WhatsApp",
            },
          ].map(({ href, icon, label }) => (
            <Button
              as="a"
              key={label}
              href={href}
              variant="bordered"
              size="sm"
              startContent={icon}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </Button>
          ))}
        </div>
      </section>
    </section>
  );
}
