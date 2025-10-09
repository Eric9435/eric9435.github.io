---
layout: category
title: "English Course"
permalink: /english/
---

# 🇬🇧 English Course

Welcome to the English Course Section of Eric Scott’s blog.  
Here you’ll find lessons and reflections that help you improve your Grammar, Speaking, Writing, and Vocabulary — with simple explanations and real-life examples.

---

## 📘 Learn English the Smart Way

English is more than grammar rules — it’s about communication, confidence, and connection.  
In this section, you’ll explore:

- 🧩 [Grammar]({{ '/english/grammar/' | relative_url }}) — Build strong sentence foundations.  
- 🗣️ [Speaking]({{ '/english/speaking/' | relative_url }}) — Speak naturally and confidently.  
- ✍️ [Writing]({{ '/english/writing/' | relative_url }}) — Express your thoughts clearly.  
- 🧠 [Vocabulary]({{ '/english/vocabulary/' | relative_url }}) — Expand your word power every day.

---

## 🗂️ Latest English Posts

{% assign english_posts = site.categories.english | sort: 'date' | reverse %}
{% if english_posts.size > 0 %}
<ul>
  {% for post in english_posts limit:10 %}
  <li style="margin-bottom:0.8rem;">
    <a href="{{ post.url | relative_url }}" 
       style="color:#0078D7; font-weight:600; text-decoration:none;">
      {{ post.title }}
    </a><br>
    <small style="color:#777;">{{ post.date | date: "%b %d, %Y" }}</small>
  </li>
  {% endfor %}
</ul>
{% else %}
<p style="color:#777;">No English course posts yet — new lessons coming soon! ✍️</p>
{% endif %}

---

> “Language is power, life and the instrument of culture.”  
> — Angela Carter

---

<footer style="text-align:center; margin-top:2rem; color:#777; font-size:0.9em;">
  © <script>document.write(new Date().getFullYear())</script> Eric Scott — All rights reserved.
</footer>
