/* ==========================================================================
   ROMANTIC WEBSITE — ANTHONY & RITAH (MULTI-PAGE JAVASCRIPT)
   ========================================================================== */

/* ====== CUSTOMIZE YOUR CONTENT HERE ====== */
const C = {
  her: "Ritah",
  me: "Anthony",

  gateLine: "Anthony made something with love for you",
  heroTitle: "Ritah, this is for you.",
  heroText: "I wanted to give you something that lasts longer than a simple text message. A quiet place where our love and memories live. Welcome to our world.",

  // Personal heartfelt love letter (About Us)
  letter: {
    salutation: "My Dearest Ritah,",
    paragraphs: [
      "From the moment you came into my life, you brought a warmth I didn’t know I was missing. In a world that is always rushing, you are my favorite place of peace.",
      "I love the quiet moments just as much as our biggest laughs. I love the kindness in your eyes, the sincerity in your voice, and the way your presence alone can turn an ordinary day into something unforgettable.",
      "Every word here is a reminder of how deeply you are cherished, appreciated, and loved — today, tomorrow, and always."
    ],
    signature: "Forever yours, Anthony"
  },

  // About Us highlights
  aboutHighlights: [
    { icon: "🕊", title: "My Peace", text: "Whenever life gets chaotic, one minute talking with you calms my entire spirit." },
    { icon: "✨", title: "My Inspiration", text: "The way you carry yourself with grace and kindness inspires me every day." },
    { icon: "🏡", title: "My Home", text: "Home isn’t a location anymore; it's wherever you are." }
  ],

  // Story Timeline
  story: [
    {
      when: "The Beginning",
      title: "The day our paths crossed",
      text: "A simple moment that quietly changed everything. Looking back, I had no idea that day was the start of my favorite story."
    },
    {
      when: "The Little Moments",
      title: "Everyday laughter & inside jokes",
      text: "The shared smiles, comforting silences, and quiet moments that made me fall deeper in love with you."
    },
    {
      when: "Growing Together",
      title: "Facing the world as a team",
      text: "Learning each other’s rhythms, supporting each other’s dreams, and realizing that with you by my side, I can do better."
    },
    {
      when: "Today & Forever",
      title: "Still choosing you",
      text: "Through every high and low, whatever life brings our way, my answer will always be you. I choose you, every single day."
    }
  ],

  // Gallery Photos (Add your pictures to photos/ folder as 1.jpg, 2.jpg, etc.)
  photos: [
    { src: "photos/1.avif", caption: "Your gorgeous smile", category: "dates" },
    { src: "photos/2.jpg", caption: "One of my favorite days", category: "dates" },
    { src: "photos/3.jpg", caption: "Just you being you", category: "silly" },
    { src: "photos/4.jpg", caption: "Unforgettable memories", category: "adventures" },
    { src: "photos/5.jpg", caption: "Laughter & pure joy", category: "silly" },
    { src: "photos/6.jpg", caption: "Together is my favorite place", category: "adventures" }
  ],

  // Reasons Why I Love You
  reasons: [
    "The genuine warmth and kindness you show to the people around you.",
    "The way your smile instantly softens my hardest days.",
    "Your honesty and wisdom — you always keep me grounded.",
    "How comfortable it feels to just sit with you in silence.",
    "The sound of your laugh when something genuinely catches you off guard.",
    "How you inspire me to be a better man, just by being yourself.",
    "The gentle, reassuring way you care about the little things.",
    "The light in your eyes when you get excited talking about things you love.",
    "The way your hand feels so perfectly natural in mine.",
    "Simply knowing that in this big world, I get to love you."
  ],

  // Extra surprise compliments for the Love Jar
  extraReasons: [
    "Because you make ordinary moments feel like poetry.",
    "Because your hugs feel like coming home after a long journey.",
    "Because loving you is the easiest decision I have ever made.",
    "Because you make my world softer, brighter, and infinitely better.",
    "Because no matter how crowded a room is, my eyes will always search for you.",
    "Because your voice is my favorite sound in the world."
  ],

  // "Open When..." Comfort Notes
  openWhen: [
    {
      icon: "🌤",
      title: "When you had a rough day",
      message: "Take a deep breath and close your eyes. You carry so much with so much grace, but remember: you don’t have to carry it alone. I am right here with you, always proud of you."
    },
    {
      icon: "🌙",
      title: "When you can't sleep",
      message: "Wrap yourself tight in your blanket and picture my arms around you. Let your mind rest. You are safe, you are cherished, and tomorrow is a fresh gentle day."
    },
    {
      icon: "✨",
      title: "When you doubt yourself",
      message: "If you could see yourself through my eyes for just one minute, you would never doubt your strength, your beauty, or your worth again. You are truly incredible."
    },
    {
      icon: "💌",
      title: "When you miss me",
      message: "Distance is just physical space. Put your hand over your heart — I’m right there with you. I am counting down every moment until I see you next."
    },
    {
      icon: "🌧",
      title: "When we have a misunderstanding",
      message: "Remember that it is always you and me against the problem, never you against me. I love you, and nothing could ever change that."
    },
    {
      icon: "🎉",
      title: "When you have good news",
      message: "I am cheering for you louder than anyone else! No one deserves happiness and success more than you. I am so lucky to celebrate you."
    }
  ],

  promise: "I promise to respect you, to listen to you, to celebrate your victories, and to hold you through your tears. You will never have to face this world alone.",
  closing: "I am not perfect, but my love for you is honest, deep, and unwavering. I choose you.",

  // WhatsApp Configuration (Anthony's phone number: 256778032834)
  whatsapp: {
    phone: "256778032834",
    defaultMessage: "Anthony, I'm exploring our website right now and my heart is so full... I love you so much! 💕"
  },

  // Couple Goals / Bucket List
  bucketList: [
    "Watch the sunrise and sunset on the same day together",
    "Go on a spontaneous late-night road trip under the stars",
    "Cook an elaborate dinner from scratch together (even if we burn it)",
    "Build a cozy home filled with laughter and warm hugs",
    "Dance slowly in the living room with no music playing",
    "Grow old together and still look at you the exact same way"
  ]
};
/* ====== END OF CONTENT ====== */


// --- DOM Helpers ---
const $ = id => document.getElementById(id);
const el = (tag, cls, txt) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (txt) e.textContent = txt;
  return e;
};


// ==========================================================================
// RESPONSIVE NAVIGATION & ACTIVE TAB HIGHLIGHTING
// ==========================================================================
function initNavbar() {
  const navToggle = $("nav-toggle");
  const navMenu = $("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (navMenu.classList.contains("open") && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Highlight active link based on current page path
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
initNavbar();


// ==========================================================================
// GATE UNLOCK EXPERIENCE (HOME PAGE ONLY)
// ==========================================================================
const gate = $("gate");
if (gate) {
  const isUnlocked = sessionStorage.getItem("lov_unlocked") === "true";
  if (isUnlocked) {
    gate.classList.add("gone");
    document.body.classList.remove("locked");
  } else {
    $("gate-small").textContent = C.gateLine;
    $("gate-name").textContent = C.her;

    function unlockSite(e) {
      gate.classList.add("gone");
      document.body.classList.remove("locked");
      sessionStorage.setItem("lov_unlocked", "true");
      spawnHeartExplosion(e ? e.clientX : window.innerWidth / 2, e ? e.clientY : window.innerHeight / 2, 16);
      startMusic();
    }

    const openBtn = $("open");
    const sealTrigger = $("seal-trigger");
    if (openBtn) openBtn.onclick = unlockSite;
    if (sealTrigger) sealTrigger.onclick = unlockSite;
  }
} else {
  // Other pages are unlocked by default
  document.body.classList.remove("locked");
}


// ==========================================================================
// POPULATE ABOUT US PAGE (about.html)
// ==========================================================================
if ($("about-letter-body")) {
  $("letter-salutation").textContent = C.letter.salutation;
  $("letter-sign").textContent = C.letter.signature;
  const letterBody = $("about-letter-body");
  C.letter.paragraphs.forEach(p => letterBody.append(el("p", "", p)));

  const featsContainer = $("about-features");
  if (featsContainer) {
    C.aboutHighlights.forEach(f => {
      const card = el("div", "about-feature-card");
      card.append(
        el("div", "feature-icon", f.icon),
        el("h4", "feature-title", f.title),
        el("p", "feature-text", f.text)
      );
      featsContainer.append(card);
    });
  }
}

// ==========================================================================
// FEATURE 2: "HOLD MY HAND" HEARTBEAT TOUCH EXPERIENCE (about.html)
// ==========================================================================
const touchBtn = $("touch-button");
const touchProgressBar = $("touch-progress-bar");
const touchStatus = $("touch-status");
const handCompleteCard = $("hand-complete-card");

if (touchBtn && touchProgressBar && touchStatus) {
  let holdInterval = null;
  let heartbeatAudioInterval = null;
  let holdProgress = 0;
  let isCompleted = false;
  const radius = 70;
  const circumference = 2 * Math.PI * radius; // ~439.82

  touchProgressBar.style.strokeDasharray = `${circumference}`;
  touchProgressBar.style.strokeDashoffset = `${circumference}`;

  function playHeartbeatThud() {
    initProceduralMelody();
    if (!audioCtx) return;
    try {
      if (audioCtx.state === "suspended") audioCtx.resume();
      const now = audioCtx.currentTime;

      // Soft double-thump (lub-dub)
      [0, 0.16].forEach((delay, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(idx === 0 ? 58 : 46, now + delay);
        osc.frequency.exponentialRampToValueAtTime(32, now + delay + 0.18);

        gain.gain.setValueAtTime(0.001, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.12, now + delay + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.18);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(now + delay);
        osc.stop(now + delay + 0.2);
      });
    } catch (e) { }
  }

  function startHold(e) {
    if (isCompleted) return;
    e.preventDefault();

    document.body.classList.add("holding-hand");
    touchBtn.classList.add("active");

    // Initial heartbeat haptic & sound
    if (navigator.vibrate) navigator.vibrate([60, 90, 60]);
    playHeartbeatThud();

    heartbeatAudioInterval = setInterval(() => {
      if (navigator.vibrate) navigator.vibrate([60, 90, 60]);
      playHeartbeatThud();
    }, 850);

    clearInterval(holdInterval);
    holdInterval = setInterval(() => {
      holdProgress += 1.35; // completes in approx ~3.1 seconds

      const offset = circumference - (holdProgress / 100) * circumference;
      touchProgressBar.style.strokeDashoffset = `${Math.max(0, offset)}`;

      if (holdProgress < 30) {
        touchStatus.textContent = "Hold gently... feeling your touch...";
      } else if (holdProgress < 70) {
        touchStatus.textContent = "Close your eyes... feeling my heartbeat beside you...";
      } else if (holdProgress < 99) {
        touchStatus.textContent = "Almost there... holding you tight...";
      } else {
        completeHold();
      }
    }, 40);
  }

  function completeHold() {
    isCompleted = true;
    stopHold(false);
    touchProgressBar.style.strokeDashoffset = "0";
    touchStatus.textContent = "Hand in hand. Always with you.";

    if (navigator.vibrate) navigator.vibrate([120, 60, 180, 60, 240]);
    if (handCompleteCard) handCompleteCard.hidden = false;

    // Full screen celebratory burst of golden sparks and floating hearts
    const rect = touchBtn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    spawnHeartExplosion(cx, cy, 20);

    for (let i = 0; i < 18; i++) {
      setTimeout(() => {
        const rx = Math.random() * window.innerWidth;
        const ry = window.innerHeight * (0.3 + Math.random() * 0.5);
        spawnHeartExplosion(rx, ry, 2);
      }, i * 60);
    }
  }

  function stopHold(reset = true) {
    document.body.classList.remove("holding-hand");
    touchBtn.classList.remove("active");
    clearInterval(holdInterval);
    clearInterval(heartbeatAudioInterval);

    if (reset && !isCompleted) {
      touchStatus.textContent = "Don't let go yet... hold my hand.";
      const decay = setInterval(() => {
        holdProgress -= 5;
        if (holdProgress <= 0) {
          holdProgress = 0;
          clearInterval(decay);
          touchProgressBar.style.strokeDashoffset = `${circumference}`;
          touchStatus.textContent = "Press and hold gently...";
        } else {
          const offset = circumference - (holdProgress / 100) * circumference;
          touchProgressBar.style.strokeDashoffset = `${offset}`;
        }
      }, 25);
    }
  }

  // Touch and pointer events
  touchBtn.addEventListener("pointerdown", startHold);
  window.addEventListener("pointerup", () => { if (!isCompleted) stopHold(true); });
  window.addEventListener("pointercancel", () => { if (!isCompleted) stopHold(true); });
  touchBtn.addEventListener("contextmenu", e => e.preventDefault());
}


// ==========================================================================
// POPULATE OUR STORY PAGE (story.html)
// ==========================================================================
if ($("story-timeline")) {
  C.story.forEach((s, idx) => {
    const li = el("li", "timeline-item");
    const dot = el("div", "timeline-dot");
    const card = el("div", "timeline-card");

    card.append(
      el("span", "timeline-badge", s.when),
      el("h3", "timeline-title", s.title),
      el("p", "timeline-text", s.text)
    );
    li.append(dot, card);
    $("story-timeline").append(li);
  });
}


// ==========================================================================
// POPULATE GALLERY PAGE (gallery.html)
// ==========================================================================
const galleryContainer = $("gallery-grid");
if (galleryContainer) {
  const photoModal = $("photo-modal");
  const modalImg = $("modal-img");
  const modalCaption = $("modal-caption");

  function renderGallery(filter = "all") {
    galleryContainer.innerHTML = "";
    const items = filter === "all" ? C.photos : C.photos.filter(p => p.category === filter);

    items.forEach(p => {
      const card = el("div", "polaroid-card");
      const tape = el("div", "polaroid-tape");
      const wrapper = el("div", "polaroid-img-wrapper");
      const img = new Image();

      img.className = "polaroid-img";
      img.alt = p.caption;
      img.src = p.src;

      img.onerror = () => {
        img.remove();
        const fallback = el("div", "polaroid-fallback");
        fallback.append(
          el("span", "heart-icon", "❤"),
          el("span", "", "Cherished Memory")
        );
        wrapper.append(fallback);
      };
      wrapper.append(img);

      const caption = el("p", "polaroid-caption", p.caption);
      card.append(tape, wrapper, caption);

      card.onclick = () => {
        modalImg.src = img.src || "";
        modalCaption.textContent = p.caption;
        photoModal.hidden = false;
      };

      galleryContainer.append(card);
    });
  }

  renderGallery("all");

  // Filter Buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderGallery(btn.dataset.filter);
    };
  });

  // Modal close handlers
  if ($("modal-close")) $("modal-close").onclick = () => { photoModal.hidden = true; };
  if (photoModal) {
    photoModal.onclick = (e) => {
      if (e.target === photoModal || e.target.classList.contains("modal-backdrop")) {
        photoModal.hidden = true;
      }
    };
  }
}


// ==========================================================================
// POPULATE REASONS PAGE (reasons.html)
// ==========================================================================
if ($("reasons-list")) {
  C.reasons.forEach((r, idx) => {
    const btn = el("button", "reason-card");
    btn.setAttribute("aria-expanded", "false");

    const num = el("span", "reason-num", String(idx + 1));
    const closedHint = el("span", "reason-closed", "Tap to unveil reason #" + (idx + 1));
    const text = el("span", "reason-text", r);
    const icon = el("span", "reason-icon", "❤");

    btn.append(num, closedHint, text, icon);
    btn.onclick = (e) => {
      const isExpanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isExpanded));
      spawnHeartExplosion(e.clientX, e.clientY);
    };

    $("reasons-list").append(btn);
  });

  // Love Jar Surprise
  let availableExtra = [...C.extraReasons];
  const jarBtn = $("surprise-reason-btn");
  if (jarBtn) {
    jarBtn.onclick = (e) => {
      if (availableExtra.length === 0) availableExtra = [...C.extraReasons];
      const randIdx = Math.floor(Math.random() * availableExtra.length);
      const chosen = availableExtra.splice(randIdx, 1)[0];

      const out = $("surprise-output");
      out.textContent = `“${chosen}”`;
      out.hidden = false;
      spawnHeartExplosion(e.clientX, e.clientY, 8);
    };
  }
}


// ==========================================================================
// POPULATE OPEN WHEN PAGE (open-when.html)
// ==========================================================================
if ($("mood-grid")) {
  C.openWhen.forEach(item => {
    const card = el("div", "mood-card");

    const header = el("div", "mood-header");
    header.append(
      el("span", "mood-icon", item.icon),
      el("h4", "mood-title", item.title)
    );

    const body = el("div", "mood-body", item.message);
    const prompt = el("span", "mood-prompt", "Tap to open letter ✉");

    card.append(header, prompt, body);
    card.onclick = (e) => {
      card.classList.toggle("open");
      spawnHeartExplosion(e.clientX, e.clientY, 4);
    };

    $("mood-grid").append(card);
  });
}


// ==========================================================================
// POPULATE PROMISE PAGE (promise.html)
// ==========================================================================
if ($("promise-text")) {
  $("promise-text").textContent = C.promise;

  // Bucket list
  const blList = $("bucket-items");
  if (blList) {
    C.bucketList.forEach(item => {
      const li = el("li", "bucket-item");
      li.append(
        el("span", "bucket-check", "❤"),
        el("span", "", item)
      );
      blList.append(li);
    });
  }

  // Send Love Back Button
  const sendBtn = $("send-love-btn");
  if (sendBtn) {
    sendBtn.onclick = (e) => {
      const fb = $("love-sent-feedback");
      if (fb) fb.hidden = false;
      spawnHeartExplosion(e.clientX, e.clientY, 15);
      for (let i = 0; i < 24; i++) {
        setTimeout(() => {
          const rx = Math.random() * window.innerWidth;
          const ry = window.innerHeight * (0.3 + Math.random() * 0.6);
          spawnHeartExplosion(rx, ry, 2);
        }, i * 50);
      }
    };
  }

  // Feature 4: WhatsApp Direct Love Ping & Reaction Chips
  const waChipsContainer = $("wa-chips");
  const waLink = $("btn-whatsapp-link");
  const waHint = $("wa-phone-hint");
  const waCopyBtn = $("btn-copy-wa");
  const waCopyFeedback = $("wa-copy-feedback");

  if (waLink && waChipsContainer) {
    let currentMsg = C.whatsapp.defaultMessage;

    function getPhone() {
      return (C.whatsapp.phone || localStorage.getItem("lov_wa_phone") || "").replace(/[^0-9]/g, "");
    }

    function getWhatsAppUrl(phone, msg) {
      const encoded = encodeURIComponent(msg);
      // intent:// URI opens the WhatsApp app directly on Android, fallback to wa.me
      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        // On mobile: open WhatsApp app directly via intent (Android) or universal link
        return `whatsapp://send?phone=${phone}&text=${encoded}`;
      } else {
        // On desktop: web.whatsapp.com (requires WA Web login — best available option)
        return `https://web.whatsapp.com/send/?phone=${phone}&text=${encoded}`;
      }
    }

    // Check if on mobile for UI hints
    const isMobileDevice = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    function updateWaUI() {
      const phone = getPhone();
      if (phone) {
        waLink.href = getWhatsAppUrl(phone, currentMsg);
        if (waHint) {
          if (isMobileDevice) {
            waHint.textContent = `💚 Will open WhatsApp app → Anthony (+${phone})`;
          } else {
            waHint.textContent = `💻 On desktop: Opens WhatsApp Web (must be logged in) — or use "Copy Note" and paste in WhatsApp`;
          }
        }
      } else {
        waLink.href = "#";
        if (waHint) {
          waHint.textContent = "⚙ Tap here to enter your WhatsApp number";
        }
      }
    }

    updateWaUI();

    const chips = waChipsContainer.querySelectorAll(".wa-chip");
    chips.forEach(chip => {
      chip.onclick = () => {
        chips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        currentMsg = chip.dataset.msg || chip.textContent;
        updateWaUI();
        spawnHeartExplosion(window.innerWidth / 2, window.innerHeight * 0.7, 4);
      };
    });

    function askForPhone() {
      const input = prompt(
        "Enter Anthony's WhatsApp number with country code (e.g. 256778032834, numbers only):",
        getPhone() || "256778032834"
      );
      if (input !== null) {
        const clean = input.replace(/[^0-9]/g, "");
        if (clean) {
          localStorage.setItem("lov_wa_phone", clean);
          C.whatsapp.phone = clean;
          updateWaUI();
          return clean;
        }
      }
      return null;
    }

    if (waHint) {
      waHint.onclick = (e) => {
        e.preventDefault();
        askForPhone();
      };
    }

    waLink.onclick = (e) => {
      let phone = getPhone();
      if (!phone) {
        e.preventDefault();
        phone = askForPhone();
        if (phone) {
          window.open(getWhatsAppUrl(phone, currentMsg), "_blank");
        }
        return;
      }
      spawnHeartExplosion(e.clientX, e.clientY, 10);
    };

    // Copy Note Button Handler
    if (waCopyBtn) {
      waCopyBtn.onclick = () => {
        navigator.clipboard.writeText(currentMsg).then(() => {
          if (waCopyFeedback) {
            waCopyFeedback.hidden = false;
            if (isMobileDevice) {
              waCopyFeedback.textContent = "💚 Copied! Now open WhatsApp and paste it to Anthony 💌";
            } else {
              waCopyFeedback.textContent = "✅ Copied! Open WhatsApp on your phone and paste this to Anthony 💌";
            }
            setTimeout(() => { waCopyFeedback.hidden = true; }, 5000);
          }
          spawnHeartExplosion(window.innerWidth / 2, window.innerHeight * 0.7, 8);
        }).catch(() => {
          // Fallback: show the message text in a prompt so user can manually copy
          prompt("Copy this message and send it to Anthony on WhatsApp:", currentMsg);
        });
      };
    }
  }
}

// Populate Global Footers if elements exist
if ($("closing")) $("closing").textContent = C.closing;
if ($("sign")) $("sign").textContent = "— Forever yours, " + C.me;


// ==========================================================================
// FLOATING HEARTS ON CLICK / TAP
// ==========================================================================
const heartSymbols = ["❤", "💖", "💕", "✨", "🌸", "🌹"];
function spawnHeartExplosion(x, y, count = 4) {
  if (!x && !y) {
    x = window.innerWidth / 2;
    y = window.innerHeight / 2;
  }
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-click-heart";
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    const jitterX = (Math.random() - 0.5) * 60;
    const jitterY = (Math.random() - 0.5) * 40;
    heart.style.left = `${x + jitterX}px`;
    heart.style.top = `${y + jitterY}px`;
    heart.style.fontSize = `${0.9 + Math.random() * 0.9}rem`;

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1400);
  }
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar") && !e.target.closest("button")) {
    spawnHeartExplosion(e.clientX, e.clientY, 2);
  }
});


// ==========================================================================
// AMBIENT PETALS & STARDUST CANVAS (RUNS ON ALL PAGES)
// ==========================================================================
const canvas = $("ambient-canvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  class Petal {
    constructor() {
      this.reset(true);
    }
    reset(init = false) {
      this.x = Math.random() * width;
      this.y = init ? Math.random() * height : -20;
      this.size = 8 + Math.random() * 12;
      this.speedY = 0.6 + Math.random() * 1.2;
      this.speedX = -0.4 + Math.random() * 0.8;
      this.angle = Math.random() * Math.PI * 2;
      this.angleSpeed = 0.01 + Math.random() * 0.02;
      this.opacity = 0.25 + Math.random() * 0.45;
      this.color = Math.random() > 0.4 ? "242, 175, 192" : "226, 130, 156";
    }
    update() {
      this.y += this.speedY;
      this.x += Math.sin(this.angle) * 0.8 + this.speedX;
      this.angle += this.angleSpeed;
      if (this.y > height + 20) this.reset();
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.beginPath();
      ctx.ellipse(0, 0, this.size * 0.6, this.size, Math.PI / 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
      ctx.fill();
      ctx.restore();
    }
  }

  const petals = Array.from({ length: 26 }, () => new Petal());

  function animateCanvas() {
    ctx.clearRect(0, 0, width, height);
    petals.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateCanvas);
  }
  animateCanvas();
}


// ==========================================================================
// ROMANTIC AUDIO SYSTEM (FILE + PROCEDURAL MUSIC BOX)
// ==========================================================================
const song = $("song");
const sndBtn = $("sound-btn");
const sndLabel = $("sound-label");

let audioCtx = null;
let isProceduralPlaying = false;
let proceduralInterval = null;

function initProceduralMelody() {
  if (audioCtx) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  audioCtx = new AudioContext();
}

function playSoftChime(freq, time, duration = 1.4) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, time);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.08, time + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(time);
  osc.stop(time + duration);
}

const notes = [
  261.63, 329.63, 392.00, 493.88, 523.25,
  220.00, 261.63, 329.63, 440.00, 493.88,
  174.61, 261.63, 329.63, 392.00, 440.00,
  196.00, 246.94, 293.66, 392.00, 493.88
];

let noteIdx = 0;
function startProceduralMusic() {
  initProceduralMelody();
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  isProceduralPlaying = true;
  if (sndLabel) sndLabel.textContent = "Music: On";

  if (!proceduralInterval) {
    proceduralInterval = setInterval(() => {
      if (!isProceduralPlaying) return;
      const now = audioCtx.currentTime;
      const freq = notes[noteIdx % notes.length];
      playSoftChime(freq, now, 1.8);
      if (Math.random() > 0.5) {
        playSoftChime(freq * 1.5, now + 0.15, 1.2);
      }
      noteIdx++;
    }, 550);
  }
}

function stopProceduralMusic() {
  isProceduralPlaying = false;
  if (sndLabel) sndLabel.textContent = "Music: Off";
}

function startMusic() {
  if (!song) {
    startProceduralMusic();
    return;
  }
  const playPromise = song.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        if (sndLabel) sndLabel.textContent = "Music: On";
      })
      .catch(() => {
        startProceduralMusic();
      });
  } else {
    startProceduralMusic();
  }
}

function toggleMusic() {
  if (song && !song.paused) {
    song.pause();
    if (sndLabel) sndLabel.textContent = "Music: Off";
  } else if (isProceduralPlaying) {
    stopProceduralMusic();
  } else {
    startMusic();
  }
}

if (sndBtn) sndBtn.onclick = toggleMusic;
