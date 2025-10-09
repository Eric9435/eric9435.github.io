---
layout: category
title: "Grammar"
permalink: /english/grammar/
---

# 🧩 English Grammar

Welcome to the Grammar Section 🇬🇧  
Here, you’ll learn step-by-step rules and techniques to build a solid foundation in English writing and speaking.

---

## 📚 What You’ll Learn

- ✅ Tenses — Master present, past, and future forms clearly.  
- ✅ Parts of Speech — Understand nouns, verbs, adjectives, and more.  
- ✅ Sentence Structure — Learn how to form natural and correct sentences.  
- ✅ Common Mistakes — Avoid everyday grammar errors easily.  
- ✅ Practice Exercises — Improve with examples and real usage.

---

## 🧠 Quick Tip

> “Good grammar is the difference between knowing your shit and knowing you’re shit.”  
> — Anonymous 😄

---

### 📝 Latest Grammar Posts

{% assign grammar_posts = site.categories.grammar | sort: 'date' | reverse %}
{% if grammar_posts.size > 0 %}
<ul>
  {% for post in grammar_posts %}
  <li style="margin-bottom:0.8rem;">
    <a href="{{ post.url | relative_url }}" style="color:#0078D7; font-weight:600; text-decoration:none;">
      {{ post.title }}
    </a><br>
    <small style="color:#777;">{{ post.date | date: "%b %d, %Y" }}</small>
  </li>
  {% endfor %}
</ul>
{% else %}
<p style="color:#777;">No grammar posts yet — new lessons coming soon! ✍️</p>
{% endif %}

---

### 💡 Keep Learning
Explore more topics:
- [🗣️ Speaking]({{ '/english/speaking/' | relative_url }})
- [🖊️ Writing]({{ '/english/writing/' | relative_url }})
- [🧠 Vocabulary]({{ '/english/vocabulary/' | relative_url }})

---

<footer style="text-align:center; margin-top:2rem; color:#777; font-size:0.9em;">
  © <script>document.write(new Date().getFullYear())</script> Eric Scott — All rights reserved.
</footer>
