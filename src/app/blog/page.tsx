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
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <nav className="sticky top-0 z-50 border-b bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-black">Aung Phone Myat</a>
          <a href="/" className="text-sm font-semibold hover:text-blue-700">Home</a>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="rounded-[2rem] bg-slate-950 p-10 text-white shadow">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">Technical Archive</p>
          <h1 className="mt-4 text-5xl font-black">Blog & Knowledge Base</h1>
          <p className="mt-4 text-slate-300">{selected || "All categories"} · {filtered.length} articles</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/blog" className="rounded-full border bg-white px-5 py-2 text-sm font-bold hover:border-blue-700">All</a>
          {categories.map((category) => (
            <a key={category} href={`/blog?category=${encodeURIComponent(category)}`} className="rounded-full border bg-white px-5 py-2 text-sm font-bold hover:border-blue-700">
              {category}
            </a>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="group rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="text-xs font-black uppercase tracking-widest text-blue-700">{post.category}</div>
              <h2 className="mt-4 text-2xl font-black group-hover:text-blue-800">{post.title}</h2>
              <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
              <div className="mt-6 text-sm font-bold">Read full article →</div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
