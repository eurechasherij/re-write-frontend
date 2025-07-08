import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { HTBIcon } from "@/components/icons/HTBIcon";
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
import { MailIcon, PhoneIcon } from "lucide-react";
import { useMemo, useState } from "react";

export default function AboutPage() {
  const backendTech = new Set(["Laravel", "Golang (Learning)", "PHP"]);
  const frontendTech = new Set(["React", "Vue.js", "Tailwind CSS", "HeroUI"]);
  const mobileTech = new Set(["React Native", "Kotlin", "Java"]);
  const databaseTech = new Set(["PostgreSQL", "MySQL", "MariaDB", "MongoDB"]);
  const devOpsTech = new Set([
    "Linux",
    "Nginx",
    "Apache",
    "HAProxy",
    "CI/CD",
    "Git",
  ]);
  const apiTech = new Set(["RESTful APIs"]);
  const cloudPlatforms = new Set(["AWS", "Google Cloud", "DigitalOcean"]);
  const tooling = new Set([
    "Zustand",
    "SWR",
    "Virtuoso",
    "ESLint",
    "Prettier",
    "Husky",
    "Vite",
  ]);
  const securityTools = new Set([
    "Hack The Box (ludicr0us)",
    "WAF",
    "Rate Limiting",
    "IP Banning",
    "JWT Security",
    "Encryption (at rest/in transit)",
  ]);

  const aiTools = new Set(["GitHub Copilot", "ChatGPT", "Cursor"]);
  const otherTech = new Set(["Spatie Permissions", "Sparx Systems"]);

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
      ...tooling,
      ...securityTools,
      ...aiTools,
      ...otherTech,
    ];
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
              Full Stack Engineer (Laravel + React) • Based in South Jakarta
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="prose dark:prose-invert max-w-none text-sm sm:text-base">
          <p>
            Systems-minded Full Stack Engineer with 5+ years delivering
            scalable, secure, and maintainable applications using Laravel,
            React, and Linux-first architectures. I specialize in backend API
            design, frontend UX polish, infrastructure hardening, and DevOps
            workflows. Known for clean architecture, fast iterations without
            compromising fundamentals, and security-aware engineering —
            including hands-on experience with threat mitigation, CI/CD
            security, and Hack The Box (HTB) red teaming. I build systems like
            I’ll be the one maintaining them — because I often am.
          </p>
        </CardBody>
      </Card>

      {/* Projects */}
      <section>
        <h2 className="text-xl font-semibold mb-4">🚀 Notable Projects</h2>
        <ul className="space-y-4 list-disc pl-6 text-gray-800 dark:text-gray-200">
          <li>
            <strong>SIPP 2.0, SieKTA, SISMUTJAB</strong> — Personnel, digital
            ID, and job rotation systems for the Indonesian National Police,
            deployed on hardened Linux infrastructure.
          </li>
          <li>
            <strong>SiSDM Mobile</strong> — Secure React Native field-access app
            for police personnel, published to App Store & Play Store with
            regulatory compliance.
          </li>
          <li>
            <strong>Amdalnet</strong> — Real-time environmental permit system
            for KLHK built with Laravel Echo and Vue.js, improving
            national-level coordination.
          </li>
          <li>
            <strong>e-KIAT Guru</strong> — Laravel + Kotlin-based accountability
            platform improving transparency for teacher in remote areas.
          </li>
          <li>
            <strong>FIF Enterprise Architecture</strong> — System diagramming
            and integration flow design using Sparx Systems to support scalable
            backend infrastructure.
          </li>
        </ul>
      </section>

      {/* Security */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          🔐 Security & Red Teaming
        </h2>
        <ul className="space-y-3 list-disc pl-6 text-gray-800 dark:text-gray-200 text-sm sm:text-base">
          <li>
            Rooted 25+ machines on{" "}
            <a
              href="https://app.hackthebox.com/users/ludicr0us"
              className="text-primary underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hack The Box (ludicr0us)
            </a>
            , including Linux, web, and privilege escalation boxes.
          </li>
          <li>
            Familiar with privilege escalation, SSRF, XSS, SQLi, JWT attacks,
            and insecure deserialization.
          </li>
          <li>
            Experience analyzing real-world misconfigurations and applying
            insights to harden production systems.
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
              icon: <MailIcon size={18} />,
              label: "Email",
            },
            {
              href: "https://wa.me/6285121010940",
              icon: <PhoneIcon size={18} />,
              label: "WhatsApp",
            },
            {
              href: "https://app.hackthebox.com/users/ludicr0us",
              icon: <HTBIcon size={18} />,
              label: "Hack The Box",
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

      {/* Resume */}
      <section>
        <h2 className="text-xl font-semibold mb-4">📄 Resume</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Download my resume for a detailed overview of my experience and
          skills.
        </p>
        <Button
          as="a"
          href="/resume.pdf"
          variant="solid"
          color="primary"
          className="mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </Button>
      </section>
    </section>
  );
}
