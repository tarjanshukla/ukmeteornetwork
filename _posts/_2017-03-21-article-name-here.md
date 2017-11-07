---
layout: article
title: Some Article name here
description: This is the actual article description
image: img/assets/2dc1351eed9fe0ac3b2515c0101e9257.jpg
permalink: news/article-name-here/
short-description: Hello this is a description. It appears only on the news page and it is a short snippet of what the article is about. Ideally it should be a few sentences, nothing really difficult and it can be a cut out of your main article.
author: Steve Bosley
categories: News
tags: [web, jekyll]
---
This is a test article from Article test from 8 February 2017

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/


## Image: ##
![Quadrantid meteors ground map]({{ site.baseurl }}/img/articles/2017-quadrantids-map.png){:class="img-responsive"}

![Image text]({{ site.baseurl }}/img/){:class="img-responsive"}

## Link: ##
[American Meteor Society](http://www.amsmeteors.org){:target="\_blank"}

## Image link with modal: ##
<a href="{{ site.baseurl }}/img/assets/M20140407_231700_Ash_Vale_K1P.jpg" title="Ash Vale fireball 7 April 2014" data-title="Ash Vale fireball 7 April 2014" data-toggle="lightbox" data-gallery="M20140407_231700">
![Ash Vale fireball 7 April 2014]({{ site.baseurl }}/img/assets/M20140407_231700_Ash_Vale_K1P.jpg){:class="img-responsive"}
</a>
