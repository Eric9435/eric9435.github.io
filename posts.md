---
layout: default
title: "All Posts"
permalink: /posts/
---

<h1 style="text-align:center; margin-top:2rem;">📰 All Posts</h1>

<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:1.5rem; max-width:900px; margin:2rem auto; padding:0 1rem;">
  {% for post in site.posts %}
  <a href="{{ post.url | relative_url }}" style="display:block; background:#fff; border-radius:16px; padding:1rem; text-decoration:none; box-shadow:0 3px 8px rgba(0,0,0,0.08); transition:all .3s ease;">
    <h3 style="font-size:1.05rem; color:#0078D7; margin:0 0 .3rem 0; font-weight:600;">{{ post.title }}</h3>
    <p style="font-size:.9rem; color:#777; margin:0;">{{ post.date | date: "%b %d, %Y" }} · {{ post.categories | join: ' / ' }}</p>
  </a>
  {% endfor %}
</div>

<footer style="text-align:center; padding:1.5em 0; font-size:0.9em; color:#777;">
  © <script>document.write(new Date().getFullYear())</script> Eric Scott — All rights reserved.<br>
  Unauthorized use or reproduction of this content is prohibited.
</footer>
