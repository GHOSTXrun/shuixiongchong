# TUNVIO / 水熊虫

A static project overview for a water bear inspired agent identity experiment.

## Current status

This repository contains the website only: HTML, CSS and a mascot image. It does not contain a runnable agent, wallet integration, a Groth16 circuit, an Anchor program or a deployed contract. All runtime and chain features are planned. CA remains TBA.

## Preview locally

Open index.html directly in a browser. No package installation or build is required.

## GitHub Pages deployment

GitHub Pages is already enabled with branch-based deployment. Pushes to main publish through the built-in pages build and deployment workflow. Site address: https://ghostxrun.github.io/shuixiongchong/

An optional manual workflow is also included. To switch to artifact-based deployment, first set Settings → Pages → Source to GitHub Actions, then run Actions → Deploy website to GitHub Pages. It does not run on pushes, avoiding duplicate deployments.

The workflow publishes only index.html, styles.css, swimmers.js and tunvio-transparent.png. No secrets or additional hosting service are required. The optional manual workflow requires Pages to be configured for GitHub Actions first.

## Project files

- index.html: project overview, roadmap, metadata and links.
- styles.css: responsive dark theme and accessible navigation.
- tunvio-transparent.png: supplied project mascot and social preview image.
- .github/workflows/pages.yml: static Pages deployment.

## Planned implementation

- Specify seed derivation, weight serialization, commitment and signature formats.
- Build an off-chain prototype with active/tun/dead state transitions and verifiable signed history.
- Document seed custody, compromise and alternate-history risks.
- Build and test the proof circuit, then the Solana devnet program.
- Publish reproducible commands, test results and deployment addresses before marking phases live.

## Content maintenance

Update the CA only when an address is confirmed. The old project X link has been removed; add the confirmed TUNVIO account when available. The paper link is an external design reference, not evidence of an implementation in this repository. If hosting moves, update the absolute Open Graph and Twitter URLs in index.html.

No license was supplied with the original archive. Confirm ownership and choose a license before inviting reuse.

## Animated background

Small copies of the supplied mascot swim behind the page using Canvas. Desktop renders 40 and mobile renders 16. Animation pauses in hidden tabs, respects reduced-motion preferences. The Twitter button currently opens a share composer; replace it with the confirmed official account URL when available.

The active logo is an alpha-transparent cutout in tunvio-transparent.png. The original supplied image remains in tunvio.png. The animation canvas is fixed to the viewport beneath page content.
