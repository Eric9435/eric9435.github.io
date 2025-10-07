---
layout: page
title: "Music Therapy"
permalink: /music/musictherapy/
---

# 💙 Music Therapy

<ul class="apm-post-list">
  {%- assign therapy_posts = site.posts | where_exp: "p", "p.tags contains 'musictherapy' or p.categories contains 'musictherapy'" -%}
  {%- for post in therapy_posts -%}
    <li class="apm-post-item">
      <a class="apm-post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <div class="apm-post-meta"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time></div>
      {%- if post.excerpt -%}<p class="apm-post-excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>{%- endif -%}
    </li>
  {%- endfor -%}
</ul>
