import { getPosts, getCategories } from "@/lib/posts";

export default function Home() {
  const posts = getPosts();
  const categories = getCategories();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="border-b bg-white/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-bold text-xl">Aung Phone Myat</a>
          <div className="flex gap-6 text-sm">
            <a href="/blog" className="hover:text-blue-700">Blog</a>
            <a href="https://github.com/Eric9435" className="hover:text-blue-700">GitHub</a>
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div>
          <img
            src="/assets/img/profile.jpg"
            alt="Aung Phone Myat"
            className="w-36 h-36 rounded-full object-cover border shadow-md mb-8"
          />

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Aung Phone Myat
          </h1>

          <p className="mt-5 text-2xl text-slate-600">
            Automation & Control Systems Engineer
          </p>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-700">
            Portfolio and technical blog covering electrical engineering, HVAC/ACMV,
            PLC/SCADA, building services, English learning, music psychology,
            and engineering knowledge systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/blog" className="rounded-xl bg-slate-900 text-white px-6 py-3 shadow hover:bg-blue-900">
              Read Blog
            </a>

            <a href="https://github.com/Eric9435" className="rounded-xl border border-slate-300 bg-white px-6 py-3 hover:border-blue-700">
              GitHub Profile
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-white border shadow-sm p-8">
          <h2 className="text-2xl font-bold">Knowledge Areas</h2>
          <p className="mt-2 text-slate-500">Organized from your migrated blog archive.</p>

          <div className="mt-6 grid gap-3">
            {categories.map((category) => (
              <a
                key={category}
                href={`/blog?category=${encodeURIComponent(category)}`}
                className="rounded-xl border p-4 hover:border-blue-700 hover:bg-blue-50 transition"
              >
                <div className="font-semibold">{category}</div>
                <div className="text-sm text-slate-500">
                  {posts.filter((p) => p.category === category).length} posts
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.slice(0, 6).map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="rounded-2xl bg-white border p-5 shadow-sm hover:shadow-md transition">
              <div className="text-xs font-semibold text-blue-700">{post.category}</div>
              <h3 className="mt-3 text-lg font-bold">{post.title}</h3>
              <p className="mt-3 text-sm text-slate-500">{post.file}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
