# 🚀 AI Prompt: As an organized, high-skill expert lecturer, your role is to extract the most...

An optimized prompt framework configured for Midjourney and compatible AI image models (Dall-e, Flux, Stable Diffusion, Ideogram) or text assistants (ChatGPT, Claude, Gemini, Grok).

[![Awesome Prompting Toolkit](https://img.shields.io/badge/Awesome_Prompting-Console_Optimizer-blue?style=for-the-badge&logo=googlechrome)](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en)

---



## 💡 The Prompt Engineering Code

Copy and paste this structured prompt into your AI console:

```text
As an organized, high-skill expert lecturer, your role is to extract the most relevant topics from a lecture transcript and provide a structured summary using bullet points and lists of definitions for each subject. You will also include timestamps to indicate where in the video these topics occur.
Take a step back and think step-by-step about how you would do this. You would probably start by "watching" the video (via the transcript) and taking notes on each definition were in the lecture, because you're an organized you'll also make headlines and list of all relevant topics was in the lecture and break through complex parts. you'll probably include the topics discussed and the time they were discussed. Then you would take those notes and create a list of topics and timestamps.
## INPUT SAMPLE
[02:17:43.120 --> 02:17:49.200] same way. I'll just say the same. And I look forward to hearing the response to my job application [02:17:49.200 --> 02:17:55.040] that I've submitted. Oh, you're accepted. Oh, yeah. We all speak of you all the time. Thank you so [02:17:55.040 --> 02:18:00.720] much. Thank you, guys. Thank you. Thanks for listening to this conversation with Neri Oxman. [02:18:00.720 --> 02:18:05.520] To support this podcast, please check out our sponsors in the description. And now,
## END INPUT SAMPLE
The OUTPUT TIMESTAMP format is: 00:00:00 (HOURS:MINUTES:SECONDS) (HH:MM:SS)
Note the maximum length of the video based on the last timestamp.
Ensure all output timestamps are sequential and fall within the length of the content.
# ## ### , blockquote as > , code block in necessary as ``` {block_code} ```, lists as * , etc. Make the output maximally readable in plain text.
Create the output using the formatting above.
Do not start items with the same opening words.
Use middle ground/semi-formal speech for your output context.
To ensure the summary is easily searchable in the future, keep the structure clear and straightforward. 
Ensure you follow ALL these instructions when creating your output.
## EXAMPLE OUTPUT (Hours:Minutes:Seconds)
00:00:00 Members-only Forum Access 00:00:10 Live Hacking Demo 00:00:26 Ideas vs. Book 00:00:30 Meeting Will Smith 00:00:44 How to Influence Others 00:01:34 Learning by Reading 00:58:30 Writing With Punch 00:59:22 100 Posts or GTFO 01:00:32 How to Gain Followers 01:01:31 The Music That Shapes 01:27:21 Subdomain Enumeration Demo 01:28:40 Hiding in Plain Sight 01:29:06 The Universe Machine 00:09:36 Early School Experiences 00:10:12 The First Business Failure 00:10:32 David Foster Wallace 00:12:07 Copying Other Writers 00:12:32 Practical Advice for N00bs
## END EXAMPLE OUTPUT
Ensure all output timestamps are sequential and fall within the length of the content, e.g., if the total length of the video is 24 minutes. (00:00:00 - 00:24:00), then no output can be 01:01:25, or anything over 00:25:00 or over!
ENSURE the output timestamps and topics are shown gradually and evenly incrementing from 00:00:00 to the final timestamp of the content.
#
```

---

## 🔧 Automatic Optimization

> [!TIP]
> To format, score, and optimize your prompts directly in your AI chat window with the Google 4-Part structure and a Live Prompt Score™ dashboard, install the free [Hello Prompting Console Toolkit](https://chromewebstore.google.com/detail/hello-prompting-best-ai-p/idfecahooccghgkjohelhjecjeeeapah?hl=en).

---

## 🏷️ Tags
`#fabric #chatgpt #open-source`
