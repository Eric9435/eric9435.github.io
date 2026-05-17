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
  const colors = ["#0f172a", "#1e3a8a", "#1d4ed8", "#2563eb", "#3b82f6", "#93c5fd"];

  const slices = categoryData.map((item, index) => {
    const start = current;
    const value = total ? (item.count / total) * 100 : 0;
    current += value;
    return `${colors[index % colors.length]} ${start}% ${current}%`;
  });

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/assets/img/profile.jpg"
              alt="Aung Phone Myat"
              className="h-11 w-11 rounded-2xl border border-slate-200 object-cover shadow-sm"
            />

            <div>
              <div className="text-lg font-black tracking-tight text-blue-950">
                Eric Multi Blog
              </div>

              <div className="text-xs font-semibold text-slate-500">
                Aung Phone Myat
              </div>
            </div>
          </a>

          <div className="flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="/blog" className="hover:text-blue-950">Blog</a>
            <a href="https://github.com/Eric9435" className="hover:text-blue-950">GitHub</a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#dbeafe,transparent_35%),linear-gradient(to_bottom,#ffffff,#f8fafc)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div>
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-950">
              Music · Engineering · Language · Technology
            </div>

            <h1 className="mt-8 max-w-4xl text-6xl font-black tracking-tight text-blue-950 md:text-7xl">
              Eric Multi Blog
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
              A modern personal blog for multi-topic writing: engineering notes,
              music psychology, English learning, HVAC/ACMV, PLC/SCADA,
              and technology-based knowledge systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/blog" className="rounded-full bg-blue-950 px-8 py-4 font-bold text-white shadow-lg shadow-blue-950/20 hover:bg-blue-900">
                Explore Articles
              </a>

              <a href="#categories" className="rounded-full border border-slate-300 bg-white px-8 py-4 font-bold text-blue-950 hover:border-blue-950">
                View Categories
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-3xl font-black text-blue-950">{posts.length}</div>
                <div className="mt-1 text-sm text-slate-500">Articles</div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-3xl font-black text-blue-950">{categories.length}</div>
                <div className="mt-1 text-sm text-slate-500">Categories</div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-3xl font-black text-blue-950">4+</div>
                <div className="mt-1 text-sm text-slate-500">Domains</div>
              </div>

            </div>
          </div>

          <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-blue-950/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-900">
                  Analytics
                </p>

                <h2 className="mt-2 text-2xl font-black text-blue-950">
                  Blog Distribution
                </h2>
              </div>

              <div className="rounded-2xl bg-blue-50 px-4 py-3 text-center">
                <div className="text-2xl font-black text-blue-950">
                  {posts.length}
                </div>

                <div className="text-xs font-semibold text-slate-500">
                  Articles
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center">
              <div
                className="h-52 w-52 rounded-full shadow-inner"
                style={{ background: `conic-gradient(${slices.join(", ")})` }}
              />
            </div>

            <div className="mt-8 grid gap-2">
              {categoryData.map((item, index) => {
                const percent = total ? Math.round((item.count / total) * 100) : 0;

                return (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: colors[index % colors.length] }}
                      />

                      <span className="text-sm font-bold text-blue-950">
                        {item.name}
                      </span>
                    </div>

                    <span className="text-xs font-black text-slate-500">
                      {percent}%
                    </span>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      

<section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-900">
              Recently Added
            </p>
            <h2 className="mt-3 text-4xl font-black text-blue-950">Latest Articles</h2>
          </div>
          <a href="/blog" className="font-bold text-blue-900">View all →</a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 6).map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="text-xs font-black uppercase tracking-widest text-blue-900">
                {post.category}
              </div>

              <h3 className="mt-4 text-2xl font-black leading-snug text-blue-950 group-hover:text-blue-700">
                {post.title}
              </h3>

              <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
                {post.excerpt}
              </p>

              <div className="mt-7 font-black text-blue-950">
                Read article →
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
