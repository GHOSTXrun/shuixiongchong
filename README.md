# milno / 水熊虫

A static project overview for a water bear inspired agent identity experiment.

## Current status

This repository contains the website only: HTML, CSS and a mascot image. It does not contain a runnable agent, wallet integration, a Groth16 circuit, an Anchor program or a deployed contract. All runtime and chain features are planned. CA remains TBA.

## Preview locally

Open index.html directly in a browser. No package installation or build is required.

## GitHub Pages deployment

1. Open repository Settings → Pages → Build and deployment.
2. Set Source to GitHub Actions. This initial repository setting requires an administrator.
3. Open Actions → Deploy website to GitHub Pages → Run workflow. Later pushes to main deploy automatically.
4. Use the successful deployment URL shown by the workflow. Expected address: https://ghostxrun.github.io/shuixiongchong/

The workflow publishes only index.html, styles.css and milno.png. No secrets or additional hosting service are required. If Pages is disabled, the deployment will fail until step 2 is completed.

## Project files

- index.html: project overview, roadmap, metadata and links.
- styles.css: responsive dark theme and accessible navigation.
- milno.png: supplied project mascot and social preview image.
- .github/workflows/pages.yml: static Pages deployment.

## Planned implementation

- Specify seed derivation, weight serialization, commitment and signature formats.
- Build an off-chain prototype with active/tun/dead state transitions and verifiable signed history.
- Document seed custody, compromise and alternate-history risks.
- Build and test the proof circuit, then the Solana devnet program.
- Publish reproducible commands, test results and deployment addresses before marking phases live.

## Content maintenance

Update the CA only when an address is confirmed. The X link is retained from the supplied project; confirm account ownership before launch promotion. The paper link is an external design reference, not evidence of an implementation in this repository. If hosting moves, update the absolute Open Graph and Twitter URLs in index.html.

No license was supplied with the original archive. Confirm ownership and choose a license before inviting reuse.
