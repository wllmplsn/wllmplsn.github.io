---
layout: default
title: Blog - William Paulson
description: 
permalink: /blog
---

<ul>
    {% if site.posts.size == 0 %}
    <p>If there's nothing here... then there are no blog posts yet, come back later.</p>
    {% endif %}

    {% for post in site.posts reversed %}
    <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <p style="margin-top: 0;">{{ post.date | date: "%F" }}</p>
    </li>
    {% endfor %}
</ul>