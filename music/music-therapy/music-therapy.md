---
layout: page
title: "Music Therapy"
permalink: /music/music-therapy/
---

# 💙 Music Therapy

Exploring how **music heals** — through science, sound, and emotion.  
Posts below share insights, case studies, playlists, and reflections on how rhythm and melody improve mental and physical wellbeing.

---

<ul class="apm-post-list">
  {%- assign therapy_posts = site.posts | where_exp: "post", "post.tags contains 'music-therapy' or post.categories contains 'music-therapy'" -%}
  {%- for post in therapy_posts -%}
  <li class="apm-post-item">
    <a class="apm-post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <div class="apm-post-meta">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time>
      {%- if post.categories.size > 0 -%}
        · {{ post.categories | join: " / " }}
      {%- endif -%}
      {%- if post.tags.size > 0 -%}
        · <span class="apm-tags">
          {%- for t in post.tags limit:3 -%}
            <span class="apm-tag">{{ t }}</span>
          {%- endfor -%}
        </span>
      {%- endif -%}
    </div>
    {%- if post.excerpt -%}
      <p class="apm-post-excerpt">{{ post.excerpt | strip_html | truncate: 180 }}</p>
    {%- endif -%}
  </li>
  {%- endfor -%}
</ul>

