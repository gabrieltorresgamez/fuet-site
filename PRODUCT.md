# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Students and people interested in data science, mostly German-speaking. They arrive from a shared link or a search result to read one post, usually on a phone or laptop, and sometimes browse on to other posts by the same author or tag.

Second audience: the authors. Gabriel Torres Gamez owns the blog and writes most of it; six guest authors have posts on it. Authors publish by adding a Markdown file and making a Git commit.

## Product Purpose

fuet.ch is Gabriel Torres Gamez's blog with guest authors. It holds 15 posts from 2022–2023 about hackathons, study challenges and learning, and it is becoming an active blog again after the move from Ghost to a static site.

Success means: every existing post stays readable at its current URL, a new post takes one Markdown file and one commit, and a reader can read a long post comfortably without anything getting in the way.

## Positioning

A personal blog that asks nothing of the reader: no account, no newsletter prompt, no cookies, no tracking, no third-party requests. Everything is served from one server in Switzerland.

## Operating Context

- Posts live in the Git repo as Markdown, one folder per post with its images.
- The site is built with Astro into static HTML and served by nginx in Docker on a homelab, published through Pangolin, the same pattern as arc.fuet.ch.
- Pangolin geoblocks by country. Visitors from blocked countries, including most search-engine and link-preview crawlers, do not reach the site.
- Readers also follow the RSS feed at `/rss/`.

## Capabilities and Constraints

- Pages: home (post list, newest first), post, author, tag, privacy notice, 404, RSS feed, sitemap.
- All current URLs keep working: `/<slug>/`, `/author/<slug>/`, `/tag/<slug>/`, `/rss/`. `/privacy-policy/` redirects to `/privacy/`.
- Interface language is English (navigation, dates, labels). Posts are mostly German, some English; each post declares its language so hyphenation and screen readers are correct.
- No client JavaScript except the theme switch and a few lines that skip the cover transition when the cover or its thumbnail is out of view. No cookies. No third-party requests: fonts, images and scripts are self-hosted, and embeds in old posts become plain links.
- No members, newsletter, comments or search.
- The privacy notice follows the Swiss FADP. The only personal data processed is request logs (kept 7 days) and the authors' names, bios and photos.
- Undecided: whether old posts get light edits (typos, dead links) during migration or stay as they are.
- Undecided: whether the privacy notice is German, English or both.
- Undecided: which guest authors keep a bio and photo; each of the six is asked first. Until then, only their name appears on their posts.

## Brand Commitments

- Name: fuet.ch. Sister site: arc.fuet.ch; the two should look related.
- Visual starting point is the Zapier-derived DESIGN.md in this repo: warm cream canvas, coffee ink, one orange accent (`#ff4f00`), 12 px radius, no pills.
- Headings in Bricolage Grotesque Variable, self-hosted; body text in the system font stack. No Inter.
- Theme switch with Light, Dark and Auto; Auto is the default. Dark uses arc.fuet.ch's coffee-brown values.

## Evidence on Hand

- 15 published posts, 7 authors and 4 tags (Hackathon, Learning, Challenges and Mini-Challenges, Others) on the live Ghost site. They are not in this repo yet; the Ghost export and image copy are still to do.
- The arc.fuet.ch repo (`gabrieltorresgamez/arc-guide`) for the privacy notice text, nginx config and dark theme values.
- No testimonials, reader numbers or analytics exist. Do not invent any.

## Product Principles

1. The post is the product. Everything else on the page serves reading it.
2. Old links never break.
3. Nothing leaves the server: no third parties, no tracking, no cookies.
4. Publishing is a Markdown file and a commit. No admin panel, no database.
5. Add nothing until a real need shows up.

## Accessibility & Inclusion

WCAG 2.2 AA. Body text links must reach 4.5:1 contrast, so the orange accent is not used for body-size text on the cream canvas. Each post carries its own `lang`.
