---
title: Cameron's Stuff
layout: stuff
icon: "fas fa-box-open"
subtitle: The random stuff hosted on camk.co by Jekyll and Firebase.
hide_subtitle: true
hide_updated: true
---
Here's a list of stuff:

{% assign stuff = site.projects | concat: site.posts | sort: 'last_modified_at %Y-%m-%d' | reverse %}

{% for page in stuff %}
  {% unless page.hide_main %}
## [{{ page.title }}]({{ page.url }})
<small class="text-muted"><i class="fas fa-calendar-day"></i>
  &ensp;{% if page.is_post %}{{ page.date|date: "%b %e, %Y" }}{% else %}{{ page.last_modified_at|date: "%b %e, %Y" }}{% endif %}
</small>

_{{ page.subtitle }}_
  {% endunless %}
{% endfor %}
