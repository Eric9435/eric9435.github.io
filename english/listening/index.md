---
layout: page
title: "🎧 English Listening Practice"
description: "Improve your English listening skills with stories, exercises, and audio lessons."
permalink: /english/listening/
---

# 🎧 English Listening Practice

Listening helps you understand pronunciation, rhythm, and natural English speaking.  
Here you’ll find blog posts and lessons about English listening —  
with practice audios, tips, and exercises.

---

{% assign listening_posts = site.posts | where_exp:"post", "post.categories contains 'Listening'" %}
{% if listening_posts.size > 0 %}
  <div class="post-grid" style="display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:1rem; margin-top:1rem;">
  {% for post in listening_posts %}
    <article style="border:1px solid #ddd; border-radius:10px; padding:1rem; background:#fff;">
      {% if post.image %}
        <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" style="width:100%; height:auto; border-radius:8px;">
      {% endif %}
      <h3 style="margin-top:.5rem;"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p style="color:#555; font-size:.9rem;">{{ post.excerpt | strip_html | truncate: 120 }}</p>
      <a href="{{ post.url | relative_url }}" style="color:#0078D7; font-weight:600;">Read More →</a>
    </article>
  {% endfor %}
  </div>
{% else %}
  <p style="text-align:center; color:#777;">No Listening posts yet. Check back soon!</p>
{% endif %}
