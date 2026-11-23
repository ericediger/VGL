# Reproduce the portfolio materials

## View or host

Publish the contents of the `website/` directory on a static host. The entry points are `vgl/index.html` and `vgl/review/index.html`. The walkthrough and overview also work as index files at `/vgl/` and `/vgl/review/`. Existing section links such as `#1.1` and `#5.1` remain valid. Older step numbers beyond the available steps open the last step of that section.

The overview and walkthrough share a Source link to [the portfolio repository](https://github.com/ericediger/VGL), set in `website/vgl/project.js`. The PDF, video, captions, transcript, poster and every other site resource use local relative paths. The checkout contains everything required for the static site.

For GitHub Pages, put the **contents** of `website/` at the root of a separate `gh-pages` branch of the new repository. Select that branch and `/(root)` under Settings → Pages → Deploy from a branch. The landing page opens the overview. Your personal site can link straight to the Pages overview or host the same `vgl/` directory under its static assets. For a personal site, copy only the `vgl/` folder so the personal homepage is preserved. Search indexing is disabled in the preview HTML. Remove the robots meta tags when you choose to make the public demonstration searchable. [GitHub Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Reproduce the evidence

Start the local Compose stack at release 1. Run the following from the repository root. Capture to a temporary file first so a failed export preserves the previous snapshot.

```sh
docker compose exec -T app python - < scripts/export_walkthrough.py > snapshot.tmp && mv snapshot.tmp website/vgl/data.js
docker compose exec -T app pytest
docker compose cp app:/app/build/evaluation/eval-report.json docs/eval-report.json
docker compose cp app:/app/build/evaluation/eval-report.md docs/eval-report.md
```

The export applies the two proposals inside a transaction that rolls back after capturing the results. Fixed response text, evidence selection and status fields can be inspected in the snapshot. The report writer defaults to a build directory, so a partial evaluation cannot silently overwrite the checked-in results.

The container installs Python 3.12 packages from `requirements.lock` with SHA-256 verification. To update that file deliberately, run `pip-compile --generate-hashes --strip-extras --extra dev --no-emit-index-url --no-header --output-file requirements.lock pyproject.toml` with pip-tools in a Python 3.12 environment. Rebuild and run the full suite after updating dependencies.

## Rebuild the PDF

The editable print source is `docs/pdf/walkthrough.html`. In a local environment with Python Playwright and its Chromium installed, run `python docs/pdf/render.py`. Alternatively set `PLAYWRIGHT_CHROMIUM_EXECUTABLE` to a local Chrome or Chromium executable. The renderer copies the same bytes to both PDF locations. Inspect the four pages after a change.

The captioned video is a narrated guided sequence of final walkthrough screens. A synthetic ElevenLabs voice reads each WebVTT caption within that caption's time range. The MP4 and WebM, poster, WebVTT track and HTML transcript live together in `website/vgl/media/`. Review these alongside the PDF if the recorded examples change.
