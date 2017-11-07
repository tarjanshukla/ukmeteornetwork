---
layout: article
title: UKMON Summary, July 2016 by Steve Bosley
description: Steve Bosley prepared mid-2016 report of UKMON activity and interesting events captured by the network
image: img/assets/Ground-Map-YTD.jpg
permalink: news/ukmon-summary-july-2016-by-steve-bosley/
short-description: Steve Bosley prepared mid-2016 report of UKMON activity and interesting events captured by the network
author: Steve Bosley
categories: News
tags: [ukmon, citizen science, 2016, report, fireballs, meteors]
---

## Introduction ##

It has been suggested that we produce a periodic report on the UKMON data. This document is a proposal of what we might deliver, every couple of months or so.
For this first edition, I have used a data drop that I took from the UKMON server on 9<sup>th</sup> August – so if you had submitted data before this date, then it ought to be included in the analysis. If not, then no problem, it should be picked up next time.

Every period, I will try to focus on the major shower from the previous period so, for this (YTD) first edition, I have chosen the Quadrantids from January, for which we had more than 700 observations. Obviously, the Perseids will feature in the next edition so please try to get your August data processed as quickly as possible (I realise that is a big ask – Clanfield alone had around 2000 events in the first half of the month!).
I also hope to include analyses and discussions on the subject of data quality, based on my own efforts, and also using some of the outputs from the UKMON R Programming Suite (announced in a recent edition of WGN (the IMO Journal).

Pictures will obviously make for an easier read – these will however depend on offerings/recommendations from member stations (otherwise you may only get Clanfield images !)
Please take a look and feedback to me (stevebosley@ntlworld.com) on what you like, what you don't, and anything else that you think may be missing. No promises – but if we can work to evolve this first attempt into something worth reading then I hope we can make it a regular offering.
And, of course, if you want to offer contributions (one off or regular), they would be most welcome.

### Data Sharing ###
The data for this report was extracted from the UKMON server on or around 9<sup>th</sup> August 2016 and so should include all events to month ending 31<sup>st</sup> July that had been uploaded by that time.
Considerable effort was spent ensuring that nothing was missed, but also that duplicates were filtered out. The organisation of the UKMON server folders makes this an easier task, but there were still a few surprises in there !

Duplicates were possibly down to multiple submissions (eg the St Patrick's Day fireball data would have been submitted on the day, but repeated in the month end upload).
It was noted that data has been processed against either J6 or J8 catalogues. In future I plan to run a comparison of these two catalogues, but for now there are no issues with the status quo.
By creating the all station extract, I can make full use of UFO Orbit, the UKMON R Reporting Suite, and run other ad hoc scripts of my own design. If other UKMON members fancy trying UFO Orbit and the R Suite for themselves, then I am sure we could setup a regular data drop (UFO Orbit uses the raw data directly, whilst the R Suite uses a Unified Radiant extract that is output from UFO Orbit).

## Results for the last period ##

### Meteor Showers ###

The following table shows the main showers observed so far in 2016. An arbitrary cap of 100 observations has been applied to make for a manageable list, which has then been sorted in descending total number of events, to highlight the stars!

NB Sporadics are included and they obviously top the list !

<div class="table-responsive">

<table class="table table-bordered">
<tbody>
<tr>
<td valign="top" width="50">Shower</td>
<td valign="top" width="38">IAU</td>
<td valign="top" width="63">Name</td>
<td valign="top" width="50">Jan</td>
<td valign="top" width="50">Feb</td>
<td valign="top" width="50">Mar</td>
<td valign="top" width="50">Apr</td>
<td valign="top" width="50">May</td>
<td valign="top" width="50">Jun</td>
<td valign="top" width="50">Jul</td>
<td valign="top" width="50">Aug</td>
<td valign="top" width="50">Sep</td>
<td valign="top" width="50">Oct</td>
<td valign="top" width="50">Nov</td>
<td valign="top" width="50">Dec</td>
<td valign="top" width="50">Tot</td>
</tr>
<tr>
<td valign="top" width="50">spo</td>
<td valign="top" width="38">NA</td>
<td valign="top" width="63">Sporadic</td>
<td valign="top" width="50">694</td>
<td valign="top" width="50">648</td>
<td valign="top" width="50">1373</td>
<td valign="top" width="50">1060</td>
<td valign="top" width="50">1060</td>
<td valign="top" width="50">444</td>
<td valign="top" width="50">285</td>
<td valign="top" width="50">74</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">5638</td>
</tr>
<tr>
<td valign="top" width="50">QUA</td>
<td valign="top" width="38">10</td>
<td valign="top" width="63">Quadrantids</td>
<td valign="top" width="50">731</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">731</td>
</tr>
<tr>
<td valign="top" width="50">ZCS</td>
<td valign="top" width="38">444</td>
<td valign="top" width="63">zeta Cassiopeiids</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">10</td>
<td valign="top" width="50">152</td>
<td valign="top" width="50">160</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">322</td>
</tr>
<tr>
<td valign="top" width="50">PER</td>
<td valign="top" width="38">7</td>
<td valign="top" width="63">Perseids</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">91</td>
<td valign="top" width="50">217</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">308</td>
</tr>
<tr>
<td valign="top" width="50">LYR</td>
<td valign="top" width="38">6</td>
<td valign="top" width="63">April Lyrids</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">222</td>
<td valign="top" width="50">27</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">249</td>
</tr>
<tr>
<td valign="top" width="50">ETA</td>
<td valign="top" width="38">31</td>
<td valign="top" width="63">Eta Aquariids</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">17</td>
<td valign="top" width="50">131</td>
<td valign="top" width="50">6</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">154</td>
</tr>
<tr>
<td valign="top" width="50">DAD</td>
<td valign="top" width="38">334</td>
<td valign="top" width="63">December Alpha Draconids</td>
<td valign="top" width="50">145</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">145</td>
</tr>
<tr>
<td valign="top" width="50">COM</td>
<td valign="top" width="38">20</td>
<td valign="top" width="63">Dec. Comae Berenicids</td>
<td valign="top" width="50">117</td>
<td valign="top" width="50">8</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">125</td>
</tr>
<tr>
<td valign="top" width="50">GBO</td>
<td valign="top" width="38">104</td>
<td valign="top" width="63">gamma Bootids</td>
<td valign="top" width="50">27</td>
<td valign="top" width="50">79</td>
<td valign="top" width="50">19</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">125</td>
</tr>
<tr>
<td valign="top" width="50">LBO</td>
<td valign="top" width="38">322</td>
<td valign="top" width="63">lambda Bootids</td>
<td valign="top" width="50">116</td>
<td valign="top" width="50">4</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">120</td>
</tr>
<tr>
<td valign="top" width="50">CVN</td>
<td valign="top" width="38">403</td>
<td valign="top" width="63">Canum Venaticids</td>
<td valign="top" width="50">108</td>
<td valign="top" width="50">10</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">118</td>
</tr>
<tr>
<td valign="top" width="50">ACB</td>
<td valign="top" width="38">429</td>
<td valign="top" width="63">alpha Coronae Borealids</td>
<td valign="top" width="50">67</td>
<td valign="top" width="50">50</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">117</td>
</tr>
<tr>
<td valign="top" width="50">DSE</td>
<td valign="top" width="38">34</td>
<td valign="top" width="63">delta Serpentids</td>
<td valign="top" width="50">10</td>
<td valign="top" width="50">74</td>
<td valign="top" width="50">28</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">112</td>
</tr>
<tr>
<td valign="top" width="50">BCB</td>
<td valign="top" width="38">332</td>
<td valign="top" width="63">Bootid-Coronae Borealid Comple</td>
<td valign="top" width="50">94</td>
<td valign="top" width="50">14</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">108</td>
</tr>
<tr>
<td valign="top" width="50">TCB</td>
<td valign="top" width="38">321</td>
<td valign="top" width="63">theta Coronae Borealids</td>
<td valign="top" width="50">96</td>
<td valign="top" width="50">9</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">105</td>
</tr>
<tr>
<td valign="top" width="50">BHE</td>
<td valign="top" width="38">418</td>
<td valign="top" width="63">beta Herculids</td>
<td valign="top" width="50">21</td>
<td valign="top" width="50">61</td>
<td valign="top" width="50">20</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">102</td>
</tr>
<tr>
<td valign="top" width="50">ZCY</td>
<td valign="top" width="38">40</td>
<td valign="top" width="63">zeta Cygnids</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">9</td>
<td valign="top" width="50">77</td>
<td valign="top" width="50">14</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">0</td>
<td valign="top" width="50">100</td>
</tr>
</tbody>
</table>

</div>

Clearly the Quadrantids in January gave the best show, with more than double the number of zeta Cassiopeiids. Interestingly, the Perseids are already third on the list, even though they were still a couple of weeks from peak at the time this data was obtained.

### Fireballs ###

There have been six meteors observed so far in 2016 with a calculated absolute magnitude of -4 or brighter:

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/Fireballs-by-Month-1024x694.jpg" alt="fireballs-by-month" />

<div class="table-responsive">

<table class="table table-bordered">
<thead>
<tr>
<td width="140">Localtime</td>
<td width="114">Magnitude</td>
<td width="222">ID</td>
<td width="232">Stream</td>
</tr>
</thead>
<tbody>
<tr>
<td width="140">02/02/2016 23:23:44</td>
<td width="114">-4.4</td>
<td width="222">"(UNIFIED_03)"</td>
<td width="232">"SPO"</td>
</tr>
<tr>
<td width="140">03/02/2016 22:46:00</td>
<td width="114">-4.63</td>
<td width="222">"(UNIFIED_03)"</td>
<td width="232">"SPO"</td>
</tr>
<tr>
<td width="140">28/02/2016 01:56:11</td>
<td width="114">-4.93</td>
<td width="222">"(UNIFIED_03)"</td>
<td width="232">"NDL"</td>
</tr>
<tr>
<td width="140">17/03/2016 03:16:53</td>
<td width="114">-4.96</td>
<td width="222">"(UNIFIED_05)"</td>
<td width="232">"SPO"</td>
</tr>
<tr>
<td width="140">20/04/2016 00:51:06</td>
<td width="114">-4.33</td>
<td width="222">"(UNIFIED_04)"</td>
<td width="232">"SPO"</td>
</tr>
<tr>
<td width="140">25/04/2016 01:08:34</td>
<td width="114">-4</td>
<td width="222">"(UNIFIED_03)"</td>
<td width="232">"SPO"</td>
</tr>
</tbody>
</table>

</div>

Notes: ID prefix “UNIFIED” denotes an event generated by UFO Orbit by combining more than one observation – the numeric suffix indicates the number of observations that were combined.
Shower codes : SPO = Sporadic, NDL = Northern Delta Leonids
Integrated jpgs of the matched observations are show in the tables below, where available.

#### Date/Time: 20160202_232344 ####

<u>Cameras</u>: (3) Lockyer2_L2, Clanfield_NW, Wilcot_E

Shower: Sporadic

Magnitude: -4.4

Nice mid-trail explosion.


<img class="img-responsive" src="{{ site.baseurl }}/img/assets/M20160202_232343_Lockyer2_L2P.jpg" alt="m20160202_232343_lockyer2_l2p" />

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/M20160202_232343_Clanfield_NWP.jpg" alt="m20160202_232343_clanfield_nwp" />

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/M20160202_232344_Wilcot_EP.jpg" alt="m20160202_232344_wilcot_ep" />

#### Date/Time: 20160203_224600 ####

<u>Cameras</u>: (3)

Clanfield_SE, Wilcot_SE, Ash_Vale K1

Shower: Sporadic

Magnitude: -4.63

Quite a broad trail.

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/M20160203_224600_Clanfield_SEP.jpg" alt="m20160203_224600_clanfield_sep" />

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/M20160203_224601_Ash_Vale_K1P.jpg" alt="m20160203_224601_ash_vale_k1p" />

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/M20160203_224600_Wilcot_SEP.jpg" alt="m20160203_224600_wilcot_sep" />

####  Date/Time: 20160228_015611 ####

<u>Cameras</u>: (3)

Clanfield_NE, Wilcot_E, Ash_Vale K2

Shower: NDL

Magnitude: -4.93

Good clear trail and nice “pop” just before it disappeared.

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/M20160228_015611_Clanfield_NEP.jpg" alt="m20160228_015611_clanfield_nep"/>

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/M20160228_015611_Wilcot_EP.jpg" alt="m20160228_015611_wilcot_ep" />

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/M20160228_015612_Ash_Vale_K2P.jpg" alt="m20160228_015612_ash_vale_k2p" />

####  Date/Time:20160317_031653 ####  

[Saint Patrick's Day Fireball]({{ site.baseurl }}/fireballs/st-patricks-day-fireball-full-report/)

<u>Cameras</u>: (5)

Lockyer2_L2, Lockyer1_L1, Clanfield_NW, Church_Cro S, Basingstok W

Shower: Sporadic

Magnitude: -4.96 (~ -14 at Explosion !)

There were other observations (eg by Wilcot) but these are the ones UFO Orbit included for its unified radiant

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/M20160317_031653_Lockyer1_L1P.jpg" alt="m20160317_031653_lockyer1_l1p" />

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/M20160317_031653_Lockyer2_L2P.jpg" alt="m20160317_031653_lockyer2_l2p" />

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/M20160317_031654_Church_Cro_S1P.jpg" alt="m20160317_031654_church_cro_s1p" />

####  Date/Time:20160420_005106 ####  

<u>Cameras</u>: (4)

Basingstok S, Wilcot E, Church Cro S1, Clanfield_NW

Shower: Sporadic

Magnitude: -4.33

Particularly bright. NB. there was another Fireball reported in Popular Astronomy on the same day (a couple of hours later) , in the north of England

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/M20160420_005106_Basingstok_SP.jpg" alt="m20160420_005106_basingstok_sp" />

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/M20160420_005107_Wilcot_EP.jpg" alt="m20160420_005107_wilcot_ep" />

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/M20160420_005108_Church_Cro_S1P.jpg" alt="m20160420_005108_church_cro_s1p" />

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/M20160420_005109_Clanfield_NWP.jpg" alt="m20160420_005109_clanfield_nwp" />

####  Date/Time:20160425_010834 ####  

<u>Cameras</u>: (3)

Wilcot N, Basingstok N, Clanfield_NW

Shower: Sporadic

Magnitude: -4.00

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/M20160425_010834_Wilcot_NP.jpg" alt="m20160425_010834_wilcot_np" />

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/M20160425_010834_Clanfield_NWP.jpg" alt="m20160425_010834_clanfield_nwp" />

NB. It is worth remembering that the magnitude shown is calculated as if the event occurred at the zenith and at an altitude of 100km. This helps to explain why some may not appear to be as bright as you would expect.

## The 2016 Quadrantids ##

A more detailed look at one or more of the most productive showers in the reporting period ...

### The Shower ###

To quote Wikipedia (that ultimate source of all human knowledge):

<blockquote>
  <p>The Quadrantids (QUA) are a January meteor shower. The zenithal hourly rate (ZHR) of this shower can be as high as that of two other reliably rich meteor showers, the Perseids in August and the Geminids in December,[4] yet Quadrantid meteors are not seen as often as meteors in these other two showers, because the peak intensity is exceedingly sharp, sometimes lasting only hours.</p>
  <footer><cite title="Source Title">Quadrantids on Wikipedia</cite></footer>
</blockquote>

### UKMON Data ###

From the 731 observations, 202 unified radiants were determined and these are shown on the following ground map:

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/Ground-Map-2016-QUA.jpg" alt="ground-map-2016-qua" />

The shower is clearly visible on the Radiant map which can be found later in this document with the YTD results.

In terms of orbits, the following chart shows how well defined the results are:

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/Orbit-Map-QUA-Q3-1024x633.jpg" alt="orbit-map-qua-q3" />

Looking at the data in more detail, using the UKMON R Reporting Suite, the following charts are worthy of note:

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/a_binned_QUA_2016.jpg" alt="a_binned_qua_2016" />
<img class="img-responsive" src="{{ site.baseurl }}/img/assets/Streamcounts_plot_by_station_QUA_2016.jpg" alt="streamcounts_plot_by_station_qua_2016" />
<img class="img-responsive" src="{{ site.baseurl }}/img/assets/stream_plot_by_correllation_QUA_2016.jpg" alt="stream_plot_by_correllation_qua_2016" />

The first two charts give an indication of how sharply defined the stream is, in accordance with the description in the Wikipedia discussion. It is unclear if the 'outriders' are genuine Quadrantids, or, perhaps, a couple of misattributed events.

The second pair show the contributions to the data for this shower provided by UKMON members – obviously weather has a significant influence here, but it is still good to see so many stations listed.
Finally, my own R chart showing the observations in 15 minute bins has a peak of activity of around 4hours duration:

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/2016-UKMON-Quadrantids.jpeg" alt="2016-ukmon-quadrantids" />

## UFO Orbit Results for 2016 YTD ##

Using data available on 9<sup>th</sup> August 2016, the following chart shows the (unified) ground tracks of all UKMON meteors observed to date in 2016 , matched using the Q2 quality criteria (a total of 899 meteors).

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/Ground-Map-YTD.jpg" alt="ground-map-ytd" />

The equivalent Radiant Map is as follows - the green patch top centre shows the Quadrantids.

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/Radiant-Map-YTD.jpg" alt="radiant-map-ytd" />

That chart looks a little sparsely populated so, to demonstrate how our data builds up over time, I include below the same chart, but including all (Q2) data since UKMON started in 2012:

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/Radiant-Map-ALL.jpg" alt="radiant-map-all" />

In truth, this is one chart where more is best and it is only when you look at the data from the lifetime of EDMOND that you realise the volume of data we are reporting so, for one time only, I give you the full EDMOND radiant map (to end of 2015):

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/P18_3.jpg" alt="p18_3"/>

## Data Quality ##

This section probably needs a bit more thought, for now I just show the spread of magnitudes we are getting across all UKMON cameras, along with a discussion of something we do at Clanfield.

## Magnitude Spread ##

A spread of calculated magnitudes for all events is shown below for all UKMON cameras.

<img class="img-responsive" src="{{ site.baseurl }}/img/assets/Magnitudes.jpg" alt="magnitudes"/>


## UFO Analysis Optimisation ##

For Clanfield I also look at the SD and cDeg values that we post to understand how close we get to the thresholds set for high quality data. As you know, UKMON uses SD &lt; 0.3 as its quality “bar” where SD is the standard deviation of the calculated angular velocity. This can be affected by camera settings, position in the field of view, weather conditions and the amount of post capture effort we are prepared to put in to optimising the analysis. When we reinstalled our North camera in a more robust housing, and adjusted the field of view and direction of pointing, it was useful to watch this spread to ensure we had not gone backwards in terms of quality.

As I said above, Clanfield monitor SD and cDeg. cDeg is an equivalent quality measure which measures the deviation in the calculated trail direction (cDeg &lt; 0.02 is required). We monitor both values to ensure that our data meets the needs of both networks. In reality, there is very little difference – when one is optimised, the other more often than not is too. There are however a few conflicts where we can meet neither criteria. In these cases we optimise to one, ensuring that the other value is not compromised.
