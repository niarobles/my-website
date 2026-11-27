/*
 * Edit the website's link destinations here. Empty strings leave text underlined
 * without creating broken links. File paths are relative to the website root.
 * Example: cv: "files/cv.pdf"
 */
const siteLinks = {
  cv: "files/cv.pdf",
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

const cvPreview = document.querySelector("[data-cv-preview]");
if (cvPreview && siteLinks.cv) {
  const pdfUrl = new URL(siteLinks.cv, websiteRoot);
  pdfUrl.hash = "view=FitH";
  if (cvPreview.src !== pdfUrl.href) cvPreview.src = pdfUrl.href;
}

// Keep addresses clean when an old bookmark includes index.html.
if (/^https?:$/.test(window.location.protocol) && window.location.pathname.endsWith("/index.html")) {
  const cleanUrl = new URL("./", window.location.href);
  cleanUrl.search = window.location.search;
  cleanUrl.hash = window.location.hash;
  window.location.replace(cleanUrl.href);
}
