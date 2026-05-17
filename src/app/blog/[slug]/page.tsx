import { getPost, getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);

  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="border-b bg-white/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-bold text-xl">Aung Phone Myat</a>
          <a href="/blog" className="text-sm hover:text-blue-700">Back to Blog</a>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-6 py-14">
        <div className="text-sm font-semibold text-blue-700">{post.category}</div>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
          {post.title}
        </h1>

        <p className="mt-4 text-slate-500">{post.file}</p>

        <div className="mt-10 rounded-2xl bg-white border p-8 shadow-sm">
          <pre className="whitespace-pre-wrap font-sans leading-8 text-slate-800">
            {post.content}
          </pre>
        </div>
      </article>
    </main>
  );
}
