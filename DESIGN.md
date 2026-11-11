---
name: fuet.ch
description: A blog in one calm reading column, cream and coffee with one orange.
colors:
  accent: "#ff4f00"
  link: "#c2410c"
  link-dark: "#ff4f00"
  ink: "#201515"
  ink-dark: "#fffefb"
  body: "#605d52"
  body-dark: "#c5c0b1"
  canvas: "#fffefb"
  canvas-dark: "#1a1210"
  canvas-soft: "#f8f4f0"
  canvas-soft-dark: "#241c19"
  hairline: "#c5c0b1"
  hairline-dark: "#3a332d"
  border: "#939084"
  border-dark: "#807d72"
  selection: "#ffe3d5"
  selection-dark: "#7c2d12"
  band: "#201515"
  band-dark: "#241c19"
typography:
  display:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 7vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: "clamp(2rem, 5.2vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  numeral:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1
    fontFeature: "tnum"
  numeral-wide:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1
    fontFeature: "tnum"
  section:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.25
  wordmark:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
  neighbour:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  excerpt:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
  meta:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  meta-small:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.45
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.9em"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "6px"
  md: "12px"
spacing:
  gutter: "clamp(1.25rem, 5vw, 2rem)"
  page: "72rem"
  column: "40rem"
  flow: "1.25em"
  row: "2rem"
  year: "3.5rem"
  post-foot: "4rem"
components:
  wordmark:
    textColor: "{colors.ink}"
    typography: "{typography.wordmark}"
    padding: "0.75rem 0"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.meta}"
    padding: "0.6rem 0"
  theme-select:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.meta}"
    rounded: "{rounded.sm}"
    height: "2.75rem"
    padding: "0 2rem 0 0.75rem"
  skip-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 0.75rem"
  year-numeral:
    textColor: "{colors.accent}"
    typography: "{typography.numeral}"
  post-row-title:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
  neighbour-link:
    textColor: "{colors.ink}"
    typography: "{typography.neighbour}"
  quote-panel:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "1.1rem 1.4rem"
  code-block:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.md}"
    padding: "1rem 1.25rem"
  code-inline:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.sm}"
    padding: "0.1em 0.3em"
  chart-plate:
    backgroundColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "0.75rem"
  footer-band:
    backgroundColor: "{colors.band}"
    textColor: "{colors.canvas-soft}"
    typography: "{typography.meta}"
    padding: "2.5rem 0"
---

# Design System: fuet.ch

## Overview

**Creative North Star: "Only the Post"**

fuet.ch is a blog where the page is the post. One calm reading column sits on a warm cream ground, framed by a slim masthead at the top and a dark coffee band at the bottom. On wide screens the frame uses the width: lists show each post's cover beside its row, and a post puts its cover beside the title and a contents list beside the text. Nothing competes with the text: no cards, no motion.

The mood is warm and quiet. Coffee-brown ink on cream, one electric orange used sparingly, and soft cream panels for quotes and code. The visitor is here to read, so every choice serves a long text on a phone or a laptop: an 18 px body, a line height of 1.6, and a column about 70 characters wide.

The palette derives from the Zapier DESIGN.md in VoltAgent/awesome-design-md; the dark values come from the sister site arc.fuet.ch.

**Key Characteristics:**
- A 72 rem page for the masthead, lists and post header; a 40 rem reading column for text.
- Warm cream and coffee neutrals; one orange accent.
- Bricolage Grotesque for headings, the wordmark and year numerals; the system font for reading.
- Light and dark themes with the same structure; Auto is the default.
- Flat surfaces. Depth comes from tone, not shadows.
- No motion beyond hover and focus states.

## Colors

Warm neutrals with a single orange. Every colour has a light and a dark value, set together with CSS `light-dark()`. The theme follows the system (Auto) unless the visitor picks Light or Dark, which sets a `data-theme` attribute on the root element.

### Primary
- **Electric Orange** (`accent`, #ff4f00): year numerals, the dot in the wordmark, focus rings, the text cursor, and the 2 px underline that appears when a post title is hovered. It is the same value in both themes. On the cream canvas it reaches only 3.27:1, so in the light theme it never colours body-size text.
- **Burnt Orange** (`link`, #c2410c): links in running text in the light theme (5.13:1 on the canvas, 4.73:1 on a soft panel). In the dark theme links use Electric Orange (`link-dark`), which reaches about 5.6:1 on the dark canvas.

### Neutral
- **Coffee Ink** (`ink`, #201515; dark: `ink-dark`, #fffefb): body text, headings, navigation links, post titles in lists.
- **Warm Grey** (`body`, #605d52; dark: `body-dark`, #c5c0b1): meta lines (author, date, reading time, post counts), captions, list markers.
- **Cream Canvas** (`canvas`, #fffefb; dark: `canvas-dark`, #1a1210): the page ground. The dark value is a coffee brown, not black.
- **Soft Cream** (`canvas-soft`, #f8f4f0; dark: `canvas-soft-dark`, #241c19): panels for quotes, code blocks and inline code.
- **Hairline** (`hairline`, #c5c0b1; dark: `hairline-dark`, #3a332d): decorative 1 px rules only: the rule above the post footer and horizontal rules in posts.
- **Control Border** (`border`, #939084; dark: `border-dark`, #807d72): the border of the theme select and the scrollbar thumb. It keeps 3:1 against the canvas, which a hairline does not.
- **Selection** (`selection`, #ffe3d5; dark: `selection-dark`, #7c2d12): the text selection background, with ink text on top.
- **Band** (`band`, #201515; dark: `band-dark`, #241c19): the footer band. Its text is cream in both themes.

### Named Rules
**The Large Orange Rule.** In the light theme, Electric Orange is for large text (the 2 rem year numerals), the wordmark dot and focus rings. Body-size links use Burnt Orange.

**The Paired Value Rule.** A new colour is added as one `light-dark()` pair on the root. No colour is set for one theme only.

**The Two Borders Rule.** Use `hairline` for decoration and `border` for anything a visitor must see to operate a control.

## Typography

**Display Font:** Bricolage Grotesque Variable, self-hosted (with system-ui, sans-serif)
**Body Font:** the system font stack (system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif)
**Mono Font:** the system monospace stack (ui-monospace, SFMono-Regular, Menlo, Consolas, monospace)

**Character:** Bricolage gives headings and numerals a warm, slightly irregular voice. The system font keeps long text familiar and costs no download. Only one font file is loaded, and it is preloaded.

### Hierarchy
- **Display** (700, clamp(2.25rem, 7vw, 3.5rem), 1.05, -0.025em): the post title. Balanced wrapping; long German words may hyphenate.
- **Headline** (600, clamp(2rem, 5.2vw, 4rem), 1.08): the page heading on home, tag, author, privacy and 404 pages.
- **Numeral** (700, 2rem, 1, tabular figures): the year in a post list, in Electric Orange.
- **Section** (650, 1.75rem, 1.2, -0.01em): second-level headings inside a post.
- **Title** (600, 1.375rem, 1.25): a post title in a list. Third-level headings inside a post use the same size at weight 650 and line height 1.2.
- **Wordmark** (700, 1.5rem, 1, -0.01em): "FUET." in the masthead.
- **Neighbour** (600, 1.125rem, 1.3): the Older and Newer post links at the end of a post.
- **Body** (400, 1.125rem, 1.6): running text. The column holds about 70 characters per line. Paragraphs use `text-wrap: pretty`.
- **Excerpt** (400, 1.0625rem, 1.5): the excerpt under a post title in a list.
- **Meta** (400, 1rem, 1.6): author and date lines, navigation, footer text. A smaller step (0.9375rem, 1.45) serves captions and the meta line in list rows.
- **Mono** (400, 0.9em, 1.5): inline code and code blocks.

### Named Rules
**The Two Voices Rule.** Bricolage Grotesque speaks in headings, the wordmark, year numerals and neighbour links. Everything a visitor reads at length is in the system font. No Inter, no Degular, no third family.

**The Sentence Case Rule.** Headings and labels are in sentence case at normal letter spacing. Nothing is set in uppercase with wide tracking.

## Layout

Every page sits in one centred frame, 72 rem wide, with a gutter of clamp(1.25rem, 5vw, 2rem) on each side. The masthead, the main content and the footer content all start at its left edge. Running text never grows wider than the 40 rem reading column. The page is a three-row grid (masthead, content, footer) at least as tall as the viewport, so the footer band sits at the bottom on short pages.

Rhythm inside a post is relative to the text: 1.25em between blocks, 2.25em above a heading and 0.6em below it, 2.5em around a horizontal rule. Lists of posts use fixed steps: 2.5rem between posts, 3.5rem between years, and clamp(2.5rem, 7vw, 4rem) under the page heading. The post footer starts 4rem below the text. Main content has clamp(1.5rem, 5vw, 3.5rem) above it and 5rem below.

Responsive changes:
- From 62rem up, each year numeral sits in its own 9rem column and stays in view (sticky) while its posts scroll. A post puts its title and cover side by side, the cover at 3:2, and shows a sticky contents list to the right of the reading column when the post has three or more top-level headings.
- From 40rem up, a row in a post list shows its cover at 3:2 in a 15rem column on the right. Below that the cover sits above the row at 2:1. Rows without a cover are text only.
- From 42rem to 62rem, the cover image on a post is cropped to 2:1 so the first paragraphs stay on the first screen.
- Up to 40rem, post text hyphenates automatically, because long German words would otherwise leave ragged lines.
- Up to 30rem, the Older and Newer links stack in one column and both align left.

Touch targets: the theme select is 2.75rem (44 px) high, and navigation links carry vertical padding to reach a similar height.

## Elevation & Depth

The system is flat. There are no shadows anywhere. Depth comes from tone: Soft Cream panels sit one step off the canvas, and the footer band is the one dark surface. Separation inside the column comes from space first and a 1 px hairline second.

### Named Rules
**The No Shadow Rule.** No surface casts a shadow, at rest or on hover. If something must stand apart, give it the Soft Cream ground or more space.

## Shapes

Two radii and nothing else. Images, quote panels and code blocks have gently rounded corners (12 px). Controls, inline code, the skip link and focus rings have tighter corners (6 px). There are no pills and no circles.

Borders are rare: the theme select has a 1 px Control Border, and hairlines appear only as horizontal rules. Panels have no border; their tone is enough. The focus ring is a 2 px Electric Orange outline, 3 px away from the element.

Images in a post are centred in the column. Cover and post images take the 12 px radius. Charts saved as SVG get a white ground with 0.75rem padding so that their dark ink stays readable in the dark theme.

## Components

The site has few components, and all are quiet. Text does the work; controls stay out of the way.

### Masthead
- **Structure:** wordmark on the left, the Portfolio link and the theme select on the right, in one row with 1rem vertical padding.
- **Wordmark:** "FUET" in ink with a final dot in Electric Orange. No underline. It links to the home page.
- **Navigation links:** ink, 1rem, underlined (1 px, offset 0.18em). The underline thickens to 2 px on hover.

### Theme select
- **Style:** a native select with its own look: canvas ground, ink text, 1 px Control Border, 6 px radius, 2.75rem high, padding 0 2rem 0 0.75rem.
- **Chevron:** drawn in CSS from two 1.5 px ink borders, rotated 45 degrees. It is not an icon font or an image.
- **Options:** Auto, Light, Dark. Auto is the default and stores nothing. The select is hidden until its script runs, so it never appears without working.
- **Focus:** the shared 2 px orange ring.

### Links
- **In text:** Burnt Orange in light, Electric Orange in dark; always underlined (1 px), 2 px on hover.
- **In meta lines:** ink, underlined, so that the meta line stays one calm grey-and-ink line.
- **Titles in lists and neighbour links:** ink with no underline at rest; on hover a 2 px Electric Orange underline appears.

### Post list (home, tag, author)
- **Structure:** posts grouped by year, newest first. Each year has an orange numeral and a list of rows.
- **Row:** title (Title style), excerpt (Excerpt style), then a small meta line with authors and date. The post's cover, if it has one, is shown with 12 px corners and links to the post; it is hidden from screen readers because the title link already goes there. No card, no border, no background.
- **Page heading:** a Headline, with an optional meta line under it (post count, author bio) at 0.75rem distance.

### Post page
- **Head:** the title in Display, a meta line 1.25rem below (authors, date, reading time), then the cover image 1.75rem below that.
- **Captions:** centred, Warm Grey, 0.9375rem, upright, 0.6rem under the image.
- **Quote panel:** Soft Cream ground, 12 px radius, padding 1.1rem 1.4rem. No side stripe and no quotation mark.
- **Code:** blocks on Soft Cream with 12 px radius and padding 1rem 1.25rem, scrolling sideways when needed; inline code on Soft Cream with 6 px radius.
- **Foot:** a hairline, then "Written by" and "Filed under" meta lines, then the Older and Newer links in two columns, the newer one aligned right.

### Footer band
- **Style:** full-width band in the Band colour with 2.5rem vertical padding. Cream text at 1rem; the site description on the left, Privacy and RSS links on the right. On narrow screens the two parts wrap.
- **Links:** cream and underlined.

### Skip link
- **Style:** ink ground, canvas text, 6 px radius. It sits off-screen and moves to the top left when it receives focus.

## Do's and Don'ts

### Do:
- **Do** keep running text in the 40 rem reading column with 18 px body text and a line height of 1.6.
- **Do** use Bricolage Grotesque Variable for headings, the wordmark and year numerals, and the system font stack for everything else.
- **Do** use Burnt Orange (#c2410c) for links in body text in the light theme, and Electric Orange (#ff4f00) for links in the dark theme.
- **Do** define every colour as a `light-dark()` pair, and check both themes.
- **Do** use 12 px corners for images and panels, and 6 px corners for controls, inline code and focus rings.
- **Do** separate things with space first, then a Soft Cream panel, then a 1 px hairline.
- **Do** show a 2 px Electric Orange focus ring, 3 px away from the element, on everything that takes focus.
- **Do** set the `lang` of each post on its title and its text, so hyphenation is correct.

### Don't:
- **Don't** use Electric Orange for body-size text on the cream canvas; it reaches only 3.27:1.
- **Don't** use Inter, Degular or any other web font. One font file is loaded and no more.
- **Don't** use pill shapes, or any radius other than 6 px and 12 px.
- **Don't** add shadows.
- **Don't** add motion beyond hover and focus states: no transitions on load, no scroll effects.
- **Don't** turn the post list into a card grid. Covers sit beside rows; they do not become tiles.
- **Don't** use a hairline as the border of a control; use the Control Border.
- **Don't** load anything from another server: no font services, no embeds, no analytics.
