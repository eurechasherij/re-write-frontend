import ReactMarkdown from "react-markdown";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const aboutMe = `
# About Me

Hi, I’m Eurecha Sherij Anakimesta—a systems-focused full stack developer based in South Jakarta, Indonesia. With over five years of hands-on experience, I thrive at the intersection of backend architecture, modern web frontends, and scalable system design.

My journey has taken me from building robust Laravel backends to crafting React and React Native apps, and even diving deep into advanced Linux sysadmin work. I love solving complex problems and making technology feel seamless for real users.

## Notable Projects
- **SIPP 2.0** and **SieKTA**: Personnel management and digital ID systems for the Indonesian National Police
- **SiSDM Mobile**: Secure police access on the go
- **Amdalnet**: Environmental permit system for KLHK

## Tech I Use
Laravel, React, Vue, Tailwind CSS, Kotlin, Java, Nginx, Git, CI/CD, RESTful API

## Background
- **Education**: Vocational in Computer Engineering, Bachelor’s in Informatics (paused)
- **Languages**: Indonesian (native), English (professional)

I believe in developer-first solutions, minimalist prose, and clean formatting. If you’re passionate about building things that last—or just want to talk shop—let’s connect.
`;

const contacts = [
  {
    href: "https://linkedin.com/in/eurechasherij",
    label: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    href: "https://github.com/eurechasherij",
    label: "GitHub",
    icon: <Github className="w-5 h-5" />,
  },
  {
    href: "mailto:eurechasherij@gmail.com",
    label: "Email",
    icon: <Mail className="w-5 h-5" />,
  },
  {
    href: "https://wa.me/6285121010940",
    label: "WhatsApp",
    icon: <Phone className="w-5 h-5" />,
  },
];

export default function AboutPage() {
  return (
    <section className="container mx-auto max-w-2xl px-6 py-12 prose dark:prose-dark">
      <ReactMarkdown>{aboutMe}</ReactMarkdown>
      <div className="flex gap-4 mt-6">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition"
          >
            {c.icon}
            <span className="font-medium">{c.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
