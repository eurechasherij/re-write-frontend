import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Divider } from "@heroui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface PostData {
  title: string;
  date: string;
  readingTime: string;
  excerpt?: string;
  content: string;
}

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);

  // Preload glob with slug mapping
  const posts = import.meta.glob("../posts/*.md", {
    query: "?raw",
    import: "default",
  });

  useEffect(() => {
    const filePath = `../posts/${slug}.md`;

    if (!(filePath in posts)) {
      setPost(null);
      return;
    }

    posts[filePath]().then((raw) => {
      const { meta, content } = parseMarkdown(raw as string);
      setPost({
        title: meta.title ?? (slug as string),
        date: meta.date || "Unknown date",
        readingTime: meta.readingTime || "? min read",
        excerpt: meta.excerpt,
        content,
      });
    });
  }, [slug]);

  if (!post) {
    return (
      <div className="text-center py-16 text-gray-500 dark:text-gray-400">
        <p>Post not found.</p>
      </div>
    );
  }

  return (
    <article className="container mx-auto max-w-4xl px-6 py-8">
      <header className="mb-8">
        <h1 className="mb-4     text-4xl font-extrabold text-gray-900 dark:text-white">
          {post.title}
        </h1>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {post.readingTime} • {post.date}
        </div>
        <Divider className="my-4 border-gray-300 dark:border-gray-700" />
      </header>
      <MarkdownRenderer content={post.content} />
    </article>
  );
}

// 🧠 Custom parser
function parseMarkdown(raw: string): {
  meta: Record<string, string>;
  content: string;
} {
  const match = /^---\n([\s\S]+?)\n---\n([\s\S]*)$/m.exec(raw);
  if (!match) return { meta: {}, content: raw };

  const metaLines = match[1].split("\n");
  const meta: Record<string, string> = {};

  for (const line of metaLines) {
    const [key, ...rest] = line.split(":");
    if (!key || rest.length === 0) continue;
    meta[key.trim()] = rest.join(":").trim();
  }

  const content = match[2].trim();
  return { meta, content };
}
