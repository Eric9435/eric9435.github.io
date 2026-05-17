import { getPosts, getCategories } from "@/lib/posts";
import BlogSearch from "@/components/BlogSearch";

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
    <main className="min-h-screen bg-white text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-black text-blue-950">
            Eric Multi Blog
          </a>

          <a href="/" className="text-sm font-bold text-slate-600 hover:text-blue-950">
            Home
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <header className="rounded-[2rem] border border-blue-100 bg-blue-50 p-10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-900">
            Searchable Archive
          </p>

          <h1 className="mt-4 text-5xl font-black text-blue-950">
            Blog & Knowledge Base
          </h1>

          <p className="mt-4 text-slate-600">
            {selected || "All categories"} · {filtered.length} articles
          </p>
        </header>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/blog" className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-bold hover:border-blue-900">
            All
          </a>

          {categories.map((category) => (
            <a
              key={category}
              href={`/blog?category=${encodeURIComponent(category)}`}
              className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-bold hover:border-blue-900"
            >
              {category}
            </a>
          ))}
        </div>

        <div className="mt-10">
          <BlogSearch posts={filtered} />
        </div>
      </section>
    </main>
  );
}
