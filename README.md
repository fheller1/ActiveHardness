# ActiveHardness

Supplementary website using the Academic Project Page Template. The header includes the paper title, author list, affiliations, equal contribution note for Junyi Chen and Frederik Heller, and acceptance at Humanoids 2026 (December 6–9, 2026, Santa Clara, California, USA). The page includes the first-page teaser, abstract, a slideshow of five key figures and the performance comparison table, and an arXiv BibTeX citation. The IEEE Paper, Dataset, and Poster are marked coming soon.

- Paper and arXiv: https://arxiv.org/abs/2505.13231
- Code & Reproduction: https://github.com/alapkshirsagar/tactile-hardness
- Conference: https://2026.ieee-humanoids.org/

## Preview

```sh
python3 -m http.server 8000
```

Visit http://localhost:8000.

## Intended publication address

https://fheller1.github.io/activehardness/

Use the repository `fheller1/activehardness` and enable GitHub Pages from `main`, `/ (root)`. No separate organization or project CNAME is needed.

While the personal site uses `fheller.dev`, this project inherits that custom domain and the GitHub Pages URL redirects to https://fheller.dev/activehardness/. If the domain is retired, remove the custom domain from the personal site's Pages settings before it expires so the GitHub Pages address serves the site directly again.

The canonical URL, Open Graph URL, and structured-data URL use the chosen GitHub Pages address. Local configuration does not itself publish the site.

Do not publish the existing local Git history if earlier manuscript assets should remain private: earlier commits contain the manuscript and figures. Publish a clean snapshot instead.

## Editing

Edit content in `index.html`, styles in `static/css/index.css`, and slideshow behavior in `static/js/paper.js`. The slideshow supports Previous/Next buttons and arrow keys; without JavaScript, all figures remain visible. Select a figure to open its full-resolution PDF. CDN resources require internet access for the template fonts, icons, and scripts.

Paper content comes from `~/uni/2026Humanoids_ActiveHardnessClassification/root_camera_ready_humanoids_2026.tex`. The teaser is copied from `figures/main_figure.png`; slideshow images are rendered from the five figure PDFs referenced by that source and its performance comparison table. Figure PDFs and the rendered table PDF are included in `static/pdfs/`; the standalone table source is in `static/tex/performance-comparison.tex`. The inline citation matches `citation.bib` and uses the arXiv preprint's original publication year, 2025. The abstract's closing sentence is adapted to refer to this website.

Stylesheet and slideshow script URLs include a content version to avoid stale browser caches. Refresh the corresponding version in `index.html` after editing those assets.

## Attribution

Based on https://github.com/eliahuhorwitz/Academic-project-page-template at commit d38af1ccae1ce82c3404d2820c4c646afd409f81. Website template: CC BY-SA 4.0; original attribution remains in the footer. See TEMPLATE_README.md for upstream documentation.
