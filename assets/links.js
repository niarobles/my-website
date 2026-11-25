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

document.querySelectorAll("[data-link]").forEach((placeholder) => {
  const destination = siteLinks[placeholder.dataset.link];
  if (!destination) return;

  const link = document.createElement("a");
  link.href = destination;
  link.className = placeholder.className;
  link.append(...placeholder.childNodes);
  placeholder.replaceWith(link);
});
