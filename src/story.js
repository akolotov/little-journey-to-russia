/* Change presentation wording and recording paths here. Scene drawing has no phrase text. */
window.STORY = {
  phrases: {
    russia: { text: "My family is from Russia.", audio: "assets/audio/01-family-from-russia.mp3" },
    flags: { text: "Russia and Costa Rica have flags with the same colors.", audio: "assets/audio/02-flags-same-colors.mp3" },
    colors: { text: "White, blue and red.", audio: "assets/audio/03-white-blue-red.mp3" },
    winter: { text: "Russia is snowy in winter.", audio: "assets/audio/04-snowy-winter.mp3" },
    blini: { text: "A popular Russian food is blini.", audio: "assets/audio/05-blini.mp3" },
    bear: { text: "There are many bears in Russia.", audio: "assets/audio/06-bear.mp3" },
    finale: { text: "Thank you!", audio: "assets/audio/07-thank-you.mp3" }
  },
  stops: ["russia", "flags", "winter", "blini", "bear", "recap", "finale"],
  recap: ["russia", "flags", "winter", "blini", "bear"]
};
