---
layout: default
title: "Music Theory (ABRSM)"
---

<section style="text-align:center; margin:3rem 1rem;">
  <h1 style="font-size:2rem; margin-bottom:0.5rem;">🎼 Music Theory (ABRSM)</h1>
  <p style="max-width:650px; margin:auto; color:#555; font-size:1.1rem;">
    Deepen your understanding of musical structure, notation, and harmony — essential skills for every musician.
    These lessons follow <strong>ABRSM</strong> standards, helping students develop the theory behind the sound.
  </p>
</section>

<!-- Posts Section -->
<section style="max-width:800px; margin:3rem auto;">
  <h2 style="text-align:center;">Music Theory Articles</h2>
  <ul style="list-style:none; padding:0;">
    {% assign theory_posts = site.posts | where_exp: "post", "post.path contains '/music/musictheory/'" %}
    {% for post in theory_posts %}
      <li style="margin:1rem 0; padding:1rem; border:1px solid #eee; border-radius:12px; transition:0.3s;">
        <a href="{{ post.url | relative_url }}" 
           style="font-size:1.1rem; color:#0078D7; text-decoration:none; font-weight:600;">
           {{ post.title }}
        </a><br>
        <small style="color:#999;">{{ post.date | date: "%B %d, %Y" }}</small>
      </li>
    {% endfor %}
  </ul>
</section>

<!-- Footer -->
<footer style="text-align:center; padding:1em 0; font-size:0.9em; color:#777; border-top:1px solid #eee; margin-top:2rem;">
  © <script>document.write(new Date().getFullYear())</script> Eric Scott — All rights reserved.<br>
  Unauthorized use or reproduction of this content is prohibited.
</footer>
