---
layout: article
title: First Fripon camera in the UK
description: French Fireball Recovery and InterPlanetary Observation Network reaches UK and UKMON joins the effort
short-description: French Fireball Recovery and InterPlanetary Observation Network reaches UK and UKMON joins the effort
image: img/articles/fripon-camera-2.jpg
permalink: news/first-fripon-camera-in-uk/
author: Jim Rowe
categories: News
tags: [fripon, meteor, detection, network, France]
station:
---
Fripon means “rascal” in French and is the acronym chosen for the French Fireball Recovery and InterPlanetary Observation Network.  The Fripon all-sky camera network aims to track meteorites as they fall over France and to coordinate their recovery as quickly as possible for scientific study.  As you might guess, recovering a meteorite quickly is the best way of preserving its original chemistry and mineralogy.  Matching that information with the object’s original orbit (calculated from the camera observations) should allow scientists to piece together much more about the asteroid belt and the assorted fragments arriving on Earth from there.

In theory, about ten meteorites should land in France every year but history records that only about 1% are recovered and that, surprisingly, the recovery rate may be decreasing.  In an attempt to push the recovery rate up to 20% or better, the Fripon network was launched by five collaborating faculties of four French institutions - the Observatoire de Paris, the Muséum National d’Histoire Naturelle in Paris, the Geosciences department of the Université Paris Sud, and the Geosciences and the Astrophysics departments of the Université d’Aix Marseille.

![Map of Fripon network cameras in France]({{ site.baseurl }}/img/articles/fripon-camera-1.png){:class="img-responsive"}

A glance at the map of the Fripon network showed lots of cameras in France but also the odd one in Italy, Spain, Austria and even Brazil, so I wondered - why not the UK?  It seemed like something that I could help with.  As background, I’d been fascinated with fireball recovery since I was a kid.  After a fireball in Britain on 17 March 2016 fireball got widespread media coverage, I asked Google “why isn’t there a fireball network in the UK?” and so found my way to the UKMON and Nemetode networks which I joined in May (this article has been written for both UKMON and Nemetode).  When Fripon launched in June, I decided to join that as well.

I must have been one of the first to try, because I know that other who’ve tried since have been asked to wait a while.  However, I was kindly introduced by the director of Fripon to the camera assembly manufacturer (Shelyak instruments of Grenoble) who built and sold me the 171st Fripon camera – pictured here newly unpacked on arrival in London in September.

 ![Fripon camera unboxing]({{ site.baseurl }}/img/articles/fripon-camera-2.jpg){:class="img-responsive"}

At the moment camera 171 is operating in splendid isolation, but I believe there’s another one at the Norman Lockyer observatory in Devon and I’ve just ordered a new one that will be installed in Manchester so I’m hopeful that a UK network can eventually be built.  The Italian “Prisma” meteor network provides a good model – it uses the same Basler camera and shares data with Fripon, but is organised from Turin rather than Paris.  

The camera itself is a Basler Ace 1300-gm30 digital industrial CCTV camera which uses the GigE protocol, and so plugs into an Ethernet port.  It uses Power over Internet and so has just a single cable which can be up to 100 metres long – quite an improvement over the 10 metre maximum that analogue cameras require.  The lens is a Focusafe FS12520FEMP with a 1.25mm focal length, F/2 aperture and field coverage of 185°.  Shelyak makes the enclosure which is designed to dissipate excess heat.  Their experiments showed that the internal temperature is typically eight degrees Celsius above the outside temperature, so in theory there’s no need for a separate heater or fan though occasionally some of the mountain-based French cameras do ice up.  The Basler camera has higher resolution than the Watec cameras usually used for meteor detection (1280 x 960 pixels for the Basler, against 720 x 576 for the Watec) which helps deal with the larger area of sky captured by the fisheye lens.  Basler doesn’t publish ISO or lux sensitivity data for their cameras, but to capture bright stars I discovered that I needed to run it at an unfeasible two frames per second (compared with 25 fps for the Watec), so it’s significantly less sensitive than the Watec, particularly when running at FRIPON’s normal rate of 29.95 fps.  While this makes it perfect for capturing bright fireball events that are likely to drop meteorites, it’s not ideal for traditional meteor astronomy.  It’s also not totally clear how the calibration works, given the lack of sensitivity.

The Basler camera’s exposure time can be adjusted very widely while it’s running, meaning that it’s suitable for daytime operation.  Because meteorites are bright and can arrive any time of day or night, having the Fripon network running all day is their eventual aim.

Here’s a photo of the Fripon camera installed on my (now fire-free) chimney, with uninterrupted views of East Barnet and the English sky.

![Fripon camera mounted on a house in East Barnet]({{ site.baseurl }}/img/articles/fripon-camera-3.jpg){:class="img-responsive"}

While the camera hardware is easy to set up and use, the dedicated FRIPON software is much less so.  “FreeTure” is open-sourced meteor capture software written specifically for the project and is freely available on the GitHub repository. Designed for Linux (specifically, Debian) it’s also available in a Windows version.

The Fripon project is employing a person for six months in 2017 to make FreeTure more user-friendly, which is very much needed. At the moment, the only screen output is as below – just a brief report on each frame showing the exposure time and the current frame rate, scrolling at about 100 lines of text per second.  During a capture the scrolling pauses briefly while results are written, then resumes.  In theory the program can produce an AVI video of the capture, but this doesn’t currently work in the Windows version.  Each frame of the capture is saved as a highly-processed FITS image file and a variety of other summary images and text files are written, but nothing of great interest to the amateur astronomer, particularly an amateur without a user manual!  No user manual has been written yet because all users (except me) already knew how to use FreeTure, hence me taking five weeks to get it up and running.

![FreeTure detection software running on Windows computer]({{ site.baseurl }}/img/articles/fripon-camera-4.png){:class="img-responsive"}  

All of the French Fripon cameras are connected and controlled via a Virtual Private Network (VPN), which the project doesn’t plan to extend to privately-owned cameras.  Instead, a future version of FreeTure will flag the existence of every capture to Fripon, and for meteors of interest Fripon will ask the camera owners for results.  This is clearly workable for rare events and where the privately-owned cameras are in roughly the same geographical area as the main network, which is Fripon’s current vision of its French network, but again is not ideal for a collaboration-minded amateur or anyone based outside of France.  

The director of Fripon has asked me to provide detailed feedback on user-friendliness.  Based on all of the feedback that Fripon will get, mine included, hopefully by late 2017 we’ll see real-time video on screen, AVI generation, more transparency with configuration and calibration and ideally some level of interoperability with UFOAnalyzer.  If that functionality is added, Fripon/FreeTure could be a viable all-sky setup for an amateur.  

Until then, UFOCaptureHD works well with the Basler GigE hardware and is possibly a better choice.  The frame rate needs to be set on the camera before each capture starts, and you’ll need a couple of captures at very low frame rates (e.g. two fps) to calibrate it the first time, but otherwise it operates just like the familiar Watec setup.  As shown in the screenshot below, UFOCaptureHD manages pretty good starfield matching even with the wide-angle lens.  So, if you’re interested to track meteorite falls and are prepared to invest in a Fripon-compliant camera now, running it on UFOCaptureHD until the FreeTure software improves isn’t a bad plan.  A kit list is set out below for the keen.   

What next for Fripon Camera 171 of East Barnet?  It’s been running every night with FreeTure for six months now, and I’ll keep operating it that way as the software improves and as a UK network of similar cameras comes together, including the one that I’m sending up to Manchester.  I’m also building a very similar all-sky camera to run with UFOCaptureHD and will be interested to compare the results of the two systems over the next year or so.  Meanwhile, I’ll work with Fripon and with relevant UK institutions to see whether the network can be extended to the UK and how best to use the efforts of amateurs like us in the hunt for those valuable bits of scientific data falling from the French and British skies.      

![]({{ site.baseurl }}/img/articles/fripon-camera-5.png){:class="img-responsive"}

### Kit list: ###
- Camera: Basler Ace 1300-gm30, CS mount, available in the UK from Multipix.com
- Lens: Focusafe FS12520FEMP (F1.25mm focal length, F/2 aperture, CS mount), available from Focusafe directly via Alibaba.com.
- Intel Pro 1000 Gigabit network card for PC – the Basler software works better with the intel Ethernet card, available from Amazon.
- Power over Ethernet (PoE) injector – Amazon
- Long Ethernet cable for the camera, short Ethernet cable to connect the PoE Injector to the computer.  Both at least Cat5e; Cat7 is preferable.  Amazon.
- Enclosure with 50mm good-quality dome.  I haven’t found a supplier yet – ideas please!  Or build your own.  
