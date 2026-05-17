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
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <nav className="sticky top-0 z-50 border-b bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-black">Aung Phone Myat</a>
          <a href="/blog" className="text-sm font-semibold hover:text-blue-700">← Back to Blog</a>
        </div>
      </nav>

      <article className="mx-auto max-w-5xl px-6 py-14">
        <header className="rounded-[2rem] bg-slate-950 p-10 text-white shadow">
          <div className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">{post.category}</div>
          <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">{post.title}</h1>
          {post.date && <p className="mt-5 text-slate-300">{post.date}</p>}
        </header>

        <div className="mt-8 rounded-[2rem] border bg-white p-8 shadow-sm md:p-12">
          <div className="prose prose-slate max-w-none prose-headings:font-black prose-h1:text-4xl prose-h2:mt-10 prose-h2:text-3xl prose-p:leading-8 prose-li:leading-8 prose-strong:text-slate-950">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>
    </main>
  );
}
