import { getPosts, getCategories } from "@/lib/posts";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category: selected } = await searchParams;
  const posts = getPosts();
  const categories = getCategories();
  const filtered = selected ? posts.filter((post) => post.category === selected) : posts;

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-extrabold">Aung Phone Myat</a>
          <a href="/" className="text-sm font-bold text-slate-600 hover:text-blue-700">Home</a>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <header className="rounded-[32px] bg-slate-950 p-10 text-white shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
            Technical Archive
          </p>
          <h1 className="mt-4 text-5xl font-black">Blog & Knowledge Base</h1>
          <p className="mt-4 text-slate-300">
            {selected || "All categories"} · {filtered.length} articles
          </p>
        </header>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/blog" className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-bold hover:border-blue-700">
            All
          </a>
          {categories.map((category) => (
            <a
              key={category}
              href={`/blog?category=${encodeURIComponent(category)}`}
              className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-bold hover:border-blue-700"
            >
              {category}
            </a>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-xs font-black uppercase tracking-widest text-blue-700">
                {post.category}
              </div>
              <h2 className="mt-4 text-2xl font-black leading-snug">{post.title}</h2>
              <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
              <div className="mt-6 text-sm font-black">Read full article →</div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
