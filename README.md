# Nia Robles — personal website

A static website using Alice for titles, Work Sans for text, and your lavender palette. Fonts, photographs, CV, and candidacy slides are included. No build step is required.

## Update the existing GitHub website

1. Unzip `nia-website.zip`.
2. Upload the **contents** of the `nia-website` folder to the root of your existing GitHub repository. Include the new `cv`, `talks`, and `lecture-notes` folders, the updated `index.html`, the three legacy `.html` files, and `assets`.
3. Keep your existing `CNAME` file and GitHub Pages settings. You do not need to change your domain's DNS.
4. Commit the upload and allow GitHub Pages to publish the update.

The `.html` files now redirect old bookmarks to the clean page addresses. Upload those updated files too; do not leave the previous versions in place.

## Menu size

The menu labels now use a consistent **18px** size on desktop and in the collapsed menu. To adjust them, edit this single line near the top of `assets/site.css`:

```css
--menu-font-size: 18px;
```

All navigation labels use that setting. There are no additional font-size overrides or `!important` rules. Each page requests fresh styling on reload so stylesheet edits are picked up after GitHub publishes them.

This release uses `assets/site.css` and `assets/site.js`. Upload the whole package, including every page HTML file and the assets folder. The old `assets/styles.css` and `assets/links.js` files are no longer used and can be removed from the repository.

## Page addresses and source files

| Page | Address | Source file |
| --- | --- | --- |
| About | `/` | `index.html` |
| CV | `/cv/` | `cv/index.html` |
| Lecture Notes | `/lecture-notes/` | `lecture-notes/index.html` |
| Talks | `/talks/` | `talks/index.html` |

The header and browser titles use **Nia Robles**. The CV page displays a wide embedded PDF viewer with browser controls. It starts with the thumbnail sidebar closed. Open PDF and Download links are below the viewer; Open PDF opens the document directly in the same tab.

At window widths of 1100px or less, the navigation collapses behind a three-line menu button. Click it to open or close the links. Escape, clicking outside the header, or selecting a link also closes it. Wider windows show the horizontal navigation. If JavaScript is disabled, the navigation links remain visible.

GitHub's static hosting serves each folder's `index.html`, so no custom server or routing service is needed. The trailing slash is normal. Visiting an old `.html` address automatically redirects to its new address.

## Replace the CV or slides

Replace `files/cv.pdf` or `files/candidacy-slides.pdf` using the same filename. The CV preview and its links use the same PDF, so replacing that one file updates all of them.

For external links and the candidacy slides, edit `assets/site.js`. Paths there are relative to the website root. The CV page uses direct `/files/cv.pdf` links and a direct iframe source in `cv/index.html`; if you rename that PDF, update all three references there. They work independently of JavaScript.

## Other edits

| File | Purpose |
| --- | --- |
| `assets/site.css` | Fonts, palette, spacing, photo ratio, and responsive layout |
| `assets/site.js` | External links and PDF destinations |
| `assets/favicon.png` | Your Substack image used as the browser-tab icon |
| `assets/images/nia-autumn.webp` | Your About portrait, displayed at a 3:4 ratio |

Navigation and footer HTML are repeated in the four page source files listed above. Update all four if you change their wording.

The footer retains the copyright notice. Blog and Amapolas link directly to your Substacks.

## Local preview

Directory-based addresses should be previewed through a local server. From this folder, run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. On the deployed site, the browser's PDF viewer provides the CV preview; the Open PDF link is available for browsers that handle embedded PDFs differently.

## Fonts and ownership

Alice and Work Sans are bundled under the SIL Open Font License. Their license files are in `assets/fonts/`. The website text and photographs remain yours.
