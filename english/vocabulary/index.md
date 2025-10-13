---
layout: page
title: "Vocabulary"
permalink: /english/vocabulary/
---

# 📘 English Vocabulary Blog

Welcome to the Vocabulary section!  
Learning vocabulary helps you understand, speak, and write English more confidently.  
Here you’ll find lessons and posts that will grow your vocabulary step by step —  
including definitions, pronunciation, and exercises.

---

{% assign vocabulary_posts = site.posts 
  | where_exp: "p", "p.categories contains 'english'" 
  | where_exp: "p", "p.categories contains 'vocabulary'" 
  | sort: 'date' | reverse %}

{% if vocabulaary_posts.size == 0 %}
<p style="color:#888;">No vocabulary posts yet. Please check back later.</p>
{% else %}
<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px,1fr)); gap:1.5rem;">
  {% for post in grammar_posts %}
  <div style="border:1px solid #eee; border-radius:10px; padding:1rem; background:#fff; box-shadow:0 2px 6px rgba(0,0,0,0.05);">
    <a href="{{ post.url | relative_url }}" style="text-decoration:none; font-weight:600; color:#0078D7;">
      {{ post.title }}
    </a>
    <p style="font-size:0.9rem; color:#777;">{{ post.date | date: "%b %d, %Y" }}</p>
    <p style="font-size:0.9rem; color:#555;">{{ post.excerpt | strip_html | truncate: 100 }}</p>
  </div>
  {% endfor %}
</div>
{% endif %}
