import { getPosts, getCategories } from "@/lib/posts";

export default function Home() {
  const posts = getPosts();
  const categories = getCategories();

  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <nav className="sticky top-0 z-50 border-b bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-black tracking-tight">Aung Phone Myat</a>
          <div className="flex gap-6 text-sm font-medium">
            <a href="/blog" className="hover:text-blue-700">Blog</a>
            <a href="https://github.com/Eric9435" className="hover:text-blue-700">GitHub</a>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border bg-white p-10 shadow-sm">
          <img src="/assets/img/profile.jpg" alt="Aung Phone Myat" className="h-36 w-36 rounded-3xl border object-cover shadow" />

          <p className="mt-10 text-sm font-bold uppercase tracking-[0.3em] text-blue-700">
            Automation · SCADA · HVAC · Technical Writing
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Engineering Portfolio & Technical Knowledge Blog
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            A professional archive of engineering notes, electrical systems, HVAC/ACMV,
            PLC/SCADA concepts, IELTS/English learning, music psychology, and technical
            software architecture.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/blog" className="rounded-2xl bg-slate-950 px-7 py-4 font-semibold text-white shadow hover:bg-blue-900">
              Explore Blog
            </a>
            <a href="https://github.com/Eric9435" className="rounded-2xl border bg-white px-7 py-4 font-semibold hover:border-blue-700">
              GitHub
            </a>
          </div>
        </div>

        <aside className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-sm">
          <h2 className="text-3xl font-black">Knowledge System</h2>
          <p className="mt-3 text-slate-300">{posts.length} migrated articles organized by category.</p>

          <div className="mt-8 grid gap-3">
            {categories.map((category) => (
              <a key={category} href={`/blog?category=${encodeURIComponent(category)}`} className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
                <div className="font-bold">{category}</div>
                <div className="mt-1 text-sm text-slate-300">{posts.filter((p) => p.category === category).length} articles</div>
              </a>
            ))}
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-4xl font-black">Latest Articles</h2>
          <a href="/blog" className="font-semibold text-blue-700">View all →</a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 6).map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="group rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="text-xs font-black uppercase tracking-widest text-blue-700">{post.category}</div>
              <h3 className="mt-4 text-2xl font-black group-hover:text-blue-800">{post.title}</h3>
              <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
              <div className="mt-6 text-sm font-bold">Read article →</div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
