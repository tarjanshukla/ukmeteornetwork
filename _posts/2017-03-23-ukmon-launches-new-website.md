---
layout: article
title: UKMON Launches New Website
description: UKMON is pleased to announce the launch of its new website. Radically different and very exciting website is now server-less on Amazon Web Services architecture
image: img/spacex-101796.jpg
permalink: news/ukmon-launches-new-website/
short-description: UKMON is pleased to announce the launch of its new website. Radically different and very exciting website is now server-less on Amazon Web Services architecture
author: Peter Campbell-Burns
categories: News
tags: [ukmon, website, amazon web services]
station:
---

![3, 2, 1 and lift off]({{ site.baseurl }}/img/spacex-101796.jpg){:class="img-responsive"}

## UKMON’s new website marks the beginning of an exciting programme of improvement ##

UKMON is pleased to announce the launch of its new website.  What makes this launch significant is that the changes extend far beyond the site’s look and feel.  You will still find news and analysis as well as useful resources, but it is what you can’t see that makes our new site radically different – and very exciting.  It is hosted in ‘the cloud’ on [Amazon Web Services AWS)](https://aws.amazon.com){:target="\_blank"} infrastructure, and what you see today is only the beginning.

## UKMON already had great websites so why change? ##

Our old sites (UKMON and UKMON Live) used Wordpress, a tried and tested open-source content management system hosted on a shared server. This server had to be retired as it was no longer efficient to maintain it.

This wasn’t all bad news.  We saw a great opportunity here to look again at our websites, the services we provided and even how UKMON works as a collaboration.  Here are just a few of the issues we needed to address:

- It made little sense to run more than one website and for some time we have wanted to bring together the main UKMON and UKMON live sites.
- Our existing sites struggled to handle high traffic volumes during major showers and exceptional fireball events, and were prone to outages.
- We were spending an increasing amount of time keeping the site going.
- Vulnerabilities in Wordpress are being found and exploited and a compromised website risks much time and effort, and inconvenience for UKMON members.

## What are the benefits of AWS? ##

Our new website is effectively server-less and is based on static pages.  With the might of Amazon Web Services behind us we now have ability to handle virtually any amount of traffic.  Being server-less there is nothing to manage; there are no patches or updates, no plug-ins to go wrong, it’s more secure and more reliable (AWS aims to achieve “99.999999999% durability”).  It is very fast too; pages download in a couple of seconds regardless of from where in the world you happen to viewing our site.

Having static pages does not mean a return to the days of hand crafting HTML whenever we want to post content, far from it. This really is the future of the world wide web.  If I can get technical for a moment, the new site uses [Jekyll](https://jekyllrb.com){:target="\_blank"}, a blog-aware static site generator that allows us to post and maintain content using a simple markup language.

Overshadowing all of this is that we are now in a position to harness the amazing potential of [Amazon S3 cloud storage](https://aws.amazon.com/s3/){:target="\_blank"} and [AWS CloudFront](https://aws.amazon.com/cloudfront/){:target="\_blank"}.  Here we are limited only by our imagination.

## OK, so what’s next? ##

Our new website is just the beginning.  We have three major projects on our to-do list:

- Alerting and information gathering for significant fireball events.
- Improved data repository.
- Restoring the UKMON live service.

Reacting to a major fireball event has always been a bit chaotic.  In future we will use the AWS platform to generate alerts to UKMON members and to enable all members to upload any data, images and analysis.  This will allow more timely and effective data collection and will speed up the process of analysis and reporting.

Our main data repository was FTP based.  Using AWS we aim to make the uploading of data quicker and easier, perhaps with users simply selecting a zipped folder for upload.

UKMON live through which we could share meteor images in near real time had proved immensely successful.  However, the technology that made this possible was built around our dedicated server.  We are currently researching an AWS based solution and hope to restore this service as quickly as possible.

Image: SpaceX rocket launch
