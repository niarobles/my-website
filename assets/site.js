/*
 * Edit the website's link destinations here. Empty strings leave text underlined
 * without creating broken links. File paths are relative to the website root.
 * Example: candidacySlides: "files/candidacy-slides.pdf"
 */
const siteLinks = {
  palaisDeGlace: "https://palaisdeglace.cultura.gob.ar/actividad/la-coleccion-escucha-nia-huaytalla-en-instagram-tv/",
  museoDeArteModerno: "https://www.instagram.com/p/CGPv34pAwny/?img_index=4&avpt=MWJxOGpvN3JiM3hlaA==",
  writingAwards: "https://news.northwestern.edu/stories/2023/11/scholar-activist-nia-robles-del-pino-named-2024-global-rhodes-scholar",
  momaPhoto: "https://www.instagram.com/p/CdgQT7wucvV/?img_index=2&jplx=bGwzdmprOGpjaXE0",
  candidacySlides: "files/candidacy-slides.pdf",
  conformalPreprint: "https://arxiv.org/abs/2609.13381",
};

// Resolve PDF paths from this script's location so nested pages work too.
const websiteRoot = new URL("../", document.currentScript.src);

document.querySelectorAll("[data-link]").forEach((placeholder) => {
  const destination = siteLinks[placeholder.dataset.link];
  if (!destination) return;

  const href = new URL(destination, websiteRoot).href;
  if (placeholder.tagName === "A") {
    placeholder.href = href;
  } else {
    const link = document.createElement("a");
    link.href = href;
    link.className = placeholder.className;
    link.append(...placeholder.childNodes);
    placeholder.replaceWith(link);
  }
});


// On smaller windows, disclose the navigation with an accessible menu button.
const menuButton = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector(".site-nav");
const siteHeader = document.querySelector(".site-header");

if (menuButton && siteNavigation && siteHeader) {
  const smallWindow = window.matchMedia("(max-width: 1100px)");

  function setMenuOpen(open, restoreFocus = false) {
    const expanded = Boolean(open && smallWindow.matches);
    siteHeader.classList.toggle("menu-open", expanded);
    menuButton.setAttribute("aria-expanded", String(expanded));
    menuButton.setAttribute("aria-label", expanded ? "Close menu" : "Open menu");
    if (restoreFocus && smallWindow.matches) menuButton.focus();
  }

  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  siteNavigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      event.preventDefault();
      setMenuOpen(false, true);
    }
  });

  document.addEventListener("click", (event) => {
    if (!siteHeader.contains(event.target)) setMenuOpen(false);
  });

  smallWindow.addEventListener("change", () => setMenuOpen(false));
  menuButton.hidden = false;
  siteHeader.classList.add("menu-ready");
}

// Keep addresses clean when an old bookmark includes index.html.
if (/^https?:$/.test(window.location.protocol) && window.location.pathname.endsWith("/index.html")) {
  const cleanUrl = new URL("./", window.location.href);
  cleanUrl.search = window.location.search;
  cleanUrl.hash = window.location.hash;
  window.location.replace(cleanUrl.href);
}
