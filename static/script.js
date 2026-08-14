const THEMES = [
  ["peacock", "Peacock", ["#e8fbff", "#5eead4", "#38bdf8", "#164e63"], "#0d9488", "#06252b"],

  ["diamond", "Diamond", ["#ffffff", "#dbeafe", "#93c5fd", "#64748b"], "#3b82f6", "#111827"],

  ["gold", "Gold", ["#fffbea", "#fde68a", "#f59e0b", "#78350f"], "#d97706", "#28180b"],

  ["silver", "Silver", ["#ffffff", "#e5e7eb", "#9ca3af", "#374151"], "#6b7280", "#111827"],

  ["ruby", "Ruby", ["#fff1f2", "#fda4af", "#e11d48", "#4c0519"], "#be123c", "#260b14"],

  ["sapphire", "Sapphire", ["#eff6ff", "#93c5fd", "#3b82f6", "#172554"], "#1d4ed8", "#07142e"],

  ["lavender", "Lavender", ["#f5f3ff", "#ddd6fe", "#a78bfa", "#5b21b6"], "#7c3aed", "#211333"],

  ["dark-violet", "Dark Violet", ["#2e1065", "#581c87", "#c084fc", "#0f0718"], "#a855f7", "#faf5ff"],

  ["dark-blue", "Dark Blue", ["#0f172a", "#1e3a8a", "#60a5fa", "#020617"], "#60a5fa", "#eff6ff"],

  ["black", "Black", ["#18181b", "#27272a", "#52525b", "#050505"], "#a1a1aa", "#ffffff"],

  ["mocha", "Mocha", ["#fff8f0", "#d6b08c", "#8b5e3c", "#3b1f12"], "#795548", "#21120b"],

  ["aurora", "Aurora", ["#ecfeff", "#86efac", "#818cf8", "#312e81"], "#6366f1", "#0b1028"],

  ["berry-gold", "Berry Gold", ["#fff7ed", "#f9a8d4", "#a855f7", "#78350f"], "#be185d", "#24101d"],

  ["teal-flame", "Teal Flame", ["#ecfeff", "#2dd4bf", "#f97316", "#172554"], "#0d9488", "#07142e"],

  ["coral-ocean", "Coral Ocean", ["#ecfeff", "#67e8f9", "#fb7185", "#1e3a8a"], "#0891b2", "#111827"],

  ["violet-flame", "Violet Flame", ["#fff1f2", "#fb7185", "#f97316", "#581c87"], "#db2777", "#21102f"],

  ["fire-ice", "Fire & Ice", ["#fff1f2", "#60a5fa", "#f97316", "#1e3a8a"], "#ea580c", "#071629"],

  ["royal-sunset", "Royal Sunset", ["#fff7ed", "#fbbf24", "#a855f7", "#312e81"], "#7c3aed", "#17102b"],

  ["mint-coral", "Mint & Coral", ["#ecfdf5", "#5eead4", "#fb7185", "#881337"], "#e11d48", "#1b1518"],

  ["ocean-sunset", "Ocean Sunset", ["#ecfeff", "#67e8f9", "#818cf8", "#f97316"], "#6366f1", "#10152b"]
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

function applyTheme(themeId) {
  const selected = THEMES.find(([id]) => id === themeId) || THEMES[0];
  const [, , colors, accent, text] = selected;
  const root = document.documentElement;
  const kuralBadgeText = themeId === "black" ? "#ffffff" : "#111827";

  root.style.setProperty("--bg-a", colors[0]);
  root.style.setProperty("--bg-b", colors[1]);
  root.style.setProperty("--bg-c", colors[2]);
  root.style.setProperty("--bg-d", colors[3]);
  root.style.setProperty("--accent", accent);
  root.style.setProperty("--text", text);
  root.style.setProperty("--muted", colorMixText(text));
  root.style.setProperty("--accent-text", themeId === "night" ? "#03131d" : "#fffaf7");
  root.style.setProperty("--kural-pill-text", kuralBadgeText);
  root.style.setProperty("--shadow", themeId === "night" ? "rgba(0, 0, 0, 0.32)" : "rgba(18, 41, 20, 0.16)");
  localStorage.setItem(storage.theme, selected[0]);

  document.querySelectorAll(".theme-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.theme === selected[0]);
  });
}

function colorMixText(text) {
  return text === "#f8fafc" ? "rgba(248, 250, 252, 0.72)" : "rgba(16, 32, 17, 0.72)";
}

function renderThemes() {
  const list = document.getElementById("themeList");
  if (!list) return;
  list.innerHTML = "";

  THEMES.forEach(([id, label, colors]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "theme-option";
    button.dataset.theme = id;
    button.addEventListener("click", () => applyTheme(id));

    const swatch = document.createElement("span");
    swatch.className = "theme-swatch";
    swatch.style.background = `linear-gradient(135deg, ${colors.join(", ")})`;

    const title = document.createElement("span");
    title.textContent = label;

    const check = document.createElement("span");
    check.className = "theme-check";
    check.textContent = "✓";
    button.append(swatch, title, check);
    list.appendChild(button);
  });

  applyTheme(localStorage.getItem(storage.theme) || "peacock");
}

function applyLanguage(nextLang) {
  document.documentElement.lang = nextLang;
  localStorage.setItem(storage.lang, nextLang);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const value = COPY[nextLang]?.[key];
    if (value) node.textContent = value;
  });

  const choice = document.querySelector(".language-choice");
  if (choice) {
    choice.classList.toggle("active-ta", nextLang === "ta");
    choice.classList.toggle("active-en", nextLang === "en");
  }

  updateHistoryCount();
  updateMeaningToggleLabel();
  updateKuralToggleLabel();
}

function readHistory() {
  try {
    const values = JSON.parse(localStorage.getItem(storage.history) || "[]");
    return Array.isArray(values) ? values.filter(Number.isInteger) : [];
  } catch {
    return [];
  }
}

function saveHistory(values) {
  localStorage.setItem(storage.history, JSON.stringify(values.slice(-100)));
}

function addHistory(number) {
  const values = readHistory().filter((item) => item !== number);
  values.push(number);
  saveHistory(values);
}

function updateHistoryCount() {
  const counter = document.getElementById("historyCount");
  if (!counter) return;
  const count = readHistory().length;
  counter.textContent = `(${count}) ${copy("historyCount")}`;
}

function renderHistory() {
  const list = document.getElementById("historyList");
  if (!list) return;

  const values = readHistory().slice().reverse();
  list.innerHTML = "";

  if (!values.length) {
    const empty = document.createElement("p");
    empty.className = "empty-history";
    empty.textContent = copy("emptyHistory");
    list.appendChild(empty);
    updateHistoryCount();
    return;
  }

  values.forEach((number, index) => {
    const link = document.createElement("a");
    link.className = "history-link";
    link.href = `/kural?n=${number}`;
    link.textContent = `${index + 1}. ${number}`;
    list.appendChild(link);
  });
  updateHistoryCount();
}

function setupHistory() {
  const toggle = document.getElementById("toggleHistoryBtn");
  const clear = document.getElementById("clearHistoryBtn");
  const list = document.getElementById("historyList");
  if (!toggle || !list) {
    updateHistoryCount();
    return;
  }

  toggle.addEventListener("click", () => {
    const open = !list.classList.contains("open");
    list.classList.toggle("open", open);
    clear?.classList.toggle("visible", open && readHistory().length > 0);
    toggle.textContent = open ? copy("hideList") : copy("viewAll");
    renderHistory();
  });

  clear?.addEventListener("click", () => {
    if (!confirm(copy("clearQuestion"))) return;
    saveHistory([]);
    renderHistory();
    clear.classList.remove("visible");
  });

  renderHistory();
}

function setupForm() {
  const form = document.getElementById("lookupForm");
  const input = document.getElementById("numInput");
  const message = document.getElementById("formMessage");
  if (!form || !input) return;

  form.addEventListener("submit", (event) => {
    const number = Number(input.value);
    if (!Number.isInteger(number) || number < 1 || number > 1330) {
      event.preventDefault();
      if (message) message.textContent = copy("invalidNumber");
      input.focus();
      return;
    }
    addHistory(number);
  });
}

function setupHeader() {
  const settingsPanel = document.getElementById("settingsPanel");
  const settingsBtn = document.getElementById("settingsBtn");
  const closeSettingsBtn = document.getElementById("closeSettingsBtn");
  const hideSettingsBtn = document.getElementById("hideSettingsBtn");
  const langBtn = document.getElementById("langBtn");
  const backBtn = document.getElementById("backBtn");

  function setPanel(open) {
    settingsPanel?.classList.toggle("open", open);
    settingsPanel?.setAttribute("aria-hidden", String(!open));
  }

  settingsBtn?.addEventListener("click", () => setPanel(!settingsPanel?.classList.contains("open")));
  closeSettingsBtn?.addEventListener("click", () => setPanel(false));
  hideSettingsBtn?.addEventListener("click", () => setPanel(false));

  langBtn?.addEventListener("click", () => {
    applyLanguage(lang() === "ta" ? "en" : "ta");
    renderHistory();
  });

  backBtn?.addEventListener("click", () => {
    if (confirm(copy("exitQuestion"))) {
      window.location.href = "about:blank";
    }
  });
}

function setupSettingsAccordions() {
  document.querySelectorAll(".settings-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.target);
      const open = !target?.classList.contains("open");
      target?.classList.toggle("open", open);
      button.classList.toggle("open", open);
    });
  });
}

function clampSetting(value, min = 10) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 50;
  return Math.max(min, Math.min(100, number));
}

function scaleFromValue(value) {
  // map slider 0..100 to a scale range that keeps 50 -> 1.00
  // choose minScale and maxScale so 50 maps to 1.0
  const v = clampSetting(value);
  const minScale = 0.4;
  const maxScale = 1.6;
  const scale = minScale + (v / 100) * (maxScale - minScale);
  return scale.toFixed(2);
}

function applySizeSettings() {
  const page = clampSetting(localStorage.getItem(storage.pageSize) || 50);
  const text = clampSetting(localStorage.getItem(storage.textSize) || 50);
  document.documentElement.style.setProperty("--page-scale", scaleFromValue(page));
  document.documentElement.style.setProperty("--text-scale", scaleFromValue(text));

  const pageRange = document.getElementById("pageSizeRange");
  const textRange = document.getElementById("textSizeRange");
  const pageValue = document.getElementById("pageSizeValue");
  const textValue = document.getElementById("textSizeValue");
  if (pageRange) pageRange.value = String(page);
  if (textRange) textRange.value = String(text);
  if (pageValue) pageValue.textContent = String(page);
  if (textValue) textValue.textContent = String(text);
}

function setupSizeControls() {
  const pageRange = document.getElementById("pageSizeRange");
  const textRange = document.getElementById("textSizeRange");

  const pageDecr = document.getElementById('pageSizeDecr');
  const pageIncr = document.getElementById('pageSizeIncr');
  const textDecr = document.getElementById('textSizeDecr');
  const textIncr = document.getElementById('textSizeIncr');

  pageRange?.addEventListener("input", () => {
    const v = clampSetting(pageRange.value);
    localStorage.setItem(storage.pageSize, String(v));
    applySizeSettings();
  });

  textRange?.addEventListener("input", () => {
    const v = clampSetting(textRange.value);
    localStorage.setItem(storage.textSize, String(v));
    applySizeSettings();
  });

  function stepRange(rangeElem, storageKey, delta) {
    if (!rangeElem) return;
    const cur = clampSetting(rangeElem.value);
    const next = clampSetting(cur + delta);
    rangeElem.value = String(next);
    localStorage.setItem(storageKey, String(next));
    applySizeSettings();
  }

  pageDecr?.addEventListener('click', (e)=>{ e.preventDefault(); stepRange(pageRange, storage.pageSize, -1); });
  pageIncr?.addEventListener('click', (e)=>{ e.preventDefault(); stepRange(pageRange, storage.pageSize, +1); });
  textDecr?.addEventListener('click', (e)=>{ e.preventDefault(); stepRange(textRange, storage.textSize, -1); });
  textIncr?.addEventListener('click', (e)=>{ e.preventDefault(); stepRange(textRange, storage.textSize, +1); });

  applySizeSettings();
}

function setupKuralPage() {
  const number = Number(document.body.dataset.kuralNumber);
  if (Number.isInteger(number)) addHistory(number);

  const kuralButton = document.getElementById("kuralTranslateBtn");
  const kuralPanel = document.getElementById("kuralEnglishPanel");
  kuralButton?.addEventListener("click", () => {
    const show = kuralPanel?.hidden;
    if (!kuralPanel) return;
    kuralPanel.hidden = !show;
    updateKuralToggleLabel();
  });

  const meaningToggle = document.getElementById("meaningToggle");
  const meaningText = document.getElementById("meaningText");
  const meaningPanel = document.getElementById("meaningPanel");
  const meaningTitle = document.getElementById("meaningTitle");
  meaningToggle?.addEventListener("click", () => {
    if (!meaningText || !meaningPanel || !meaningTitle) return;
    const isTamil = meaningPanel.lang !== "en";
    meaningPanel.lang = isTamil ? "en" : "ta";
    meaningText.textContent = (isTamil ? meaningText.dataset.en : meaningText.dataset.ta) || copy("noMeaning");
    meaningTitle.textContent = isTamil ? copy("englishMeaningTitle") : copy("tamilMeaningTitle");
    updateMeaningToggleLabel();
  });

  // Prev / Next buttons
  const prevBtn = document.getElementById('kuralPrevBtn');
  const nextBtn = document.getElementById('kuralNextBtn');
  if (prevBtn) {
    if (number <= 1) {
      prevBtn.classList.add('disabled');
      prevBtn.setAttribute('aria-disabled', 'true');
    } else {
      prevBtn.addEventListener('click', () => { window.location.href = `/kural?n=${number-1}`; });
    }
  }
  if (nextBtn) {
    if (number >= 1330) {
      nextBtn.classList.add('disabled');
      nextBtn.setAttribute('aria-disabled', 'true');
    } else {
      nextBtn.addEventListener('click', () => { window.location.href = `/kural?n=${number+1}`; });
    }
  }
}

function updateMeaningToggleLabel() {
  const label = document.getElementById("meaningLangLabel");
  const panel = document.getElementById("meaningPanel");
  if (!label || !panel) return;
  label.textContent = panel.lang === "en" ? copy("tamilShort") : copy("englishShort");
}

function updateKuralToggleLabel() {
  const button = document.getElementById("kuralTranslateBtn");
  const panel = document.getElementById("kuralEnglishPanel");
  if (!button || !panel) return;
  // show 'Show English' when hidden, 'Hide English' when visible
  button.textContent = panel.hidden ? copy("showEnglish") : copy("hideEnglish");
}

document.addEventListener("DOMContentLoaded", () => {
  renderThemes();
  applySizeSettings();
  applyLanguage(lang());
  setupHeader();
  setupSettingsAccordions();
  setupSizeControls();
  setupForm();
  setupKuralPage();
  setupHistory();
});
