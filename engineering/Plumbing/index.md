---
layout: default
title: "Plumbing Engineering"
permalink: /engineering/plumbing/
---

<section style="max-width:900px; margin:2rem auto;">
  <h2 style="text-align:center;">Plumbing Engineering</h2>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1rem; margin-top:1.5rem;">
    {% assign plumbing_posts = site.posts | where_exp: "post", "post.categories contains 'electrical'" %}
    {% for post in plumbing_posts %}
      <article style="border:1px solid #eee; border-radius:12px; padding:1rem; background:#fff; box-shadow:0 2px 6px rgba(0,0,0,0.05);">
        {% if post.image %}
          <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" style="width:100%; border-radius:10px; margin-bottom:0.5rem;">
        {% endif %}
        <a href="{{ post.url | relative_url }}" style="font-weight:600; color:#0078D7; text-decoration:none;">{{ post.title }}</a><br>
        <small style="color:#888;">{{ post.date | date: "%b %d, %Y" }}</small>
        <p style="color:#555; font-size:.9rem; margin-top:.5rem;">{{ post.excerpt | strip_html | truncate: 120 }}</p>
      </article>
    {% endfor %}
    {% if plumbing_posts == empty %}
      <p style="text-align:center; color:#888;">No plumbing posts yet.</p>
    {% endif %}
  </div>
</section>

