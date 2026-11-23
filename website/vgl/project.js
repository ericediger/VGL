// Source link shared by the overview and walkthrough.
const repositoryUrl = "https://github.com/ericediger/VGL";
if (repositoryUrl) {
  const target = new URL(repositoryUrl);
  if (target.protocol === "https:" && target.hostname === "github.com") {
    for (const link of document.querySelectorAll("[data-source]")) {
      link.href = target.href;
      link.hidden = false;
    }
  }
}
