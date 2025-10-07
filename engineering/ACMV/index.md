---
layout: page
title: "ACMV"
permalink: /engineering/ACMV/
---

# 🧊 ACMV — Air Conditioning & Mechanical Ventilation

Notes and insights on ACMV systems, design, and energy efficiency.

<ul class="apm-post-list">
{% for post in site.posts %}
  {% assign cats = post.categories | join: ' ' | downcase %}
  {% if cats contains 'engineering' and cats contains 'acmv' %}
    <li class="apm-post-item">
      <a class="apm-post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <div class="apm-post-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time>
      </div>
    </li>
  {% endif %}
{% endfor %}
</ul>
