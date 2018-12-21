---
title: Cameron's Stuff
layout: stuff
hide_updated: true
hide_main: true
icon: "fas fa-box-open"
subtitle: The random stuff hosted on camk.co by Jekyll and Firebase.
hide_subtitle: true
---
Here's a list of stuff:

{% for page in site.stuff %}
  {% unless page.hide_main %}
## [{{ page.title }}]({{ page.url }})
<small class="text-muted"><i class="fas fa-clock"></i>&ensp;{{ page.last_modified_at|date: "%b %e, %Y" }}</small>

_{{ page.subtitle }}_
  {% endunless %}
{% endfor %}
