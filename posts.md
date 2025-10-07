---
layout: home
title: "All Posts"
permalink: /posts/
---

<h1 style="text-align:center; font-size:1.8rem; margin-top:2rem;">📰 All Posts</h1>
<p style="text-align:center; color:#666; margin-bottom:2rem;">
  Browse every article published by Eric Scott.
</p>

<ul style="list-style:none; padding:0; max-width:800px; margin:0 auto;">
  {% for post in site.posts %}
    <li style="margin:1rem 0; padding:1rem; border:1px solid #eee; border-radius:10px; box-shadow:0 2px 6px rgba(0,0,0,0.05);">
      <a href="{{ post.url | relative_url }}" style="font-size:1.1rem; color:#0078D7; text-decoration:none; font-weight:600;">
        {{ post.title }}
      </a><br>
      <small style="color:#999;">{{ post.date | date: "%b %d, %Y" }} · {{ post.categories | join: ' / ' }}</small>
    </li>
  {% endfor %}
</ul>

<footer style="text-align:center; padding:1.5em 0; font-size:0.9em; color:#777; border-top:1px solid #eee; margin-top:3rem;">
  © <script>document.write(new Date().getFullYear())</script> Eric Scott — All rights reserved.<br>
  Unauthorized use or reproduction of this content is prohibited.
</footer>
