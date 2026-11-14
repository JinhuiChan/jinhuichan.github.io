# Jinhui Chen · 陈锦辉

Bilingual academic homepage: **https://jinhuichan.github.io/**

Static HTML, CSS and JavaScript. No build step or external runtime dependencies.

## Local preview

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/. Each visit opens in English by default. The language button switches between English and Chinese; use `?lang=zh` to link directly to Chinese.

## Editing

- `index.html`: English content with explicit `data-en` and `data-zh` translations.
- `styles.css`: desktop, tablet, mobile and print layouts.
- `script.js`: language selection and current copyright year.
- `assets/portrait.jpg`: portrait.
- `publication.bib`: bibliographic reference.

## Publishing

GitHub Pages serves the root directory of `main`. Push changes to `main` to publish. `.nojekyll` disables Jekyll processing.

Only website assets belong in this repository. Do not upload identity documents, account recovery material or unredacted personal records.

Paper metadata follows the published article: available online in October 2026; volume 243 (2027), pages 243–259.

## Content and typography

Use direct, factual section headings in both languages. Avoid promotional slogans and rhetorical introductions. Prefer 18px body text and 16–17px secondary text, with responsive layouts that retain readable sizes.

## Emblem source

`assets/whu-emblem.png` is the standard two-color university emblem from Wuhan University’s official identity page: https://www.whu.edu.cn/xxgk/wdbs.htm (official emblem download archive).
