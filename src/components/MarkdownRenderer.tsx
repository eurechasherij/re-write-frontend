import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { CodeBlock } from "./CodeBlock";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <article className="prose dark:prose-invert">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          pre({ children }) {
            return <>{children}</>; // unwrap <pre>
          },
          code({
            inline,
            className,
            children,
          }: React.ComponentProps<"code"> & { inline?: boolean }) {
            if (inline) {
              return (
                <code className="bg-zinc-800 px-1 rounded">{children}</code>
              );
            }

            return (
              <CodeBlock className={className}>
                {String(children).trim()}
              </CodeBlock>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
