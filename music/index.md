---
layout: default
title: "Music"
---

<section style="text-align:center; margin:3rem 1rem;">
  <h1 style="font-size:2rem; margin-bottom:0.5rem;">🎶 Music</h1>
  <p style="max-width:650px; margin:auto; color:#555; font-size:1.1rem;">
    Exploring the harmony between creativity and healing — from <strong>Piano</strong> performance and 
    <strong>Music Theory (ABRSM)</strong> to the transformative power of <strong>Music Therapy</strong>.
  </p>
</section>

<!-- Music Categories -->
<section style="text-align:center; margin:2rem auto;">
  <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:1rem;">
    <a href="{{ '/music/piano/' | relative_url }}" 
       style="background:#28a745; color:white; padding:0.7rem 1.5rem; border-radius:25px; text-decoration:none; font-weight:500;">
       🎹 Piano
    </a>
    <a href="{{ '/music/musictheory/' | relative_url }}" 
       style="background:#0078D7; color:white; padding:0.7rem 1.5rem; border-radius:25px; text-decoration:none; font-weight:500;">
       🎼 Music Theory (ABRSM)
    </a>
    <a href="{{ '/music/musictherapy/' | relative_url }}" 
       style="background:#6f42c1; color:white; padding:0.7rem 1.5rem; border-radius:25px; text-decoration:none; font-weight:500;">
       💆 Music Therapy
    </a>
  </div>
</section>

<!-- Latest Music Posts -->
<section style="max-width:800px; margin:3rem auto;">
  <h2 style="text-align:center;">Latest Music Posts</h2>
  <ul style="list-style:none; padding:0;">
    {% assign music_posts = site.posts | where_exp: "post", "post.path contains '/music/'" %}
    {% for post in music_posts limit:6 %}
      <li style="margin:1rem 0; padding:1rem; border:1px solid #eee; border-radius:12px; transition:0.3s;">
        <a href="{{ post.url | relative_url }}" 
           style="font-size:1.1rem; color:#28a745; text-decoration:none; font-weight:600;">
           {{ post.title }}
        </a><br>
        <small style="color:#999;">{{ post.date | date: "%B %d, %Y" }} · {{ post.categories | join: ' / ' }}</small>
      </li>
    {% endfor %}
  </ul>
</section>
