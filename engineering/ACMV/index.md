---
layout: page
title: "ACMV"
permalink: /engineering/ACMV/
---

# 🧊 ACMV — Air Conditioning & Mechanical Ventilation

Insights, design notes, and discussions about ACMV systems.

<ul class="apm-post-list" style="list-style:none; padding:0;">
{% for post in site.posts %}
  {% assign cats = post.categories | join: ' ' | downcase %}
  {% if cats contains 'engineering' and cats contains 'acmv' %}
    <li style="margin:1rem 0; padding:1rem; border:1px solid #eee; border-radius:10px;">
      <a href="{{ post.url | relative_url }}" style="font-weight:600; color:#0078D7; text-decoration:none;">
        {{ post.title }}
      </a><br>
      <small style="color:#999;">{{ post.date | date: "%b %d, %Y" }}</small>
    </li>
  {% endif %}
{% endfor %}
</ul>
