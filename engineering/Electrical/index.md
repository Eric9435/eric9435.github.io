---
layout: default
title: "Electrical Engineering"
---

<!-- ⚡ Hero Section -->
<section style="position:relative; overflow:hidden; color:#fff; text-align:center; padding:5rem 1rem; border-radius:14px; margin:1.5rem 1rem 0;">
  <div style="
    position:absolute; inset:0; z-index:0;
    background: linear-gradient(-45deg, #000428, #004e92, #0078D7, #00bcd4);
    background-size: 400% 400%;
    animation: elecGradient 14s ease infinite;">
  </div>

  <div style="position:relative; z-index:1; max-width:780px; margin:0 auto;">
    <h1 style="font-size:2.2rem; margin:0 0 .4rem;">⚡ Electrical Engineering</h1>
    <p style="color:#e8f1ff; margin:0 auto; line-height:1.6; max-width:650px;">
      Explore insights on electrical systems, power distribution, and modern energy efficiency — 
      from <strong>Power Factor</strong> to smart circuit design.
    </p>
  </div>
</section>

<style>
@keyframes elecGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>

<!-- ⚙️ Navigation Buttons -->
<section style="text-align:center; margin:2rem auto 0;">
  <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:0.8rem;">
    <a href="{{ '/engineering/' | relative_url }}" 
       style="background:#0078D7; color:#fff; padding:.6rem 1.2rem; border-radius:24px; text-decoration:none; font-weight:600;">
       ← Back to Engineering
    </a>
    <a href="{{ '/posts/' | relative_url }}" 
       style="border:1px solid #cfe0ff; color:#0078D7; padding:.6rem 1.2rem; border-radius:24px; text-decoration:none; font-weight:600;">
       Browse All Posts
    </a>
  </div>
</section>

<!-- 📚 Posts Section -->
<section style="max-width:900px; margin:2.2rem auto 3rem; padding:0 1rem;">
  <h2 style="text-align:center; margin-bottom:1rem;">Electrical Articles</h2>
  <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1rem;">
    {% assign electrical_posts = site.posts | where_exp: "post", "post.path contains '/engineering/electrical/'" %}
    {% for post in electrical_posts %}
      <article style="border:1px solid #eee; border-radius:12px; padding:1rem; background:#fff; box-shadow:0 2px 6px rgba(0,0,0,.04); transition:transform .3s;">
        {% if post.image %}
          <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" 
               style="width:100%; border-radius:10px; object-fit:cover; height:160px; margin-bottom:.6rem;">
        {% endif %}
        <a href="{{ post.url | relative_url }}" 
           style="font-weight:700; color:#0078D7; text-decoration:none; display:block; margin-bottom:.3rem;">
           {{ post.title }}
        </a>
        <small style="color:#888;">{{ post.date | date: "%b %d, %Y" }}</small>
        <p style="color:#555; font-size:.95rem; margin-top:.5rem;">{{ post.excerpt | strip_html | truncate: 120 }}</p>
      </article>
    {% endfor %}
    {% if electrical_posts == empty %}
      <p style="text-align:center; color:#888;">No electrical posts yet. Add files under <code>engineering/electrical/_posts/</code>.</p>
    {% endif %}
  </div>
</section>

<!-- ⚖️ Footer -->
<footer style="text-align:center; padding:1.2rem 0; font-size:.9rem; color:#777; border-top:1px solid #eee; margin-top:2rem;">
  © <script>document.write(new Date().getFullYear())</script> Eric Scott — All rights reserved.<br>
  Unauthorized use or reproduction of this content is prohibited.
</footer>
