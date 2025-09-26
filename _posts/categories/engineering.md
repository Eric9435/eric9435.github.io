---
layout: page
title: Engineering
permalink: /engineering/
---

{% assign posts_cat = site.posts | where_exp: "p", "p.categories contains 'engineering'" %}
<ul>
{% for post in posts_cat %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> <small>— {{ post.date | date: "%b %d, %Y" }}</small></li>
{% endfor %}
</ul>
