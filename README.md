# Open Safety Project

Scalable community and research infrastructure for independent AI safety research.

This repo turns an open-source repository into a structured apprenticeship: every
GitHub issue is a self-contained experiment that a newcomer can claim, run, and carry
through to publication, with a mentor reviewing and integrating the work.

## Landing page

[`index.html`](index.html) is a single-file, dependency-free landing page in the
editorial style of *The Intercept*. It includes graphs and plain-language explainers
for people trying to get started in AI safety:

- **The onboarding gap** — a funnel chart of where newcomers drop off.
- **Start here** — a one-minute explainer, a field map (Evals + Mech Interp
  highlighted as the tracks you can start on today), a plain-language glossary, and a
  "your first two weeks" pathway.
- **The experiment lifecycle** — the draft → claim → run → review → integrate →
  publish pipeline, colour-coded by role.
- **Proof of concept** — the `temporal-awareness` cohort timeline (20 fellows,
  Jan–Jun) with animated stats.
- **Start your own project** — a mentor-facing pitch with six reasons to run a
  research line as an issue-as-experiment apprenticeship instead of ad hoc.

### View it

Open `index.html` in any browser, or serve the folder:

```bash
npx serve .
```
