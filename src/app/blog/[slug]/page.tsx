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
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-black text-blue-950">
            Eric Multi Blog
          </a>
          <a href="/blog" className="text-sm font-bold text-slate-600 hover:text-blue-950">
            ← Back to Blog
          </a>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-6 py-14">
        <header className="border-b border-slate-200 pb-10">
          <div className="text-sm font-black uppercase tracking-[0.25em] text-blue-900">
            {post.category}
          </div>

          <h1 className="mt-5 text-4xl font-black leading-tight text-blue-950 md:text-6xl">
            {post.title}
          </h1>

          {post.date && (
            <p className="mt-5 text-slate-500">
              {post.date}
            </p>
          )}
        </header>

        <section className="article-content mt-10">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </section>
      </article>
    </main>
  );
}
