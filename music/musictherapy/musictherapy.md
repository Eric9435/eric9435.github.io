---
layout: page
title: "Music Therapy"
---

# 💙 Music Therapy

<ul class="apm-post-list">
  {%- assign posts = site.posts | where_exp: "p", "p.categories contains 'musictherapy' or p.tags contains 'musictherapy'" -%}
  {%- for post in posts -%}
    <li class="apm-post-item">
      <a class="apm-post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <div class="apm-post-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time>
      </div>
      {%- if post.excerpt -%}<p class="apm-post-excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>{%- endif -%}
    </li>
  {%- endfor -%}
</ul>
