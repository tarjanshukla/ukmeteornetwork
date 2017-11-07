---
layout: article
title: Stream Identification, Orbit Dissimilarity and D-Criterion
description: One of most basic things we look to discover when we record a meteor is whether it is a stream meteor, and if so, which stream
short-description: One of most basic things we look to discover when we record a meteor is whether it is a stream meteor, and if so, which stream
image: img/articles/stream-identification.jpg
permalink: news/stream-identification-orbit-dissimilarity-and-d-criterion/
author: Peter Campbell-Burns
categories: News
tags: [meteor, shower, stream, orbit, d-criterion, analysis]
station: Ash Vale, Wilcot
---
![How we classify meteors]({{ site.baseurl }}/img/articles/stream-identification.jpg){:class="img-responsive"}

One of most basic things we look to discover when we record a meteor is whether it is a stream meteor, and if so, which stream.

Meteors are either sporadic meteors or stream meteors.  Sporadic meteors are caused by ‘random’ meteoroids that aren’t associated with a given parent body whereas stream meteors share a common parent body and occur when the Earth passes through the trail of debris it has left during its orbit around the sun.  With video networks contributing significant volumes of data many new showers have been discovered by mining this data and using techniques such as orbital dissimilarity.  [The International Meteor Organisation (IMO)](http://www.imo.net){:target="\_blank"} maintains a working list of visual meteor showers which is continuously updated as data becomes available.  

The data capture software that we use (UFO Capture) makes an initial categorisation based on the timing of the event and its position of the meteor radiant.  Later on in the data processing pipeline and when observations from more than one station are combined, the categorisation can be refined.  

To discriminate more accurately, between different streams generally requires the application of statistical techniques.  One such method is to calculate orbital dissimilarity by comparing individual orbits against a reference orbit to give a dissimilarity value or D-criterion.  There are several algorithms which can be used to calculate dissimilarity, for example:  Southworth and Hawkins (DSH), Drummond (DD) and Jopek (DH).  In fact DD and DH are refinements of DSH and all base their comparison on orbital elements ():

- Eccentricity
- Inclination
- Perihelion distance
- Longitude of the Ascending Node
- Argument of the Perihelion

A higher D-criterion value indicates that a lower probability that a meteor shares a common orbit to the reference orbit.  Of course, the challenge now is to decide on what is an appropriate cut-off for the D-criterion; this will vary according to the algorithm used and other factors such as the age of the stream.  Age can be a factor because meteor streams are subject to “decoherence” due to perturbations from other solar system bodies as well as the effects of solar radiation.  Over time streams spread out and disperse so that individual meteoroids will experience a natural increase in dissimilarity over time.   

The first diagram below shows a frequency plot for a relatively small set of UKMON observations over time compared with a reference orbit for Perseids meteors.  The second plot is a cumulative density function (CDF)  – which is in fact a probability distribution - for the same data.  What is interesting about the CDF plot is that we can see a point where the steep gradient first levels off.  This is this point where the stream meteors have reached a peak density and as the D-criterion value increases the major contribution is from non-Perseid meteors.  Below this point we have a high probability that the meteors are Perseid meteors (though there will still be some contribution from the background sporadics).

![Frequency Plot]({{ site.baseurl }}/img/articles/Frequency.png){:class="img-responsive"}

![Frequency Plot]({{ site.baseurl }}/img/articles/CDF_PLOT.png){:class="img-responsive"}

### So how good is UFO Orbit at identifying meteors ###

Using this same dataset as above, we have run a comparison between classifications based on UFO ORBIT analysis and D-Criterion analysis.  With no cut-off, and after removing observations that do not meet certain quality criteria, there is a correlation of over 93% based on 1,725 observed Perseid meteors.

### Calculating D-Criterion ###

If you want to get into the gory details and the principles behind D-Criterion then references are included at the end of this article.

We have developed a reporting suite using the “R” language which provides some basic analysis of meteor data.  This suite, which can be downloaded from GitHub, includes a D-criterion function and some example analysis routines.  

Peter Campbell-Burns uses [SAS data analytics](https://www.sas.com/en_gb/home.html){:target="\_blank"} software in his day job and has devoted some time to developing D-Criterion analysis routines in SAS. [SAS University Edition](https://www.sas.com/en_us/software/university-edition.html){:target="\_blank"} can be downloaded from the SAS website.

The R scripts and SAS can be downloaded from [UMON’s GitHub repositories](https://github.com/UKMeteorNetwork?tab=repositories){:target="\_blank"}.  We don’t guarantee that the code is error free – but if you do find any bugs please let us know.

Both “R” and SAS are superb for data analytics but both involve learning a new (and somewhat unconventional) computer programming language but we think that it is well worth the effort.  If this is a step too far then the calculations can be done in Microsoft Excel.  Peter is also looking at the [QlikView](http://www.qlik.com/en-gb/products/qlikview){:target="\_blank"} data visualisation tool.  Perhaps he needs to get out more.

### Next Steps ###

Understanding D-Criterion and its application is an ongoing journey and we still have a lot to learn.  We would certainly appreciate feedback and any help and advice that you can offer.  Please feel free to use and adapt any of our code, and we would appreciate any contributions.  Meanwhile, keep an eye on our GitHub repository as we will refine what is there already and add more analysis scripts as we go along.

<hr />

#### Further Reading ####

- “A Test of Comet and Meteor Shower Associations”, Drummond, J. D., 1981, Icarus 45, 545
- “Remarks on the Meteor Orbital Similarity D-Criterion”, Jopek, T. J., 1993, Icarus 106, 603
- Southworth, R. B., Hawkins, G. S., 1963, Smithson. Contrib. Astrophys. 7, 261
