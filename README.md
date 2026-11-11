# Our Love Story — Anthony & Ritah 💕

A multi-page, romantic website dedicated to Ritah.

---

## 🌟 Newly Added Features!

### 1. 💬 "Whisper Directly to Anthony" (WhatsApp Love Ping)
- **Located on**: [Our Promise (`promise.html`)](file:///d:/PROJECTS/website%20lov/promise.html)
- **What it does**: Allows Ritah to tap romantic reaction chips (e.g. *"I love this surprise! 💕"*, *"I miss you so much 🥺"*, *"Come hug me right now 🫂"*) and directly ping Anthony on WhatsApp with one click!
- **How to add your phone number**:
  In [`script.js`](file:///d:/PROJECTS/website%20lov/script.js), under `C.whatsapp`:
  ```javascript
  whatsapp: {
    phone: "256701234567", // Enter your phone number with country code (e.g. "256..." or "1...")
    defaultMessage: "..."
  }
  ```
  *(Note: If left blank, it still works smoothly! WhatsApp will simply open and prompt Ritah to pick Anthony directly from her contacts list).*

---

### 2. 🤝 "Hold My Hand" (Heartbeat Touch Experience)
- **Located on**: [About Us (`about.html`)](file:///d:/PROJECTS/website%20lov/about.html)
- **What it does**:
  - When Ritah presses and holds her thumb on the glowing heart pad, the screen softly dims into an intimate candlelight atmosphere.
  - A gentle, rhythmic double-thump heartbeat plays softly (via Web Audio API) and vibrates phone haptics in sync with a human pulse.
  - An animated rose-gold circular ring charges up over ~3 seconds.
  - Upon completion, fireworks of golden sparks bloom across the screen, revealing your sacred reassuring message: *"I am holding your hand right now, Ritah. You are never alone, you are safe, and my love is wrapping around you wherever you are. — Anthony"*

---

## 🌹 Website Structure & Pages

1. **Home ([`index.html`](file:///d:/PROJECTS/website%20lov/index.html))**: Wax-sealed gate unlock, romantic hub cards.
2. **About Us ([`about.html`](file:///d:/PROJECTS/website%20lov/about.html))**: Heartfelt parchment letter, 3 core pillars (*My Peace, Inspiration, Home*), and the **"Hold My Hand"** heartbeat experience.
3. **Our Story ([`story.html`](file:///d:/PROJECTS/website%20lov/story.html))**: Chapters of your milestones from the first conversation to today.
4. **Gallery ([`gallery.html`](file:///d:/PROJECTS/website%20lov/gallery.html))**: Polaroid scrapbook with category filters and zoomable lightbox.
5. **Reasons ([`reasons.html`](file:///d:/PROJECTS/website%20lov/reasons.html))**: Interactive reasons cards and "Whisper another reason" Love Jar.
6. **Open When ([`open-when.html`](file:///d:/PROJECTS/website%20lov/open-when.html))**: Unsealable virtual comfort envelopes.
7. **Our Promise ([`promise.html`](file:///d:/PROJECTS/website%20lov/promise.html))**: Sacred promises, couple bucket list, "Send Love Back" heart fireworks, and **WhatsApp Love Ping**.
