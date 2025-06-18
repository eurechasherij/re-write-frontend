import Prism from "prismjs";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "@/styles/prism.css"; // Custom styles for Prism
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";

// Optional: line numbers, other plugins...
// import "prismjs/plugins/line-numbers/prism-line-numbers.css";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, [content]);

  return (
    <article className="prose dark:prose-invert">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className = "", children, ...props }) {
            const language = className.replace("language-", "") || "text";
            const codeString = Array.isArray(children)
              ? children.join("")
              : String(children);

            return (
              <pre className={`language-${language}`}>
                <code className={`language-${language}`} {...props}>
                  {codeString}
                </code>
              </pre>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
