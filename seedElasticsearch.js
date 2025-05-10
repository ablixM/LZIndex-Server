const client = require("./elasticSearchClient");

const sampleData = [
  {
    title: "Introduction to AI",
    transcript:
      "Artificial Intelligence is the simulation of human intelligence in machines...",
    timestamps: [
      {
        text: "crypto is the biggest upgrade to human",
        start: 0.48,
        duration: 5.76,
      },
      {
        text: "civilization since the US Constitution",
        start: 3.52,
        duration: 4.399,
      },
      {
        text: "you have all of these intranets that are",
        start: 6.24,
        duration: 3.319,
      },
      {
        text: "being built what does that look like for",
        start: 7.919,
        duration: 3.201,
      },
      {
        text: "communication internally what does it",
        start: 9.559,
        duration: 3.04,
      },
      {
        text: "look like for communication between",
        start: 11.12,
        duration: 2.92,
      },
      {
        text: "internet at the end of the day we are",
        start: 12.599,
        duration: 4.76,
      },
      {
        text: "building these trust machines suppose I",
        start: 14.04,
        duration: 6.239,
      },
      {
        text: "gave you infinite resources I gave you",
        start: 17.359,
        duration: 5.641,
      },
      {
        text: "access to infinite talent and then I",
        start: 20.279,
        duration: 7.561,
      },
      {
        text: "give you 30 years what would you do",
        start: 23.0,
        duration: 4.84,
      },
      { text: "[Music]", start: 29.29, duration: 4.63 },
      {
        text: "one one of the things I like doing is",
        start: 32.32,
        duration: 5.8,
      },
      {
        text: "asking five wi like and you know love",
        start: 33.92,
        duration: 7.4,
      },
      {
        text: "listen and learn what drove you into",
        start: 38.12,
        duration: 5.439,
      },
      {
        text: "crypto and to start layer zero in",
        start: 41.32,
        duration: 4.36,
      },
      {
        text: "particular and I can share something as",
        start: 43.559,
        duration: 5.201,
      },
      {
        text: "well you know I I had just i' had been a",
        start: 45.68,
        duration: 4.84,
      },
      {
        text: "professional poker player for a while I",
        start: 48.76,
        duration: 3.959,
      },
      {
        text: "I lived through is it why we on a poker",
        start: 50.52,
        duration: 6.96,
      },
      {
        text: "table yes surprising um uh I lived",
        start: 52.719,
        duration: 7.48,
      },
      {
        text: "through overnight uh waking up one day",
        start: 57.48,
        duration: 6.36,
      },
      {
        text: "in 20111 and uh so April 15th 2011",
        start: 60.199,
        duration: 6.321,
      },
      {
        text: "online uh the United States pass UA and",
        start: 63.84,
        duration: 4.36,
      },
      {
        text: "online poker was banned overnight so I",
        start: 66.52,
        duration: 3.4,
      },
      {
        text: "woke up and there was a doj symbol on",
        start: 68.2,
        duration: 3.64,
      },
      {
        text: "every one of my sites all the payment",
        start: 69.92,
        duration: 3.8,
      },
      {
        text: "processes were dead all of my money was",
        start: 71.84,
        duration: 3.52,
      },
      {
        text: "frozen I just bought a house at a",
        start: 73.72,
        duration: 3.16,
      },
      {
        text: "mortgage like I was out of a job all my",
        start: 75.36,
        duration: 3.28,
      },
      {
        text: "money was gone just like IM media",
        start: 76.88,
        duration: 5.08,
      },
      {
        text: "overnight um and so the poker World",
        start: 78.64,
        duration: 5.839,
      },
      {
        text: "adopted Bitcoin at that point in time as",
        start: 81.96,
        duration: 4.159,
      },
      {
        text: "you know PayPal money Booker SC all",
        start: 84.479,
        duration: 3.561,
      },
      {
        text: "these things were gone as a as a medium",
        start: 86.119,
        duration: 4.0,
      },
      {
        text: "exchange as a way to just move money and",
        start: 88.04,
        duration: 3.96,
      },
      {
        text: "it to the remaining Shady poker sites",
        start: 90.119,
        duration: 3.401,
      },
      {
        text: "that were left and just keep it so we",
        start: 92.0,
        duration: 3.159,
      },
      {
        text: "all started sort of touching it there",
        start: 93.52,
        duration: 5.279,
      },
      {
        text: "but um 2013 onwards I got very very",
        start: 95.159,
        duration: 5.561,
      },
      {
        text: "heavily involved racks of miners in my",
        start: 98.799,
        duration: 3.6,
      },
      {
        text: "garage and all of this stuff but it was",
        start: 100.72,
        duration: 4.52,
      },
      {
        text: "really the the core ethos was this um",
        start: 102.399,
        duration: 4.201,
      },
      {
        text: "which was basically everybody at the",
        start: 105.24,
        duration: 2.96,
      },
      {
        text: "time was this very libertarian mindset",
        start: 106.6,
        duration: 3.08,
      },
      {
        text: "of like you know you you you want to be",
        start: 108.2,
        duration: 4.559,
      },
      {
        text: "able to like own your own if if you",
        start: 109.68,
        duration: 4.439,
      },
      {
        text: "don't own it you really don't have",
        start: 112.759,
        duration: 2.841,
      },
      {
        text: "control and stuff can be taken away from",
        start: 114.119,
        duration: 3.161,
      },
      {
        text: "you at any point in time and and and",
        start: 115.6,
        duration: 3.839,
      },
      {
        text: "when you face it personally if you you",
        start: 117.28,
        duration: 4.56,
      },
      {
        text: "you know the run of it most very much so",
        start: 119.439,
        duration: 4.96,
      },
      {
        text: "yeah very much so and so um and so that",
        start: 121.84,
        duration: 5.44,
      },
      {
        text: "was like the initial core why but then",
        start: 124.399,
        duration: 5.2,
      },
      {
        text: "for layers itself uh was about four",
        start: 127.28,
        duration: 4.64,
      },
      {
        text: "years ago um they really started",
        start: 129.599,
        duration: 3.761,
      },
      {
        text: "thinking about this but it was at the at",
        start: 131.92,
        duration: 4.08,
      },
      {
        text: "the launch of of B&B chain BSC at the",
        start: 133.36,
        duration: 4.879,
      },
      {
        text: "time every day we're getting spammed",
        start: 136.0,
        duration: 4.12,
      },
      {
        text: "with you know messages of more volume",
        start: 138.239,
        duration: 3.921,
      },
      {
        text: "than ethereum more users than ethereum",
        start: 140.12,
        duration: 4.32,
      },
      {
        text: "and that was like very atypical like a",
        start: 142.16,
        duration: 4.64,
      },
      {
        text: "lot of chains existed but like nobody",
        start: 144.44,
        duration: 3.84,
      },
      {
        text: "used them and so this was just like",
        start: 146.8,
        duration: 2.6,
      },
      {
        text: "we're like okay like what What's",
        start: 148.28,
        duration: 2.56,
      },
      {
        text: "Happening Here and the real question we",
        start: 149.4,
        duration: 3.839,
      },
      {
        text: "asked ourselves is you have ethereum",
        start: 150.84,
        duration: 5.0,
      },
      {
        text: "that's like secure but very expensive so",
        start: 153.239,
        duration: 4.72,
      },
      {
        text: "what can you do with something that is",
        start: 155.84,
        duration: 4.2,
      },
      {
        text: "not nearly as secure but like fast and",
        start: 157.959,
        duration: 4.0,
      },
      {
        text: "cheap and ephemeral right just treat the",
        start: 160.04,
        duration: 3.559,
      },
      {
        text: "end result use it as a compute",
        start: 161.959,
        duration: 3.601,
      },
      {
        text: "environment uh and treat it as entirely",
        start: 163.599,
        duration: 4.881,
      },
      {
        text: "ephemeral and so we were just the three",
        start: 165.56,
        duration: 4.44,
      },
      {
        text: "of us me my two co-founders were just we",
        start: 168.48,
        duration: 2.96,
      },
      {
        text: "were just building for ourselves just",
        start: 170.0,
        duration: 3.519,
      },
      {
        text: "completely fun zero intention to start a",
        start: 171.44,
        duration: 4.36,
      },
      {
        text: "company and so we started to build a toy",
        start: 173.519,
        duration: 5.881,
      },
      {
        text: "game um just uh as technologists as like",
        start: 175.8,
        duration: 4.96,
      },
      {
        text: "what could you do here so we built this",
        start: 179.4,
        duration: 3.72,
      },
      {
        text: "stupid game of uh you'd open packs of",
        start: 180.76,
        duration: 4.52,
      },
      {
        text: "Gladiators the Gladiators would fight to",
        start: 183.12,
        duration: 5.08,
      },
      { text: "the death uh and really just a", start: 185.28, duration: 6.0 },
      {
        text: "randomized uh randomized uh heads up",
        start: 188.2,
        duration: 6.28,
      },
      {
        text: "event and if you're Gladiator W uh 10",
        start: 191.28,
        duration: 5.599,
      },
      {
        text: "times so one in every 1024 they would be",
        start: 194.48,
        duration: 4.2,
      },
      {
        text: "freed from the arena and that would mint",
        start: 196.879,
        duration: 3.201,
      },
      {
        text: "something back to ethereum and so there",
        start: 198.68,
        duration: 3.68,
      },
      {
        text: "really this concept of fast ephemeral",
        start: 200.08,
        duration: 3.6,
      },
      {
        text: "you could do a lot of stuff there that",
        start: 202.36,
        duration: 3.32,
      },
      {
        text: "you would never be able to do trans like",
        start: 203.68,
        duration: 4.759,
      },
      {
        text: "a rollup and I mean except the the exact",
        start: 205.68,
        duration: 4.479,
      },
      {
        text: "R scity is a little bit different but",
        start: 208.439,
        duration: 3.52,
      },
      {
        text: "it's kind of like you spin up this thing",
        start: 210.159,
        duration: 3.36,
      },
      {
        text: "and then like run that and then come",
        start: 211.959,
        duration: 3.441,
      },
      {
        text: "back exactly right that's so this was",
        start: 213.519,
        duration: 4.0,
      },
      {
        text: "before you know before we RS were there",
        start: 215.4,
        duration: 3.199,
      },
      {
        text: "we knew but that was that was the",
        start: 217.519,
        duration: 2.561,
      },
      {
        text: "intention was like you'll do something",
        start: 218.599,
        duration: 3.56,
      },
      {
        text: "here and then you'll bring the object of",
        start: 220.08,
        duration: 3.519,
      },
      {
        text: "permanence back on ethereum and that's",
        start: 222.159,
        duration: 3.881,
      },
      {
        text: "where we'll live and as we were building",
        start: 223.599,
        duration: 4.84,
      },
      {
        text: "this we realized that there was no way",
        start: 226.04,
        duration: 5.399,
      },
      {
        text: "to actually trigger events between BSC",
        start: 228.439,
        duration: 4.921,
      },
      {
        text: "and ethereum without a centralized",
        start: 231.439,
        duration: 3.561,
      },
      {
        text: "coordinator and I was like well that",
        start: 233.36,
        duration: 3.32,
      },
      {
        text: "sucks that defeats the whole purpose if",
        start: 235.0,
        duration: 3.2,
      },
      {
        text: "you have this centralized coordinators",
        start: 236.68,
        duration: 4.919,
      },
      {
        text: "triggering events and so um we looked",
        start: 238.2,
        duration: 4.8,
      },
      {
        text: "into Bridges at the time in the",
        start: 241.599,
        duration: 4.081,
      },
      {
        text: "landscape and quite frankly were pretty",
        start: 243.0,
        duration: 4.519,
      },
      {
        text: "horrified at what existed and I think",
        start: 245.68,
        duration: 3.6,
      },
      {
        text: "almost all of them have gone on to get",
        start: 247.519,
        duration: 3.881,
      },
      {
        text: "hacked since so I think we were right",
        start: 249.28,
        duration: 3.84,
      },
      {
        text: "right at the time the landscape was just",
        start: 251.4,
        duration: 3.759,
      },
      {
        text: "scary every everything was heavily",
        start: 253.12,
        duration: 4.32,
      },
      {
        text: "centralized everything had very little",
        start: 255.159,
        duration: 4.241,
      },
      {
        text: "uh thought around the trust properties",
        start: 257.44,
        duration: 4.96,
      },
      {
        text: "around it so we sort of had two",
        start: 259.4,
        duration: 5.239,
      },
      {
        text: "competing thesises there one was okay",
        start: 262.4,
        duration: 4.2,
      },
      {
        text: "Bridges were had probably done this but",
        start: 264.639,
        duration: 4.361,
      },
      {
        text: "there's no good one and and the other",
        start: 266.6,
        duration: 5.0,
      },
      {
        text: "was that um all the bridges at that time",
        start: 269.0,
        duration: 4.479,
      },
      {
        text: "were using wrapped assets uh which is",
        start: 271.6,
        duration: 3.2,
      },
      {
        text: "you're going to lock up here and Min a",
        start: 273.479,
        duration: 3.641,
      },
      {
        text: "synthetic asset over there but it really",
        start: 274.8,
        duration: 5.36,
      },
      {
        text: "shifted the user trust really a lot so",
        start: 277.12,
        duration: 6.079,
      },
      {
        text: "the user using Unis swop or some other",
        start: 280.16,
        duration: 5.64,
      },
      {
        text: "contract when they swap in Unis swap",
        start: 283.199,
        duration: 4.081,
      },
      {
        text: "they they bear the trust of the smart",
        start: 285.8,
        duration: 3.76,
      },
      {
        text: "contracts there but as soon as they're",
        start: 287.28,
        duration: 3.84,
      },
      {
        text: "done they never think about it again",
        start: 289.56,
        duration: 2.76,
      },
      {
        text: "they have their asset and they they",
        start: 291.12,
        duration: 2.72,
      },
      {
        text: "don't like retain that with the wrapped",
        start: 292.32,
        duration: 3.92,
      },
      {
        text: "asset as long as you hold that forever",
        start: 293.84,
        duration: 4.44,
      },
      {
        text: "in perpetuity if anything is wrong with",
        start: 296.24,
        duration: 3.72,
      },
      {
        text: "the smart contracts with the system as a",
        start: 298.28,
        duration: 3.84,
      },
      {
        text: "whole your asset immediately goes to",
        start: 299.96,
        duration: 3.88,
      },
      {
        text: "zero right you carry that trust and",
        start: 302.12,
        duration: 3.44,
      },
      {
        text: "perpetuity so the relationship with the",
        start: 303.84,
        duration: 3.84,
      },
      {
        text: "user shifts very heavily this is",
        start: 305.56,
        duration: 4.24,
      },
      {
        text: "something that you know uh normally when",
        start: 307.68,
        duration: 3.799,
      },
      {
        text: "you think of like two cities and a",
        start: 309.8,
        duration: 4.48,
      },
      {
        text: "bridge connecting it you think of the",
        start: 311.479,
        duration: 5.041,
      },
      {
        text: "the traffic flowing across the two",
        start: 314.28,
        duration: 4.84,
      },
      {
        text: "cities as the load that the bridge is",
        start: 316.52,
        duration: 5.519,
      },
      {
        text: "carrying but a wrapped asset has this",
        start: 319.12,
        duration: 6.04,
      },
      {
        text: "really counterintuitive structure which",
        start: 322.039,
        duration: 5.681,
      },
      {
        text: "is that it's carrying everybody who's",
        start: 325.16,
        duration: 5.28,
      },
      {
        text: "ever crossed the bridge that's the total",
        start: 327.72,
        duration: 5.319,
      },
      {
        text: "weight that's sitting on the bridge and",
        start: 330.44,
        duration: 6.0,
      },
      {
        text: "it is such a like if you know somebody",
        start: 333.039,
        duration: 5.321,
      },
      {
        text: "hasn't thought about it before it's not",
        start: 336.44,
        duration: 4.56,
      },
      {
        text: "intuitive that that's what's happening",
        start: 338.36,
        duration: 5.279,
      },
      {
        text: "because all the assets that are wrapped",
        start: 341.0,
        duration: 4.96,
      },
      {
        text: "could be rocked if the bridge went wrong",
        start: 343.639,
        duration: 5.321,
      },
      {
        text: "so it's like this you know imaginary",
        start: 345.96,
        duration: 5.04,
      },
      {
        text: "Bridge metaphorical bridge where",
        start: 348.96,
        duration: 4.6,
      },
      {
        text: "everybody who's crossed their load is",
        start: 351.0,
        duration: 4.44,
      },
      {
        text: "being Bor by this bridge so that's a",
        start: 353.56,
        duration: 6.24,
      },
      {
        text: "pretty hard bridge to build yeah wind in",
        start: 355.44,
        duration: 5.96,
      },
      {
        text: "that that was so for us we started",
        start: 359.8,
        duration: 3.0,
      },
      {
        text: "saying okay well let's let's think about",
        start: 361.4,
        duration: 3.079,
      },
      {
        text: "the bridging landscape and we actually",
        start: 362.8,
        duration: 4.08,
      },
      {
        text: "we had this strong thesis of like nobody",
        start: 364.479,
        duration: 3.921,
      },
      {
        text: "will keep using wrapped assets for the",
        start: 366.88,
        duration: 3.039,
      },
      {
        text: "long term everything will be native",
        start: 368.4,
        duration: 4.519,
      },
      {
        text: "assets is so we built Stargate where the",
        start: 369.919,
        duration: 4.801,
      },
      {
        text: "early version of Stargate which was just",
        start: 372.919,
        duration: 4.481,
      },
      {
        text: "pairwise native assets add here subtract",
        start: 374.72,
        duration: 4.879,
      },
      {
        text: "there you have native usdc on both sides",
        start: 377.4,
        duration: 3.919,
      },
      {
        text: "native you know whatever this is and",
        start: 379.599,
        duration: 2.801,
      },
      {
        text: "that's it that's the whole thing and",
        start: 381.319,
        duration: 2.521,
      },
      {
        text: "then we realized okay actually the",
        start: 382.4,
        duration: 3.12,
      },
      {
        text: "reason most people are using wrapped",
        start: 383.84,
        duration: 4.44,
      },
      {
        text: "assets is they want to go to more chains",
        start: 385.52,
        duration: 4.519,
      },
      {
        text: "and there's this race condition of the",
        start: 388.28,
        duration: 3.68,
      },
      {
        text: "Assets in the pool here and reverting",
        start: 390.039,
        duration: 4.56,
      },
      {
        text: "that race condition becomes very tricky",
        start: 391.96,
        duration: 4.28,
      },
      {
        text: "we created this thing called the Delta",
        start: 394.599,
        duration: 3.761,
      },
      {
        text: "algorithm and built Stargate as it is",
        start: 396.24,
        duration: 4.92,
      },
      {
        text: "today but eventually realized you still",
        start: 398.36,
        duration: 4.399,
      },
      {
        text: "can't trigger the events on both chains",
        start: 401.16,
        duration: 3.319,
      },
      {
        text: "there's still no way to have this",
        start: 402.759,
        duration: 3.44,
      },
      {
        text: "message passing uh you still need a",
        start: 404.479,
        duration: 3.12,
      },
      {
        text: "centralized coordinator and that was",
        start: 406.199,
        duration: 3.601,
      },
      {
        text: "when it became very apparent to us like",
        start: 407.599,
        duration: 4.761,
      },
      {
        text: "oh hey to do this thing uh we really",
        start: 409.8,
        duration: 4.08,
      },
      {
        text: "need like this piece of technology and",
        start: 412.36,
        duration: 3.399,
      },
      {
        text: "that's clearly like the generalizable",
        start: 413.88,
        duration: 3.12,
      },
      {
        text: "problem and that's that's when we",
        start: 415.759,
        duration: 3.081,
      },
      {
        text: "started like okay this this is the thing",
        start: 417.0,
        duration: 3.28,
      },
      { text: "that we're going to do", start: 418.84, duration: 4.56 },
      {
        text: "and this is that became layer zero right",
        start: 420.28,
        duration: 4.96,
      },
      {
        text: "that was that was layer zero and it",
        start: 423.4,
        duration: 3.479,
      },
      { text: "wasn't until", start: 425.24, duration: 5.679 },
      {
        text: "another six plus months after that and",
        start: 426.879,
        duration: 6.32,
      },
      {
        text: "again we were just three like we were in",
        start: 430.919,
        duration: 4.201,
      },
      {
        text: "my basement just building literally just",
        start: 433.199,
        duration: 3.84,
      },
      {
        text: "building for ourselves like this was a",
        start: 435.12,
        duration: 4.04,
      },
      {
        text: "thought experiment more than anything",
        start: 437.039,
        duration: 3.84,
      },
      {
        text: "and then we started to get the attention",
        start: 439.16,
        duration: 3.479,
      },
      {
        text: "of of some people and then and then we",
        start: 440.879,
        duration: 3.801,
      },
      {
        text: "went into uh you know we got preempted",
        start: 442.639,
        duration: 3.601,
      },
      {
        text: "and around and that was actually like oh",
        start: 444.68,
        duration: 3.919,
      },
      {
        text: "oh now we actually like it went from the",
        start: 446.24,
        duration: 4.959,
      },
      {
        text: "Start experiment to okay like let let's",
        start: 448.599,
        duration: 5.44,
      },
      {
        text: "what does it mean to do this like what",
        start: 451.199,
        duration: 4.161,
      },
      {
        text: "does it mean to really do this and what",
        start: 454.039,
        duration: 2.641,
      },
      {
        text: "does it mean to think about it not as",
        start: 455.36,
        duration: 3.04,
      },
      {
        text: "something for our own toy things that we",
        start: 456.68,
        duration: 3.199,
      },
      {
        text: "build but something that that could be",
        start: 458.4,
        duration: 3.479,
      },
      {
        text: "used like very widely in production",
        start: 459.879,
        duration: 3.88,
      },
      {
        text: "forever how do you make this like a real",
        start: 461.879,
        duration: 4.6,
      },
      {
        text: "protocol um and yeah that that became",
        start: 463.759,
        duration: 5.521,
      },
      {
        text: "the last uh last series of years now",
        start: 466.479,
        duration: 5.361,
      },
      {
        text: "it's so so cool to know that story and I",
        start: 469.28,
        duration: 4.199,
      },
      {
        text: "would love to hear you know that this is",
        start: 471.84,
        duration: 4.319,
      },
      {
        text: "his similar path so I didn't start from",
        start: 473.479,
        duration: 6.641,
      },
      {
        text: "a personal user uh story I started",
        start: 476.159,
        duration: 6.961,
      },
      { text: "with", start: 480.12, duration: 3.0 },
      {
        text: "um maybe the right right place to start",
        start: 484.0,
        duration: 5.84,
      },
      {
        text: "the story is actually one uh very",
        start: 486.24,
        duration: 6.639,
      },
      {
        text: "interesting interview I had as a as a",
        start: 489.84,
        duration: 6.919,
      },
      {
        text: "faculty applicant uh I I had applied to",
        start: 492.879,
        duration: 6.0,
      },
      {
        text: "Caltech and at that time I was working",
        start: 496.759,
        duration: 3.201,
      },
      { text: "on", start: 498.879, duration: 5.081 },
      {
        text: "genomics and I had only been working on",
        start: 499.96,
        duration: 5.679,
      },
      {
        text: "genomics for two years at that time my",
        start: 503.96,
        duration: 3.4,
      },
      {
        text: "PhD was in wireless networks and I",
        start: 505.639,
        duration: 3.081,
      },
      {
        text: "switched to genomics because I thought",
        start: 507.36,
        duration: 4.32,
      },
      {
        text: "it's much more impactful and so I was",
        start: 508.72,
        duration: 6.239,
      },
      {
        text: "working on that and uh I had this",
        start: 511.68,
        duration: 5.919,
      },
      {
        text: "interview where the interviewer said hey",
        start: 514.959,
        duration: 4.44,
      },
      {
        text: "you're working on this DNA sequencing",
        start: 517.599,
        duration: 4.56,
      },
      {
        text: "algorithms what if somebody invented a",
        start: 519.399,
        duration: 5.761,
      },
      {
        text: "new like sequencing technology that",
        start: 522.159,
        duration: 4.481,
      },
      {
        text: "completely solve this problem what would",
        start: 525.16,
        duration: 4.119,
      },
      {
        text: "you do I said hey I didn't know about",
        start: 526.64,
        duration: 4.28,
      },
      {
        text: "DNA sequencing two years back I figured",
        start: 529.279,
        duration: 3.521,
      },
      {
        text: "out something I'm curious guy I'll find",
        start: 530.92,
        duration: 4.28,
      },
      {
        text: "out some other good problems to work on",
        start: 532.8,
        duration: 3.479,
      },
      {
        text: "then he said no no you're not really",
        start: 535.2,
        duration: 2.72,
      },
      {
        text: "getting my questions I'll ask you in a",
        start: 536.279,
        duration: 3.481,
      },
      { text: "different way", start: 537.92, duration: 5.4 },
      { text: "suppose I gave you infinite", start: 539.76, duration: 6.96 },
      {
        text: "resources I gave you access to infinite",
        start: 543.32,
        duration: 7.6,
      },
      {
        text: "talent and then I give you 30 years and",
        start: 546.72,
        duration: 5.88,
      },
      {
        text: "then you go do your research and come",
        start: 550.92,
        duration: 3.52,
      },
      {
        text: "back and tell me what you invented in 30",
        start: 552.6,
        duration: 3.679,
      },
      { text: "years what would you", start: 554.44, duration: 5.92 },
      {
        text: "do and I was shocked at the magnitude of",
        start: 556.279,
        duration: 6.481,
      },
      {
        text: "this question because i' had never faced",
        start: 560.36,
        duration: 4.52,
      },
      {
        text: "a question like this or even thought",
        start: 562.76,
        duration: 4.759,
      },
      {
        text: "about this that normally we operate in",
        start: 564.88,
        duration: 5.36,
      },
      {
        text: "constrained thinking I'm I'm at X you",
        start: 567.519,
        duration: 5.601,
      },
      {
        text: "know what what else can I do and this",
        start: 570.24,
        duration: 5.64,
      },
      {
        text: "question was like oh there's no",
        start: 573.12,
        duration: 4.959,
      },
      {
        text: "constraint what is the unconstrained",
        start: 575.88,
        duration: 5.12,
      },
      {
        text: "optim Optimum that you would build",
        start: 578.079,
        duration: 6.2,
      },
      {
        text: "for and I I didn't have an answer so but",
        start: 581.0,
        duration: 5.839,
      },
      {
        text: "then I went back and I from then on I",
        start: 584.279,
        duration: 4.321,
      },
      { text: "always have a 30-year", start: 586.839, duration: 5.961 },
      {
        text: "project and so at that time you know I",
        start: 588.6,
        duration: 5.4,
      },
      {
        text: "still continue to work on computation",
        start: 592.8,
        duration: 3.479,
      },
      {
        text: "genomics for like 78 years after that",
        start: 594.0,
        duration: 5.0,
      },
      {
        text: "but at that time the thesis was you know",
        start: 596.279,
        duration: 4.721,
      },
      {
        text: "de good how information is stored in a",
        start: 599.0,
        duration: 5.76,
      },
      {
        text: "living uh system and you know we were",
        start: 601.0,
        duration: 7.24,
      },
      {
        text: "working on that and and you know to move",
        start: 604.76,
        duration: 4.88,
      },
      {
        text: "from that and actually doing pretty",
        start: 608.24,
        duration: 3.719,
      },
      {
        text: "reasonably we had collaborators Noble",
        start: 609.64,
        duration: 4.16,
      },
      {
        text: "ored breakthrough Prize winners all this",
        start: 611.959,
        duration: 4.721,
      },
      {
        text: "kind of stuff but my own like strength",
        start: 613.8,
        duration: 5.24,
      },
      {
        text: "was not biology it was in computation",
        start: 616.68,
        duration: 5.32,
      },
      {
        text: "inference algorithms and I was looking",
        start: 619.04,
        duration: 8.28,
      },
      {
        text: "at U suddenly I got you know called by",
        start: 622.0,
        duration: 7.519,
      },
      {
        text: "my PhD adviser who I worked on on",
        start: 627.32,
        duration: 4.6,
      },
      {
        text: "wireless networks with and he said sham",
        start: 629.519,
        duration: 4.0,
      },
      {
        text: "you know this Bitcoin thing like it's",
        start: 631.92,
        duration: 2.919,
      },
      { text: "interesting to you know it's", start: 633.519, duration: 3.201 },
      {
        text: "peer-to-peer it's you know optimizing",
        start: 634.839,
        duration: 3.641,
      },
      {
        text: "throughput and latency and stuff and you",
        start: 636.72,
        duration: 3.76,
      },
      {
        text: "did that for wireless networks you want",
        start: 638.48,
        duration: 3.76,
      },
      { text: "to work on bitcoin with", start: 640.48, duration: 4.599 },
      {
        text: "me and I said like no I have a 30-year",
        start: 642.24,
        duration: 4.32,
      },
      {
        text: "thesis I'm doing something else why",
        start: 645.079,
        duration: 5.841,
      },
      {
        text: "would I do this and one of the days I",
        start: 646.56,
        duration: 6.88,
      },
      {
        text: "was reading this book by you will Noah",
        start: 650.92,
        duration: 5.88,
      },
      {
        text: "Harari sapiens and I'd read it before I",
        start: 653.44,
        duration: 7.24,
      },
      {
        text: "think but maybe rereading it and at the",
        start: 656.8,
        duration: 5.52,
      },
      {
        text: "the one of the main Theses of the book",
        start: 660.68,
        duration: 5.12,
      },
      {
        text: "is the evolutionary advantage of humans",
        start: 662.32,
        duration: 4.639,
      },
      { text: "Homo", start: 665.8, duration: 4.719 },
      {
        text: "sapiens is my nominal guess for it would",
        start: 666.959,
        duration: 5.041,
      },
      {
        text: "would have been that humans are",
        start: 670.519,
        duration: 3.32,
      },
      {
        text: "intelligent therefore they have high",
        start: 672.0,
        duration: 4.44,
      },
      {
        text: "evolutionary advantage and to cor planet",
        start: 673.839,
        duration: 6.201,
      },
      {
        text: "Earth and he provides a counter example",
        start: 676.44,
        duration: 5.6,
      },
      {
        text: "to this like you take an Einstein and a",
        start: 680.04,
        duration: 3.64,
      },
      {
        text: "gorilla and put them on an island and",
        start: 682.04,
        duration: 4.16,
      },
      {
        text: "then see who survives better it's most",
        start: 683.68,
        duration: 5.32,
      },
      {
        text: "likely the gorilla so the survival",
        start: 686.2,
        duration: 5.24,
      },
      {
        text: "advance AG of the most intelligent human",
        start: 689.0,
        duration: 5.399,
      },
      {
        text: "being is still not that high it is only",
        start: 691.44,
        duration: 5.519,
      },
      {
        text: "when we coordinate in large groups that",
        start: 694.399,
        duration: 3.88,
      },
      {
        text: "actually you can see that survival",
        start: 696.959,
        duration: 3.961,
      },
      {
        text: "advantage and like having hundreds you",
        start: 698.279,
        duration: 4.081,
      },
      {
        text: "know if you take 500 people and 500",
        start: 700.92,
        duration: 3.56,
      },
      {
        text: "gorillas then you start seeing that",
        start: 702.36,
        duration: 5.24,
      },
      {
        text: "Dynamic and so this was a big shift in",
        start: 704.48,
        duration: 4.96,
      },
      {
        text: "my own thinking as an academic you know",
        start: 707.6,
        duration: 4.919,
      },
      {
        text: "my main kind of like driving value in",
        start: 709.44,
        duration: 4.199,
      },
      { text: "life was", start: 712.519, duration: 4.041 },
      {
        text: "Innovation and for the and intelligence",
        start: 713.639,
        duration: 4.921,
      },
      {
        text: "right and for the first time I was like",
        start: 716.56,
        duration: 3.44,
      },
      { text: "no actually", start: 718.56, duration: 3.44 },
      { text: "coordination is the evolutionary", start: 720.0, duration: 4.0 },
      {
        text: "advantage of human beings because if you",
        start: 722.0,
        duration: 6.0,
      },
      {
        text: "think like humans main advantage is",
        start: 724.0,
        duration: 6.639,
      },
      {
        text: "intelligence then the imperative is to",
        start: 728.0,
        duration: 5.16,
      },
      {
        text: "accelerate intelligence which is what Ai",
        start: 730.639,
        duration: 5.801,
      },
      {
        text: "and Ai and all this the stuff is but if",
        start: 733.16,
        duration: 5.039,
      },
      {
        text: "your Theses is humans are special",
        start: 736.44,
        duration: 3.72,
      },
      {
        text: "because we coordinate flexibly in large",
        start: 738.199,
        duration: 5.44,
      },
      {
        text: "numbers the imperative is to accelerate",
        start: 740.16,
        duration: 6.84,
      },
      {
        text: "coordination and and then I was like oh",
        start: 743.639,
        duration: 5.64,
      },
      {
        text: "wow that's crazy so if accelerate",
        start: 747.0,
        duration: 3.639,
      },
      { text: "coordination is the", start: 749.279, duration: 5.0 },
      {
        text: "imperative the main uh friction to co",
        start: 750.639,
        duration: 6.601,
      },
      {
        text: "coordination is trust I'll coordinate",
        start: 754.279,
        duration: 4.92,
      },
      {
        text: "with you if I can trust you and usually",
        start: 757.24,
        duration: 3.599,
      },
      {
        text: "this trust is built with this kind of",
        start: 759.199,
        duration: 4.44,
      },
      {
        text: "one is to one deep relationships but",
        start: 760.839,
        duration: 5.641,
      },
      {
        text: "that is non-scalable like you can't",
        start: 763.639,
        duration: 7.0,
      },
      {
        text: "build that with a billion people and so",
        start: 766.48,
        duration: 6.719,
      },
      {
        text: "I saw that oh actually what blockchains",
        start: 770.639,
        duration: 5.841,
      },
      {
        text: "are good for is creating substrates for",
        start: 773.199,
        duration: 4.681,
      },
      { text: "Global", start: 776.48, duration: 4.64 },
      { text: "coordination and", start: 777.88, duration: 3.24 },
      {
        text: "I couldn't kind of like get this thesis",
        start: 781.199,
        duration: 4.241,
      },
      {
        text: "out of my head because the original",
        start: 783.56,
        duration: 4.279,
      },
      {
        text: "Viewpoint I had on bitcoin was yeah it's",
        start: 785.44,
        duration: 5.199,
      },
      {
        text: "useful it's Sovereign it's libertarian",
        start: 787.839,
        duration: 5.041,
      },
      {
        text: "and I was not and like I I don't have",
        start: 790.639,
        duration: 5.121,
      },
      {
        text: "any connection to this thesis and then",
        start: 792.88,
        duration: 5.04,
      },
      { text: "once I saw the coordination", start: 795.76, duration: 5.24 },
      {
        text: "thesis I was like wow this is crazy and",
        start: 797.92,
        duration: 5.76,
      },
      {
        text: "so there must be so many things to do",
        start: 801.0,
        duration: 5.12,
      },
      {
        text: "here um because if you look at the",
        start: 803.68,
        duration: 4.32,
      },
      { text: "internet the internet was our", start: 806.12, duration: 3.519 },
      { text: "communication Super Highway it", start: 808.0, duration: 3.8 },
      {
        text: "accelerated like the ability of humans",
        start: 809.639,
        duration: 3.481,
      },
      { text: "to connect with each other and", start: 811.8, duration: 4.44 },
      {
        text: "communicate but coordination is not just",
        start: 813.12,
        duration: 6.32,
      },
      {
        text: "communication it's communication plus",
        start: 816.24,
        duration: 5.839,
      },
      {
        text: "commitment right like I talk to you and",
        start: 819.44,
        duration: 6.16,
      },
      {
        text: "then I agree that if you work together",
        start: 822.079,
        duration: 6.721,
      },
      {
        text: "we take 50/50 whatever the coordination",
        start: 825.6,
        duration: 4.76,
      },
      {
        text: "conditions are that's a binding",
        start: 828.8,
        duration: 4.279,
      },
      {
        text: "commitment that we enter into so what",
        start: 830.36,
        duration: 4.039,
      },
      { text: "the internet was missing as a", start: 833.079, duration: 3.68 },
      {
        text: "coordination substrate is it had the",
        start: 834.399,
        duration: 5.0,
      },
      {
        text: "communication super iway but it didn't",
        start: 836.759,
        duration: 5.801,
      },
      {
        text: "have a robust commitment mechanism and I",
        start: 839.399,
        duration: 5.321,
      },
      {
        text: "started seeing blockchains as the",
        start: 842.56,
        duration: 4.16,
      },
      {
        text: "universal commitment systems where you",
        start: 844.72,
        duration: 3.72,
      },
      {
        text: "can enter into arbitrary commitments",
        start: 846.72,
        duration: 4.4,
      },
      {
        text: "across individuals that can then be",
        start: 848.44,
        duration: 5.36,
      },
      {
        text: "resolved on on chain so this was all",
        start: 851.12,
        duration: 5.12,
      },
      {
        text: "like starting at like this 100,000 ft",
        start: 853.8,
        duration: 7.32,
      },
      {
        text: "View and one of the uh failure modes of",
        start: 856.24,
        duration: 7.8,
      },
      {
        text: "you know thinking at this 100,000 ft is",
        start: 861.12,
        duration: 5.76,
      },
      {
        text: "you can't find like the pathway from",
        start: 864.04,
        duration: 5.2,
      },
      {
        text: "where you are to like where this crazy",
        start: 866.88,
        duration: 5.959,
      },
      {
        text: "new world is and so I know I had to go",
        start: 869.24,
        duration: 5.599,
      },
      {
        text: "through like many iterations to actually",
        start: 872.839,
        duration: 4.641,
      },
      {
        text: "like find out uh find a footing in in",
        start: 874.839,
        duration: 4.721,
      },
      {
        text: "that direction starting my own layer one",
        start: 877.48,
        duration: 5.0,
      },
      {
        text: "blockchain which never took off which",
        start: 879.56,
        duration: 5.639,
      },
      {
        text: "could not raise money to to going and",
        start: 882.48,
        duration: 4.76,
      },
      {
        text: "trying various other things you know",
        start: 885.199,
        duration: 4.041,
      },
      {
        text: "even before starting my own layer one",
        start: 887.24,
        duration: 3.719,
      },
      {
        text: "going to bitcoin and ethereum and like",
        start: 889.24,
        duration: 3.32,
      },
      {
        text: "asking them to use our protocols and",
        start: 890.959,
        duration: 3.081,
      },
      {
        text: "then going to try to start our own layer",
        start: 892.56,
        duration: 3.56,
      },
      {
        text: "one to like figuring out how hard and",
        start: 894.04,
        duration: 5.52,
      },
      {
        text: "messy of a job that is to then going and",
        start: 896.12,
        duration: 7.8,
      },
      {
        text: "um um trying to build an nft Marketplace",
        start: 899.56,
        duration: 7.44,
      },
      {
        text: "and then like realizing like you were",
        start: 903.92,
        duration: 4.32,
      },
      {
        text: "when you were playing with all these",
        start: 907.0,
        duration: 3.92,
      },
      {
        text: "different apps that hey when you try to",
        start: 908.24,
        duration: 5.959,
      },
      {
        text: "do these different applications like in",
        start: 910.92,
        duration: 5.24,
      },
      {
        text: "nft Marketplace the set of example",
        start: 914.199,
        duration: 3.921,
      },
      {
        text: "problems that I ran into were how do I",
        start: 916.16,
        duration: 3.359,
      },
      {
        text: "Bridge an nft from one chain to the",
        start: 918.12,
        duration: 2.92,
      },
      {
        text: "other what's the trust Assumption of",
        start: 919.519,
        duration: 4.32,
      },
      {
        text: "this how do I get a price Oracle for an",
        start: 921.04,
        duration: 5.12,
      },
      {
        text: "nft whose liquidity is low what's the",
        start: 923.839,
        duration: 5.161,
      },
      {
        text: "trust assumption for this how do I run",
        start: 926.16,
        duration: 4.96,
      },
      {
        text: "done like arbitrary computation on top",
        start: 929.0,
        duration: 4.44,
      },
      {
        text: "of ethereum because I have to do those",
        start: 931.12,
        duration: 3.959,
      },
      { text: "things", start: 933.44, duration: 4.639 },
      {
        text: "to and and then another example was I",
        start: 935.079,
        duration: 6.0,
      },
      {
        text: "want to access the history of all the",
        start: 938.079,
        duration: 5.76,
      },
      {
        text: "events that happened even inside",
        start: 941.079,
        duration: 4.721,
      },
      {
        text: "ethereum if it's not in the smart",
        start: 943.839,
        duration: 3.881,
      },
      {
        text: "contract State it's not accessible I",
        start: 945.8,
        duration: 3.92,
      },
      {
        text: "like you know as an academic I was like",
        start: 947.72,
        duration: 3.599,
      },
      {
        text: "Oh I thought The Ledger was the main",
        start: 949.72,
        duration: 2.919,
      },
      {
        text: "thing but The Ledger is not even",
        start: 951.319,
        duration: 3.921,
      },
      {
        text: "accessible inside the same blockchain",
        start: 952.639,
        duration: 4.801,
      },
      {
        text: "and all of these together kind of like",
        start: 955.24,
        duration: 4.2,
      },
      {
        text: "each of these problems press centered an",
        start: 957.44,
        duration: 3.56,
      },
      {
        text: "underlying trust problem and then we",
        start: 959.44,
        duration: 3.399,
      },
      {
        text: "figured out okay let's just solve the",
        start: 961.0,
        duration: 4.04,
      },
      {
        text: "trust problem because we don't know how",
        start: 962.839,
        duration: 3.68,
      },
      {
        text: "to solve each one of these problems well",
        start: 965.04,
        duration: 3.64,
      },
      {
        text: "ourselves and if our thesis is",
        start: 966.519,
        duration: 4.961,
      },
      {
        text: "coordination and permission Innovation",
        start: 968.68,
        duration: 4.88,
      },
      {
        text: "just that anybody else can come and like",
        start: 971.48,
        duration: 4.08,
      },
      {
        text: "innovate on a common substrate then",
        start: 973.56,
        duration: 4.959,
      },
      {
        text: "let's just solve the one trust primitive",
        start: 975.56,
        duration: 4.279,
      },
      {
        text: "and then other people can solve all",
        start: 978.519,
        duration: 3.401,
      },
      {
        text: "these other things and that became igen",
        start: 979.839,
        duration: 4.0,
      },
      {
        text: "layer I also wanted to touch upon like",
        start: 981.92,
        duration: 4.599,
      },
      {
        text: "the name I know we have I layer you have",
        start: 983.839,
        duration: 4.36,
      },
      {
        text: "layer zero maybe you can talk a little",
        start: 986.519,
        duration: 3.601,
      },
      {
        text: "bit about how the the name layer zero",
        start: 988.199,
        duration: 3.64,
      },
      {
        text: "came up and I can tell you about I can",
        start: 990.12,
        duration: 4.399,
      },
      {
        text: "yeah I mean layer zero is all I'll give",
        start: 991.839,
        duration: 5.081,
      },
      {
        text: "100% of credit to my co-founder Ryan so",
        start: 994.519,
        duration: 5.24,
      },
      {
        text: "that's that's all him um but it was",
        start: 996.92,
        duration: 4.32,
      },
      {
        text: "really like the the way that we built",
        start: 999.759,
        duration: 3.52,
      },
      {
        text: "the protocol and still a lot of the way",
        start: 1001.24,
        duration: 5.12,
      },
      {
        text: "that we do things today is like we would",
        start: 1003.279,
        duration: 4.521,
      },
      {
        text: "sit in a room with a whiteboard and we",
        start: 1006.36,
        duration: 2.719,
      },
      {
        text: "would just kind of argue for like eight",
        start: 1007.8,
        duration: 3.159,
      },
      {
        text: "to 10 hours a day of design a system",
        start: 1009.079,
        duration: 3.361,
      },
      {
        text: "break a system right like that's like",
        start: 1010.959,
        duration: 3.081,
      },
      {
        text: "from the most adversarial possible",
        start: 1012.44,
        duration: 3.199,
      },
      {
        text: "Viewpoint I'm going to design a system",
        start: 1014.04,
        duration: 4.56,
      },
      {
        text: "that I think could comfortably do this",
        start: 1015.639,
        duration: 3.801,
      },
      { text: "and", start: 1018.6, duration: 2.08 },
      {
        text: "he's going to go through and he's going",
        start: 1019.44,
        duration: 2.839,
      },
      {
        text: "to say here's how I can exploit it",
        start: 1020.68,
        duration: 3.48,
      },
      {
        text: "here's why a would never use this",
        start: 1022.279,
        duration: 4.16,
      },
      {
        text: "because like I can hack all their fun do",
        start: 1024.16,
        duration: 5.039,
      },
      {
        text: "one of you have like the the propos and",
        start: 1026.439,
        duration: 4.76,
      },
      {
        text: "the other has challenge or you flip no",
        start: 1029.199,
        duration: 3.521,
      },
      {
        text: "like some sometimes we're like both",
        start: 1031.199,
        duration: 3.281,
      },
      {
        text: "designing in the same direction and then",
        start: 1032.72,
        duration: 3.359,
      },
      {
        text: "and then we'll try to break it AP but",
        start: 1034.48,
        duration: 3.4,
      },
      {
        text: "yeah it's both it's uh you know it's",
        start: 1036.079,
        duration: 4.76,
      },
      {
        text: "it's very fluid the the reason I ask is",
        start: 1037.88,
        duration: 6.4,
      },
      {
        text: "the uh RSA algorithm River Shamir and",
        start: 1040.839,
        duration: 5.641,
      },
      {
        text: "Adelman rivest and Shamir used to design",
        start: 1044.28,
        duration: 3.88,
      },
      {
        text: "the schemes and Adelman used to break",
        start: 1046.48,
        duration: 4.52,
      },
      {
        text: "them I think he broke 36 of those",
        start: 1048.16,
        duration: 5.639,
      },
      {
        text: "schemes and the 37th one was not broken",
        start: 1051.0,
        duration: 4.4,
      },
      {
        text: "and they're like okay if adman can't",
        start: 1053.799,
        duration: 3.88,
      },
      { text: "break it it must be", start: 1055.4, duration: 4.6 },
      {
        text: "good yeah I mean that was that was that",
        start: 1057.679,
        duration: 4.641,
      },
      {
        text: "was the way that we um that was the way",
        start: 1060.0,
        duration: 3.559,
      },
      {
        text: "that we built everything and so we're",
        start: 1062.32,
        duration: 3.76,
      },
      {
        text: "just we're arguing through kind of what",
        start: 1063.559,
        duration: 3.681,
      },
      {
        text: "what this is and what it should look",
        start: 1066.08,
        duration: 2.8,
      },
      {
        text: "like and what the assumptions were for",
        start: 1067.24,
        duration: 3.36,
      },
      {
        text: "sort of all parties involved and Ryan",
        start: 1068.88,
        duration: 4.039,
      },
      {
        text: "was was trying to D describe and and",
        start: 1070.6,
        duration: 5.439,
      },
      {
        text: "Broad Strokes um kind of what what this",
        start: 1072.919,
        duration: 4.841,
      },
      {
        text: "layer is because people could visualize",
        start: 1076.039,
        duration: 3.161,
      },
      {
        text: "it as um you know we're not our own",
        start: 1077.76,
        duration: 3.08,
      },
      {
        text: "blockchain so it's not this middle chain",
        start: 1079.2,
        duration: 3.28,
      },
      {
        text: "that sits in and it lives you know those",
        start: 1080.84,
        duration: 3.36,
      },
      {
        text: "smart contract end points to live on",
        start: 1082.48,
        duration: 2.96,
      },
      {
        text: "everything so you could view it as sort",
        start: 1084.2,
        duration: 2.76,
      },
      {
        text: "of above and he's like listen this is",
        start: 1085.44,
        duration: 3.599,
      },
      {
        text: "this it's this layer of communication",
        start: 1086.96,
        duration: 4.04,
      },
      {
        text: "that lives like below all of these",
        start: 1089.039,
        duration: 3.561,
      },
      {
        text: "different chains all this layer ones",
        start: 1091.0,
        duration: 3.4,
      },
      {
        text: "it's you know it's like a layer zero and",
        start: 1092.6,
        duration: 3.12,
      },
      {
        text: "both of us we're just like immediately",
        start: 1094.4,
        duration: 2.639,
      },
      {
        text: "like that's like the most intuitive",
        start: 1095.72,
        duration: 3.6,
      },
      {
        text: "description ever um and so it's just",
        start: 1097.039,
        duration: 4.481,
      },
      {
        text: "like very obvious um yeah that's so",
        start: 1099.32,
        duration: 4.8,
      },
      {
        text: "interesting uh I think the the layer",
        start: 1101.52,
        duration: 4.96,
      },
      {
        text: "zero thesis is born out of this idea",
        start: 1104.12,
        duration: 4.84,
      },
      {
        text: "that there going to be a lot of chains l",
        start: 1106.48,
        duration: 3.64,
      },
      {
        text: "ones and then there's something",
        start: 1108.96,
        duration: 3.959,
      },
      {
        text: "underneath all of it layer zero uh the",
        start: 1110.12,
        duration: 6.32,
      },
      {
        text: "igen layer is somewhat similar um igen",
        start: 1112.919,
        duration: 5.88,
      },
      {
        text: "and German for your own Ian layer is",
        start: 1116.44,
        duration: 6.64,
      },
      {
        text: "your own layer uh and and the the slight",
        start: 1118.799,
        duration: 6.801,
      },
      {
        text: "twist here is instead of thinking in",
        start: 1123.08,
        duration: 5.719,
      },
      {
        text: "Chains we thought in layers and so the",
        start: 1125.6,
        duration: 4.6,
      },
      {
        text: "idea is there's a common zone of",
        start: 1128.799,
        duration: 3.441,
      },
      {
        text: "decentralized trust and then anybody can",
        start: 1130.2,
        duration: 4.68,
      },
      {
        text: "build their own Innovative systems that",
        start: 1132.24,
        duration: 4.84,
      },
      {
        text: "require decentralized trust in arbitary",
        start: 1134.88,
        duration: 4.919,
      },
      {
        text: "different configurations and Igan lir",
        start: 1137.08,
        duration: 5.959,
      },
      {
        text: "was the name was intended to evoke this",
        start: 1139.799,
        duration: 5.481,
      },
      {
        text: "idea that hey you can build your own",
        start: 1143.039,
        duration: 3.801,
      },
      {
        text: "thing like you can build whatever thing",
        start: 1145.28,
        duration: 4.12,
      },
      {
        text: "that you want on top so that that's an",
        start: 1146.84,
        duration: 4.199,
      },
      {
        text: "interesting story we also thought of",
        start: 1149.4,
        duration: 3.56,
      },
      {
        text: "ourselves as like this underlying thing",
        start: 1151.039,
        duration: 3.961,
      },
      {
        text: "on top of which other things happen and",
        start: 1152.96,
        duration: 4.16,
      },
      {
        text: "so this this match of these two",
        start: 1155.0,
        duration: 3.559,
      },
      {
        text: "technologies today is super interesting",
        start: 1157.12,
        duration: 6.36,
      },
      {
        text: "to say um the do you have a particular",
        start: 1158.559,
        duration: 6.561,
      },
      { text: "thesis for", start: 1163.48, duration: 4.48 },
      {
        text: "where like you know let's say we go from",
        start: 1165.12,
        duration: 5.36,
      },
      {
        text: "here to like 10 years or 20 years down",
        start: 1167.96,
        duration: 5.199,
      },
      {
        text: "the line what is this world that you",
        start: 1170.48,
        duration: 5.36,
      },
      {
        text: "envision and how are you how do you back",
        start: 1173.159,
        duration: 5.321,
      },
      {
        text: "project that to like what you want to",
        start: 1175.84,
        duration: 6.319,
      },
      {
        text: "build today yeah I think I sort of",
        start: 1178.48,
        duration: 5.28,
      },
      {
        text: "talked tongue and Chek a lot of like",
        start: 1182.159,
        duration: 4.681,
      },
      {
        text: "having been here for very long time uh",
        start: 1183.76,
        duration: 6.24,
      },
      {
        text: "I've I've been at the the very cusp of",
        start: 1186.84,
        duration: 5.04,
      },
      {
        text: "many many many things in the space",
        start: 1190.0,
        duration: 3.72,
      },
      {
        text: "whether it was uh you know Bitcoin in",
        start: 1191.88,
        duration: 3.76,
      },
      { text: "2011 mining in", start: 1193.72, duration: 5.079 },
      {
        text: "2013 um you know as minting gen zero",
        start: 1195.64,
        duration: 5.8,
      },
      {
        text: "crypto kitties I was farming yams at 300",
        start: 1198.799,
        duration: 5.12,
      },
      {
        text: "million per dpy and like each time I",
        start: 1201.44,
        duration: 4.32,
      },
      {
        text: "like did not see what was you know what",
        start: 1203.919,
        duration: 3.321,
      },
      {
        text: "was coming I didn't see this boom of any",
        start: 1205.76,
        duration: 4.2,
      },
      {
        text: "so have zero faith in my ability to kind",
        start: 1207.24,
        duration: 4.319,
      },
      {
        text: "of predict what the future is But the",
        start: 1209.96,
        duration: 4.16,
      },
      {
        text: "lens that we've we've always uh taken in",
        start: 1211.559,
        duration: 5.921,
      },
      {
        text: "this approach is is just um really",
        start: 1214.12,
        duration: 5.52,
      },
      {
        text: "wanting to build the the lowest level",
        start: 1217.48,
        duration: 3.8,
      },
      {
        text: "primitive that fits all this so really",
        start: 1219.64,
        duration: 5.0,
      },
      {
        text: "took a protocol lens and I actually um",
        start: 1221.28,
        duration: 5.32,
      },
      {
        text: "I've talked about this a couple times",
        start: 1224.64,
        duration: 4.96,
      },
      {
        text: "but I I I was at base camp a couple of",
        start: 1226.6,
        duration: 5.319,
      },
      {
        text: "years ago um and had the chance to ask",
        start: 1229.6,
        duration: 4.12,
      },
      {
        text: "Elon Musk one question and my question",
        start: 1231.919,
        duration: 3.561,
      },
      {
        text: "was was sort of about this how do you",
        start: 1233.72,
        duration: 3.079,
      },
      {
        text: "how do you uh you know how do you think",
        start: 1235.48,
        duration: 2.72,
      },
      {
        text: "about what you're building intersection",
        start: 1236.799,
        duration: 4.841,
      },
      {
        text: "like his question was was so direct and",
        start: 1238.2,
        duration: 5.2,
      },
      {
        text: "obvious to me like like he's like you",
        start: 1241.64,
        duration: 2.88,
      },
      {
        text: "know what are you thinking he's like the",
        start: 1243.4,
        duration: 3.159,
      },
      {
        text: "answer is clearly just like build the",
        start: 1244.52,
        duration: 3.639,
      },
      {
        text: "the most useful thing like don't worry",
        start: 1246.559,
        duration: 3.041,
      },
      {
        text: "about what any competitors are doing",
        start: 1248.159,
        duration: 2.64,
      },
      {
        text: "don't worry about like any state of the",
        start: 1249.6,
        duration: 2.4,
      },
      {
        text: "world like build the thing of the",
        start: 1250.799,
        duration: 3.0,
      },
      {
        text: "highest possible utility right and so",
        start: 1252.0,
        duration: 3.4,
      },
      {
        text: "the the lens that we've always tried to",
        start: 1253.799,
        duration: 2.921,
      },
      {
        text: "Think Through is we want we want to be",
        start: 1255.4,
        duration: 3.72,
      },
      {
        text: "building the lowest level possible",
        start: 1256.72,
        duration: 3.92,
      },
      {
        text: "primitive of the highest possible",
        start: 1259.12,
        duration: 4.039,
      },
      {
        text: "utility and so for us it didn't matter",
        start: 1260.64,
        duration: 4.88,
      },
      {
        text: "if you have a thousand orthogonal layer",
        start: 1263.159,
        duration: 4.76,
      },
      {
        text: "ones uh which is you know salana and",
        start: 1265.52,
        duration: 4.08,
      },
      {
        text: "ethereum and x and y and all of this or",
        start: 1267.919,
        duration: 3.721,
      },
      {
        text: "if you have literally ethereum only as a",
        start: 1269.6,
        duration: 4.48,
      },
      {
        text: "settlement layer and a you know 100,000",
        start: 1271.64,
        duration: 4.279,
      },
      {
        text: "layer tws that all roll up and they",
        start: 1274.08,
        duration: 4.8,
      },
      {
        text: "still need to co-communications",
        start: 1275.919,
        duration: 2.961,
      },
      {
        text: "focus on most of the time at building is",
        start: 1289.159,
        duration: 3.481,
      },
      {
        text: "is again that intersection of the lowest",
        start: 1290.84,
        duration: 3.64,
      },
      {
        text: "level possible primitive of the the",
        start: 1292.64,
        duration: 3.919,
      },
      {
        text: "highest amount of flex extensibility",
        start: 1294.48,
        duration: 6.28,
      },
      {
        text: "your utility that's super cool um at at",
        start: 1296.559,
        duration: 7.0,
      },
      {
        text: "our end uh because we started with this",
        start: 1300.76,
        duration: 4.48,
      },
      { text: "coordination", start: 1303.559, duration: 8.281 },
      {
        text: "thesis um the uh and know igen lab's U",
        start: 1305.24,
        duration: 8.12,
      },
      { text: "vision is to build Humanities", start: 1311.84, duration: 4.6 },
      {
        text: "coordination engine it's pretty Grand",
        start: 1313.36,
        duration: 7.559,
      },
      {
        text: "kind of a claim I know it's um ambitious",
        start: 1316.44,
        duration: 8.04,
      },
      {
        text: "but the starting point for if if you",
        start: 1320.919,
        duration: 5.721,
      },
      {
        text: "take that claim and as I was saying",
        start: 1324.48,
        duration: 4.96,
      },
      { text: "earlier like coordination", start: 1326.64, duration: 6.039 },
      {
        text: "is communication plus commitment the",
        start: 1329.44,
        duration: 5.44,
      },
      {
        text: "ability to make and keep commitments so",
        start: 1332.679,
        duration: 5.081,
      },
      {
        text: "we focus a lot on how do you when you",
        start: 1334.88,
        duration: 4.52,
      },
      {
        text: "when you say what is decentralized trust",
        start: 1337.76,
        duration: 5.399,
      },
      {
        text: "or what is trust is the mechanism by",
        start: 1339.4,
        duration: 5.68,
      },
      {
        text: "which you know these commitments are",
        start: 1343.159,
        duration: 5.201,
      },
      {
        text: "kept so we think a lot about what how do",
        start: 1345.08,
        duration: 7.199,
      },
      {
        text: "we we build a Zone a system which can",
        start: 1348.36,
        duration: 6.52,
      },
      {
        text: "handle the most volume of commitments",
        start: 1352.279,
        duration: 4.76,
      },
      {
        text: "which can handle the most variety of",
        start: 1354.88,
        duration: 4.64,
      },
      {
        text: "commitments which can handle the",
        start: 1357.039,
        duration: 5.601,
      },
      {
        text: "most the the most robust verifiability",
        start: 1359.52,
        duration: 5.72,
      },
      {
        text: "of these commitments so volume means",
        start: 1362.64,
        duration: 4.2,
      },
      {
        text: "like you want to maximize throughput",
        start: 1365.24,
        duration: 3.12,
      },
      {
        text: "like what is the total rate at which you",
        start: 1366.84,
        duration: 3.959,
      },
      {
        text: "can write and and make commitments to",
        start: 1368.36,
        duration: 4.48,
      },
      { text: "each other", start: 1370.799, duration: 5.281 },
      {
        text: "and that that's why we built IG da IG da",
        start: 1372.84,
        duration: 5.88,
      },
      {
        text: "is this data availability system where",
        start: 1376.08,
        duration: 4.4,
      },
      {
        text: "the goal is I want to build one",
        start: 1378.72,
        duration: 4.88,
      },
      {
        text: "horizontally scaling system where I can",
        start: 1380.48,
        duration: 6.559,
      },
      {
        text: "put infinite amount of data and it came",
        start: 1383.6,
        duration: 5.28,
      },
      {
        text: "from basically the ethereum road map and",
        start: 1387.039,
        duration: 3.481,
      },
      {
        text: "some of the observations from there",
        start: 1388.88,
        duration: 4.52,
      },
      {
        text: "which is that data is one of those",
        start: 1390.52,
        duration: 5.159,
      },
      {
        text: "things where you can very easily",
        start: 1393.4,
        duration: 4.519,
      },
      {
        text: "horizontally scale it because you can",
        start: 1395.679,
        duration: 3.921,
      },
      {
        text: "create an eral code and then make sure",
        start: 1397.919,
        duration: 3.601,
      },
      {
        text: "each node receives like a portion of the",
        start: 1399.6,
        duration: 4.439,
      },
      {
        text: "data and even if you know a majority of",
        start: 1401.52,
        duration: 4.639,
      },
      {
        text: "the nodes fail the remaining nodes can",
        start: 1404.039,
        duration: 4.961,
      },
      {
        text: "still recover every unit of data",
        start: 1406.159,
        duration: 5.481,
      },
      {
        text: "and so because this is theoretically",
        start: 1409.0,
        duration: 4.84,
      },
      {
        text: "like perfectly horizontally scalable",
        start: 1411.64,
        duration: 4.56,
      },
      {
        text: "said okay let's build that that ensures",
        start: 1413.84,
        duration: 4.68,
      },
      {
        text: "that you can have the maximum volume of",
        start: 1416.2,
        duration: 4.959,
      },
      {
        text: "commitments that can FL flow through it",
        start: 1418.52,
        duration: 4.84,
      },
      {
        text: "then you look at uh the variety like",
        start: 1421.159,
        duration: 4.441,
      },
      {
        text: "what types of commitments can you make",
        start: 1423.36,
        duration: 8.04,
      },
      {
        text: "and each kind of a system that a network",
        start: 1425.6,
        duration: 7.36,
      },
      {
        text: "is making different commitments right",
        start: 1431.4,
        duration: 3.12,
      },
      {
        text: "like a bridge is making a commitment",
        start: 1432.96,
        duration: 4.52,
      },
      {
        text: "that I'm passing messages correctly a",
        start: 1434.52,
        duration: 4.6,
      },
      {
        text: "co-processor is making making commitment",
        start: 1437.48,
        duration: 3.199,
      },
      {
        text: "that a computation is done correctly a",
        start: 1439.12,
        duration: 3.159,
      },
      {
        text: "data system is making a commitment that",
        start: 1440.679,
        duration: 3.761,
      },
      {
        text: "it is storing data correctly and so on",
        start: 1442.279,
        duration: 5.4,
      },
      {
        text: "so there's all kinds of nuanced types of",
        start: 1444.44,
        duration: 7.28,
      },
      {
        text: "commitments so we built this igen layer",
        start: 1447.679,
        duration: 6.521,
      },
      {
        text: "mechanism you know even though popularly",
        start: 1451.72,
        duration: 4.8,
      },
      {
        text: "it's called reaking is just a meme that",
        start: 1454.2,
        duration: 5.479,
      },
      {
        text: "picked up and we said okay that's good",
        start: 1456.52,
        duration: 6.72,
      },
      {
        text: "but the uh idea of I ler was that you",
        start: 1459.679,
        duration: 5.48,
      },
      { text: "are staking and making a", start: 1463.24, duration: 4.919 },
      {
        text: "commitment on hey I'm going to do ABCD",
        start: 1465.159,
        duration: 4.841,
      },
      {
        text: "and if you don't hold to the commitment",
        start: 1468.159,
        duration: 3.52,
      },
      {
        text: "then you will get slashed and so there",
        start: 1470.0,
        duration: 3.279,
      },
      {
        text: "is a kind of like a penalization",
        start: 1471.679,
        duration: 4.761,
      },
      {
        text: "mechanism attached to the commitment so",
        start: 1473.279,
        duration: 6.921,
      },
      {
        text: "that enabled this economy of what we",
        start: 1476.44,
        duration: 6.04,
      },
      {
        text: "call avss actively validated Services",
        start: 1480.2,
        duration: 4.28,
      },
      {
        text: "services that are building on where like",
        start: 1482.48,
        duration: 3.799,
      },
      {
        text: "they can consume decentralized trust in",
        start: 1484.48,
        duration: 5.04,
      },
      {
        text: "a flexible uh manner so volume of",
        start: 1486.279,
        duration: 5.12,
      },
      {
        text: "commitments increased through put",
        start: 1489.52,
        duration: 4.84,
      },
      { text: "through da um variety of", start: 1491.399, duration: 5.841 },
      {
        text: "commitments create ion layer and any AVS",
        start: 1494.36,
        duration: 4.84,
      },
      {
        text: "can kind of consume these things things",
        start: 1497.24,
        duration: 5.4,
      },
      { text: "and then the third one is the", start: 1499.2, duration: 5.0 },
      {
        text: "verifiability how do you know these",
        start: 1502.64,
        duration: 3.759,
      },
      {
        text: "commitments are verifiable so two",
        start: 1504.2,
        duration: 5.12,
      },
      {
        text: "mechanisms one is I can write an onchain",
        start: 1506.399,
        duration: 5.0,
      },
      {
        text: "contract that proves that you've done",
        start: 1509.32,
        duration: 4.479,
      },
      {
        text: "something wrong and you can do this for",
        start: 1511.399,
        duration: 4.16,
      },
      {
        text: "certain kinds of things very well and",
        start: 1513.799,
        duration: 3.961,
      },
      {
        text: "for other kinds of things not so well",
        start: 1515.559,
        duration: 4.161,
      },
      {
        text: "right imagine I'm running a prediction",
        start: 1517.76,
        duration: 3.96,
      },
      {
        text: "market like poly markets popped off like",
        start: 1519.72,
        duration: 4.559,
      },
      {
        text: "and you know I'm happy seeing it on CNBC",
        start: 1521.72,
        duration: 4.52,
      },
      {
        text: "you know we need more good ABS going",
        start: 1524.279,
        duration: 6.321,
      },
      {
        text: "around here um so po Market you know",
        start: 1526.24,
        duration: 6.679,
      },
      {
        text: "when you settle like a prediction market",
        start: 1530.6,
        duration: 5.079,
      },
      {
        text: "like who won the election how does the",
        start: 1532.919,
        duration: 4.841,
      },
      {
        text: "chain know if the guys who are staged",
        start: 1535.679,
        duration: 3.961,
      },
      {
        text: "and providing the Oracle answer are like",
        start: 1537.76,
        duration: 5.279,
      },
      {
        text: "giving the wrong answer and on chain you",
        start: 1539.64,
        duration: 5.48,
      },
      {
        text: "need to like create a committee and then",
        start: 1543.039,
        duration: 3.561,
      },
      {
        text: "like you have to be worried about is the",
        start: 1545.12,
        duration: 4.12,
      },
      { text: "committee right", start: 1546.6, duration: 5.04 },
      {
        text: "so certain things you can actually write",
        start: 1549.24,
        duration: 4.12,
      },
      {
        text: "clear onchain slashing contracts for",
        start: 1551.64,
        duration: 3.8,
      },
      {
        text: "certain things you cannot and for the",
        start: 1553.36,
        duration: 5.84,
      },
      {
        text: "things that you cannot you can uh",
        start: 1555.44,
        duration: 6.719,
      },
      {
        text: "we have this mechanism of igen token",
        start: 1559.2,
        duration: 6.16,
      },
      {
        text: "staking and forking so the idea is on",
        start: 1562.159,
        duration: 5.081,
      },
      {
        text: "chain it is not clear what the right",
        start: 1565.36,
        duration: 6.0,
      },
      {
        text: "thing is but off chain it's clear that",
        start: 1567.24,
        duration: 6.0,
      },
      {
        text: "oh you say Biden's not the president",
        start: 1571.36,
        duration: 3.88,
      },
      {
        text: "today that's not true and it's visible",
        start: 1573.24,
        duration: 4.12,
      },
      {
        text: "off chain and anybody can come in and",
        start: 1575.24,
        duration: 4.52,
      },
      {
        text: "permissionless initiate a fork of the",
        start: 1577.36,
        duration: 5.28,
      },
      {
        text: "igen token where like anybody who said",
        start: 1579.76,
        duration: 4.279,
      },
      {
        text: "Biden's not the president today is",
        start: 1582.64,
        duration: 3.68,
      },
      {
        text: "slashed and the remaining people have",
        start: 1584.039,
        duration: 5.24,
      },
      {
        text: "their tokens but of course on chain on",
        start: 1586.32,
        duration: 4.479,
      },
      {
        text: "ethereum you don't know if the igen one",
        start: 1589.279,
        duration: 3.52,
      },
      {
        text: "the original Fork is right or igen 2 the",
        start: 1590.799,
        duration: 4.521,
      },
      {
        text: "new Fork is right but that's totally",
        start: 1592.799,
        duration: 5.12,
      },
      {
        text: "fine because it's where the value across",
        start: 1595.32,
        duration: 4.64,
      },
      {
        text: "will be the one that everybody believes",
        start: 1597.919,
        duration: 6.88,
      },
      {
        text: "is true so we kind of use this like d",
        start: 1599.96,
        duration: 7.24,
      },
      {
        text: "two two things one is like which is true",
        start: 1604.799,
        duration: 5.041,
      },
      {
        text: "is verifiable on offchain but which is",
        start: 1607.2,
        duration: 4.56,
      },
      {
        text: "valuable is also decided offchain and",
        start: 1609.84,
        duration: 3.48,
      },
      {
        text: "you can kind of like beam form the two",
        start: 1611.76,
        duration: 3.44,
      },
      {
        text: "things into actually figuring out like",
        start: 1613.32,
        duration: 5.239,
      },
      {
        text: "how to how to build the system so going",
        start: 1615.2,
        duration: 5.0,
      },
      {
        text: "back to this like you have volume of",
        start: 1618.559,
        duration: 3.401,
      },
      {
        text: "commitments you can make the most number",
        start: 1620.2,
        duration: 5.0,
      },
      {
        text: "of commitments using da you can the",
        start: 1621.96,
        duration: 5.0,
      },
      {
        text: "variety of commitments you know let",
        start: 1625.2,
        duration: 4.0,
      },
      {
        text: "people Express using various services",
        start: 1626.96,
        duration: 5.76,
      },
      {
        text: "using abss and then the verifiability of",
        start: 1629.2,
        duration: 5.56,
      },
      {
        text: "commitments now all commitments which",
        start: 1632.72,
        duration: 3.76,
      },
      {
        text: "are offchain verifiable any two",
        start: 1634.76,
        duration: 3.399,
      },
      {
        text: "reasonable people can agree all of them",
        start: 1636.48,
        duration: 4.48,
      },
      {
        text: "can be adjudicated on the system so",
        start: 1638.159,
        duration: 5.601,
      },
      {
        text: "that's like it was not like a very",
        start: 1640.96,
        duration: 5.64,
      },
      {
        text: "simple Journey from the the the high",
        start: 1643.76,
        duration: 6.0,
      },
      {
        text: "level 100,000 ft of coordination super",
        start: 1646.6,
        duration: 5.6,
      },
      {
        text: "highway to actually what sets of things",
        start: 1649.76,
        duration: 5.72,
      },
      {
        text: "we're doing the because we have that as",
        start: 1652.2,
        duration: 6.16,
      },
      {
        text: "like the high level nor star you know we",
        start: 1655.48,
        duration: 5.319,
      },
      {
        text: "wander and then like oh it's a small",
        start: 1658.36,
        duration: 4.48,
      },
      {
        text: "thing like seems to be pointing in that",
        start: 1660.799,
        duration: 4.24,
      },
      {
        text: "direction let's take a step there and I",
        start: 1662.84,
        duration: 5.079,
      },
      {
        text: "think this combination of like a far",
        start: 1665.039,
        duration: 6.64,
      },
      {
        text: "away not star and really looking closely",
        start: 1667.919,
        duration: 5.6,
      },
      {
        text: "at what is working today and trying to",
        start: 1671.679,
        duration: 3.88,
      },
      {
        text: "build towards it it's kind of like our",
        start: 1673.519,
        duration: 5.721,
      },
      { text: "philosophy there I love it", start: 1675.559, duration: 5.761 },
      { text: "um one", start: 1679.24, duration: 6.0 },
      {
        text: "um as as as we talking about this why I",
        start: 1681.32,
        duration: 6.76,
      },
      { text: "think one thing", start: 1685.24, duration: 6.6 },
      {
        text: "um that uh I think we've not articulated",
        start: 1688.08,
        duration: 6.64,
      },
      {
        text: "very clearly as a kind of community to",
        start: 1691.84,
        duration: 5.88,
      },
      {
        text: "application Builders is why build a",
        start: 1694.72,
        duration: 5.76,
      },
      {
        text: "crypto app and I'll kind of give our our",
        start: 1697.72,
        duration: 8.439,
      },
      {
        text: "thesis on this and you know what I see",
        start: 1700.48,
        duration: 7.4,
      },
      {
        text: "even today Twitter like lot lots of",
        start: 1706.159,
        duration: 3.601,
      },
      {
        text: "people people fighting on Like You Know",
        start: 1707.88,
        duration: 4.159,
      },
      {
        text: "What's the total addressable Market of",
        start: 1709.76,
        duration: 6.08,
      },
      {
        text: "crypto and uh most of it I think is",
        start: 1712.039,
        duration: 6.441,
      },
      {
        text: "centered around payments or like",
        start: 1715.84,
        duration: 4.4,
      },
      {
        text: "Financial applications Global Financial",
        start: 1718.48,
        duration: 3.4,
      },
      {
        text: "access which are all like extremely",
        start: 1720.24,
        duration: 4.76,
      },
      {
        text: "worthy and great goals and already like",
        start: 1721.88,
        duration: 6.6,
      },
      {
        text: "a huge Market if if we can do that but",
        start: 1725.0,
        duration: 5.039,
      },
      {
        text: "we think it's actually like much much",
        start: 1728.48,
        duration: 5.039,
      },
      {
        text: "bigger than that and pretty much the the",
        start: 1730.039,
        duration: 6.721,
      },
      {
        text: "the thesis is All Digital platforms are",
        start: 1733.519,
        duration: 5.76,
      },
      {
        text: "much better run on a crypto substrate",
        start: 1736.76,
        duration: 4.08,
      },
      {
        text: "what you get with the crypto substrate",
        start: 1739.279,
        duration: 4.561,
      },
      {
        text: "is you get the ability to for an",
        start: 1740.84,
        duration: 6.76,
      },
      {
        text: "application to make commitments to its",
        start: 1743.84,
        duration: 6.079,
      },
      {
        text: "users here's one is one of the places",
        start: 1747.6,
        duration: 4.48,
      },
      {
        text: "where we think that the right",
        start: 1749.919,
        duration: 4.48,
      },
      {
        text: "abstractions for communicating this",
        start: 1752.08,
        duration: 4.16,
      },
      {
        text: "between the apps and the users actually",
        start: 1754.399,
        duration: 4.681,
      },
      {
        text: "going to matter a lot right as a so if",
        start: 1756.24,
        duration: 4.679,
      },
      {
        text: "you think about Bitcoin like there's",
        start: 1759.08,
        duration: 4.36,
      },
      {
        text: "infinite amount of details as like is it",
        start: 1760.919,
        duration: 4.321,
      },
      {
        text: "really decentralized is who's doing the",
        start: 1763.44,
        duration: 4.079,
      },
      {
        text: "mining is it Pro work is the longest",
        start: 1765.24,
        duration: 4.52,
      },
      {
        text: "chain rule when will it for how is the",
        start: 1767.519,
        duration: 3.721,
      },
      {
        text: "difficulty adjusted like all kinds of",
        start: 1769.76,
        duration: 3.759,
      },
      {
        text: "things most users don't know anything",
        start: 1771.24,
        duration: 3.96,
      },
      {
        text: "about any of these things they know two",
        start: 1773.519,
        duration: 4.441,
      },
      {
        text: "things Bitcoin has 21 million there's 21",
        start: 1775.2,
        duration: 4.88,
      },
      {
        text: "million Bitcoins and you own your",
        start: 1777.96,
        duration: 3.959,
      },
      {
        text: "Bitcoin these are the only two",
        start: 1780.08,
        duration: 4.479,
      },
      {
        text: "commitments that Bitcoin has like this",
        start: 1781.919,
        duration: 5.201,
      },
      {
        text: "system is making to its users and it's",
        start: 1784.559,
        duration: 4.641,
      },
      {
        text: "very legible to its users because that's",
        start: 1787.12,
        duration: 3.84,
      },
      {
        text: "the only reason they're using Bitcoin is",
        start: 1789.2,
        duration: 5.52,
      },
      {
        text: "because of these two reasons and each",
        start: 1790.96,
        duration: 6.36,
      },
      {
        text: "app you can think of that exists today",
        start: 1794.72,
        duration: 4.839,
      },
      {
        text: "you can ask what commitments should they",
        start: 1797.32,
        duration: 4.52,
      },
      {
        text: "be making that makes them more",
        start: 1799.559,
        duration: 5.401,
      },
      {
        text: "attractive to their users because then",
        start: 1801.84,
        duration: 4.92,
      },
      {
        text: "instead of generally selling this idea",
        start: 1804.96,
        duration: 3.52,
      },
      {
        text: "that oh that app is centralized I'm",
        start: 1806.76,
        duration: 3.56,
      },
      {
        text: "going to make it decentralized which",
        start: 1808.48,
        duration: 4.799,
      },
      {
        text: "doesn't make that much sense to me the",
        start: 1810.32,
        duration: 8.12,
      },
      {
        text: "idea of oh that app is not able to make",
        start: 1813.279,
        duration: 7.12,
      },
      {
        text: "credible commitments and therefore I'm",
        start: 1818.44,
        duration: 4.239,
      },
      {
        text: "not able to use that app right like",
        start: 1820.399,
        duration: 4.481,
      },
      {
        text: "somebody says oh I'm I have a new new",
        start: 1822.679,
        duration: 4.24,
      },
      {
        text: "coin and this coin only you know will",
        start: 1824.88,
        duration: 3.399,
      },
      {
        text: "not be inflated or you'll have your own",
        start: 1826.919,
        duration: 4.201,
      },
      {
        text: "Co it'll be like why in the same way",
        start: 1828.279,
        duration: 4.24,
      },
      {
        text: "like suppose I want to build a",
        start: 1831.12,
        duration: 3.159,
      },
      {
        text: "competitor to Uber and I want to say",
        start: 1832.519,
        duration: 4.081,
      },
      {
        text: "like hey Uber is taking a 30% take rate",
        start: 1834.279,
        duration: 5.12,
      },
      {
        text: "I'm going to take only a 5% take rate",
        start: 1836.6,
        duration: 4.48,
      },
      {
        text: "and then you can ask why should I trust",
        start: 1839.399,
        duration: 3.241,
      },
      {
        text: "you like you you know in five years when",
        start: 1841.08,
        duration: 3.0,
      },
      {
        text: "you have all the drivers you're going to",
        start: 1842.64,
        duration: 4.759,
      },
      {
        text: "do the same thing that Uber did and if",
        start: 1844.08,
        duration: 5.199,
      },
      {
        text: "the app can make a credible commitment",
        start: 1847.399,
        duration: 5.041,
      },
      {
        text: "that if here's my claim never take more",
        start: 1849.279,
        duration: 5.721,
      },
      {
        text: "than 5% a grade and it's enforced using",
        start: 1852.44,
        duration: 4.359,
      },
      {
        text: "some mechanism it's substracted from the",
        start: 1855.0,
        duration: 3.159,
      },
      {
        text: "user all those mechanisms for",
        start: 1856.799,
        duration: 3.641,
      },
      {
        text: "enforcement are not clear but as a user",
        start: 1858.159,
        duration: 3.921,
      },
      {
        text: "to the app I know that that's the",
        start: 1860.44,
        duration: 4.079,
      },
      {
        text: "commitment that I'm getting that's a",
        start: 1862.08,
        duration: 5.52,
      },
      {
        text: "really powerful framework and is one of",
        start: 1864.519,
        duration: 5.601,
      },
      {
        text: "the reasons why we think that we are",
        start: 1867.6,
        duration: 4.76,
      },
      {
        text: "going to have millions of chains as you",
        start: 1870.12,
        duration: 4.2,
      },
      {
        text: "think about it as a game developer what",
        start: 1872.36,
        duration: 3.679,
      },
      {
        text: "kind of commitments do you want to make",
        start: 1874.32,
        duration: 4.64,
      },
      {
        text: "oh your your points that you make in the",
        start: 1876.039,
        duration: 6.201,
      },
      {
        text: "game are yours um uh the winner of the",
        start: 1878.96,
        duration: 4.8,
      },
      {
        text: "tournament is going to get a bunch of",
        start: 1882.24,
        duration: 4.2,
      },
      {
        text: "the game tokens and the winner of the",
        start: 1883.76,
        duration: 4.399,
      },
      {
        text: "tournament is going to be judged correct",
        start: 1886.44,
        duration: 4.64,
      },
      {
        text: "or fairly like each application actually",
        start: 1888.159,
        duration: 5.921,
      },
      {
        text: "has a spectrum of powerful commitments",
        start: 1891.08,
        duration: 4.199,
      },
      {
        text: "that they would want to make to their",
        start: 1894.08,
        duration: 5.079,
      },
      {
        text: "users and because these applications",
        start: 1895.279,
        duration: 6.201,
      },
      {
        text: "span both financial and non-financial",
        start: 1899.159,
        duration: 6.48,
      },
      {
        text: "use cases the it is impossible to fit",
        start: 1901.48,
        duration: 6.919,
      },
      {
        text: "them in one synchronous zone so we very",
        start: 1905.639,
        duration: 6.441,
      },
      {
        text: "counter the one synchronous chain thesis",
        start: 1908.399,
        duration: 5.921,
      },
      {
        text: "maybe there's like a synchronous chain",
        start: 1912.08,
        duration: 5.16,
      },
      {
        text: "that holds a lot of like high value",
        start: 1914.32,
        duration: 6.68,
      },
      {
        text: "Financial transactions like ethereum but",
        start: 1917.24,
        duration: 7.039,
      },
      {
        text: "the spectrum of like systems that need",
        start: 1921.0,
        duration: 4.96,
      },
      {
        text: "need to be built in order to enable",
        start: 1924.279,
        duration: 3.201,
      },
      {
        text: "these applications is going to be very",
        start: 1925.96,
        duration: 3.679,
      },
      {
        text: "very many and they all need to still",
        start: 1927.48,
        duration: 3.72,
      },
      {
        text: "work with each other and so that's",
        start: 1929.639,
        duration: 3.361,
      },
      {
        text: "really where we see this partnership",
        start: 1931.2,
        duration: 3.599,
      },
      {
        text: "being being a big deal yeah it's it's",
        start: 1933.0,
        duration: 3.519,
      },
      { text: "interesting I", start: 1934.799, duration: 4.0 },
      {
        text: "never I've never thought about it in",
        start: 1936.519,
        duration: 4.4,
      },
      {
        text: "terms of the way that you're describ of",
        start: 1938.799,
        duration: 3.6,
      },
      {
        text: "creditable commitments but but it",
        start: 1940.919,
        duration: 3.36,
      },
      {
        text: "resonates so much because like the the",
        start: 1942.399,
        duration: 5.0,
      },
      {
        text: "framing that we always that we thought",
        start: 1944.279,
        duration: 4.321,
      },
      {
        text: "through the that we thought through as",
        start: 1947.399,
        duration: 3.561,
      },
      {
        text: "we built layer zero like you you we have",
        start: 1948.6,
        duration: 4.0,
      },
      {
        text: "to be able to give these guarantees",
        start: 1950.96,
        duration: 3.36,
      },
      {
        text: "otherwise there's no way this can be",
        start: 1952.6,
        duration: 3.559,
      },
      {
        text: "used long-term and at scale and so for",
        start: 1954.32,
        duration: 5.28,
      },
      {
        text: "us those guarantees were um contracts",
        start: 1956.159,
        duration: 4.76,
      },
      {
        text: "need to be immutable because if they're",
        start: 1959.6,
        duration: 3.76,
      },
      {
        text: "not immutable at any point in time we",
        start: 1960.919,
        duration: 4.681,
      },
      {
        text: "can change the trust assumptions of the",
        start: 1963.36,
        duration: 4.279,
      },
      {
        text: "developers are built above we can censor",
        start: 1965.6,
        duration: 3.36,
      },
      {
        text: "transactions we can do all of these",
        start: 1967.639,
        duration: 2.801,
      },
      {
        text: "things if the contracts are not",
        start: 1968.96,
        duration: 3.92,
      },
      {
        text: "immutable uh then I can never give any",
        start: 1970.44,
        duration: 3.959,
      },
      {
        text: "guarantee or any promise to somebody",
        start: 1972.88,
        duration: 3.44,
      },
      {
        text: "above I can I can always change them and",
        start: 1974.399,
        duration: 2.961,
      },
      {
        text: "they will always have the trust",
        start: 1976.32,
        duration: 3.28,
      },
      {
        text: "Assumption of us as the developers so",
        start: 1977.36,
        duration: 3.4,
      },
      { text: "have to be", start: 1979.6, duration: 3.199 },
      {
        text: "immutable have to be permissionless",
        start: 1980.76,
        duration: 4.84,
      },
      {
        text: "meaning that nobody uh should need to",
        start: 1982.799,
        duration: 5.561,
      },
      {
        text: "rely on us layers or labs this office if",
        start: 1985.6,
        duration: 4.4,
      },
      {
        text: "we disappeared if we're shut down or",
        start: 1988.36,
        duration: 3.0,
      },
      {
        text: "something happens the developers",
        start: 1990.0,
        duration: 3.08,
      },
      {
        text: "shouldn't be worried that their protocol",
        start: 1991.36,
        duration: 3.76,
      },
      {
        text: "will no longer function right the",
        start: 1993.08,
        duration: 4.719,
      },
      {
        text: "protocol exists it is it can be used by",
        start: 1995.12,
        duration: 4.36,
      },
      {
        text: "anybody anybody can come in and run the",
        start: 1997.799,
        duration: 4.961,
      },
      {
        text: "infrastructure we're not needed um and",
        start: 1999.48,
        duration: 4.96,
      },
      {
        text: "it has to be censorship resistant right",
        start: 2002.76,
        duration: 4.399,
      },
      {
        text: "there has to be a ability for the",
        start: 2004.44,
        duration: 4.839,
      },
      {
        text: "protocol to live at a a layer of of",
        start: 2007.159,
        duration: 4.4,
      },
      {
        text: "technology in an application that lives",
        start: 2009.279,
        duration: 4.081,
      },
      {
        text: "above they can add in any of their",
        start: 2011.559,
        duration: 3.321,
      },
      {
        text: "layers of censorship that they want if",
        start: 2013.36,
        duration: 3.159,
      },
      {
        text: "you're a stable coin you can Blacklist",
        start: 2014.88,
        duration: 3.279,
      },
      {
        text: "and you can have you know any sort of",
        start: 2016.519,
        duration: 3.76,
      },
      {
        text: "controls that you want over that but",
        start: 2018.159,
        duration: 3.64,
      },
      {
        text: "that doesn't live the protocol level the",
        start: 2020.279,
        duration: 3.921,
      },
      {
        text: "protocol uh is agnostic to that because",
        start: 2021.799,
        duration: 3.76,
      },
      {
        text: "especially when it comes to financial",
        start: 2024.2,
        duration: 3.439,
      },
      {
        text: "transactions if you have the ability to",
        start: 2025.559,
        duration: 3.761,
      },
      {
        text: "censor you typically have the ability to",
        start: 2027.639,
        duration: 5.241,
      },
      {
        text: "reorder which means you can uh really",
        start: 2029.32,
        duration: 5.199,
      },
      { text: "you you have a", start: 2032.88, duration: 4.36 },
      {
        text: "much more limited set of guarantees that",
        start: 2034.519,
        duration: 4.4,
      },
      {
        text: "you can give to the user if a user",
        start: 2037.24,
        duration: 3.88,
      },
      {
        text: "doesn't know if I got my order in first",
        start: 2038.919,
        duration: 4.0,
      },
      {
        text: "but I don't know if I'm going to get",
        start: 2041.12,
        duration: 3.2,
      },
      {
        text: "filled or if somebody's just going to",
        start: 2042.919,
        duration: 4.201,
      },
      {
        text: "arbitrarily fill uh Citadel or all of",
        start: 2044.32,
        duration: 5.2,
      },
      {
        text: "these other people in front of me uh",
        start: 2047.12,
        duration: 6.08,
      },
      {
        text: "then I have much less um I I have much",
        start: 2049.52,
        duration: 5.24,
      },
      {
        text: "less guarantee your ability to reason",
        start: 2053.2,
        duration: 3.32,
      },
      {
        text: "about the financial outcome of this",
        start: 2054.76,
        duration: 2.919,
      },
      {
        text: "transaction that I'm trying to make",
        start: 2056.52,
        duration: 2.76,
      },
      {
        text: "which just makes a much weaker system",
        start: 2057.679,
        duration: 4.24,
      },
      {
        text: "overall and so we've done some some",
        start: 2059.28,
        duration: 5.16,
      },
      {
        text: "interesting things which are you know we",
        start: 2061.919,
        duration: 4.72,
      },
      {
        text: "can always add a new validation Library",
        start: 2064.44,
        duration: 4.479,
      },
      {
        text: "so new code can be added as things",
        start: 2066.639,
        duration: 3.96,
      },
      {
        text: "progress but people can opt in if they",
        start: 2068.919,
        duration: 3.521,
      },
      {
        text: "want to stay in the old one forever and",
        start: 2070.599,
        duration: 3.28,
      },
      {
        text: "it's very important to us that we could",
        start: 2072.44,
        duration: 4.36,
      },
      {
        text: "never um we can never remove any",
        start: 2073.879,
        duration: 4.401,
      },
      {
        text: "existing library because of course we'll",
        start: 2076.8,
        duration: 3.16,
      },
      {
        text: "just remove all the old ones and put in",
        start: 2078.28,
        duration: 3.639,
      },
      {
        text: "one that's uh fee heavy and censorship",
        start: 2079.96,
        duration: 3.6,
      },
      {
        text: "heavy and everything else uh so we can",
        start: 2081.919,
        duration: 3.48,
      },
      {
        text: "never remove or we can never modify any",
        start: 2083.56,
        duration: 3.4,
      },
      {
        text: "but we can always add anything new",
        start: 2085.399,
        duration: 3.121,
      },
      {
        text: "moving forward it's just opt in for",
        start: 2086.96,
        duration: 3.639,
      },
      {
        text: "every application uh but I had never you",
        start: 2088.52,
        duration: 5.159,
      },
      {
        text: "know I I I knew very strongly that we we",
        start: 2090.599,
        duration: 4.721,
      },
      {
        text: "I knew what guarantees we were giving to",
        start: 2093.679,
        duration: 4.201,
      },
      {
        text: "the user but I had never reasoned really",
        start: 2095.32,
        duration: 5.4,
      },
      {
        text: "an eloquent way of uh reasoning kind of",
        start: 2097.88,
        duration: 5.56,
      },
      {
        text: "what protocols and applications are are",
        start: 2100.72,
        duration: 4.56,
      },
      {
        text: "delivering to that user and what is what",
        start: 2103.44,
        duration: 3.96,
      },
      {
        text: "is the ultimate Crux why do people use a",
        start: 2105.28,
        duration: 4.16,
      },
      {
        text: "why do they use Unis swap instead of",
        start: 2107.4,
        duration: 3.64,
      },
      {
        text: "some other fork or some other something",
        start: 2109.44,
        duration: 4.6,
      },
      {
        text: "else it's just very very clear um both",
        start: 2111.04,
        duration: 5.44,
      },
      {
        text: "in you know your simple concept of",
        start: 2114.04,
        duration: 5.24,
      },
      {
        text: "security of like okay uh this long in",
        start: 2116.48,
        duration: 4.48,
      },
      {
        text: "production and this much value has been",
        start: 2119.28,
        duration: 4.079,
      },
      {
        text: "passed through it but also the more uh",
        start: 2120.96,
        duration: 4.72,
      },
      {
        text: "sort of elegant of just like you can",
        start: 2123.359,
        duration: 4.081,
      },
      {
        text: "observe the state of the world you",
        start: 2125.68,
        duration: 3.439,
      },
      {
        text: "understand x yals k you know you're",
        start: 2127.44,
        duration: 3.159,
      },
      {
        text: "getting that exact output you don't need",
        start: 2129.119,
        duration: 3.681,
      },
      {
        text: "to think uh about the system doing",
        start: 2130.599,
        duration: 5.361,
      },
      {
        text: "something opaque uh or adversarial yeah",
        start: 2132.8,
        duration: 5.92,
      },
      {
        text: "that's that's so interesting that uh you",
        start: 2135.96,
        duration: 5.639,
      },
      {
        text: "you had this notion of strong guarantees",
        start: 2138.72,
        duration: 7.399,
      },
      {
        text: "at the center of the protocol and uh",
        start: 2141.599,
        duration: 6.961,
      },
      {
        text: "this framing of credible commitments is",
        start: 2146.119,
        duration: 3.761,
      },
      { text: "originally", start: 2148.56, duration: 5.88 },
      {
        text: "from uh at least uh my reading from",
        start: 2149.88,
        duration: 6.719,
      },
      {
        text: "Virgil Griffith who's one of the",
        start: 2154.44,
        duration: 4.399,
      },
      { text: "ethereum o", start: 2156.599, duration: 4.441 },
      {
        text: "and one of my one of the things that",
        start: 2158.839,
        duration: 4.121,
      },
      {
        text: "attracted me towards the ethereum",
        start: 2161.04,
        duration: 5.64,
      },
      {
        text: "community is that they thought of",
        start: 2162.96,
        duration: 7.08,
      },
      {
        text: "blockchains as both this coordination",
        start: 2166.68,
        duration: 5.72,
      },
      {
        text: "substrate and had kind of developed a",
        start: 2170.04,
        duration: 5.0,
      },
      {
        text: "little bit of like a culture around this",
        start: 2172.4,
        duration: 4.439,
      },
      {
        text: "this philosophy the gitcoin as an",
        start: 2175.04,
        duration: 4.6,
      },
      { text: "example and so on", start: 2176.839, duration: 5.641 },
      { text: "and", start: 2179.64, duration: 6.32 },
      {
        text: "um in Virgil like there's a famous blog",
        start: 2182.48,
        duration: 6.639,
      },
      {
        text: "post at Virgil road and in in that uh he",
        start: 2185.96,
        duration: 6.84,
      },
      {
        text: "writes about how when you have a uh",
        start: 2189.119,
        duration: 6.281,
      },
      {
        text: "non-cooperative game like a prisoner",
        start: 2192.8,
        duration: 5.6,
      },
      {
        text: "dilemma the ability to make a credible",
        start: 2195.4,
        duration: 5.12,
      },
      {
        text: "commitment that hey I will not defect in",
        start: 2198.4,
        duration: 4.0,
      },
      {
        text: "the protocol and and you put some stake",
        start: 2200.52,
        duration: 3.72,
      },
      {
        text: "up and you make a promise that you will",
        start: 2202.4,
        duration: 3.679,
      },
      {
        text: "not defect actually changes the",
        start: 2204.24,
        duration: 3.079,
      },
      { text: "structure of the game from a", start: 2206.079, duration: 3.04 },
      {
        text: "non-cooperative game to like a",
        start: 2207.319,
        duration: 4.0,
      },
      {
        text: "Cooperative game and then I observed",
        start: 2209.119,
        duration: 4.761,
      },
      {
        text: "this to be true like much more broadly",
        start: 2211.319,
        duration: 4.681,
      },
      {
        text: "in society for example the US",
        start: 2213.88,
        duration: 5.199,
      },
      {
        text: "Constitution as an example Le of like a",
        start: 2216.0,
        duration: 6.24,
      },
      {
        text: "credible commitment that is made and you",
        start: 2219.079,
        duration: 6.361,
      },
      {
        text: "know and any other system built on top",
        start: 2222.24,
        duration: 5.64,
      },
      {
        text: "uh including any Bill cannot violate",
        start: 2225.44,
        duration: 4.159,
      },
      {
        text: "some of the rights that are guaranteed",
        start: 2227.88,
        duration: 2.76,
      },
      { text: "in the", start: 2229.599, duration: 5.561 },
      {
        text: "Constitution and uh you know part of the",
        start: 2230.64,
        duration: 7.6,
      },
      {
        text: "the crypto project in my view is",
        start: 2235.16,
        duration: 6.48,
      },
      {
        text: "to export this kind of like a self-",
        start: 2238.24,
        duration: 6.44,
      },
      {
        text: "enforcing coordination mechanism into",
        start: 2241.64,
        duration: 5.04,
      },
      {
        text: "the internet and make it digitally",
        start: 2244.68,
        duration: 3.56,
      },
      { text: "native so", start: 2246.68, duration: 6.639 },
      {
        text: "uh I I was in a in a uh meeting with a",
        start: 2248.24,
        duration: 6.96,
      },
      {
        text: "US congressman and he went around the",
        start: 2253.319,
        duration: 4.28,
      },
      {
        text: "table and asked like hey why are you in",
        start: 2255.2,
        duration: 4.44,
      },
      {
        text: "crypto and most of the answers were",
        start: 2257.599,
        duration: 3.121,
      },
      { text: "primarily", start: 2259.64, duration: 3.4 },
      { text: "financial and then I", start: 2260.72, duration: 5.8 },
      {
        text: "said crypto is the biggest upgrade to",
        start: 2263.04,
        duration: 6.2,
      },
      {
        text: "human civilization since the US",
        start: 2266.52,
        duration: 4.28,
      },
      { text: "Constitution", start: 2269.24, duration: 4.04 },
      {
        text: "and the the room went silent a little",
        start: 2270.8,
        duration: 5.36,
      },
      {
        text: "bit but we really believe in this",
        start: 2273.28,
        duration: 4.6,
      },
      {
        text: "because I think the set of things that",
        start: 2276.16,
        duration: 4.36,
      },
      {
        text: "can be built once you have robust",
        start: 2277.88,
        duration: 4.52,
      },
      {
        text: "coordination mechanisms I think a",
        start: 2280.52,
        duration: 5.839,
      },
      {
        text: "historical example of like a a self",
        start: 2282.4,
        duration: 8.16,
      },
      {
        text: "enforcing commitment mechanism is gold",
        start: 2286.359,
        duration: 7.161,
      },
      { text: "okay you think of gold", start: 2290.56, duration: 5.4 },
      {
        text: "uh it's if you think of the problem of",
        start: 2293.52,
        duration: 4.44,
      },
      {
        text: "value transfer I want to pass some value",
        start: 2295.96,
        duration: 4.72,
      },
      {
        text: "to somebody then you ask how do I make",
        start: 2297.96,
        duration: 5.28,
      },
      {
        text: "it uh what is the enforcement mechanism",
        start: 2300.68,
        duration: 4.88,
      },
      {
        text: "for passing value and you know the king",
        start: 2303.24,
        duration: 4.359,
      },
      {
        text: "can have a ledger he can say like hey",
        start: 2305.56,
        duration: 3.96,
      },
      {
        text: "have this property or whatever and like",
        start: 2307.599,
        duration: 5.361,
      },
      {
        text: "write National records but when you go",
        start: 2309.52,
        duration: 5.76,
      },
      {
        text: "across trust domains when you go from",
        start: 2312.96,
        duration: 5.72,
      },
      {
        text: "one king to the other king when you uh",
        start: 2315.28,
        duration: 5.6,
      },
      {
        text: "not who who do they trust how do they",
        start: 2318.68,
        duration: 4.24,
      },
      {
        text: "make sure that they can exchange value",
        start: 2320.88,
        duration: 4.239,
      },
      {
        text: "rigidly you need a coordination",
        start: 2322.92,
        duration: 5.08,
      },
      {
        text: "mechanism that is not authoritarian not",
        start: 2325.119,
        duration: 4.841,
      },
      {
        text: "based on a committee not based on even a",
        start: 2328.0,
        duration: 3.52,
      },
      {
        text: "majority of people because there's no",
        start: 2329.96,
        duration: 4.04,
      },
      {
        text: "common majority across these two",
        start: 2331.52,
        duration: 5.96,
      },
      {
        text: "systems gold was this like emergent",
        start: 2334.0,
        duration: 5.839,
      },
      {
        text: "civilizational property that actually oh",
        start: 2337.48,
        duration: 3.72,
      },
      {
        text: "you know I got some gold which means I",
        start: 2339.839,
        duration: 4.121,
      },
      {
        text: "know how much value and so when you want",
        start: 2341.2,
        duration: 5.04,
      },
      {
        text: "to transact across a trust boundary you",
        start: 2343.96,
        duration: 5.639,
      },
      {
        text: "need something that is self- enforcing",
        start: 2346.24,
        duration: 5.119,
      },
      {
        text: "whose properties are not dependent on",
        start: 2349.599,
        duration: 4.48,
      },
      {
        text: "anybody and so I I think of that and",
        start: 2351.359,
        duration: 4.641,
      },
      {
        text: "like what you said about building the",
        start: 2354.079,
        duration: 4.881,
      },
      {
        text: "layer zero Bridge as being immutable",
        start: 2356.0,
        duration: 6.319,
      },
      {
        text: "permissionless sensorship resistant as",
        start: 2358.96,
        duration: 5.76,
      },
      {
        text: "inheriting a certain aspects of this",
        start: 2362.319,
        duration: 5.441,
      },
      { text: "kind of like um", start: 2364.72, duration: 8.119 },
      {
        text: "self- enforcing nature and the U when",
        start: 2367.76,
        duration: 8.12,
      },
      {
        text: "you think of you know gold as this thing",
        start: 2372.839,
        duration: 6.76,
      },
      {
        text: "of like Global value transfer uh it",
        start: 2375.88,
        duration: 6.239,
      },
      {
        text: "became really powerful and like now it's",
        start: 2379.599,
        duration: 6.601,
      },
      {
        text: "so prominent around the world and",
        start: 2382.119,
        duration: 9.321,
      },
      {
        text: "uh but because it was so uh robust in",
        start: 2386.2,
        duration: 6.8,
      },
      {
        text: "the guarantee that it was giving because",
        start: 2391.44,
        duration: 3.28,
      },
      {
        text: "I give you a piece of gold you know it's",
        start: 2393.0,
        duration: 4.68,
      },
      {
        text: "a piece of gold and no Authority no",
        start: 2394.72,
        duration: 4.8,
      },
      {
        text: "majority no committee can decide that",
        start: 2397.68,
        duration: 5.96,
      },
      {
        text: "that's not good and so that thing even",
        start: 2399.52,
        duration: 7.88,
      },
      {
        text: "though it's very powerful was not very",
        start: 2403.64,
        duration: 6.439,
      },
      { text: "extensible so I can't", start: 2407.4, duration: 5.6 },
      {
        text: "use uh so go is a coordination mechanism",
        start: 2410.079,
        duration: 4.841,
      },
      {
        text: "is useful for Value transfer but not for",
        start: 2413.0,
        duration: 3.76,
      },
      {
        text: "Value allocation and for making",
        start: 2414.92,
        duration: 3.64,
      },
      {
        text: "commitments of how value will be divided",
        start: 2416.76,
        duration: 4.52,
      },
      {
        text: "in the future and so on and so something",
        start: 2418.56,
        duration: 4.759,
      },
      {
        text: "like the US Constitution and governments",
        start: 2421.28,
        duration: 5.2,
      },
      {
        text: "and contracts emerged to actually solve",
        start: 2423.319,
        duration: 5.441,
      },
      {
        text: "that problem and we want to figure out",
        start: 2426.48,
        duration: 4.56,
      },
      {
        text: "how we translate all of those kinds of",
        start: 2428.76,
        duration: 4.48,
      },
      {
        text: "things to internet native digital",
        start: 2431.04,
        duration: 5.48,
      },
      {
        text: "coordination especially in the age of AI",
        start: 2433.24,
        duration: 5.56,
      },
      {
        text: "I think we see for example this tension",
        start: 2436.52,
        duration: 4.28,
      },
      {
        text: "you know just before this chat we were",
        start: 2438.8,
        duration: 5.68,
      },
      {
        text: "talking about you know uh a startup and",
        start: 2440.8,
        duration: 5.96,
      },
      {
        text: "and other things in the ai ai space that",
        start: 2444.48,
        duration: 3.92,
      },
      {
        text: "Brian was interested in and his own",
        start: 2446.76,
        duration: 4.96,
      },
      {
        text: "previous experience building AI to to do",
        start: 2448.4,
        duration: 7.4,
      },
      {
        text: "poker and other other stuff um in",
        start: 2451.72,
        duration: 8.16,
      },
      {
        text: "especially in this age of a um you know",
        start: 2455.8,
        duration: 6.76,
      },
      {
        text: "right now we see this tension where like",
        start: 2459.88,
        duration: 5.239,
      },
      {
        text: "there is two like there's a division",
        start: 2462.56,
        duration: 5.039,
      },
      {
        text: "between in in the top AI people as to",
        start: 2465.119,
        duration: 4.24,
      },
      {
        text: "whether it should be regulated or not",
        start: 2467.599,
        duration: 3.76,
      },
      {
        text: "regulated the way I think about it is",
        start: 2469.359,
        duration: 3.921,
      },
      {
        text: "like you have you know societies made of",
        start: 2471.359,
        duration: 3.881,
      },
      {
        text: "this underlying coordination mechanism",
        start: 2473.28,
        duration: 3.76,
      },
      {
        text: "and then there's a Innovation mechanism",
        start: 2475.24,
        duration: 3.359,
      },
      {
        text: "on top like the free market is the",
        start: 2477.04,
        duration: 3.72,
      },
      {
        text: "Innovation mechanism Constitution",
        start: 2478.599,
        duration: 4.361,
      },
      {
        text: "government is a coordination mechanism",
        start: 2480.76,
        duration: 4.88,
      },
      {
        text: "and the creation of this coordination",
        start: 2482.96,
        duration: 4.44,
      },
      {
        text: "mechanism enables more innovation",
        start: 2485.64,
        duration: 3.64,
      },
      {
        text: "enables you know the free market like",
        start: 2487.4,
        duration: 4.4,
      },
      {
        text: "free production of goods and services",
        start: 2489.28,
        duration: 4.48,
      },
      {
        text: "but I think what has happened is over",
        start: 2491.8,
        duration: 5.12,
      },
      {
        text: "the last 300 years technology has",
        start: 2493.76,
        duration: 5.079,
      },
      {
        text: "massively accelerated The Innovation",
        start: 2496.92,
        duration: 4.96,
      },
      {
        text: "layer because technology is leverage a",
        start: 2498.839,
        duration: 5.721,
      },
      {
        text: "force multiplier to the free agent if",
        start: 2501.88,
        duration: 4.56,
      },
      {
        text: "you're an agent you can act with so much",
        start: 2504.56,
        duration: 3.6,
      },
      {
        text: "more Force than power like whether",
        start: 2506.44,
        duration: 2.84,
      },
      {
        text: "you're a company whether you're an",
        start: 2508.16,
        duration: 3.32,
      },
      {
        text: "individual if you have technology so",
        start: 2509.28,
        duration: 3.64,
      },
      {
        text: "technology is force multiplier to the",
        start: 2511.48,
        duration: 3.44,
      },
      {
        text: "individual but the coordination",
        start: 2512.92,
        duration: 3.919,
      },
      {
        text: "mechanism that we've built is still",
        start: 2514.92,
        duration: 5.24,
      },
      {
        text: "stuck 300 years back it is the Delaware",
        start: 2516.839,
        duration: 6.041,
      },
      {
        text: "C Corp it is the US Constitution it is",
        start: 2520.16,
        duration: 5.439,
      },
      {
        text: "the double entry Accounting in in on The",
        start: 2522.88,
        duration: 6.16,
      },
      {
        text: "Ledger where is the acceleration on the",
        start: 2525.599,
        duration: 6.801,
      },
      {
        text: "coordination layer right instead of hey",
        start: 2529.04,
        duration: 5.36,
      },
      {
        text: "we have an innovation problem like AI",
        start: 2532.4,
        duration: 4.199,
      },
      {
        text: "you know needs to be regulated instead",
        start: 2534.4,
        duration: 4.199,
      },
      {
        text: "of running to 300 year old coordination",
        start: 2536.599,
        duration: 5.201,
      },
      {
        text: "mechanisms can we build like technology",
        start: 2538.599,
        duration: 5.401,
      },
      {
        text: "accelerated coordination mechanisms",
        start: 2541.8,
        duration: 4.84,
      },
      {
        text: "which can then help solve for example",
        start: 2544.0,
        duration: 5.88,
      },
      {
        text: "all humans need to vote on some big",
        start: 2546.64,
        duration: 5.28,
      },
      {
        text: "major upgrades to this AGI how do we",
        start: 2549.88,
        duration: 4.959,
      },
      {
        text: "keep AGI in check like is one of the big",
        start: 2551.92,
        duration: 6.159,
      },
      {
        text: "things we think about and so I",
        start: 2554.839,
        duration: 7.161,
      },
      {
        text: "think uh the interaction between as AI",
        start: 2558.079,
        duration: 6.121,
      },
      {
        text: "accelerates The Innovation layer if",
        start: 2562.0,
        duration: 4.0,
      },
      {
        text: "crypto can accelerate the coordination",
        start: 2564.2,
        duration: 4.0,
      },
      {
        text: "layer to to make sure that you know we",
        start: 2566.0,
        duration: 5.16,
      },
      {
        text: "can actually like build a productive s",
        start: 2568.2,
        duration: 6.32,
      },
      {
        text: "Society of AI that actually help humans",
        start: 2571.16,
        duration: 5.72,
      },
      {
        text: "rather than the other way yeah I found a",
        start: 2574.52,
        duration: 4.36,
      },
      {
        text: "very interesting you you brought up uh",
        start: 2576.88,
        duration: 4.32,
      },
      {
        text: "earlier today this Naval quote and one",
        start: 2578.88,
        duration: 4.0,
      },
      {
        text: "of his other quotes is basically there's",
        start: 2581.2,
        duration: 3.08,
      },
      {
        text: "there's three forms of Leverage right",
        start: 2582.88,
        duration: 4.12,
      },
      {
        text: "and it's uh human Capital Financial",
        start: 2584.28,
        duration: 4.44,
      },
      {
        text: "capital and then the third is code right",
        start: 2587.0,
        duration: 3.64,
      },
      {
        text: "and code is like relatively nent right",
        start: 2588.72,
        duration: 3.879,
      },
      {
        text: "it's it's it's new the others we've seen",
        start: 2590.64,
        duration: 4.28,
      },
      {
        text: "what uh human capital can do whether",
        start: 2592.599,
        duration: 4.72,
      },
      {
        text: "it's from the pyramids onward uh we've",
        start: 2594.92,
        duration: 4.159,
      },
      {
        text: "seen what Financial Capital can do but",
        start: 2597.319,
        duration: 4.961,
      },
      {
        text: "code has really uh disrupted uh as you",
        start: 2599.079,
        duration: 4.881,
      },
      {
        text: "said and really accelerated this this",
        start: 2602.28,
        duration: 4.319,
      },
      {
        text: "Innovation layer uh so yeah it's a it's",
        start: 2603.96,
        duration: 4.28,
      },
      {
        text: "a fasc inting problem thater really",
        start: 2606.599,
        duration: 2.801,
      },
      { text: "Grand", start: 2608.24, duration: 3.52 },
      {
        text: "Visions the the the code is leverage",
        start: 2609.4,
        duration: 3.719,
      },
      {
        text: "that you mentioned I think one other",
        start: 2611.76,
        duration: 5.799,
      },
      {
        text: "thing that uh uh naal mentions there is",
        start: 2613.119,
        duration: 7.24,
      },
      {
        text: "code is the only permissionless leverage",
        start: 2617.559,
        duration: 5.881,
      },
      {
        text: "right you know to you everybody wants",
        start: 2620.359,
        duration: 5.641,
      },
      {
        text: "people to follow them but uh it's",
        start: 2623.44,
        duration: 3.879,
      },
      {
        text: "permission you need to get people's",
        start: 2626.0,
        duration: 3.4,
      },
      {
        text: "permission to follow you Capital like",
        start: 2627.319,
        duration: 4.121,
      },
      {
        text: "everybody wants money like there's but",
        start: 2629.4,
        duration: 3.52,
      },
      {
        text: "you need permission to get the money or",
        start: 2631.44,
        duration: 4.8,
      },
      {
        text: "to earn it but code and media are like",
        start: 2632.92,
        duration: 5.08,
      },
      { text: "completely permissionless", start: 2636.24, duration: 4.64 },
      {
        text: "and that idea of permissionless is the",
        start: 2638.0,
        duration: 5.359,
      },
      {
        text: "center of I think what would what we",
        start: 2640.88,
        duration: 4.439,
      },
      {
        text: "building here in crypto so that's super",
        start: 2643.359,
        duration: 4.441,
      },
      {
        text: "exciting that to see those two",
        start: 2645.319,
        duration: 4.24,
      },
      { text: "Kinders", start: 2647.8, duration: 6.759 },
      {
        text: "um so we were at the 20,000 ft level",
        start: 2649.559,
        duration: 11.161,
      },
      {
        text: "let's dive a little bit deeper now um",
        start: 2654.559,
        duration: 6.161,
      },
      { text: "the", start: 2660.96, duration: 5.48 },
      {
        text: "short-term uh problems that you are",
        start: 2663.28,
        duration: 7.4,
      },
      {
        text: "seeing the crypto space face and how you",
        start: 2666.44,
        duration: 6.159,
      },
      {
        text: "are you know thinking about solutions to",
        start: 2670.68,
        duration: 4.6,
      },
      {
        text: "that if you can elaborate then I think",
        start: 2672.599,
        duration: 4.041,
      },
      {
        text: "one of the most interesting there",
        start: 2675.28,
        duration: 3.92,
      },
      {
        text: "there's two sides of it I think there's",
        start: 2676.64,
        duration: 5.64,
      },
      { text: "one there's the the", start: 2679.2, duration: 6.28 },
      {
        text: "world I think crypto loves to look at",
        start: 2682.28,
        duration: 7.079,
      },
      {
        text: "the world as it is now uh and really and",
        start: 2685.48,
        duration: 6.4,
      },
      {
        text: "I I I love I love that the space games",
        start: 2689.359,
        duration: 4.2,
      },
      {
        text: "from a very like adversarial background",
        start: 2691.88,
        duration: 3.4,
      },
      {
        text: "and I think it's very important you know",
        start: 2693.559,
        duration: 3.881,
      },
      {
        text: "you see l2s get beat up a lot you see a",
        start: 2695.28,
        duration: 3.68,
      },
      {
        text: "lot of people get beat up is is this you",
        start: 2697.44,
        duration: 3.399,
      },
      {
        text: "know doesn't actually inherit the",
        start: 2698.96,
        duration: 3.04,
      },
      {
        text: "security of ethereum right now it",
        start: 2700.839,
        duration: 2.681,
      },
      {
        text: "doesn't do this it doesn't do this and I",
        start: 2702.0,
        duration: 3.16,
      },
      {
        text: "I think that's like great and healthy",
        start: 2703.52,
        duration: 3.16,
      },
      {
        text: "but I think it's important to look at",
        start: 2705.16,
        duration: 3.76,
      },
      {
        text: "what what things are now and what they",
        start: 2706.68,
        duration: 4.2,
      },
      {
        text: "can actually become or credibly become",
        start: 2708.92,
        duration: 3.24,
      },
      {
        text: "right and some systems are just broken",
        start: 2710.88,
        duration: 2.6,
      },
      {
        text: "they'll never become what they claim to",
        start: 2712.16,
        duration: 3.8,
      },
      {
        text: "a comma but many can and I I think the",
        start: 2713.48,
        duration: 5.119,
      },
      {
        text: "best piece of advice that uh I I didn't",
        start: 2715.96,
        duration: 5.92,
      },
      {
        text: "take was as we were launching uh Co Kobe",
        start: 2718.599,
        duration: 4.681,
      },
      {
        text: "had told me he said listen when when",
        start: 2721.88,
        duration: 4.52,
      },
      {
        text: "they were launching Lio um Lido is not",
        start: 2723.28,
        duration: 5.2,
      },
      {
        text: "perfect at launch and they just laid out",
        start: 2726.4,
        duration: 4.08,
      },
      {
        text: "here is like here is everything here are",
        start: 2728.48,
        duration: 3.639,
      },
      {
        text: "all of the flaws with the current system",
        start: 2730.48,
        duration: 3.44,
      },
      {
        text: "but here is like how you eventually get",
        start: 2732.119,
        duration: 3.44,
      },
      {
        text: "to that end State and so when layers",
        start: 2733.92,
        duration: 3.8,
      },
      {
        text: "launched we launched and we built in a",
        start: 2735.559,
        duration: 3.76,
      },
      {
        text: "system that we said listen this is this",
        start: 2737.72,
        duration: 4.08,
      },
      {
        text: "is totally permissionless and immutable",
        start: 2739.319,
        duration: 4.76,
      },
      {
        text: "and it like exists and like anybody can",
        start: 2741.8,
        duration: 3.759,
      },
      {
        text: "come in and run a dvn and you'll have",
        start: 2744.079,
        duration: 3.841,
      },
      {
        text: "all these really uh complex dvns come in",
        start: 2745.559,
        duration: 3.921,
      },
      {
        text: "over time and you'll have this sort of",
        start: 2747.92,
        duration: 3.919,
      },
      {
        text: "um everybody will have access to this",
        start: 2749.48,
        duration: 3.879,
      },
      {
        text: "really great Marketplace of of",
        start: 2751.839,
        duration: 3.681,
      },
      {
        text: "validation and you know all all of this",
        start: 2753.359,
        duration: 4.161,
      },
      {
        text: "great these really beautiful systems",
        start: 2755.52,
        duration: 3.64,
      },
      {
        text: "that that couldn't exist today or",
        start: 2757.52,
        duration: 3.96,
      },
      {
        text: "haven't and people love to look at like",
        start: 2759.16,
        duration: 4.32,
      },
      {
        text: "current topology and they were like okay",
        start: 2761.48,
        duration: 4.16,
      },
      {
        text: "yeah but there's only like these things",
        start: 2763.48,
        duration: 4.119,
      },
      {
        text: "right now and we're like yeah it's it's",
        start: 2765.64,
        duration: 4.08,
      },
      {
        text: "an open like it's an open system like",
        start: 2767.599,
        duration: 3.441,
      },
      {
        text: "people have to come and build Sam you",
        start: 2769.72,
        duration: 3.599,
      },
      {
        text: "look at the validator set of a theum and",
        start: 2771.04,
        duration: 4.48,
      },
      {
        text: "Bitcoin early on and it's a joke",
        start: 2773.319,
        duration: 3.481,
      },
      {
        text: "compared to what it is right now are",
        start: 2775.52,
        duration: 2.48,
      },
      {
        text: "these systems evolved the trust",
        start: 2776.8,
        duration: 3.12,
      },
      {
        text: "assumptions evolved the way the protocol",
        start: 2778.0,
        duration: 3.48,
      },
      {
        text: "hasn't changed it's not like the code of",
        start: 2779.92,
        duration: 2.8,
      },
      {
        text: "Bitcoin has changed significantly the",
        start: 2781.48,
        duration: 3.079,
      },
      {
        text: "code of layer zero has not changed the",
        start: 2782.72,
        duration: 3.28,
      },
      {
        text: "protocol is still a protocol but we have",
        start: 2784.559,
        duration: 4.201,
      },
      {
        text: "much more diverse set of uh of dvns now",
        start: 2786.0,
        duration: 4.24,
      },
      {
        text: "and we're going to have cryptoeconomic",
        start: 2788.76,
        duration: 2.68,
      },
      {
        text: "security dvns we're going to have all of",
        start: 2790.24,
        duration: 2.319,
      },
      {
        text: "these things that are later can you talk",
        start: 2791.44,
        duration: 3.04,
      },
      {
        text: "a little bit about dvns in in this",
        start: 2792.559,
        duration: 4.921,
      },
      {
        text: "context yeah absolutely so uh the way",
        start: 2794.48,
        duration: 4.839,
      },
      {
        text: "that we the way that we built layer Zer",
        start: 2797.48,
        duration: 3.72,
      },
      {
        text: "is you have these endpoints that are",
        start: 2799.319,
        duration: 3.601,
      },
      {
        text: "entirely immutable and the endpoint",
        start: 2801.2,
        duration: 4.68,
      },
      {
        text: "should be the the lowest overhead thing",
        start: 2802.92,
        duration: 5.199,
      },
      {
        text: "and so all that the endpoint does is",
        start: 2805.88,
        duration: 4.0,
      },
      {
        text: "really just deal with uh Channel and",
        start: 2808.119,
        duration: 3.761,
      },
      {
        text: "nons like that's it's validation and",
        start: 2809.88,
        duration: 3.6,
      },
      {
        text: "nons like that is that is all the",
        start: 2811.88,
        duration: 4.679,
      },
      {
        text: "endpoint does and so an application uh",
        start: 2813.48,
        duration: 5.04,
      },
      {
        text: "is basically saying I'm going to send",
        start: 2816.559,
        duration: 5.121,
      },
      {
        text: "this arbitrary array of bytes to",
        start: 2818.52,
        duration: 4.76,
      },
      {
        text: "application a on chainex like I'm going",
        start: 2821.68,
        duration: 3.2,
      },
      {
        text: "to go send it over to this contract on",
        start: 2823.28,
        duration: 3.64,
      },
      {
        text: "this chain and it's great across this",
        start: 2824.88,
        duration: 3.4,
      },
      {
        text: "channel you have a given incrementing",
        start: 2826.92,
        duration: 3.52,
      },
      {
        text: "nons so you can do things like centu of",
        start: 2828.28,
        duration: 3.92,
      },
      { text: "persistance you give these", start: 2830.44, duration: 4.679 },
      {
        text: "guarantees event gets written on chain a",
        start: 2832.2,
        duration: 5.28,
      },
      {
        text: "dvns are effectively listening uh for",
        start: 2835.119,
        duration: 4.401,
      },
      {
        text: "that event and then they're creating a a",
        start: 2837.48,
        duration: 4.96,
      },
      {
        text: "hash of the packet this is how most work",
        start: 2839.52,
        duration: 4.12,
      },
      {
        text: "um and they're presenting that hash to",
        start: 2842.44,
        duration: 3.0,
      },
      {
        text: "the destination chain now what what this",
        start: 2843.64,
        duration: 3.919,
      },
      {
        text: "looks like that validation method ology",
        start: 2845.44,
        duration: 3.96,
      },
      {
        text: "we're really agnostic we we took the",
        start: 2847.559,
        duration: 5.04,
      },
      {
        text: "decision early on like we are not um",
        start: 2849.4,
        duration: 4.52,
      },
      {
        text: "going to be hyper opinionated on",
        start: 2852.599,
        duration: 2.72,
      },
      {
        text: "validation because everything that",
        start: 2853.92,
        duration: 3.56,
      },
      {
        text: "exists at the time of launch is not",
        start: 2855.319,
        duration: 3.76,
      },
      {
        text: "going to be de facto five plus years",
        start: 2857.48,
        duration: 3.72,
      },
      {
        text: "from now and now we've seen things like",
        start: 2859.079,
        duration: 3.801,
      },
      {
        text: "polyhedra ZK light client that's",
        start: 2861.2,
        duration: 3.76,
      },
      {
        text: "aggregating 300,000 ethereum signatures",
        start: 2862.88,
        duration: 3.04,
      },
      {
        text: "you know you really see like an",
        start: 2864.96,
        duration: 3.0,
      },
      {
        text: "evolution here and so the point is like",
        start: 2865.92,
        duration: 3.8,
      },
      {
        text: "that's all offchain anyways in the in",
        start: 2867.96,
        duration: 3.399,
      },
      {
        text: "the eyes of the receiving chain and the",
        start: 2869.72,
        duration: 3.56,
      },
      {
        text: "highs of the destination chain uh so",
        start: 2871.359,
        duration: 3.441,
      },
      {
        text: "we're agnostic as to what it looks like",
        start: 2873.28,
        duration: 3.079,
      },
      {
        text: "it will evolve over time and that will",
        start: 2874.8,
        duration: 2.799,
      },
      {
        text: "be sort of a Marketplace that",
        start: 2876.359,
        duration: 3.121,
      },
      {
        text: "applications will demand what they what",
        start: 2877.599,
        duration: 4.121,
      },
      {
        text: "they need and some will need things that",
        start: 2879.48,
        duration: 4.28,
      },
      {
        text: "are extremely secure and have extremely",
        start: 2881.72,
        duration: 4.639,
      },
      {
        text: "high degrees of crypto Economic Security",
        start: 2883.76,
        duration: 4.64,
      },
      {
        text: "and some will need almost nothing",
        start: 2886.359,
        duration: 4.521,
      },
      {
        text: "because there's very little at stake and",
        start: 2888.4,
        duration: 3.84,
      },
      {
        text: "they'll price those things differently",
        start: 2890.88,
        duration: 3.8,
      },
      {
        text: "this is all just some Paro Frontier of",
        start: 2892.24,
        duration: 5.56,
      },
      {
        text: "cost for security right and so",
        start: 2894.68,
        duration: 5.96,
      },
      {
        text: "um you know as as we're designing this",
        start: 2897.8,
        duration: 4.559,
      },
      {
        text: "the the design was all there but people",
        start: 2900.64,
        duration: 4.08,
      },
      {
        text: "were hyperfocused on the topology like",
        start: 2902.359,
        duration: 4.72,
      },
      {
        text: "the current topology not what the system",
        start: 2904.72,
        duration: 4.68,
      },
      {
        text: "enables and I think the space right now",
        start: 2907.079,
        duration: 4.28,
      },
      {
        text: "get caught up way too frequently looking",
        start: 2909.4,
        duration: 5.56,
      },
      {
        text: "at like current topology looking like",
        start: 2911.359,
        duration: 5.841,
      },
      {
        text: "what does this technology actually",
        start: 2914.96,
        duration: 4.159,
      },
      { text: "enable I mean I know", start: 2917.2, duration: 6.119 },
      {
        text: "um you know I I I saw a post today about",
        start: 2919.119,
        duration: 6.2,
      },
      {
        text: "the the total amount staked in dimension",
        start: 2923.319,
        duration: 3.8,
      },
      {
        text: "I saw that you know the the post early",
        start: 2925.319,
        duration: 3.76,
      },
      {
        text: "on in Celestia's life of Celestia has",
        start: 2927.119,
        duration: 3.96,
      },
      {
        text: "only generated like X dollars in fees",
        start: 2929.079,
        duration: 4.24,
      },
      {
        text: "salana got this all of the time early on",
        start: 2931.079,
        duration: 4.841,
      },
      {
        text: "and has sort of hit uh escape velocity",
        start: 2933.319,
        duration: 4.121,
      },
      {
        text: "way but it's like people love to look at",
        start: 2935.92,
        duration: 4.04,
      },
      {
        text: "what the system is now not what the",
        start: 2937.44,
        duration: 4.879,
      },
      {
        text: "actual system can do and can become and",
        start: 2939.96,
        duration: 4.32,
      },
      {
        text: "I I think it's very interesting when",
        start: 2942.319,
        duration: 3.601,
      },
      {
        text: "you're evaluating technology when you're",
        start: 2944.28,
        duration: 3.24,
      },
      {
        text: "evaluating like what does the future",
        start: 2945.92,
        duration: 3.96,
      },
      {
        text: "look like is being able to to bifurcate",
        start: 2947.52,
        duration: 4.52,
      },
      {
        text: "those things and understand like what",
        start: 2949.88,
        duration: 4.8,
      },
      {
        text: "has real value and what what can an",
        start: 2952.04,
        duration: 5.039,
      },
      {
        text: "endstate system look like and is this",
        start: 2954.68,
        duration: 5.04,
      },
      {
        text: "viable or nonviable and so I think uh",
        start: 2957.079,
        duration: 5.28,
      },
      {
        text: "most of what we spend our time today you",
        start: 2959.72,
        duration: 4.599,
      },
      {
        text: "know we spoke earlier and like really",
        start: 2962.359,
        duration: 3.401,
      },
      {
        text: "focused on the Primitive side on just",
        start: 2964.319,
        duration: 3.361,
      },
      {
        text: "these lowlevel Prim is that we offer to",
        start: 2965.76,
        duration: 3.64,
      },
      {
        text: "developers that developers can use to",
        start: 2967.68,
        duration: 4.6,
      },
      {
        text: "build anything um but as we think",
        start: 2969.4,
        duration: 4.36,
      },
      {
        text: "through that there's there's so much",
        start: 2972.28,
        duration: 3.319,
      },
      { text: "noise of like", start: 2973.76, duration: 4.52 },
      {
        text: "okay um here's a collection that you",
        start: 2975.599,
        duration: 4.52,
      },
      {
        text: "have you have a layers and super chains",
        start: 2978.28,
        duration: 3.519,
      },
      {
        text: "you have all of these intranets that are",
        start: 2980.119,
        duration: 4.2,
      },
      {
        text: "being built and it's a constant question",
        start: 2981.799,
        duration: 5.76,
      },
      {
        text: "of uh what what does that do to the",
        start: 2984.319,
        duration: 4.921,
      },
      {
        text: "existing system what does that look like",
        start: 2987.559,
        duration: 3.361,
      },
      {
        text: "for communication internally what does",
        start: 2989.24,
        duration: 3.28,
      },
      {
        text: "it look like for communication between",
        start: 2990.92,
        duration: 4.24,
      },
      {
        text: "internets is this a viable thing is it",
        start: 2992.52,
        duration: 4.839,
      },
      {
        text: "only going to exist in a micro or is",
        start: 2995.16,
        duration: 3.72,
      },
      {
        text: "this potentially going to exist in like",
        start: 2997.359,
        duration: 4.76,
      },
      {
        text: "a much broader measure Network and so",
        start: 2998.88,
        duration: 6.439,
      },
      {
        text: "it's a constant evaluation of where does",
        start: 3002.119,
        duration: 4.72,
      },
      {
        text: "this primitive lie in the broader",
        start: 3005.319,
        duration: 3.24,
      },
      {
        text: "systems and of these things that are",
        start: 3006.839,
        duration: 3.28,
      },
      {
        text: "going out don't look at what they are",
        start: 3008.559,
        duration: 3.441,
      },
      {
        text: "now because most of them are are nent",
        start: 3010.119,
        duration: 5.121,
      },
      {
        text: "and novel uh what what is actually",
        start: 3012.0,
        duration: 4.72,
      },
      {
        text: "viable and what can that look like on",
        start: 3015.24,
        duration: 4.0,
      },
      {
        text: "like a much longer term time Horizon",
        start: 3016.72,
        duration: 3.44,
      },
      { text: "super", start: 3019.24, duration: 5.2 },
      {
        text: "interesting um this issue of like",
        start: 3020.16,
        duration: 8.36,
      },
      {
        text: "reconciling the long term with what is",
        start: 3024.44,
        duration: 5.879,
      },
      {
        text: "viable one of the things we have to do",
        start: 3028.52,
        duration: 5.12,
      },
      {
        text: "is to reconcile what the longer term",
        start: 3030.319,
        duration: 5.401,
      },
      {
        text: "vision is to like what is actually",
        start: 3033.64,
        duration: 4.88,
      },
      {
        text: "existing today and clearly all of us",
        start: 3035.72,
        duration: 5.16,
      },
      {
        text: "fall short like this includes ethereum",
        start: 3038.52,
        duration: 5.92,
      },
      {
        text: "this includes even Bitcoin and",
        start: 3040.88,
        duration: 6.479,
      },
      { text: "so the one of the", start: 3044.44, duration: 5.32 },
      {
        text: "heuristics that I've kind of learned and",
        start: 3047.359,
        duration: 4.401,
      },
      {
        text: "adapted to which is not obvious to me to",
        start: 3049.76,
        duration: 4.68,
      },
      { text: "begin with", start: 3051.76, duration: 6.24 },
      {
        text: "is build something today that is useful",
        start: 3054.44,
        duration: 6.2,
      },
      {
        text: "which has a road map to become more and",
        start: 3058.0,
        duration: 5.64,
      },
      {
        text: "more trustless uh or trust minimized or",
        start: 3060.64,
        duration: 4.679,
      },
      {
        text: "self- enforcing which are what you want",
        start: 3063.64,
        duration: 3.56,
      },
      { text: "to use there", start: 3065.319, duration: 4.721 },
      {
        text: "and have a and as you're building what",
        start: 3067.2,
        duration: 5.72,
      },
      {
        text: "is useful today think about how this",
        start: 3070.04,
        duration: 5.559,
      },
      {
        text: "will evolve into the thing that actually",
        start: 3072.92,
        duration: 4.28,
      },
      {
        text: "has all those properties kind of like",
        start: 3075.599,
        duration: 6.041,
      },
      {
        text: "the advice that Kobe probably gave you",
        start: 3077.2,
        duration: 9.48,
      },
      {
        text: "and that is I think like a really uh use",
        start: 3081.64,
        duration: 7.12,
      },
      {
        text: "full framework to think about when we",
        start: 3086.68,
        duration: 5.119,
      },
      {
        text: "are comparing either a layer two or even",
        start: 3088.76,
        duration: 5.24,
      },
      {
        text: "IG layer actually like for example the",
        start: 3091.799,
        duration: 6.961,
      },
      {
        text: "igen layer contracts have um a security",
        start: 3094.0,
        duration: 7.64,
      },
      {
        text: "Council with 13 members I'm pretty",
        start: 3098.76,
        duration: 6.44,
      },
      {
        text: "embarrassed by this but I know it's",
        start: 3101.64,
        duration: 6.719,
      },
      {
        text: "worse to not have them because if I make",
        start: 3105.2,
        duration: 4.72,
      },
      {
        text: "this immutable and something happens to",
        start: 3108.359,
        duration: 3.401,
      },
      {
        text: "these contracts and we have I don't know",
        start: 3109.92,
        duration: 5.6,
      },
      {
        text: "20 billion at stake that's a far far",
        start: 3111.76,
        duration: 6.2,
      },
      {
        text: "worse outcome than not having so",
        start: 3115.52,
        duration: 4.279,
      },
      {
        text: "introducing points of centralization",
        start: 3117.96,
        duration: 3.839,
      },
      {
        text: "which actually induce more trust at the",
        start: 3119.799,
        duration: 3.52,
      },
      {
        text: "end of the day we are building these",
        start: 3121.799,
        duration: 5.961,
      },
      {
        text: "trust machines and so is removing it",
        start: 3123.319,
        duration: 6.121,
      },
      {
        text: "today going to be more make it more",
        start: 3127.76,
        duration: 4.0,
      },
      {
        text: "trustworthy or adding it today going to",
        start: 3129.44,
        duration: 4.08,
      },
      {
        text: "make it more trustworthy I think that's",
        start: 3131.76,
        duration: 3.079,
      },
      {
        text: "one of the ways we think about it",
        start: 3133.52,
        duration: 3.64,
      },
      {
        text: "because both of them have like pros and",
        start: 3134.839,
        duration: 5.321,
      },
      {
        text: "cons on the same axis which is trust",
        start: 3137.16,
        duration: 4.88,
      },
      {
        text: "right because code is not perfect and",
        start: 3140.16,
        duration: 3.56,
      },
      {
        text: "it's very hard to get code perfect in",
        start: 3142.04,
        duration: 2.759,
      },
      { text: "fact this is one of our meta", start: 3143.72, duration: 3.639 },
      {
        text: "philosophies in designing the I",
        start: 3144.799,
        duration: 5.081,
      },
      {
        text: "layer and igen token the future road map",
        start: 3147.359,
        duration: 5.601,
      },
      { text: "of the I layer ecosystem", start: 3149.88, duration: 7.88 },
      {
        text: "is um this issue that you raised here on",
        start: 3152.96,
        duration: 9.2,
      },
      {
        text: "immutability which is right now the only",
        start: 3157.76,
        duration: 8.079,
      },
      {
        text: "way a app inherits Trust From A",
        start: 3162.16,
        duration: 5.48,
      },
      { text: "blockchain is if it's", start: 3165.839, duration: 4.881 },
      {
        text: "immutable if it is a governed component",
        start: 3167.64,
        duration: 5.36,
      },
      {
        text: "then you don't inherit trust from the",
        start: 3170.72,
        duration: 5.879,
      },
      {
        text: "blockchain and okay and you look at",
        start: 3173.0,
        duration: 5.119,
      },
      { text: "pretty much most", start: 3176.599, duration: 3.921 },
      {
        text: "applications they're all governed like",
        start: 3178.119,
        duration: 4.48,
      },
      {
        text: "the Solana guys like to take apart like",
        start: 3180.52,
        duration: 4.319,
      },
      {
        text: "the ethereum l2s and say that we have",
        start: 3182.599,
        duration: 5.081,
      },
      {
        text: "multi every Solana H app has a two of",
        start: 3184.839,
        duration: 5.24,
      },
      { text: "two multi", start: 3187.68, duration: 5.6 },
      {
        text: "so this is a really significant issue I",
        start: 3190.079,
        duration: 5.24,
      },
      {
        text: "not seeing this to make light of this",
        start: 3193.28,
        duration: 4.64,
      },
      {
        text: "fact I actually like I'm very concerned",
        start: 3195.319,
        duration: 4.8,
      },
      {
        text: "that this is what we're doing because at",
        start: 3197.92,
        duration: 3.84,
      },
      {
        text: "the end of the day I asked myself like",
        start: 3200.119,
        duration: 3.44,
      },
      {
        text: "why not have a 13 node Network to run",
        start: 3201.76,
        duration: 4.039,
      },
      {
        text: "like ion ler than have like this million",
        start: 3203.559,
        duration: 4.721,
      },
      {
        text: "node to run it what are we actually",
        start: 3205.799,
        duration: 4.921,
      },
      {
        text: "getting okay on on the other side I",
        start: 3208.28,
        duration: 4.88,
      },
      {
        text: "think it is not sufficient to say that",
        start: 3210.72,
        duration: 5.04,
      },
      {
        text: "you have to be immutable in order to",
        start: 3213.16,
        duration: 4.8,
      },
      {
        text: "inherit the trust model because as we",
        start: 3215.76,
        duration: 5.839,
      },
      {
        text: "expand from narrow simple applications",
        start: 3217.96,
        duration: 6.159,
      },
      {
        text: "like Unis swap you know swap these two",
        start: 3221.599,
        duration: 5.24,
      },
      {
        text: "things two I want to build an Uber on",
        start: 3224.119,
        duration: 4.96,
      },
      {
        text: "chain right how are you going to wrate",
        start: 3226.839,
        duration: 5.841,
      },
      {
        text: "an immutable Uber contract on chain it's",
        start: 3229.079,
        duration: 6.321,
      },
      {
        text: "insane so we need to come up with",
        start: 3232.68,
        duration: 4.679,
      },
      {
        text: "fundamentally like better architectures",
        start: 3235.4,
        duration: 6.08,
      },
      {
        text: "of these chains where for example as I",
        start: 3237.359,
        duration: 7.561,
      },
      {
        text: "push a new upgrade to my I I'm as an app",
        start: 3241.48,
        duration: 5.079,
      },
      {
        text: "builder I make certain commitments",
        start: 3244.92,
        duration: 3.679,
      },
      {
        text: "before like I won't take more than 5%",
        start: 3246.559,
        duration: 4.961,
      },
      {
        text: "take rate and then if I push an upgrade",
        start: 3248.599,
        duration: 5.641,
      },
      {
        text: "it has a lag and within that lag if the",
        start: 3251.52,
        duration: 5.52,
      },
      {
        text: "upgrade satisfies that my previous",
        start: 3254.24,
        duration: 5.28,
      },
      {
        text: "commitments it goes through but if it",
        start: 3257.04,
        duration: 4.799,
      },
      {
        text: "doesn't it should not go through like",
        start: 3259.52,
        duration: 6.0,
      },
      {
        text: "these are new mechanics that we need to",
        start: 3261.839,
        duration: 6.601,
      },
      {
        text: "actually endow application Builders with",
        start: 3265.52,
        duration: 4.48,
      },
      {
        text: "a higher level of trust from the",
        start: 3268.44,
        duration: 3.879,
      },
      {
        text: "underlying layer Yep this is then this",
        start: 3270.0,
        duration: 5.0,
      },
      {
        text: "is exactly this is exactly why we built",
        start: 3272.319,
        duration: 4.52,
      },
      {
        text: "our validation Library the way that we",
        start: 3275.0,
        duration: 4.16,
      },
      {
        text: "did in that you could think of it as",
        start: 3276.839,
        duration: 5.0,
      },
      {
        text: "anytime we publish something new there's",
        start: 3279.16,
        duration: 4.679,
      },
      {
        text: "a time lock and people move over at that",
        start: 3281.839,
        duration: 3.321,
      },
      {
        text: "point in time but the way that we've",
        start: 3283.839,
        duration: 4.841,
      },
      {
        text: "built it is uh people can Auto upgrade",
        start: 3285.16,
        duration: 6.12,
      },
      {
        text: "always or they can be fixed on the other",
        start: 3288.68,
        duration: 4.56,
      },
      {
        text: "and they can only opt into new upgrading",
        start: 3291.28,
        duration: 3.799,
      },
      {
        text: "if you think about this we do it",
        start: 3293.24,
        duration: 3.76,
      },
      {
        text: "specifically for the way that validation",
        start: 3295.079,
        duration: 4.0,
      },
      {
        text: "happens uh is is the only piece of the",
        start: 3297.0,
        duration: 4.28,
      },
      {
        text: "system that's that's not I mean each",
        start: 3299.079,
        duration: 4.081,
      },
      {
        text: "each of those libraries individually are",
        start: 3301.28,
        duration: 4.519,
      },
      {
        text: "mutable um but we can always add only so",
        start: 3303.16,
        duration: 4.439,
      },
      {
        text: "it's a pendon library but you can think",
        start: 3305.799,
        duration: 3.52,
      },
      {
        text: "about it as a broader application so you",
        start: 3307.599,
        duration: 3.76,
      },
      {
        text: "talk in Uber or anything else where uh",
        start: 3309.319,
        duration: 3.401,
      },
      {
        text: "you have all these components that are",
        start: 3311.359,
        duration: 2.801,
      },
      { text: "written in just like any real", start: 3312.72, duration: 3.2 },
      {
        text: "application a lot a lot of code a lot of",
        start: 3314.16,
        duration: 3.08,
      },
      {
        text: "contracts a lot of systems that are",
        start: 3315.92,
        duration: 3.159,
      },
      {
        text: "interacting with each other and you have",
        start: 3317.24,
        duration: 5.119,
      },
      {
        text: "the ability to always push a new version",
        start: 3319.079,
        duration: 6.081,
      },
      {
        text: "and there's two questions in that design",
        start: 3322.359,
        duration: 4.641,
      },
      {
        text: "uh one what does upgrade process so",
        start: 3325.16,
        duration: 3.24,
      },
      {
        text: "maybe it's a like you said maybe it's a",
        start: 3327.0,
        duration: 2.68,
      },
      { text: "time lock window it's like hey", start: 3328.4, duration: 2.48 },
      {
        text: "everyone's going to be able to observe",
        start: 3329.68,
        duration: 2.919,
      },
      {
        text: "this for X period of time and at the end",
        start: 3330.88,
        duration: 3.479,
      },
      {
        text: "of that as long as it doesn't break any",
        start: 3332.599,
        duration: 3.96,
      },
      {
        text: "of our our constraints or our guarantees",
        start: 3334.359,
        duration: 4.521,
      },
      {
        text: "our invariant then that is sort of autom",
        start: 3336.559,
        duration: 6.441,
      },
      {
        text: "moved um and the other is that the same",
        start: 3338.88,
        duration: 7.28,
      },
      {
        text: "thing but anybody can reconstruct the",
        start: 3343.0,
        duration: 5.52,
      },
      {
        text: "application on an older version and",
        start: 3346.16,
        duration: 4.399,
      },
      {
        text: "that's that's the question that becomes",
        start: 3348.52,
        duration: 4.2,
      },
      {
        text: "if you can guarantee you won't break any",
        start: 3350.559,
        duration: 4.201,
      },
      {
        text: "invariant then you may like in layer",
        start: 3352.72,
        duration: 5.2,
      },
      {
        text: "zero we did it because we said we can",
        start: 3354.76,
        duration: 5.039,
      },
      {
        text: "publish a new validation Library that's",
        start: 3357.92,
        duration: 5.24,
      },
      {
        text: "malicious that is has a you know fees to",
        start: 3359.799,
        duration: 5.28,
      },
      {
        text: "bajillion to we publish whatever we want",
        start: 3363.16,
        duration: 4.159,
      },
      {
        text: "so if we can remove all of the others",
        start: 3365.079,
        duration: 3.641,
      },
      {
        text: "and then this is the only one then",
        start: 3367.319,
        duration: 3.441,
      },
      {
        text: "everybody must opt into it or go away so",
        start: 3368.72,
        duration: 4.52,
      },
      {
        text: "if we had a way to say we can never have",
        start: 3370.76,
        duration: 4.079,
      },
      {
        text: "this much more of a fear we can never do",
        start: 3373.24,
        duration: 3.2,
      },
      {
        text: "this or you know if you can provide",
        start: 3374.839,
        duration: 4.161,
      },
      {
        text: "those invariant and guarantee them then",
        start: 3376.44,
        duration: 4.28,
      },
      {
        text: "you may not need it for us you can think",
        start: 3379.0,
        duration: 3.359,
      },
      {
        text: "of it as a long chain and if there's a",
        start: 3380.72,
        duration: 4.599,
      },
      {
        text: "bunch of them anybody can select any uh",
        start: 3382.359,
        duration: 4.48,
      },
      { text: "subset of those", start: 3385.319, duration: 3.401 },
      {
        text: "and then it's up to them their front end",
        start: 3386.839,
        duration: 3.2,
      },
      {
        text: "their interface to like okay I'm going",
        start: 3388.72,
        duration: 3.0,
      },
      {
        text: "to make these components work and maybe",
        start: 3390.039,
        duration: 3.601,
      },
      {
        text: "the the primary application only uses",
        start: 3391.72,
        duration: 3.68,
      },
      {
        text: "the the sort of head of this entire",
        start: 3393.64,
        duration: 4.76,
      },
      {
        text: "system um but if you can't do that then",
        start: 3395.4,
        duration: 4.679,
      },
      {
        text: "I if you can't provide that guarantee",
        start: 3398.4,
        duration: 3.399,
      },
      {
        text: "then I think it's very important to keep",
        start: 3400.079,
        duration: 3.321,
      },
      {
        text: "the whole chain and allow people to kind",
        start: 3401.799,
        duration: 3.441,
      },
      {
        text: "of construct whatever they want out of",
        start: 3403.4,
        duration: 4.84,
      },
      {
        text: "out of those various sets uh but I think",
        start: 3405.24,
        duration: 6.879,
      },
      {
        text: "as a design Paradigm yeah this pattern",
        start: 3408.24,
        duration: 5.799,
      },
      {
        text: "is the way to move from sure",
        start: 3412.119,
        duration: 3.641,
      },
      {
        text: "immutability every app can never",
        start: 3414.039,
        duration: 3.961,
      },
      {
        text: "introduce anything new and must exist",
        start: 3415.76,
        duration: 4.4,
      },
      {
        text: "this way to ever to like Hey we're going",
        start: 3418.0,
        duration: 3.68,
      },
      {
        text: "to give you a guarantee on each",
        start: 3420.16,
        duration: 4.36,
      },
      {
        text: "individual component um and we can add",
        start: 3421.68,
        duration: 4.32,
      },
      {
        text: "as much new and upgrade as much as you",
        start: 3424.52,
        duration: 3.0,
      },
      {
        text: "want and do all of that but you don't",
        start: 3426.0,
        duration: 3.559,
      },
      {
        text: "lose the guarantees that you have you",
        start: 3427.52,
        duration: 6.319,
      },
      {
        text: "promised and this is um the the the",
        start: 3429.559,
        duration: 8.721,
      },
      {
        text: "pathway from like you know one uh if",
        start: 3433.839,
        duration: 7.081,
      },
      {
        text: "there were multiple options then one",
        start: 3438.28,
        duration: 5.039,
      },
      {
        text: "issue that happens is the application is",
        start: 3440.92,
        duration: 5.32,
      },
      {
        text: "now making the choice and then you ask",
        start: 3443.319,
        duration: 4.961,
      },
      {
        text: "oh is the application making the choice",
        start: 3446.24,
        duration: 4.2,
      },
      {
        text: "or is the user making the choice because",
        start: 3448.28,
        duration: 3.64,
      },
      {
        text: "that's like the ultimate source of",
        start: 3450.44,
        duration: 4.04,
      },
      {
        text: "agency what happens you know we've",
        start: 3451.92,
        duration: 3.96,
      },
      {
        text: "thought a lot about this kind of",
        start: 3454.48,
        duration: 3.96,
      },
      {
        text: "governance binding problem and the",
        start: 3455.88,
        duration: 4.88,
      },
      {
        text: "problem is that sometimes what happens",
        start: 3458.44,
        duration: 6.04,
      },
      {
        text: "is a each application you can think of",
        start: 3460.76,
        duration: 6.96,
      },
      {
        text: "as operating on a certain Horizon time",
        start: 3464.48,
        duration: 6.2,
      },
      {
        text: "Horizon and imagine you and I enter into",
        start: 3467.72,
        duration: 6.0,
      },
      {
        text: "like a prediction Market bet on the US",
        start: 3470.68,
        duration: 5.879,
      },
      {
        text: "elections so now we are immutably bound",
        start: 3473.72,
        duration: 5.639,
      },
      {
        text: "into this contract over a 3-month period",
        start: 3476.559,
        duration: 5.56,
      },
      {
        text: "now if the upgrade lag is 2 weeks that's",
        start: 3479.359,
        duration: 4.801,
      },
      {
        text: "not enough time for me to like",
        start: 3482.119,
        duration: 4.121,
      },
      {
        text: "disentangle my position and get out of",
        start: 3484.16,
        duration: 5.399,
      },
      {
        text: "it and when you know one of our like",
        start: 3486.24,
        duration: 6.879,
      },
      {
        text: "Guiding Light is I would say Perpetual",
        start: 3489.559,
        duration: 5.441,
      },
      {
        text: "commitments commitments that just hold",
        start: 3493.119,
        duration: 3.68,
      },
      {
        text: "perpetually and why do we need this",
        start: 3495.0,
        duration: 4.119,
      },
      {
        text: "because if you want to build Humanities",
        start: 3496.799,
        duration: 4.961,
      },
      {
        text: "coordination engine uh we should be able",
        start: 3499.119,
        duration: 4.361,
      },
      {
        text: "to do like all kinds of interesting",
        start: 3501.76,
        duration: 3.799,
      },
      {
        text: "things over long time scales I'll just",
        start: 3503.48,
        duration: 3.559,
      },
      {
        text: "give you one example example I'm really",
        start: 3505.559,
        duration: 5.401,
      },
      {
        text: "excited about in in a 10 year to 30e",
        start: 3507.039,
        duration: 7.52,
      },
      {
        text: "period um funding education like you",
        start: 3510.96,
        duration: 4.96,
      },
      {
        text: "know this is one of the biggest problems",
        start: 3514.559,
        duration: 3.121,
      },
      {
        text: "in America today like a trillion dollar",
        start: 3515.92,
        duration: 5.28,
      },
      {
        text: "college debt crisis and part of this is",
        start: 3517.68,
        duration: 6.76,
      },
      {
        text: "because education is funded on a debt",
        start: 3521.2,
        duration: 5.839,
      },
      {
        text: "model and if you think about it neither",
        start: 3524.44,
        duration: 5.119,
      },
      {
        text: "layer zero nor igen layer will be here",
        start: 3527.039,
        duration: 5.28,
      },
      {
        text: "if we had to get funded on a debt model",
        start: 3529.559,
        duration: 4.56,
      },
      {
        text: "we got funded because we were on an",
        start: 3532.319,
        duration: 3.841,
      },
      { text: "equity model", start: 3534.119, duration: 3.601 },
      {
        text: "investors say I'm taking a percentage of",
        start: 3536.16,
        duration: 3.12,
      },
      {
        text: "this company if it does well they're",
        start: 3537.72,
        duration: 4.0,
      },
      {
        text: "going to do well hopefully ion and layer",
        start: 3539.28,
        duration: 4.92,
      },
      {
        text: "zero do well but if not there are other",
        start: 3541.72,
        duration: 4.44,
      },
      { text: "ones I'm going to make up", start: 3544.2, duration: 4.56 },
      {
        text: "from and the set of things that are",
        start: 3546.16,
        duration: 5.08,
      },
      {
        text: "fundable on a purely debt basis was the",
        start: 3548.76,
        duration: 4.079,
      },
      {
        text: "set set of things that can be funded on",
        start: 3551.24,
        duration: 4.44,
      },
      {
        text: "an equity basis much much larger why",
        start: 3552.839,
        duration: 5.48,
      },
      {
        text: "shouldn't we fund education on an equity",
        start: 3555.68,
        duration: 5.0,
      },
      {
        text: "basis that I actually invest in you and",
        start: 3558.319,
        duration: 4.641,
      },
      {
        text: "you know earn like future income from",
        start: 3560.68,
        duration: 4.6,
      },
      {
        text: "your entire lifetime so now we are",
        start: 3562.96,
        duration: 5.0,
      },
      {
        text: "talking about entering into a contract",
        start: 3565.28,
        duration: 5.44,
      },
      {
        text: "which holds for like 100 years or if the",
        start: 3567.96,
        duration: 5.56,
      },
      {
        text: "longevity folks are right you know",
        start: 3570.72,
        duration: 4.96,
      },
      {
        text: "forever so we are talking about",
        start: 3573.52,
        duration: 5.4,
      },
      {
        text: "Perpetual commitments and for us to",
        start: 3575.68,
        duration: 6.52,
      },
      {
        text: "think of like crypto as the coordination",
        start: 3578.92,
        duration: 4.919,
      },
      {
        text: "substrate we need to be able to bind",
        start: 3582.2,
        duration: 3.96,
      },
      {
        text: "ourselves into Perpetual agreements that",
        start: 3583.839,
        duration: 4.361,
      },
      {
        text: "that hold on these really long time",
        start: 3586.16,
        duration: 3.919,
      },
      {
        text: "Horizons and the first application that",
        start: 3588.2,
        duration: 6.159,
      },
      {
        text: "I was actually like interested in was um",
        start: 3590.079,
        duration: 7.04,
      },
      {
        text: "using um crypto crypto and blockchains",
        start: 3594.359,
        duration: 5.121,
      },
      {
        text: "as land records I know it's talking to",
        start: 3597.119,
        duration: 3.881,
      },
      {
        text: "the Indian government all these types of",
        start: 3599.48,
        duration: 3.2,
      },
      {
        text: "people because see a lot of corruption",
        start: 3601.0,
        duration: 3.319,
      },
      {
        text: "in India on these land records you think",
        start: 3602.68,
        duration: 3.119,
      },
      {
        text: "this is your land and then you go you'll",
        start: 3604.319,
        duration: 2.72,
      },
      {
        text: "go and see somebody else has the",
        start: 3605.799,
        duration: 4.681,
      },
      {
        text: "registration certificate for it and so",
        start: 3607.039,
        duration: 4.721,
      },
      {
        text: "these kinds of things but then I",
        start: 3610.48,
        duration: 2.72,
      },
      {
        text: "realized that actually if you want to",
        start: 3611.76,
        duration: 4.319,
      },
      {
        text: "put a land record on chain the temporal",
        start: 3613.2,
        duration: 4.8,
      },
      {
        text: "rigidity of the system should be 100",
        start: 3616.079,
        duration: 4.0,
      },
      {
        text: "years otherwise I'm not moving my",
        start: 3618.0,
        duration: 5.28,
      },
      {
        text: "records on this new chain so how do we",
        start: 3620.079,
        duration: 4.881,
      },
      {
        text: "build these systems I'm not proposing a",
        start: 3623.28,
        duration: 3.839,
      },
      {
        text: "solution here but I'm just pointing out",
        start: 3624.96,
        duration: 4.32,
      },
      {
        text: "as a space if you want to actually solve",
        start: 3627.119,
        duration: 3.801,
      },
      {
        text: "these problems of Perpetual credible",
        start: 3629.28,
        duration: 3.24,
      },
      {
        text: "commitments we need to actually solve",
        start: 3630.92,
        duration: 3.84,
      },
      {
        text: "that the underlying rails not only like",
        start: 3632.52,
        duration: 4.64,
      },
      {
        text: "the base layer every other layer built",
        start: 3634.76,
        duration: 5.799,
      },
      {
        text: "on top is able to make commitments and",
        start: 3637.16,
        duration: 5.919,
      },
      {
        text: "invariance that they cannot violate and",
        start: 3640.559,
        duration: 4.28,
      },
      {
        text: "so that that's what we're really hoping",
        start: 3643.079,
        duration: 3.921,
      },
      { text: "to", start: 3644.839, duration: 2.161 },
      {
        text: "build uh this is super exciting and like",
        start: 3649.0,
        duration: 7.0,
      },
      {
        text: "we we uncovered so many points of like",
        start: 3652.2,
        duration: 6.839,
      },
      {
        text: "alignment on a philosophical basis even",
        start: 3656.0,
        duration: 4.68,
      },
      {
        text: "if the words that we have been using to",
        start: 3659.039,
        duration: 3.201,
      },
      {
        text: "describe it are very different thank you",
        start: 3660.68,
        duration: 6.08,
      },
      {
        text: "so much man really excited pleasure",
        start: 3662.24,
        duration: 4.52,
      },
      { text: "[Music]", start: 3670.14, duration: 2.4 },
    ],
    youtubeLink: "https://www.youtube.com/watch?v=c3PlmbM1QNc",
    downloadLink: "https://t.me/publiclz00/2",
  },
  // Add more documents...
];

(async () => {
  try {
    // Ensure the index exists
    const indexName = "transcripts";
    const indexExists = await client.indices.exists({ index: indexName });

    if (!indexExists) {
      console.log(`Index "${indexName}" does not exist. Creating it...`);
      const createResponse = await client.indices.create({
        index: indexName,
        body: {
          mappings: {
            properties: {
              title: { type: "text" },
              transcript: { type: "text" },
              keywords: { type: "keyword" },
            },
          },
        },
      });
      console.log(`Index "${indexName}" created:`, createResponse);
    } else {
      console.log(`Index "${indexName}" already exists.`);
    }

    // Add sample data
    for (const doc of sampleData) {
      const response = await client.index({
        index: indexName,
        body: doc,
      });
      console.log(`Document added with ID: ${response._id}`);
    }

    // Refresh the index to make the data searchable
    await client.indices.refresh({ index: indexName });
    console.log("Sample data added and index refreshed.");
  } catch (error) {
    console.error(
      "Error seeding Elasticsearch:",
      error.meta.body.error || error.message
    );
  }
})();
