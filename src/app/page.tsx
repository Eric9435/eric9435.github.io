import { getPosts, getCategories } from "@/lib/posts";

export default function Home() {
  const posts = getPosts();
  const categories = getCategories();

  const categoryData = categories.map((category) => ({
    name: category,
    count: posts.filter((p) => p.category === category).length,
  }));

  const total = categoryData.reduce((sum, item) => sum + item.count, 0);
  let current = 0;

  const colors = ["#1e3a8a", "#1d4ed8", "#2563eb", "#3b82f6", "#60a5fa", "#93c5fd"];

  const slices = categoryData.map((item, index) => {
    const start = current;
    const value = (item.count / total) * 100;
    current += value;
    return `${colors[index % colors.length]} ${start}% ${current}%`;
  });

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-extrabold tracking-tight">
            Aung Phone Myat
          </a>

          <div className="flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="/blog" className="hover:text-blue-900">Blog</a>
            <a href="https://github.com/Eric9435" className="hover:text-blue-900">GitHub</a>
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
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-900">
                  Eric Multi Blog
                </p>

                <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
                  Aung Phone Myat
                </h1>

                <p className="mt-4 text-xl font-medium text-slate-600">
                  Music · Engineering · Language · Technology
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-600">
              A personal multi-topic blog covering engineering, HVAC/ACMV,
              PLC/SCADA, building services, English learning, music psychology,
              and software-based knowledge systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/blog" className="rounded-2xl bg-blue-950 px-7 py-4 font-bold text-white shadow-sm hover:bg-blue-900">
                Read Blog
              </a>
              <a href="https://github.com/Eric9435" className="rounded-2xl border border-slate-300 bg-white px-7 py-4 font-bold hover:border-blue-900">
                GitHub Profile
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-blue-100 bg-blue-950 p-8 text-white shadow-sm">
            <h2 className="text-3xl font-black">Blog Categories</h2>
            <p className="mt-3 text-blue-100">
              {posts.length} articles across music, engineering, language, and technology.
            </p>

            <div className="mt-8 flex justify-center">
              <div
                className="h-56 w-56 rounded-full shadow-inner"
                style={{
                  background: `conic-gradient(${slices.join(", ")})`,
                }}
              />
            </div>

            <div className="mt-8 grid gap-3">
              {categoryData.map((item, index) => (
                <a
                  key={item.name}
                  href={`/blog?category=${encodeURIComponent(item.name)}`}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: colors[index % colors.length] }}
                    />
                    <span className="font-bold">{item.name}</span>
                  </div>
                  <span className="text-sm text-blue-100">{item.count}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-4xl font-black">Latest Articles</h2>
          <a href="/blog" className="font-bold text-blue-900">View all →</a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 6).map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-xs font-black uppercase tracking-widest text-blue-900">
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
