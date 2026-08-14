const THEMES = [

  // ═══════════════════════════════════════════════════════════════
  // 1–8 : SIGNATURE THEMES
  // ═══════════════════════════════════════════════════════════════

  ["diamond", "Diamond",
    ["#ffffff", "#e0f2fe", "#bae6fd", "#93c5fd", "#c4b5fd", "#64748b"],
    "#3b82f6", "#111827"
  ],

  ["gold", "Gold",
    ["#fffbea", "#fef3c7", "#fde68a", "#fbbf24", "#f59e0b", "#78350f"],
    "#d97706", "#28180b"
  ],

  ["silver", "Silver",
    ["#ffffff", "#f8fafc", "#e2e8f0", "#cbd5e1", "#93c5fd", "#475569"],
    "#64748b", "#111827"
  ],

  ["lavender", "Lavender",
    ["#faf5ff", "#f3e8ff", "#ddd6fe", "#f0abfc", "#a78bfa", "#5b21b6"],
    "#9333ea", "#211333"
  ],

  ["mocha", "Mocha",
    ["#fff8f0", "#f5e6d3", "#e7c9a9", "#c08457", "#d97706", "#3b1f12"],
    "#925c3a", "#21120b"
  ],

  ["dark-violet", "Dark Violet",
    ["#2e1065", "#581c87", "#7e22ce", "#a855f7", "#6366f1", "#090313"],
    "#c084fc", "#faf5ff"
  ],

  ["dark-blue", "Dark Blue",
    ["#071426", "#172554", "#1e3a8a", "#2563eb", "#38bdf8", "#020617"],
    "#60a5fa", "#eff6ff"
  ],

  ["black", "Black",
    [
      "#020202",
      "#09090b",
      "#18181b",
      "#312e81",
      "#4c1d95",
      "#7c3aed",
      "#090313",
      "#000000"
    ],
    "#a78bfa",
    "#ffffff"
  ],


  // ═══════════════════════════════════════════════════════════════
  // 9–16 : COLORFUL THEMES
  // ═══════════════════════════════════════════════════════════════

  ["sunset-garden", "Sunset Garden",
    ["#fff7ed", "#fed7aa", "#f9a8d4", "#fb923c", "#e879f9", "#a855f7", "#312e81"],
    "#f97316", "#2a102d"
  ],

  ["ruby-ocean", "Ruby Ocean",
    ["#fff1f2", "#fecdd3", "#fb7185", "#e11d48", "#38bdf8", "#2563eb", "#1e3a8a"],
    "#e11d48", "#071629"
  ],

  ["coral-ocean", "Coral Ocean",
    ["#ecfeff", "#cffafe", "#67e8f9", "#06b6d4", "#fb7185", "#818cf8", "#172554"],
    "#0891b2", "#111827"
  ],

  ["violet-flame", "Violet Flame",
    ["#fff1f2", "#fda4af", "#fb7185", "#f97316", "#e879f9", "#a855f7", "#581c87"],
    "#db2777", "#21102f"
  ],

  ["fire-ice", "Fire & Ice",
    ["#fff7ed", "#fed7aa", "#f97316", "#fb7185", "#93c5fd", "#60a5fa", "#1e3a8a"],
    "#ea580c", "#071629"
  ],

  ["royal-sunset", "Royal Sunset",
    ["#fff7cc", "#fde68a", "#fbbf24", "#f97316", "#e879f9", "#a855f7", "#312e81"],
    "#7c3aed", "#17102b"
  ],

  ["mint-coral", "Mint & Coral",
    ["#ecfdf5", "#bbf7d0", "#5eead4", "#22c55e", "#fb7185", "#e11d48", "#881337"],
    "#e11d48", "#1b1518"
  ],

  ["ocean-sunset", "Ocean Sunset",
    ["#ecfeff", "#cffafe", "#67e8f9", "#38bdf8", "#818cf8", "#fb923c", "#c2410c"],
    "#6366f1", "#10152b"
  ],


  // ═══════════════════════════════════════════════════════════════
  // 17–22 : DEEP MIXED THEMES
  // ═══════════════════════════════════════════════════════════════

  ["berry-gold", "Berry Gold",
    ["#fff7ed", "#fce7f3", "#f9a8d4", "#ec4899", "#fbbf24", "#a855f7", "#6b21a8"],
    "#be185d", "#24101d"
  ],

  ["tropical-night", "Tropical Night",
    ["#ccfbf1", "#5eead4", "#22c55e", "#06b6d4", "#38bdf8", "#6366f1", "#1e1b4b"],
    "#0891b2", "#071426"
  ],

  ["peacock-flame", "Peacock Flame",
    ["#ecfeff", "#99f6e4", "#14b8a6", "#06b6d4", "#f97316", "#a855f7", "#581c87"],
    "#0d9488", "#17102b"
  ],

  ["candy-sky", "Candy Sky",
    ["#fff1f2", "#fbcfe8", "#f9a8d4", "#e879f9", "#c084fc", "#60a5fa", "#22d3ee"],
    "#c026d3", "#111827"
  ],

  ["emerald-royal", "Emerald Royal",
    ["#ecfdf5", "#a7f3d0", "#34d399", "#22c55e", "#fbbf24", "#818cf8", "#312e81"],
    "#6366f1", "#101827"
  ],

  ["copper-sea", "Copper Sea",
    ["#fff7ed", "#fed7aa", "#fb923c", "#c2410c", "#2dd4bf", "#14b8a6", "#164e63"],
    "#0891b2", "#20120c"
  ],


  // ═══════════════════════════════════════════════════════════════
  // 23–30 : ULTRA MIXED / PREMIUM THEMES
  // ═══════════════════════════════════════════════════════════════

  ["cherry-lime", "Cherry Lime",
    [
      "#fff1f2",
      "#fecdd3",
      "#fb7185",
      "#e11d48",
      "#facc15",
      "#bef264",
      "#84cc16",
      "#22c55e"
    ],
    "#84cc16",
    "#17210b"
  ],

  ["blueberry-peach", "Blueberry Peach",
    [
      "#eff6ff",
      "#dbeafe",
      "#60a5fa",
      "#818cf8",
      "#c4b5fd",
      "#fdba74",
      "#fb923c",
      "#c2410c"
    ],
    "#f97316",
    "#111827"
  ],

  ["mystic-gold", "Mystic Gold",
    [
      "#faf5ff",
      "#e9d5ff",
      "#a855f7",
      "#7e22ce",
      "#fbbf24",
      "#f59e0b",
      "#2dd4bf",
      "#2563eb"
    ],
    "#eab308",
    "#101827"
  ],

  ["rose-forest", "Rose Forest",
    [
      "#fff1f2",
      "#fbcfe8",
      "#fb7185",
      "#c084fc",
      "#86efac",
      "#4ade80",
      "#15803d",
      "#14532d"
    ],
    "#e11d48",
    "#102016"
  ],

  ["cosmic-sunset", "Cosmic Sunset",
    [
      "#fdf2f8",
      "#f5d0fe",
      "#e879f9",
      "#c084fc",
      "#818cf8",
      "#6366f1",
      "#fb923c",
      "#172554"
    ],
    "#c026d3",
    "#0d1024"
  ],

  ["citrus-night", "Citrus Night",
    [
      "#fefce8",
      "#fef08a",
      "#facc15",
      "#fb923c",
      "#22d3ee",
      "#06b6d4",
      "#6366f1",
      "#172554"
    ],
    "#0891b2",
    "#0b1325"
  ],

  ["imperial", "Imperial",
    [
      "#fff7cc",
      "#fde68a",
      "#fbbf24",
      "#f97316",
      "#e879f9",
      "#a855f7",
      "#22d3ee",
      "#0e7490"
    ],
    "#7e22ce",
    "#111827"
  ],

  ["neon-orchid", "Neon Orchid",
    [
      "#fdf4ff",
      "#f5d0fe",
      "#e879f9",
      "#c026d3",
      "#a855f7",
      "#818cf8",
      "#22d3ee",
      "#2563eb"
    ],
    "#c026d3",
    "#0f1029"
  ]
];


const COPY = {
  ta: {
    eyebrow: "திருக்குறள் தேடல்",
    homeTitle: "குறள் எண்ணை உள்ளிடுங்கள்",
    homeSubcopy: "1 முதல் 1330 வரை எந்த எண்ணையும் கொடுத்தால் அந்த திருக்குறள் உடனே வரும்.",
    inputLabel: "குறள் எண்",
    search: "தேடு",
    historyTitle: "தேடல் வரலாறு",
    viewAll: "அனைத்தையும் காண்",
    hideList: "மறை",
    clearAll: "அனைத்தையும் அழி",
    clearQuestion: "தேடல் வரலாற்றை முழுவதும் அழிக்க வேண்டுமா?",
    historyCount: "தேடல்கள்",
    emptyHistory: "இன்னும் தேடல் வரலாறு இல்லை.",
    noMeaning: "விளக்கம் இல்லை.",
    exitButton: "Exit",
    backButton: "Back",
    settingsButton: "Settings",
    settingsTitle: "Settings",
    colorsLabel: "Color",
    pageSizeLabel: "Page size",
    textSizeLabel: "Text size",
    hideSettings: "Hide settings",
    kuralNumber: "குறள்",
    englishShort: "English",
    showEnglish: "Show English",
    hideEnglish: "Hide English",
    tamilShort: "Tamil",
    meaningBoxTitle: "குறளின் பொருள்",
    tamilMeaningTitle: "தமிழ் விளக்கம்",
    englishMeaningTitle: "English meaning",
    invalidNumber: "1 முதல் 1330 வரை ஒரு எண்ணை உள்ளிடுங்கள்.",
    exitQuestion: "இந்த பக்கத்திலிருந்து வெளியேற வேண்டுமா?"
  },

  en: {
    eyebrow: "Thirukural Finder",
    homeTitle: "Enter a Kural number",
    homeSubcopy: "Type any number from 1 to 1330 and the matching Thirukural appears instantly.",
    inputLabel: "Kural number",
    search: "Search",
    historyTitle: "Search history",
    viewAll: "View all",
    hideList: "Hide",
    clearAll: "Clear all",
    clearQuestion: "Clear all search history?",
    historyCount: "recorded",
    emptyHistory: "No search history yet.",
    noMeaning: "Meaning is not available.",
    exitButton: "Exit",
    backButton: "Back",
    settingsButton: "Settings",
    settingsTitle: "Settings",
    colorsLabel: "Color",
    pageSizeLabel: "Page size",
    textSizeLabel: "Text size",
    hideSettings: "Hide settings",
    kuralNumber: "Kural",
    englishShort: "English",
    showEnglish: "Show English",
    hideEnglish: "Hide English",
    tamilShort: "Tamil",
    meaningBoxTitle: "Meaning of this Kural",
    tamilMeaningTitle: "Tamil meaning",
    englishMeaningTitle: "English meaning",
    invalidNumber: "Enter a number from 1 to 1330.",
    exitQuestion: "Are you sure you want to exit this page?"
  }
};


const storage = {
  lang: "thiru_lang",
  theme: "thiru_theme",
  history: "thiru_history",
  pageSize: "thiru_page_size",
  textSize: "thiru_text_size"
};


function lang() {
  return localStorage.getItem(storage.lang) || "ta";
}


function copy(key) {
  return (COPY[lang()] || COPY.ta)[key] || key;
}


/* ═══════════════════════════════════════════════════════════════
   THEME ENGINE
   IMPORTANT:
   The old version only used colors 0–3.
   This version supports up to 8 colors.
   ═══════════════════════════════════════════════════════════════ */

function applyTheme(themeId) {
  const resolvedId =
    themeId ||
    localStorage.getItem(storage.theme) ||
    "sunset-garden";

  const selected =
    THEMES.find(([id]) => id === resolvedId) || THEMES[0];

  const [, , colors, accent, text] = selected;
  const root = document.documentElement;

  const fallbackColors = [
    "#ffffff",
    "#e2e8f0",
    "#93c5fd",
    "#a78bfa",
    "#fbbf24",
    "#22d3ee",
    "#6366f1",
    "#111827"
  ];

  const themeColors = Array.from({ length: 8 }, (_, index) => {
    return colors[index] || colors[colors.length - 1] || fallbackColors[index];
  });

  const [
    bgA,
    bgB,
    bgC,
    bgD,
    bgE,
    bgF,
    bgG,
    bgH
  ] = themeColors;

  const darkBackground = isDarkColor(bgH);
  const darkText = isDarkColor(text);

  const badgeText = isDarkColor(bgD)
    ? "#ffffff"
    : "#111827";

  const accentText = isDarkColor(accent)
    ? "#f8fafc"
    : "#111827";

  /* Main palette */
  root.style.setProperty("--bg-a", bgA);
  root.style.setProperty("--bg-b", bgB);
  root.style.setProperty("--bg-c", bgC);
  root.style.setProperty("--bg-d", bgD);
  root.style.setProperty("--bg-e", bgE);
  root.style.setProperty("--bg-f", bgF);
  root.style.setProperty("--bg-g", bgG);
  root.style.setProperty("--bg-h", bgH);

  /* Accent */
  root.style.setProperty("--accent", accent);
  root.style.setProperty("--accent-text", accentText);

  /* Text */
  root.style.setProperty("--text", text);
  root.style.setProperty(
    "--muted",
    colorMixText(text)
  );

  root.style.setProperty(
    "--kural-pill-text",
    badgeText
  );

  /* Dark/light glass system */
  if (darkBackground || darkText === false) {
    root.style.setProperty(
      "--surface",
      "rgba(255, 255, 255, 0.16)"
    );

    root.style.setProperty(
      "--surface-strong",
      "rgba(255, 255, 255, 0.26)"
    );

    root.style.setProperty(
      "--surface-soft",
      "rgba(255, 255, 255, 0.12)"
    );

    root.style.setProperty(
      "--border",
      "rgba(255, 255, 255, 0.28)"
    );

    root.style.setProperty(
      "--shadow",
      "rgba(0, 0, 0, 0.32)"
    );
  } else {
    root.style.setProperty(
      "--surface",
      "rgba(255, 255, 255, 0.30)"
    );

    root.style.setProperty(
      "--surface-strong",
      "rgba(255, 255, 255, 0.46)"
    );

    root.style.setProperty(
      "--surface-soft",
      "rgba(255, 255, 255, 0.20)"
    );

    root.style.setProperty(
      "--border",
      "rgba(255, 255, 255, 0.50)"
    );

    root.style.setProperty(
      "--shadow",
      "rgba(18, 41, 20, 0.16)"
    );
  }

  localStorage.setItem(
    storage.theme,
    selected[0]
  );

  document
    .querySelectorAll(".theme-option")
    .forEach((button) => {

      const isActive =
        button.dataset.theme === selected[0];

      button.classList.toggle(
        "active",
        isActive
      );

      button.setAttribute(
        "aria-pressed",
        String(isActive)
      );
    });
}


function isDarkColor(hex) {
  const clean = (hex || "#ffffff")
    .replace("#", "");

  const value =
    clean.length === 3
      ? clean
          .split("")
          .map((char) => char + char)
          .join("")
      : clean;

  const numeric =
    Number.parseInt(value, 16);

  const r = (numeric >> 16) & 255;
  const g = (numeric >> 8) & 255;
  const b = numeric & 255;

  const luminance =
    (0.299 * r +
      0.587 * g +
      0.114 * b) /
    255;

  return luminance < 0.45;
}


function colorMixText(text) {
  return isDarkColor(text)
    ? "rgba(16, 32, 17, 0.72)"
    : "rgba(248, 250, 252, 0.72)";
}


/* ═══════════════════════════════════════════════════════════════
   THEME SELECTOR
   ═══════════════════════════════════════════════════════════════ */

function renderThemes() {
  const list =
    document.getElementById("themeList");

  if (!list) return;

  list.innerHTML = "";

  THEMES.forEach(
    ([id, label, colors]) => {

      const button =
        document.createElement("button");

      button.type = "button";
      button.className = "theme-option";
      button.dataset.theme = id;

      button.addEventListener(
        "click",
        () => applyTheme(id)
      );

      const swatch =
        document.createElement("span");

      swatch.className = "theme-swatch";

      /*
       * Give every color an actual position.
       * This makes 6–8 color themes visible
       * inside the preview swatch.
       */
      const stops = colors.map(
        (color, index) => {

          const position =
            colors.length === 1
              ? 50
              : (index /
                  (colors.length - 1)) *
                100;

          return `${color} ${position}%`;
        }
      );

      swatch.style.background =
        `linear-gradient(135deg, ${stops.join(", ")})`;

      const title =
        document.createElement("span");

      title.textContent = label;

      const check =
        document.createElement("span");

      check.className = "theme-check";
      check.textContent = "✓";

      button.append(
        swatch,
        title,
        check
      );

      list.appendChild(button);
    }
  );

  applyTheme(
    localStorage.getItem(storage.theme) ||
    "sunset-garden"
  );
}


/* ═══════════════════════════════════════════════════════════════
   LANGUAGE
   ═══════════════════════════════════════════════════════════════ */

function applyLanguage(nextLang) {

  document.documentElement.lang =
    nextLang;

  localStorage.setItem(
    storage.lang,
    nextLang
  );

  document
    .querySelectorAll("[data-i18n]")
    .forEach((node) => {

      const key =
        node.dataset.i18n;

      const value =
        COPY[nextLang]?.[key];

      if (value) {
        node.textContent = value;
      }
    });

  const choice =
    document.querySelector(
      ".language-choice"
    );

  if (choice) {
    choice.classList.toggle(
      "active-ta",
      nextLang === "ta"
    );

    choice.classList.toggle(
      "active-en",
      nextLang === "en"
    );
  }

  updateHistoryCount();
  updateMeaningToggleLabel();
  updateKuralToggleLabel();
}


/* ═══════════════════════════════════════════════════════════════
   HISTORY
   ═══════════════════════════════════════════════════════════════ */

function readHistory() {
  try {

    const values =
      JSON.parse(
        localStorage.getItem(
          storage.history
        ) || "[]"
      );

    return Array.isArray(values)
      ? values.filter(Number.isInteger)
      : [];

  } catch {
    return [];
  }
}


function saveHistory(values) {
  localStorage.setItem(
    storage.history,
    JSON.stringify(
      values.slice(-100)
    )
  );
}


function addHistory(number) {

  const values =
    readHistory()
      .filter(
        (item) => item !== number
      );

  values.push(number);

  saveHistory(values);
}


function updateHistoryCount() {

  const counter =
    document.getElementById(
      "historyCount"
    );

  if (!counter) return;

  const count =
    readHistory().length;

  counter.textContent =
    `(${count}) ${copy("historyCount")}`;
}


function renderHistory() {

  const list =
    document.getElementById(
      "historyList"
    );

  if (!list) return;

  const values =
    readHistory()
      .slice()
      .reverse();

  list.innerHTML = "";

  if (!values.length) {

    const empty =
      document.createElement("p");

    empty.className =
      "empty-history";

    empty.textContent =
      copy("emptyHistory");

    list.appendChild(empty);

    updateHistoryCount();

    return;
  }

  values.forEach(
    (number, index) => {

      const link =
        document.createElement("a");

      link.className =
        "history-link";

      link.href =
        `/kural?n=${number}`;

      link.textContent =
        `${index + 1}. ${number}`;

      list.appendChild(link);
    }
  );

  updateHistoryCount();
}


function setupHistory() {

  const toggle =
    document.getElementById(
      "toggleHistoryBtn"
    );

  const clear =
    document.getElementById(
      "clearHistoryBtn"
    );

  const list =
    document.getElementById(
      "historyList"
    );

  if (!toggle || !list) {
    updateHistoryCount();
    return;
  }

  toggle.addEventListener(
    "click",
    () => {

      const open =
        !list.classList.contains(
          "open"
        );

      list.classList.toggle(
        "open",
        open
      );

      clear?.classList.toggle(
        "visible",
        open &&
          readHistory().length > 0
      );

      toggle.textContent =
        open
          ? copy("hideList")
          : copy("viewAll");

      renderHistory();
    }
  );

  clear?.addEventListener(
    "click",
    () => {

      if (
        !confirm(
          copy("clearQuestion")
        )
      ) {
        return;
      }

      saveHistory([]);

      renderHistory();

      clear.classList.remove(
        "visible"
      );
    }
  );

  renderHistory();
}


/* ═══════════════════════════════════════════════════════════════
   SEARCH FORM
   ═══════════════════════════════════════════════════════════════ */

function setupForm() {

  const form =
    document.getElementById(
      "lookupForm"
    );

  const input =
    document.getElementById(
      "numInput"
    );

  const message =
    document.getElementById(
      "formMessage"
    );

  if (!form || !input) return;

  form.addEventListener(
    "submit",
    (event) => {

      const number =
        Number(input.value);

      if (
        !Number.isInteger(number) ||
        number < 1 ||
        number > 1330
      ) {

        event.preventDefault();

        if (message) {
          message.textContent =
            copy("invalidNumber");
        }

        input.focus();

        return;
      }

      addHistory(number);
    }
  );
}


/* ═══════════════════════════════════════════════════════════════
   HEADER / SETTINGS
   ═══════════════════════════════════════════════════════════════ */

function setupHeader() {

  const settingsPanel =
    document.getElementById(
      "settingsPanel"
    );

  const settingsBtn =
    document.getElementById(
      "settingsBtn"
    );

  const closeSettingsBtn =
    document.getElementById(
      "closeSettingsBtn"
    );

  const hideSettingsBtn =
    document.getElementById(
      "hideSettingsBtn"
    );

  const langBtn =
    document.getElementById(
      "langBtn"
    );

  const backBtn =
    document.getElementById(
      "backBtn"
    );

  function setPanel(open) {

    settingsPanel?.classList.toggle(
      "open",
      open
    );

    settingsPanel?.setAttribute(
      "aria-hidden",
      String(!open)
    );
  }

  settingsBtn?.addEventListener(
    "click",
    () =>
      setPanel(
        !settingsPanel?.classList.contains(
          "open"
        )
      )
  );

  closeSettingsBtn?.addEventListener(
    "click",
    () => setPanel(false)
  );

  hideSettingsBtn?.addEventListener(
    "click",
    () => setPanel(false)
  );

  langBtn?.addEventListener(
    "click",
    () => {

      applyLanguage(
        lang() === "ta"
          ? "en"
          : "ta"
      );

      renderHistory();
    }
  );

  backBtn?.addEventListener(
    "click",
    () => {

      if (
        confirm(
          copy("exitQuestion")
        )
      ) {
        window.location.href =
          "about:blank";
      }
    }
  );
}


/* ═══════════════════════════════════════════════════════════════
   SETTINGS ACCORDIONS
   ═══════════════════════════════════════════════════════════════ */

function setupSettingsAccordions() {

  document
    .querySelectorAll(".settings-toggle")
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          const target =
            document.getElementById(
              button.dataset.target
            );

          const open =
            !target?.classList.contains(
              "open"
            );

          target?.classList.toggle(
            "open",
            open
          );

          button.classList.toggle(
            "open",
            open
          );
        }
      );
    });
}


/* ═══════════════════════════════════════════════════════════════
   SIZE SETTINGS
   ═══════════════════════════════════════════════════════════════ */

function clampSetting(
  value,
  min = 10
) {

  const number =
    Number(value);

  if (!Number.isFinite(number)) {
    return 50;
  }

  return Math.max(
    min,
    Math.min(100, number)
  );
}


function scaleFromValue(value) {

  const v =
    clampSetting(value);

  const minScale = 0.4;
  const maxScale = 1.6;

  const scale =
    minScale +
    (v / 100) *
      (maxScale - minScale);

  return scale.toFixed(2);
}


function applySizeSettings() {

  const page =
    clampSetting(
      localStorage.getItem(
        storage.pageSize
      ) || 50
    );

  const text =
    clampSetting(
      localStorage.getItem(
        storage.textSize
      ) || 50
    );

  document.documentElement.style.setProperty(
    "--page-scale",
    scaleFromValue(page)
  );

  document.documentElement.style.setProperty(
    "--text-scale",
    scaleFromValue(text)
  );

  const pageRange =
    document.getElementById(
      "pageSizeRange"
    );

  const textRange =
    document.getElementById(
      "textSizeRange"
    );

  const pageValue =
    document.getElementById(
      "pageSizeValue"
    );

  const textValue =
    document.getElementById(
      "textSizeValue"
    );

  if (pageRange) {
    pageRange.value =
      String(page);
  }

  if (textRange) {
    textRange.value =
      String(text);
  }

  if (pageValue) {
    pageValue.textContent =
      String(page);
  }

  if (textValue) {
    textValue.textContent =
      String(text);
  }
}


function setupSizeControls() {

  const pageRange =
    document.getElementById(
      "pageSizeRange"
    );

  const textRange =
    document.getElementById(
      "textSizeRange"
    );

  const pageDecr =
    document.getElementById(
      "pageSizeDecr"
    );

  const pageIncr =
    document.getElementById(
      "pageSizeIncr"
    );

  const textDecr =
    document.getElementById(
      "textSizeDecr"
    );

  const textIncr =
    document.getElementById(
      "textSizeIncr"
    );

  pageRange?.addEventListener(
    "input",
    () => {

      const v =
        clampSetting(
          pageRange.value
        );

      localStorage.setItem(
        storage.pageSize,
        String(v)
      );

      applySizeSettings();
    }
  );

  textRange?.addEventListener(
    "input",
    () => {

      const v =
        clampSetting(
          textRange.value
        );

      localStorage.setItem(
        storage.textSize,
        String(v)
      );

      applySizeSettings();
    }
  );

  function stepRange(
    rangeElem,
    storageKey,
    delta
  ) {

    if (!rangeElem) return;

    const cur =
      clampSetting(
        rangeElem.value
      );

    const next =
      clampSetting(
        cur + delta
      );

    rangeElem.value =
      String(next);

    localStorage.setItem(
      storageKey,
      String(next)
    );

    applySizeSettings();
  }

  pageDecr?.addEventListener(
    "click",
    (event) => {
      event.preventDefault();

      stepRange(
        pageRange,
        storage.pageSize,
        -1
      );
    }
  );

  pageIncr?.addEventListener(
    "click",
    (event) => {
      event.preventDefault();

      stepRange(
        pageRange,
        storage.pageSize,
        1
      );
    }
  );

  textDecr?.addEventListener(
    "click",
    (event) => {
      event.preventDefault();

      stepRange(
        textRange,
        storage.textSize,
        -1
      );
    }
  );

  textIncr?.addEventListener(
    "click",
    (event) => {
      event.preventDefault();

      stepRange(
        textRange,
        storage.textSize,
        1
      );
    }
  );

  applySizeSettings();
}


/* ═══════════════════════════════════════════════════════════════
   KURAL PAGE
   ═══════════════════════════════════════════════════════════════ */

function setupKuralPage() {

  const number =
    Number(
      document.body.dataset.kuralNumber
    );

  if (Number.isInteger(number)) {
    addHistory(number);
  }

  const kuralButton =
    document.getElementById(
      "kuralTranslateBtn"
    );

  const kuralPanel =
    document.getElementById(
      "kuralEnglishPanel"
    );

  kuralButton?.addEventListener(
    "click",
    () => {

      const show =
        kuralPanel?.hidden;

      if (!kuralPanel) return;

      kuralPanel.hidden =
        !show;

      updateKuralToggleLabel();
    }
  );

  const meaningToggle =
    document.getElementById(
      "meaningToggle"
    );

  const meaningText =
    document.getElementById(
      "meaningText"
    );

  const meaningPanel =
    document.getElementById(
      "meaningPanel"
    );

  const meaningTitle =
    document.getElementById(
      "meaningTitle"
    );

  meaningToggle?.addEventListener(
    "click",
    () => {

      if (
        !meaningText ||
        !meaningPanel ||
        !meaningTitle
      ) {
        return;
      }

      const isTamil =
        meaningPanel.lang !== "en";

      meaningPanel.lang =
        isTamil
          ? "en"
          : "ta";

      meaningText.textContent =
        (
          isTamil
            ? meaningText.dataset.en
            : meaningText.dataset.ta
        ) || copy("noMeaning");

      meaningTitle.textContent =
        isTamil
          ? copy("englishMeaningTitle")
          : copy("tamilMeaningTitle");

      updateMeaningToggleLabel();
    }
  );


  const prevBtn =
    document.getElementById(
      "kuralPrevBtn"
    );

  const nextBtn =
    document.getElementById(
      "kuralNextBtn"
    );

  if (prevBtn) {

    if (number <= 1) {

      prevBtn.classList.add(
        "disabled"
      );

      prevBtn.setAttribute(
        "aria-disabled",
        "true"
      );

    } else {

      prevBtn.addEventListener(
        "click",
        () => {
          window.location.href =
            `/kural?n=${number - 1}`;
        }
      );
    }
  }


  if (nextBtn) {

    if (number >= 1330) {

      nextBtn.classList.add(
        "disabled"
      );

      nextBtn.setAttribute(
        "aria-disabled",
        "true"
      );

    } else {

      nextBtn.addEventListener(
        "click",
        () => {
          window.location.href =
            `/kural?n=${number + 1}`;
        }
      );
    }
  }
}


function updateMeaningToggleLabel() {

  const label =
    document.getElementById(
      "meaningLangLabel"
    );

  const panel =
    document.getElementById(
      "meaningPanel"
    );

  if (!label || !panel) {
    return;
  }

  label.textContent =
    panel.lang === "en"
      ? copy("tamilShort")
      : copy("englishShort");
}


function updateKuralToggleLabel() {

  const button =
    document.getElementById(
      "kuralTranslateBtn"
    );

  const panel =
    document.getElementById(
      "kuralEnglishPanel"
    );

  if (!button || !panel) {
    return;
  }

  button.textContent =
    panel.hidden
      ? copy("showEnglish")
      : copy("hideEnglish");
}


/* ═══════════════════════════════════════════════════════════════
   START APPLICATION
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderThemes();

    applySizeSettings();

    applyLanguage(lang());

    setupHeader();

    setupSettingsAccordions();

    setupSizeControls();

    setupForm();

    setupKuralPage();

    setupHistory();
  }
);