import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface PostMeta {
  title: string;
  date: string;
  readingTime: string;
  excerpt?: string;
  slug: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<PostMeta[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const modules = import.meta.glob("../posts/*.md", {
        query: "?raw",
        import: "default",
      });

      const loadedPosts: PostMeta[] = [];

      for (const path in modules) {
        const raw = await modules[path]();
        const data = extractFrontmatter(raw as string);
        const slug = path.split("/").pop()?.replace(/\.md$/, "") || "";

        loadedPosts.push({
          title: data.title || slug,
          date: data.date || "Unknown date",
          readingTime: data.readingTime || "? min read",
          excerpt: data.excerpt || "No excerpt available.",
          slug,
        });
      }

      loadedPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
      setPosts(loadedPosts);
    }

    fetchPosts();
  }, []);

  return (
    <section className="container mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white">
        Latest Blog Posts
      </h1>
      <div className="grid gap-8">
        {posts.map((post, index) => (
          <Link
            key={index}
            to={`/posts/${post.slug}`}
            className="block"
            style={{ textDecoration: "none" }}
          >
            <Card
              className="border border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <CardHeader className="text-2xl font-bold text-gray-800 dark:text-gray-100 p-4">
                {post.title}
              </CardHeader>
              <Divider className="border-gray-300 dark:border-gray-700" />
              <CardBody className="p-4">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {post.readingTime} • {post.date}
                </div>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

function extractFrontmatter(raw: string): Record<string, string> {
  const match = /^---\n([\s\S]+?)\n---/.exec(raw);
  if (!match) return {};

  const lines = match[1].split("\n");
  const meta: Record<string, string> = {};

  for (const line of lines) {
    const [key, ...rest] = line.split(":");
    if (!key || rest.length === 0) continue;
    meta[key.trim()] = rest.join(":").trim();
  }

  return meta;
}
