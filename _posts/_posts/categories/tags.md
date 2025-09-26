---
layout: page
title: Tags
permalink: /tags/
---

<ul>
{% assign sorted_tags = site.tags | sort %}
{% for tag in sorted_tags %}
  <li>
    <strong>{{ tag[0] }}</strong>
    <ul>
      {% for post in tag[1] %}
        <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
      {% endfor %}
    </ul>
  </li>
{% endfor %}
</ul>

