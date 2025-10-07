---
layout: page
title: Music Therapy
permalink: /music/musictherapy/
---

# 🎵 Music Therapy

Welcome to **Music Therapy** — exploring the bridge between sound and healing.

Here you’ll find posts on:
- Therapeutic music practices  
- Research on music and emotional health  
- Techniques combining creativity and mindfulness  

---

## 📝 Latest Music Therapy Posts

<ul>
  {% for post in site.posts %}
    {% if post.categories contains "musictherapy" %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a><br>
        <small>{{ post.date | date: "%B %d, %Y" }}</small>
      </li>
    {% endif %}
  {% endfor %}
</ul>
