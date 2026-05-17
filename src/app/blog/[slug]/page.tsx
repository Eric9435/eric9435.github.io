import { getPost, getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-extrabold">Aung Phone Myat</a>
          <a href="/blog" className="text-sm font-bold text-slate-600 hover:text-blue-900">
            ← Back to Blog
          </a>
        </div>
      </nav>

      <article className="mx-auto max-w-5xl px-6 py-14">
        <header className="rounded-[32px] bg-blue-950 p-8 text-white shadow-sm md:p-12">
          <div className="text-sm font-black uppercase tracking-[0.25em] text-blue-200">
            {post.category}
          </div>

          <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            {post.title}
          </h1>

          {post.date && (
            <p className="mt-5 text-slate-300">
              {post.date}
            </p>
          )}
        </header>

        <section className="mt-8 rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm md:p-12">
          <div className="article-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </section>
      </article>
    </main>
  );
}
