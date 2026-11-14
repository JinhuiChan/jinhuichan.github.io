# Jinhui Chen · 陈锦辉

Bilingual academic homepage: **https://jinhuichan.github.io/**

Static HTML, CSS and JavaScript. No build step or external runtime dependencies.

## Local preview

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/. Use `?lang=en` to open the English version directly. The language button remembers the reader's preference when browser storage is available.

## Editing

- `index.html`: Chinese content and English translations in `data-en` attributes.
- `styles.css`: desktop, tablet, mobile and print layouts.
- `script.js`: language selection and current copyright year.
- `assets/portrait.jpg`: portrait.
- `publication.bib`: bibliographic reference.

## Publishing

GitHub Pages serves the root directory of `main`. Push changes to `main` to publish. `.nojekyll` disables Jekyll processing.

Only website assets belong in this repository. Do not upload identity documents, account recovery material or unredacted personal records.

Paper metadata follows the published article: available online in October 2026; volume 243 (2027), pages 243–259.
