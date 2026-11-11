---
version: 1
slug: "src-pages-slug-astro"
primary_target: "src/pages/[slug].astro"
related_targets: ["src/pages/index.astro"]
---

# Blog surfaces: post page, home, tag, author

Scope: `/<slug>/` post pages, the home list, tag and author lists, privacy and 404. Visitor mode: Read.

Audience and job: a reader who followed a link to one post, on a phone or laptop, and wants to read it without friction; then maybe find more by the same author or tag. Content: 15 existing posts, mostly German, with images, captions, quotes and a few charts. Constraints: English interface, no client JavaScript except the theme switch, no third-party requests, WCAG 2.2 AA, almost no motion.

## Direction contract

THESIS: A blog that is only the post. One calm text column inside a frame that belongs to fuet.ch. It refuses the card grid that every blog theme ships; covers sit beside rows of a dated index instead.

OWN-WORLD: Warm cream ground (#fffefb), coffee ink (#201515), one electric orange (#ff4f00) kept for large numerals, the wordmark mark and focus rings; burnt orange (#c2410c) for links. Bricolage Grotesque for headings and numerals, system sans for reading. 12 px corners, cream-soft panels for quotes and code, a coffee-ink footer band. Dark theme in coffee brown (#1a1210).

STORY: The reader lands on a post, sees title, author and date, and reads. At the end they find the next post, the author and the tag. On the home page they see the whole blog as a dated index and pick by title.

FIRST VIEWPORT: Post page: slim masthead (wordmark left, Portfolio link and theme switch right), then the title in Bricolage at 2.25–3.5 rem, a meta line (authors, date, reading time), the cover image, and the first paragraphs at 18 px in a 38 rem column. Home: a one-sentence statement of what the blog is, then the index grouped by year, each year a large orange numeral beside its rows of title, excerpt, author and date.

FORM: A dated index and a single reading column, as the plan pins them. seed: none (pinned) — "Home is a plain list (title, excerpt, author, date), not a card grid. Post pages have a single text column, cover image, author line and tags. Tag and author pages reuse the home list." and "Start from the Zapier DESIGN.md … Headings use Bricolage Grotesque Variable … body text uses the system font stack."

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Changed on 2026-11-11 at the user's request: the lists show each post's cover again ("the old startpage was cool because it still had images") and desktop uses more of the width (72 rem frame, 40 rem reading column, cover beside the title, contents list beside the text).

Unresolved: privacy notice language (English for now); whether guest authors get a bio and photo.
