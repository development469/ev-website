# ev — static site

Plain HTML/CSS/JS, no build step — same approach used for the Conexus Social
Responsibility Services site (static, deployed on Netlify).

## Preview it

Just open `index.html` directly in a browser, or run a simple local server
(e.g. VS Code's "Live Server" extension, or `npx serve` if you have Node) —
either works since there's nothing to compile.

## Structure

- `index.html`, `brand-story.html`, `bespoke.html`, `collection.html`,
  `projects.html`, `contact.html` — one file per page, header/footer repeated
  in each (no templating layer, matches the Conexus build).
- `css/style.css` — all styling and design tokens (brass / rust / ivory / sand
  / moss palette, Fraunces + Work Sans).
- `js/data.js` — **the single place to add photos.** Add an entry to
  `COLLECTION_ITEMS`, `PROJECT_ITEMS`, or `CERTIFICATIONS` with an `image`
  path, drop the file in the matching `images/` subfolder, and the gallery
  on that page updates automatically — no HTML editing needed, same
  auto-populating gallery pattern used on Conexus's Foundation and Service
  project pages.
- `js/gallery.js` — renders the galleries from `data.js` and handles the
  mobile nav toggle.
- `images/` — subfolders for hero, collection, projects, founders, certs.
  Empty for now; placeholder tiles show until real photos are dropped in.

## Deploying

Drag the whole folder into Netlify (or connect it to a GitHub repo) — no
build command needed, publish directory is the project root.

## Still needed from the client

- Logo files (vector, plus a light/white variant for dark sections)
- Product photography, names, categories, materials, customisation options,
  pricing/enquiry model
- Certification/export-mark logos
- Founder photos (Jimmy / Ajay Gupta and Adi / Aditi Gupta)
- Hero imagery (3–5 hi-res shots)
- Phone number, email, social handles
- Project/showroom photography
- Confirmation on how the contact and bespoke-enquiry forms should route

## Working on this with Claude Code

Point Claude Code at this folder and describe changes directly — e.g. "add
these 6 product photos to the collection" (just update `js/data.js` and
`images/collection/`) or "add a lightbox when you click a gallery image."
It edits the specific file, not the whole site.
