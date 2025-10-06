---
layout: category
title: "ACMV Engineering"
permalink: /engineering/acmv/
category: engineering
tag: ACMV
---

# ⚙️ ACMV Engineering

Welcome to the **ACMV (Air Conditioning and Mechanical Ventilation)** section — where I share insights on system design, energy efficiency, and field experience.

---

## 🧰 Topics Covered
- Chiller plant & pump systems  
- Air handling units (AHU)  
- Ductwork & airflow design  
- Building automation & control  
- Energy audits & optimization  

---

{% assign filtered_posts = site.posts | where: "categories", "engineering" | where_exp: "post", "post.tags contains 'ACMV'" %}
{% if filtered_posts.size > 0 %}
<ul>
  {% for post in filtered_posts %}
  <li style="margin-bottom:1.2rem;">
    <a href="{{ post.url | relative_url }}" style="font-weight:600;font-size:1.05rem;">
      {{ post.title }}
    </a>
    <br>
    <small style="color:#6b7280;">{{ post.date | date: "%b %d, %Y" }}</small>
    <p style="margin:.2rem 0;color:#4b5563;font-size:.95rem;">
      {{ post.excerpt | strip_html | truncate: 160 }}
    </p>
  </li>
  {% endfor %}
</ul>
{% else %}
<p style="color:#6b7280;">No ACMV posts yet — check back soon!</p>
{% endif %}

