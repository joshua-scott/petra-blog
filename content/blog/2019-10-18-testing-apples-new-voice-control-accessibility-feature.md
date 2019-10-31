---
title: Testing Apple's new Voice Control accessibility feature
date: 2019-10-18T06:42:24.779Z
description: >-
  Accessibility testing of Apple's Voice Control feature, underlining its
  functionality and issues, and comparing with Windows' Speech Recognition
---
I would like you to stop for a second and imagine how would you manage to read this post while not being able to move your arm/hand to scroll through this text. How would you even be able to get to this text if not being able to use the mouse? There are few ways how to tackle such issues and allow people with limited mobility to use laptops, computers or phones.

There is a variety of disabilities that might affect a person's ability to move, such as cerebral palsy, spinal injuries, atrophies, missing or underdeveloped arms and others. Despite such mobility issues, not all individuals' pronunciation and speech becomes impaired. In such cases, accessibility features like voice control or speech recognition might be used to assist these people while using laptops or phones.

Recently, Apple has released an update to its desktop operating system (macOS) called Catalina and introduced an accessibility feature called Voice Control. I decided to test the new feature and see its effectiveness. After looking into how Apple has tackled these problems, I wanted to know what Windows' Speech Control has to offer. Finally, I compared both accessibility features and underlined the differences.

Setting up the macOS Voice Control was easy and required nothing more than turning on the function. To get to know the commands (what you have to say to, e.g. move mouse or click) was quite easy since you can view the list whenever you need by saying "show commands". On the contrary, Windows 10 Speech Recognition took ages to set up. In addition to the more complicated settings, the commands list was only available on the website or on the paper version; they encouraged me to print out. How old school is that? Also, the printed version could be quite challenging to deal with when you have limited mobility. You could argue that they could tape it next to the computer, but what if they have a visual impairment or the paper falls? I have to say I was quite disappointed by Windows. I believe they should make an effort to talk to disabled people or at least experts in this area to see what is essential and why.

When looking into the list of commands, I realised that Windows had a much longer list to offer than macOS. However, in macOS, you can create custom commands and add them to the list of already existing ones. Such an ability to adjust the function of a particular application or operating system to the individual's needs is essential in making accessibility features successful.

Before I get to describing the functionalities of both macOS and Windows 10 voice controls, I would like to mention the language options in both operating systems. Windows 10 doesn't offer any other language than English which is a little disappointing compared to macOS that even let me use Czech. It was quite surprising since I would not expect my native language to be one of the options. This allowed me to test the voice control feature of macOS in two languages. The recognition of the Czech language was smoother than English. Also, I realised that I'm not pronouncing correctly the word 'that', and it took me four times to get it right. Perhaps, it could also be used as a pronunciation checker.

Nevertheless, it would be good if Apple included a non-native English speaker speech recognition to tackle the issue. At the same time, I understand that it would be challenging to collect all the varieties of non-native speakers' English pronunciation. On the other hand, Windows 10 has an option for non-native speech recognition. I was all excited, but unfortunately, it didn't help at all.

Let's get to the actual usage of the accessibility features. I started with the most straightforward task, opening a browser and navigating around it. Apple's implementation offers two possibilities of mouse navigation. Your first option is to use a grid that can be viewed by using a command "show grid". The grid will appear on your screen with each cube marked by a number (see picture below). You can click on a specific area (cube) by saying "click 9" or zoom in to a smaller grid by using the command "choose 9".

![Grid on a browser screen marked by numbers](/img/img_20191017_142933.jpg "macOS Grid function")

![Small grid on browser screen close to the left top corner marked by numbers](/img/whatsapp-image-2019-10-16-at-13.37.22gr.jpeg "macOS smaller Grid function")

Grid is an interesting and quite smart way to navigate the screen. Alternatively, the command "show numbers" allows the user to see all clickable areas of the screen marked by numbers. The availability to click straight to the clickable area provides a faster and more natural way of navigating through applications or websites. 

I will shortly describe the process of "googling" a term. Let's say you want to search for the phrase "voice control apple". First, you need to open a browser (I chose Safari) by saying "open Safari". After having the browser ready to go, you say, "show numbers". Saying "click X" clicks the element labelled with the number, in this case the search bar. After that, I "typed" the words in (I will get back to the dictating later), and then used the command "search that". It was as simple as that to get to see the search results.

![Browser with icons and all other clickable places marked by numbers](/img/whatsapp-image-2019-10-16-at-13.37.22hgcg.jpeg "Using number function - all clickable places marked by numbers")

![Browser with typed "voice control apple", icons and all other clickable places marked by numbers](/img/whatsapp-image-2019-10-16-at-13.37.22nb.jpeg "Using number function - all clickable places marked by numbers")

Windows 10 uses a grid function that is very similar to Apple's one. However, they have nothing like the "show numbers" function. Also, I must say that the processing of spoken commands seems much slower and less accurate in Windows when compared to macOS. It took quite many attempts to open some application (often not the one I wanted) and then use the grid to navigate around. You might be thinking that maybe the microphone didn't work correctly. But trust me, I tried using my laptop's inbuilt microphone as well as my headphones with mic, and there was almost no difference in the speech recognition.

Moreover, it seemed that Windows was sensitive to ambient noises such as the clicks on the laptop, which made the dictating more difficult. On the contrary, I was impressed by macOS. It was taking in only commands said by me and ignored all other surrounding noise.

Regarding that, I had a chance to read the full [report on the accessibility Voice Control](https://www.apple.com/macos/catalina/docs/Voice_Control_Tech_Brief_Sept_2019.pdf) feature. The report mentioned that the iPhone is using a camera to check if you are talking to the phone or somebody else. It would be interesting to see how that might work, but unfortunately, I wasn't able to test that. You can check the full report here

I have praised macOS so much, but there was one issue I faced during my testing. I tried to use the Voice Control in their Podcast application that was launched in the Catalina update as well. Unfortunately, I must say it was challenging to navigate around. The search bar kept being active despite clicking on other items. You can imagine how annoying it is to try to use commands within the app, but instead, you are getting words typed into the search bar. I was a little disappointed. You would expect that an application launched together with the Voice Control feature would fully support it. But at the same time, all is a process, and hopefully someone at Apple will notice this sooner or later.

Finally, let's get to the dictating and editing text by using the Voice Control and Speech Recognition. It was quite easy in both operating systems to jump between words, sentences, and paragraphs. Once again, it was less trouble in macOS to, for example, bold and underline words. I must say that the Voice Control commands are very intuitive and hence, easy to remember. There are many parts of text editing that I haven't had a chance to try. Overall this feature worked pretty well in both macOS and Windows. I assume it is because the speech dictation and text editing have been used in both systems for a while.

Overall, I give macOS Catalina a big thumbs up and hope that Windows will try to keep up when it comes to the accessibility features in further development. To summarise the great functions of macOS Voice Control – easy set up, multiple languages, "show numbers" feature that allows you to see all clickable items on the screen, the possibility to add new commands based on your needs, and its ability to ignore ambient noise. 

You can check the macOS commands [here](https://www.computerworld.com/article/3442721/how-to-use-voice-control-in-macos-catalina.html) and the Windows commands [here](https://support.microsoft.com/en-gb/help/12427/windows-speech-recognition-commands).

In case you would have some comments and ideas for the next post, you can message me either on [Twitter](https://twitter.com/petra_kucharova) or [LinkedIn](https://linkedin.com/in/petra-kucharova). Thanks for reading and have a great day!
