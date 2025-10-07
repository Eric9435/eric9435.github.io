---
layout: default
title: "ACMV Engineering"
permalink: /engineering/ACMV/
---

# 🌬️ Air-Conditioning & Mechanical Ventilation (ACMV)

Welcome to the **ACMV Engineering** section — a hub for learning about air-conditioning, refrigeration, and ventilation systems.

Here you'll find technical posts and notes on:
- ❄️ Vapour-Compression Refrigeration Cycles  
- ⚙️ Chillers and Compressors  
- 🌡️ Energy Efficiency in HVAC Systems  
- 🌿 Green Refrigerant Standards  

---

## 🧾 Latest ACMV Posts
{% assign acmv_posts = site.posts | where_exp: "post", "post.categories contains 'acmv'" %}
<ul>
  {% for post in acmv_posts %}
  <li style="margin-bottom:10px;">
    <a href="{{ post.url | relative_url }}" style="font-weight:600; color:#007acc;">
      {{ post.title }}
    </a><br>
    <small style="color:#888;">{{ post.date | date: "%b %d, %Y" }}</small>
  </li>
  {% endfor %}
</ul>

---

> *By Eric Scott*  
> Sharing real-world ACMV engineering knowledge and technical insights.
