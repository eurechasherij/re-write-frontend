import DefaultLayout from "@/layouts/default";

const mockPosts = [
	{
		title: "Understanding React Hooks",
		excerpt: "Learn the basics of React Hooks and how they simplify state management.",
		readingTime: "5 min read",
		date: "June 15, 2025",
	},
	{
		title: "Tailwind CSS: A Beginner's Guide",
		excerpt: "Discover how Tailwind CSS can speed up your development process.",
		readingTime: "7 min read",
		date: "June 10, 2025",
	},
	{
		title: "Building Accessible Web Apps",
		excerpt: "Tips and techniques for creating web applications that everyone can use.",
		readingTime: "6 min read",
		date: "June 5, 2025",
	},
];

export default function IndexPage() {
	return (
		<DefaultLayout>
			<section className="container mx-auto max-w-7xl px-6 py-8">
				<h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
				<div className="grid gap-6">
					{mockPosts.map((post, index) => (
						<div
							key={index}
							className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md"
						>
							<h2 className="text-xl font-semibold mb-2">{post.title}</h2>
							<p className="text-gray-600 dark:text-gray-400 mb-2">
								{post.excerpt}
							</p>
							<div className="text-sm text-gray-500 dark:text-gray-300">
								{post.readingTime} • {post.date}
							</div>
						</div>
					))}
				</div>
			</section>
		</DefaultLayout>
	);
}
