import { getPosts, getCategories } from "@/lib/posts";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category: selected } = await searchParams;

  const posts = getPosts();
  const categories = getCategories();

  const filtered = selected
    ? posts.filter((post) => post.category === selected)
    : posts;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="border-b bg-white/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-bold text-xl">Aung Phone Myat</a>
          <div className="flex gap-6 text-sm">
            <a href="/blog" className="hover:text-blue-700">All Blog</a>
            <a href="/" className="hover:text-blue-700">Home</a>
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <h1 className="text-5xl font-bold">Technical Blog</h1>

        <p className="mt-4 text-slate-600">
          {selected ? `${selected} posts` : "All posts"} · {filtered.length} articles
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/blog" className="rounded-full border bg-white px-4 py-2 text-sm hover:border-blue-700">
            All
          </a>

          {categories.map((category) => (
            <a
              key={category}
              href={`/blog?category=${encodeURIComponent(category)}`}
              className="rounded-full border bg-white px-4 py-2 text-sm hover:border-blue-700"
            >
              {category}
            </a>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {filtered.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-blue-700 transition"
            >
              <div className="text-xs font-semibold text-blue-700">
                {post.category}
              </div>

              <h2 className="mt-3 text-2xl font-bold">
                {post.title}
              </h2>

              <p className="mt-3 text-sm text-slate-500">
                Click to read full article
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
