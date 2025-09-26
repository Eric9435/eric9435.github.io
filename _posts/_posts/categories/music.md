---
layout: page
title: Music
permalink: /music/
---

{% assign posts_cat = site.posts | where_exp: "p", "p.categories contains 'music'" %}
<ul>
{% for post in posts_cat %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> <small>— {{ post.date | date: "%b %d, %Y" }}</small></li>
{% endfor %}
</ul>
