---
layout: page
title: Music Therapy
permalink: /music-therapy/
---

{% assign posts_cat = site.posts | where_exp: "p", "p.categories contains 'music-therapy'" %}
<ul>
{% for post in posts_cat %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> <small>— {{ post.date | date: "%b %d, %Y" }}</small></li>
{% endfor %}
</ul>
