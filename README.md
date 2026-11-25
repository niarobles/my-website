# Nia Robles Del Pino — personal website

A static website recreated from your design. It uses Alice for titles, Work Sans for paragraphs and navigation, and your lavender palette:

- Background: `#E6E1FA`
- Accent: `#CDC7E6`
- Text: `#371A53`

The fonts and photograph are included. No installation, build command, account keys, or framework is needed.

## Preview on your computer

Unzip the download, then open `index.html` in a browser. All four pages work directly from the folder.

## Put it on GitHub Pages

1. Create a GitHub repository. Name it `YOUR-USERNAME.github.io` if you want the site at `https://YOUR-USERNAME.github.io/`. A different repository name also works.
2. Upload the **contents** of this folder to the repository. `index.html` must be at the top level, alongside `cv.html`, `lecture-notes.html`, `talks.html`, and the `assets` folder. Do not upload the ZIP itself.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**. Select **main** and **/(root)**, then **Save**.
5. GitHub will display the website address on that page when publication finishes.

Relative paths let this site work both at a username domain and inside a project repository.

GitHub's guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Edit the website

| File | What it contains |
| --- | --- |
| `index.html` | About page and biography |
| `cv.html` | CV page |
| `lecture-notes.html` | Lecture Notes page, currently WIP |
| `talks.html` | Talks page |
| `assets/styles.css` | Fonts, colors, spacing, and mobile layout |
| `assets/links.js` | All external links and PDF destinations |
| `assets/images/nia-autumn.webp` | Your autumn portrait |
| `files/` | Your CV and candidacy presentation PDFs |

The Blog and Amapolas links point to your two Substacks. Your museum, writing-award, MoMA, and preprint links are connected, and the CV and candidacy slides are included as PDFs.

### Replace the CV or slides later

Replace the corresponding PDF in `files/` with a newer copy using the same filename. The current entries at the top of `assets/links.js` are:

```js
cv: "files/cv.pdf",
candidacySlides: "files/candidacy-slides.pdf",
```

To change any external link, edit its URL in `assets/links.js`. An empty string leaves the corresponding text underlined without sending visitors to a broken destination.

The header and footer are ordinary HTML in each page, so each page works even without JavaScript. If you later rename a navigation item, update it in all four HTML files. The footer is only the copyright notice you requested; edit its year in the four HTML files when needed.

## Fonts and ownership

Alice and Work Sans are bundled under their SIL Open Font Licenses, included in `assets/fonts/`. The website text and photograph are yours. No license granting reuse of your personal content is added.
