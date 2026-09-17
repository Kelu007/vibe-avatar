# VibeAvatar project page

An updated version of the original VividPose project-page template for:

**VibeAvatar: Aligning Phonetic Kinematics and Human Aesthetics for High-Fidelity Talking Avatar Synthesis**  
Qilin Wang, Mingyu Li, Hao Tang · Peking University · ACM MM 2026

Paper: https://arxiv.org/abs/2609.18632

## Preview locally

Run from this directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open http://127.0.0.1:8000. No installation or build step is needed.

## Assets

- `static/images/teaser.png`: the supplied teaser, unchanged.
- `static/videos/demo.mp4`: the supplied demonstration video, unchanged.
- `static/images/framework.png`: Figure 3 extracted from the new paper.
- `static/images/demo-poster.jpg`: a still extracted from the supplied video.

The page uses the original Bulma layout and local assets. Its paper information,
abstract, method, conference, author affiliations, and citation come from the
provided arXiv PDF. The Paper button points to the new paper.
No unverified code repository is linked.

Page template adapted from [Nerfies](https://nerfies.github.io/).
