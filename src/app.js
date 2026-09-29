(function () {
  "use strict";

  var story = window.STORY;
  var art = window.SceneArt;
  var ids = ["stage", "scene-art", "scene-kicker", "scene-title", "scene-subtitle", "scene-counter", "mode-picker", "progress", "home-button", "restart-button", "turn-label", "phrase", "speech-icon", "speaker-button", "scene-actions", "mode-description"];
  var ui = {};
  ids.forEach(function (id) { ui[id] = document.getElementById(id); });

  var savedMode = "repeat";
  var savedScene = "start";
  try {
    var stored = localStorage.getItem("little-journey-russia-mode");
    if (["listen", "repeat", "tell"].indexOf(stored) !== -1) savedMode = stored;
    var storedScene = localStorage.getItem("little-journey-russia-scene");
    if (story.stops.indexOf(storedScene) !== -1 && storedScene !== "finale") savedScene = storedScene;
  } catch (error) { /* Storage may be disabled in the appliance browser. */ }

  var state = {
    mode: savedMode,
    scene: savedScene,
    phase: "ready",
    colors: [],
    recapIndex: 0,
    recapFlagHintStep: 0,
    hint: false,
    audioStatus: "idle"
  };
  var activeAudio = null;
  var audioToken = 0;
  var flightToken = 0;

  var sceneInfo = {
    start: { kicker: "A tiny interactive cartoon", title: "Little Journey<br> to Russia", subtitle: "Come along! We have places to see." },
    russia: { kicker: "Our first stop", title: "Off we go!", subtitle: "Follow the plane across the globe." },
    flags: { kicker: "Look closely", title: "Two flags,<br> same colors", subtitle: "Tap each matching color." },
    winter: { kicker: "Brrr!", title: "Winter arrives", subtitle: "Can you make it snow?" },
    blini: { kicker: "Inside the warm house", title: "Time for blini!", subtitle: "Give the pan a little tap." },
    bear: { kicker: "Into the forest", title: "Who is hiding?", subtitle: "Tap the bush to find out." },
    recap: { kicker: "Your turn", title: "Tell the whole story", subtitle: "Look at each picture and remember." },
    finale: { kicker: "The end", title: "Great job!", subtitle: "Our little journey is complete." }
  };
  var modeHelp = {
    listen: "Listen · hear and see the story",
    repeat: "Repeat · listen, then say it",
    tell: "Tell · use the pictures to remember"
  };

  function stopAudio() {
    audioToken += 1;
    if (activeAudio) {
      activeAudio.onended = null;
      activeAudio.onerror = null;
      activeAudio.pause();
      activeAudio.removeAttribute("src");
      activeAudio = null;
    }
    state.audioStatus = "idle";
    ui["speaker-button"].classList.remove("playing");
  }

  function playPhrase(key) {
    var item = story.phrases[key];
    if (!item) return;
    stopAudio();
    var token = audioToken;
    var audio = new Audio(item.audio);
    activeAudio = audio;
    audio.preload = "auto";
    state.audioStatus = "playing";
    ui["speaker-button"].classList.add("playing");
    updateSpeech();
    function fail() {
      if (token !== audioToken) return;
      state.audioStatus = "missing";
      ui["speaker-button"].classList.remove("playing");
      updateSpeech();
    }
    audio.onerror = fail;
    audio.onended = function () {
      if (token !== audioToken) return;
      state.audioStatus = "idle";
      ui["speaker-button"].classList.remove("playing");
      updateSpeech();
    };
    try {
      var attempt = audio.play();
      if (attempt && typeof attempt.catch === "function") attempt.catch(fail);
    } catch (error) { fail(); }
  }

  function phraseKey() {
    if (state.scene === "recap") {
      var cue = story.recap[state.recapIndex];
      return cue === "flags" && state.recapFlagHintStep === 1 ? "colors" : cue;
    }
    if (state.scene === "flags" && state.phase === "complete") return "colors";
    return state.scene;
  }

  function updateSpeech() {
    var label, message, hidden = false;
    if (state.scene === "start") {
      label = "Ready for an adventure?";
      message = "Choose a way to play, then tap Start.";
    } else if (state.scene === "recap") {
      label = state.audioStatus === "missing" ? "Picture hint · recording coming soon" : "Look, remember, and tell";
      message = state.hint ? story.phrases[phraseKey()].text : "What comes next? Tap the speaker for a hint.";
      hidden = !state.hint;
    } else if (state.mode === "tell" && !state.hint) {
      label = "Your turn · tell it yourself";
      message = "What do you remember? Tap the speaker for a hint.";
      hidden = true;
    } else {
      message = story.phrases[phraseKey()].text;
      if (state.audioStatus === "missing") label = state.mode === "repeat" ? "Your turn · recording coming soon" : "Recording coming soon";
      else if (state.audioStatus === "playing") label = "Listen to the sentence";
      else if (state.mode === "repeat") label = "Your turn · say it aloud!";
      else if (state.mode === "tell") label = "A little hint";
      else label = "Look and listen";
    }
    ui["turn-label"].textContent = label;
    ui.phrase.textContent = message;
    ui.phrase.classList.toggle("is-hidden", hidden);
    ui["speech-icon"].textContent = state.scene === "recap" ? "?" : state.scene === "finale" ? "★" : "✦";
    ui["speaker-button"].hidden = state.scene === "start";
    ui["speaker-button"].title = state.scene === "recap" && story.recap[state.recapIndex] === "flags" ? "Hear a flag sentence; tap again for the colors" : "Hear the sentence";
  }

  function button(label, callback, next) {
    var element = document.createElement("button");
    element.type = "button";
    element.className = "primary-action" + (next ? " next" : "");
    element.textContent = label;
    element.addEventListener("click", callback);
    ui["scene-actions"].appendChild(element);
    return element;
  }

  function colorButton(color) {
    var element = document.createElement("button");
    element.type = "button";
    element.className = "color-action " + color + (state.colors.indexOf(color) >= 0 ? " selected" : "");
    element.setAttribute("aria-label", "Tap " + color);
    element.setAttribute("aria-pressed", state.colors.indexOf(color) >= 0 ? "true" : "false");
    element.textContent = state.colors.indexOf(color) >= 0 ? "✓" : "";
    element.addEventListener("click", function () { chooseColor(color); });
    ui["scene-actions"].appendChild(element);
  }

  function renderActions() {
    ui["scene-actions"].replaceChildren();
    if (state.scene === "start") button("Start journey →", function () { enter("russia"); }, false);
    else if (state.scene === "russia") {
      if (state.phase === "ready") button("Tap the plane →", function () { complete("russia"); }, false);
      else if (state.phase === "flying") button("Flying to Russia…", function () {}, false).disabled = true;
      else button("See the flags →", function () { enter("flags"); }, true);
    } else if (state.scene === "flags") {
      if (state.phase === "ready") ["white", "blue", "red"].forEach(colorButton);
      else button("On to winter →", function () { enter("winter"); }, true);
    } else if (state.scene === "winter") {
      if (state.phase === "ready") button("Make it snow ❄", function () { complete("winter"); }, false);
      else button("Go inside →", function () { enter("blini"); }, true);
    } else if (state.scene === "blini") {
      if (state.phase === "ready") button("Flip a blin ↗", function () { complete("blini"); }, false);
      else button("Into the forest →", function () { enter("bear"); }, true);
    } else if (state.scene === "bear") {
      if (state.phase === "ready") button("Find the bear →", function () { complete("bear"); }, false);
      else button("Tell the story →", function () { enter("recap"); }, true);
    } else if (state.scene === "recap") {
      if (state.recapIndex < story.recap.length - 1) button("Next picture →", nextCue, true);
      else button("Say thank you →", function () { enter("finale"); }, true);
    } else button("Again ↺", function () { enter("russia"); }, true);
  }

  function renderModes() {
    ui["mode-picker"].hidden = state.scene !== "start";
    ui["mode-picker"].replaceChildren();
    if (state.scene !== "start") return;
    ["listen", "repeat", "tell"].forEach(function (mode) {
      var element = document.createElement("button");
      element.type = "button";
      element.className = "mode-choice" + (mode === state.mode ? " selected" : "");
      element.textContent = mode.charAt(0).toUpperCase() + mode.slice(1);
      element.setAttribute("aria-pressed", mode === state.mode ? "true" : "false");
      element.addEventListener("click", function () {
        state.mode = mode;
        try { localStorage.setItem("little-journey-russia-mode", mode); } catch (error) { /* Optional. */ }
        render(true);
      });
      ui["mode-picker"].appendChild(element);
    });
  }

  function renderProgress() {
    ui.progress.replaceChildren();
    if (state.scene === "start") return;
    var current = story.stops.indexOf(state.scene);
    story.stops.forEach(function (_, index) {
      var dot = document.createElement("span");
      dot.className = "progress-dot" + (index < current ? " done" : index === current ? " current" : "");
      ui.progress.appendChild(dot);
    });
    ui.progress.setAttribute("aria-label", "Story stop " + (current + 1) + " of " + story.stops.length);
  }

  function render(settled) {
    var info = sceneInfo[state.scene];
    ui.stage.classList.toggle("settled", !!settled);
    ui["scene-art"].innerHTML = art.render(state.scene, state);
    ui["scene-kicker"].textContent = info.kicker;
    ui["scene-title"].innerHTML = info.title;
    ui["scene-subtitle"].textContent = info.subtitle;
    ui["scene-counter"].textContent = state.scene === "start" ? "" : state.scene === "recap" ? (state.recapIndex + 1) + " / " + story.recap.length : (story.stops.indexOf(state.scene) + 1) + " / " + story.stops.length;
    ui["scene-counter"].hidden = state.scene === "start";
    ui["home-button"].hidden = state.scene === "start";
    ui["restart-button"].hidden = state.scene === "start";
    ui["mode-description"].textContent = modeHelp[state.mode];
    renderModes();
    renderProgress();
    renderActions();
    updateSpeech();
  }

  function saveScene(scene) {
    try {
      if (scene === "start" || scene === "finale") localStorage.removeItem("little-journey-russia-scene");
      else localStorage.setItem("little-journey-russia-scene", scene);
    } catch (error) { /* Optional persistence. */ }
  }

  function enter(scene) {
    flightToken += 1;
    stopAudio();
    state.scene = scene;
    state.phase = "ready";
    state.colors = [];
    state.recapIndex = 0;
    state.recapFlagHintStep = 0;
    state.hint = false;
    saveScene(scene);
    render(false);
    if (scene !== "start" && scene !== "recap" && state.mode !== "tell") playPhrase(phraseKey());
  }

  function complete(scene) {
    if (state.scene !== scene || state.phase !== "ready") return;
    if (scene === "russia") { startFlight(); return; }
    state.phase = "complete";
    render(false);
  }

  function startFlight() {
    state.phase = "flying";
    render(false);
    var token = ++flightToken;
    var land = document.getElementById("flight-land");
    var highlighted = document.getElementById("flight-russia");
    var costa = document.getElementById("flight-costa");
    var plane = document.getElementById("flight-plane");
    var dots = ui["scene-art"].querySelectorAll(".flight-dot");
    if (!land || !highlighted || !costa || !plane ||
        (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
      state.phase = "complete";
      render(false);
      return;
    }
    var started = Date.now();
    function frame() {
      if (token !== flightToken || state.scene !== "russia" || state.phase !== "flying") return;
      var progress = Math.min((Date.now() - started) / 2800, 1);
      var turn = progress * progress * (3 - 2 * progress);
      var globe = window.GlobeMap.at(-25 + 125 * turn, 10 + 40 * turn);
      var position = art.flightPoint(progress);
      land.setAttribute("d", globe.land);
      highlighted.setAttribute("d", globe.russia);
      highlighted.setAttribute("opacity", String(Math.max(0, Math.min(1, (turn - .35) * 2))));
      costa.setAttribute("opacity", String(Math.max(0, 1 - progress * 3)));
      plane.setAttribute("transform", "translate(" + position[0].toFixed(1) + " " + position[1].toFixed(1) + ")");
      for (var i = 0; i < dots.length; i += 1) {
        dots[i].setAttribute("opacity", i / (dots.length - 1) <= progress ? ".9" : "0");
      }
      if (progress < 1) window.setTimeout(frame, 40);
      else {
        state.phase = "complete";
        render(false);
      }
    }
    frame();
  }

  function chooseColor(color) {
    if (state.scene !== "flags" || state.phase !== "ready" || ["white", "blue", "red"].indexOf(color) === -1) return;
    if (state.colors.indexOf(color) === -1) state.colors.push(color);
    if (state.colors.length === 3) {
      state.phase = "complete";
      state.hint = false;
      render(true);
      if (state.mode !== "tell") playPhrase("colors");
    } else render(true);
  }

  function nextCue() {
    if (state.scene !== "recap" || state.recapIndex >= story.recap.length - 1) return;
    stopAudio();
    state.recapIndex += 1;
    state.recapFlagHintStep = 0;
    state.hint = false;
    render(false);
  }

  function hearHint() {
    if (state.scene === "start") return;
    if (state.scene === "recap" && story.recap[state.recapIndex] === "flags" && state.hint) {
      state.recapFlagHintStep = state.recapFlagHintStep === 0 ? 1 : 0;
    }
    state.hint = true;
    updateSpeech();
    playPhrase(phraseKey());
  }

  function sync() {
    stopAudio();
    if (state.phase === "flying") {
      flightToken += 1;
      state.phase = "complete";
    }
    if (!document.hidden) render(true);
  }

  ui["speaker-button"].addEventListener("click", hearHint);
  ui["home-button"].addEventListener("click", function () { enter("start"); });
  ui["restart-button"].addEventListener("click", function () { enter(state.scene); });
  ui["scene-art"].addEventListener("click", function (event) {
    var target = event.target.closest("[data-action], [data-color]");
    if (!target) return;
    if (target.hasAttribute("data-color")) chooseColor(target.getAttribute("data-color"));
    else complete(target.getAttribute("data-action") === "snow" ? "winter" : target.getAttribute("data-action") === "flip" ? "blini" : target.getAttribute("data-action") === "bear" ? "bear" : "russia");
  });
  document.addEventListener("visibilitychange", sync);
  window.addEventListener("pageshow", sync);
  window.addEventListener("focus", sync);
  render(savedScene !== "start");
}());
