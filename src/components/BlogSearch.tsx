"use client";

import { useMemo, useState } from "react";

type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
};

export default function BlogSearch({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();

    if (!q) return posts;

    return posts.filter((post) => {
      const text = `${post.title} ${post.category} ${post.excerpt} ${post.content}`.toLowerCase();
      return text.includes(q);
    });
  }, [query, posts]);

  return (
    <section>
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles..."
          className="w-full rounded-2xl border border-slate-200 px-5 py-4 text-base font-semibold outline-none focus:border-blue-900"
        />

        <p className="mt-3 text-sm text-slate-500">
          Showing {results.length} of {posts.length} articles
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {results.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
          >
            <div className="text-xs font-black uppercase tracking-widest text-blue-900">
              {post.category}
            </div>

            <h2 className="mt-4 text-2xl font-black leading-snug text-blue-950 group-hover:text-blue-700">
              {post.title}
            </h2>

            <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
              {post.excerpt}
            </p>

            <div className="mt-6 text-sm font-black text-blue-950">
              Read full article →
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
