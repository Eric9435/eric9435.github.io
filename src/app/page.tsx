import { getPosts, getCategories } from "@/lib/posts";

export default function Home() {
  const posts = getPosts();
  const categories = getCategories();

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-extrabold tracking-tight">
            Aung Phone Myat
          </a>

          <div className="flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="/blog" className="hover:text-blue-700">Blog</a>
            <a href="https://github.com/Eric9435" className="hover:text-blue-700">GitHub</a>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <img
                src="/assets/img/profile.jpg"
                alt="Aung Phone Myat"
                className="h-36 w-36 rounded-3xl border border-slate-200 object-cover shadow-sm"
              />

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                  Engineering Portfolio
                </p>

                <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
                  Aung Phone Myat
                </h1>

                <p className="mt-4 text-xl font-medium text-slate-600">
                  Automation & Control Systems Engineer
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-600">
              Technical portfolio and knowledge archive covering electrical engineering,
              HVAC/ACMV, PLC/SCADA, building services, English learning, music psychology,
              and software-based knowledge systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/blog" className="rounded-2xl bg-slate-950 px-7 py-4 font-bold text-white shadow-sm hover:bg-blue-800">
                Explore Blog
              </a>
              <a href="https://github.com/Eric9435" className="rounded-2xl border border-slate-300 bg-white px-7 py-4 font-bold hover:border-blue-700">
                GitHub Profile
              </a>
            </div>
          </div>

          <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-sm">
            <h2 className="text-3xl font-black">Knowledge Areas</h2>
            <p className="mt-3 text-slate-300">
              {posts.length} articles organized into technical categories.
            </p>

            <div className="mt-8 grid gap-3">
              {categories.map((category) => (
                <a
                  key={category}
                  href={`/blog?category=${encodeURIComponent(category)}`}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <div className="font-bold">{category}</div>
                  <div className="mt-1 text-sm text-slate-400">
                    {posts.filter((p) => p.category === category).length} posts
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-4xl font-black">Latest Articles</h2>
          <a href="/blog" className="font-bold text-blue-700">View all →</a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 6).map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-xs font-black uppercase tracking-widest text-blue-700">
                {post.category}
              </div>
              <h3 className="mt-4 text-2xl font-black leading-snug">
                {post.title}
              </h3>
              <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
                {post.excerpt}
              </p>
              <div className="mt-6 text-sm font-black text-slate-950">
                Read article →
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
