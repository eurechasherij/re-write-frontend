import Prism from "prismjs";

import "@/styles/prism.css"; // Custom styles for Prism
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";

// Optional: line numbers, other plugins...
// import "prismjs/plugins/line-numbers/prism-line-numbers.css";

interface CodeProps {
  className?: string;
  children?: string;
}

export function CodeBlock({ className = "", children = "" }: CodeProps) {
  const language = className.replace("language-", "") || "javascript";
  const html = Prism.highlight(
    children ?? "",
    Prism.languages[language],
    language
  );

  return (
  <div className="relative my-4">
    <div className="absolute top-0 right-0 px-2 py-1 text-xs font-mono text-gray-400 bg-zinc-800 rounded-bl">
      {language}
    </div>
    <pre className="rounded-md p-4 overflow-x-auto bg-zinc-900 text-gray-100 text-sm">
      <code dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  </div>
);

}
