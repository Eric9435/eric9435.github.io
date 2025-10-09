---
layout: default
title: "Electrical Engineering"
permalink: /engineering/electrical/
---

<section style="text-align:center; padding:3rem 1rem; background:linear-gradient(135deg,#0078D7,#00bcd4); color:white; border-radius:12px;">
  <h1 style="margin-bottom:0.5rem;">⚡️ Electrical Engineering</h1>
  <p>Insights, guides, and real-world notes from power systems to energy efficiency.</p>
</section>

<section style="max-width:900px; margin:2rem auto; padding:0 1rem;">
  <h2 style="text-align:center;">Latest Electrical Posts</h2>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1rem; margin-top:1rem;">
    {% assign electrical_posts = site.posts | where_exp: "post", "post.path contains '/engineering/electrical/'" %}
    {% for post in electrical_posts %}
      <article style="border:1px solid #eee; border-radius:12px; padding:1rem; background:#fff; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
        <a href="{{ post.url | relative_url }}" style="font-weight:600; color:#0078D7; text-decoration:none;">{{ post.title }}</a><br>
        <small style="color:#888;">{{ post.date | date: "%b %d, %Y" }}</small>
        <p style="color:#555; font-size:.9rem; margin-top:.5rem;">{{ post.excerpt | strip_html | truncate: 120 }}</p>
      </article>
    {% endfor %}
    {% if electrical_posts == empty %}
      <p style="text-align:center; color:#888;">No electrical posts yet. Add one under <code>engineering/electrical/_posts/</code>.</p>
    {% endif %}
  </div>
</section>
