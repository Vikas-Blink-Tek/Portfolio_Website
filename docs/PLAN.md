# Vikas Maurya — Interactive 3D Portfolio: Phase 1 Analysis & Production Plan

Status: **awaiting approval**. No website code has been written.

Inputs analysed in this pass:

| # | Input | Status |
|---|-------|--------|
| A | Asset concept sheet (11 panels: hero character, environment, 3D type, developer/security/project/nav/timeline/achievement/env/mobile assets) | Received, analysed |
| B | Facial reference sheet (6 photo refs, 7 turnaround views, 9 detail crops, 6 expressions, accessories, material swatches) | Received, analysed |
| C | Google Stitch HTML/Tailwind/Three.js prototype | Received, analysed |
| D | Existing `.glb` models | Received: 5 models, see `GLB_REPORT.md` |
| E | Resume / CV | **Not received** |
| F | Raw, unedited photographs | **Not received.** Only the composited sheet B |

---

## 0. Blocking gaps and contradictions (resolve before Phase 2)

1. **Name mismatch.** The master prompt is titled *"SUSHANT 3D INTERACTIVE PORTFOLIO"*. Every attachment says **Vikas Maurya**. This plan uses *Vikas Maurya*. Please confirm.
2. ~~No GLB models attached.~~ Received and analysed in `GLB_REPORT.md`.
3. **No resume.** The only professional facts available come from sheet A (listed in §0.1). The Stitch prototype adds many claims that appear in **no** source. They're listed in §0.2 and must not ship until you verify them.
4. **Reference sheet B is partly synthetic.** REF 01–06 look like real photographs. The turnaround row and the expression row look AI-generated or AI-retouched (lighting and hair are too consistent, and the skin is smoothed). AI views drift from the real face, so they're a weak modelling source. **I need the original photographs** (front, both 3/4 views, both profiles, and one from slightly above), ideally uncompressed and without beauty filters.

### 0.1 Facts established from the attachments (source of truth for now)

- Name: **Vikas Maurya**
- Tagline (sheet A, panel 03): **BUILD · BREAK · SECURE**
- Timeline (sheet A, panel 08):
  - 2022: Mindler, Intern
  - 2023: B.Sc. IT degree
  - 2024: MBVV Police Cyber Cell
  - 2025 to present: Blink Technologies, Senior Developer
- Projects (sheet A, panel 06):
  1. MBVV Workforce Portal, *Security Dashboard*
  2. Finance Leads Management, *CRM System*
  3. Universal File to JSON, *File Converter*
  4. Keylogger Research, *Malware Analysis*
  5. Health Insurance AI Chatbot, *AI/ML Chatbot*
- Achievements (sheet A, panel 09):
  - Hackathon Top 30
  - "1000+ CTF Participants" (wording is ambiguous: you placed in a CTF of 1000+ people? organised one?)
  - Letter of Recommendation
  - Responsible Disclosure
  - Certifications & Badges (which ones?)
- Tech shown (sheet A, panel 04): React, Node, Python, TypeScript, databases, APIs/cloud

### 0.2 Stitch-prototype claims NOT backed by any attachment (treat as placeholder)

- "Mumbai, India" location, lat/long coordinates, "University of Mumbai"
- "Official Commendation" / "MBVV Police Commendation" (sheet A says *Letter of Recommendation*)
- "Hall of Fame mentions", "Coordinated fixes: 100%"
- All metrics: "12.4K recs/sec", "42ms/MB", "99.98%", "98.4% embedding accuracy", "18ms", "240 req/s", "42 active nodes"
- Per-project stacks (FastAPI, LangChain, MySQL, Pinecone, Ghidra/IDA, gRPC, AWS Lambda …) and roles ("Lead Architect")
- `contact@vikasmaurya.dev`, the PGP fingerprint, and generic github.com / linkedin.com links
- "Offensive Security × System Architect", "Red // Purple team", "Available for select commissions"
- Mindler work description, Blink Technologies work description

I need the resume plus one line from you on each project (role, stack, links, and anything that can't be shown publicly, e.g. police work under confidentiality).

---

## 1. Analysis of the visual references

### Sheet A: asset concept sheet

**What it gets right, and what we'll keep:**
- Material language: raw concrete, brushed/polished steel, black glass, and **one** emissive burnt-orange accent drawn as thin lines, seams and cores. It reads as sculptural and premium, not neon.
- Recurring forms: fractured concrete cubes, a floating rock platform, thin orbital rings, and a concrete monolith with an orange seam. Together these make a coherent world with the vocabulary "structure, fracture, reassembly".
- The **BUILD / BREAK / SECURE** triad. It's the strongest narrative idea in the whole package: developer (build), security researcher (break), defender (secure). It gives us the spine of the scroll story (§12).
- Hero poses: the seated-on-concrete-block pose with a laptop is the strongest composition. It's personal, it says "developer", and it grounds the character physically.

**What to cut or change:**
- Panels 04/05 (3D React/Node/Python/TS logos, database cylinders, cloud, "vulnerability" shattered sphere, face-recognition mesh, threat-scanner eye, OSINT network) are exactly the "objects because they look cool" the brief warns against. Tech logos belong in HTML/SVG. Most security icons are clichés, so keep only the ones that carry a project (§6).
- Panel 07 (3D navigation icons): navigation stays HTML.
- Panel 09 (trophy, crowd of figures, 3D certificate): use HTML with small SVG marks. A 3D trophy works against the premium tone.
- Sheet A uses a **light warm-grey** background. The brief asks for a dark environment. Recommendation: **dark world with warm-white light**. The concrete and steel keep the sheet's palette, lit on near-black, and warm white is reserved for text and key light.

### Stitch prototype (sheet C)

| Aspect | Verdict |
|---|---|
| Colour tokens (near-black `#131315` surfaces, burnt orange `#ff562f`/`#ff4d24`) | **Keep**, consolidated into one accent (§17) |
| Typography (Syne / Space Grotesk / JetBrains Mono) | **Keep with changes** (§18). Mono is overused |
| Section order (Identity → Work → Security → Timeline → Ecosystem → Connect) | Useful content inventory. Replace with the cinematic journey in §12 |
| HUD language ("SYS.STATUS", "TELEMETRY 60FPS", "CLEARANCE LEVEL 04", "TRANSMIT TELEMETRY PACKET", coordinate readouts, "PRESS [K]") | **Remove.** This is the hacker-dashboard look the brief rules out |
| Fabricated metrics and credentials | **Remove** (§0.2) |
| Three.js r125 from a Google CDN, geometric bust made of primitives | **Replace entirely.** Outdated version, bust isn't recognisable, no loading/LOD/fallback |
| Tailwind Play CDN, inline scripts, `href="#"` nav, fake form submit | Prototype-only. Rebuild in Next.js |
| Fixed full-viewport canvas behind HTML sections | **Keep the concept**: one persistent canvas with semantic HTML over it |

---

## 2. Analysis of the photographs (from sheet B)

Judged across REF 01–06 (real photos) first, with the turnaround views as secondary evidence.
Fine-grained asymmetry **can't be confirmed from a compressed composite**. The items marked ⚠ need the raw photos.

| Feature | Observation (consistent across references) |
|---|---|
| Age read | Early twenties. Do not age up or down |
| Head / face shape | Lean **oval**, longer than wide. Face narrows gradually to a **moderately pointed chin**. No wide, square jaw |
| Forehead / hairline | Medium-height forehead, mostly covered by fringe. Hairline fairly straight with slight temple recession ⚠ |
| Hair | **Dark brown to black, straight, thick.** Longer on top and pushed **forward**, fringe falling over the forehead and sweeping slightly to one side. **Short tapered sides**, slightly longer behind the ear. The most recognisable silhouette cue after the glasses |
| Eyebrows | Dark, **medium-thick**, fairly **straight with a soft late arch**. Inner ends fuller, tapering outward. Brows sit close to the eyes |
| Eyes | **Dark brown**, almond-shaped, medium size (do **not** enlarge). Visible upper lid crease, slightly hooded outer corners. Medium spacing, roughly one eye-width apart |
| Nose | **Straight bridge**, moderately prominent in profile. Medium-width alar base. Tip slightly rounded and slightly downturned. A key likeness feature: **do not narrow or shorten it** |
| Nose-to-mouth | Philtrum of medium length, partly under the moustache |
| Cheeks | Lean. Cheekbones present but not high or sculpted. Slight hollow under the cheekbone in 3/4 view |
| Mouth / lips | Medium width, about the pupil-to-pupil distance. **Upper lip thinner than lower lip**. Relaxed neutral mouth, not pursed |
| Jaw / chin | Defined but slim jawline. Jaw angle sits fairly low and soft. Chin projects slightly in profile |
| Ears | Medium size, **slightly protruding** from the head (visible in the front views). Attached lobes ⚠ |
| Facial hair | **Thin, light moustache** and **sparse stubble** on chin/jaw. Not a beard. Keep it sparse. Over-densifying it would change the likeness |
| Skin | **Medium, warm** undertone. Natural texture with minor marks. No airbrushing |
| Glasses | **Thin black metal frame, rounded-rectangle lenses** (REF 01/03/05). Signature accessory. Alternate: gold-frame aviator sunglasses (REF 06) |
| Build | Slim. Hands and wrists are lean. Watch on the left wrist (sheet A) |
| Wardrobe (sheet A) | **Black zip hoodie, white crew tee, black cargo pants, white sneakers.** Keep this as the canonical outfit. It's consistent, simple, and reads well against concrete |
| Asymmetry | Hair sweep direction, uneven brow height, and the smile (REF 05) look slightly uneven ⚠. Preserve whatever the raw photos show and **never mirror half the face** |

---

## 3. Recommended 3D character direction

**"Realistic sculpture."** Real proportions taken from the photo-matched head, then rendered as a slightly simplified, cast-material piece:

- Realistic geometry, simplified surfaces: skin keeps real colour variation but uses a restrained roughness map and **no pore-level microdetail**, so it doesn't fall into the uncanny valley at web resolution.
- **Hair as sculpted clumps** (mesh strands grouped into 20–40 stylised locks), not hair cards and not a solid helmet. This matches "stylised premium" and stays cheap to render.
- Clothing is simplified: clean folds baked into a normal map, matte fabric materials.
- Lighting does the premium work: warm-white key, cool fill, and a thin **orange rim** from the environment accent.
- Detail hierarchy follows the brief: face → head/hair → glasses → hoodie → body → environment.

### Poly / texture budget

| Part | Desktop LOD0 | Mobile LOD1 | Textures (desktop / mobile) |
|---|---|---|---|
| Head + face (incl. eyes, brows, lashes as mesh) | 14–18k tris | 6k | 2048 / 1024 base, normal, ORM |
| Hair | 6–8k | 2.5k | 1024 / 512 |
| Glasses (separate) | 1.5k | 0.6k | material only, no textures |
| Body + clothing | 10–14k | 4k | 2048 atlas / 1024 |
| **Total** | **≤ 40k** | **≤ 13k** | KTX2 (ETC1S for colour, UASTC for normals) |

Target file size: ≤ 3.5 MB desktop and ≤ 1.2 MB mobile (meshopt + KTX2).

---

## 4. Character modelling workflow

1. **Photo capture** (you): 12–20 shots under even daylight, a fixed focal length (~50 mm equivalent, phone 2×), hair in its usual style, glasses **off** for the face shots and **on** for 3 extra shots. Include a neutral expression plus one smile.
2. **Head base.** **KeenTools FaceBuilder for Blender** fits a topology-clean head to your photos. The alternative is **Character Creator 4 + Headshot 2**, which gives an auto-rigged body and ARKit blendshapes but carries a licence cost. MetaHuman is too heavy for WebGL even after decimation, so it's not recommended.
3. **Likeness pass in Blender sculpt mode.** Compare against the real photos only (not the AI views), using camera-matched overlays of the photos. Fix the nose, jaw and ears first, since that's where automated fitters drift.
4. **Stylisation pass.** Soften secondary forms slightly and simplify the hair into sculpted locks. Don't touch primary proportions.
5. **Retopology** to about 16k tris with animation-friendly edge loops around the eyes and mouth.
6. **Texturing** (Substance Painter or Blender): project the photo albedo, then clean it. Do **not** whiten or smooth the skin tone.
7. **Body + clothing**: base from CC4 or MakeHuman, retopologised. Hoodie/cargo via Marvelous Designer or sculpt, baked to low poly.
8. **Rig**: humanoid skeleton (Mixamo-compatible naming), plus `head`, `neck`, `eye_L`, `eye_R` bones, plus **ARKit-subset blendshapes**: `eyeBlink_L/R`, `eyeSquint_L/R`, `browInnerUp`, `mouthSmile_L/R`, `jawOpen` (small).
9. **Export** as glTF 2.0, then optimise with `gltf-transform` (dedup, prune, weld, meshopt, KTX2), producing LOD0 and LOD1.
10. **Likeness review gate**: you approve turntable renders before any web integration.

### Animation plan (Part 4)

| # | Animation | Implementation | Keep? |
|---|---|---|---|
| 1 | Idle breathing | Baked clip, 4 s loop, chest/shoulder amplitude ≤ 1 cm | Yes |
| 2 | Natural blinking | Blendshape, procedural: random 2–6 s interval, 120 ms, occasional double blink | Yes |
| 3 | Eye movement | Eye bones, procedural saccades toward cursor/target, clamped ±15° | Yes |
| 4 | Subtle head movement | Procedural noise on the head bone, ±2° | Yes |
| 5 | Look at cursor | Head 40% / neck 20% / eyes 100% of the target, damped slerp, clamped ±25° yaw / ±12° pitch | Yes |
| 6–9 | Look L / R / up / down | Same procedural system driven by scene targets. No separate clips needed | Yes (procedural) |
| 10 | Small hand gesture | Mixamo clip, retargeted and trimmed. Used once, in Contact | Yes |
| 11 | Reach toward object | Mixamo clip. Reaches to the laptop lid in Workspace → Projects | Yes |
| 12 | Walking | **Recommend cutting.** Walking in a scroll-scrubbed site looks game-like. The camera moves instead | Cut (revisit) |
| 13 | Transition | Seated → standing clip (Identity → About) | Yes |
| 14 | Neutral standing | Static pose / idle base | Yes |

Seated laptop idle: typing micro-motion (fingers only, low amplitude) plus an occasional glance up at the camera.
`prefers-reduced-motion` keeps only blink and look-at, at reduced amplitude.

---

## 5. Supplied GLB models: see [`GLB_REPORT.md`](GLB_REPORT.md)

Received 5 models, inspected, rendered and trial-optimised.

| Model | Verdict | Role |
|---|---|---|
| Laptop | Keep. Split the lid, replace the screen plane, re-material | Hero prop; Finance Leads CRM; portal into Projects |
| Phone | Keep. Merge 32 primitives into ~3, re-material, new screen plane | Health Insurance AI Chatbot |
| Keyboard | Keep. 64.6k tris / 5 MB, down to ~10k tris / 116 KB; graphite retint; LED becomes the orange accent | Keylogger Research (in a glass case) |
| Headset | Drop (optional background prop) | none |
| Camera | Drop | none |

## 6. Asset inventory: custom / downloaded / procedural / HTML

### Custom modelled (Blender)
- Character (head, hair, glasses, sunglasses variant, body, clothing)
- Concrete block the character sits on (hero seat). Simple, but needs a baked AO texture
- Hero concrete "fractured cube" cluster: pieces that assemble and break apart (BUILD/BREAK), exported as separate chunks

### Supplied GLBs, optimised (§5)
- Laptop, phone, keyboard (monitor if provided)

### Procedural (Three.js / R3F code, zero download)
| Asset | Technique |
|---|---|
| Floating concrete cubes (background) | `InstancedMesh` (1 draw call), shared concrete material + tiling noise normal |
| Orbital rings | `TorusGeometry`, brushed-steel material, 2 rings maximum |
| Orange light seams | Thin boxes/lines with emissive `MeshBasicMaterial`; the only bloom source |
| Experience path | `TubeGeometry` along a `CatmullRomCurve3`, plus a travelling light sprite |
| Security shield (SECURE beat, Responsible Disclosure) | `ExtrudeGeometry` from a 2D shape |
| File → JSON sheets | Instanced thin planes that fold into bracket shapes (vertex shader) |
| Glass containment case (keylogger) | Box with a cheap fake-glass material (no transmission pass on mobile) |
| Rock platform / ground | Low-poly displaced plane + fog falloff |
| Dust particles | ≤ 300 points desktop, 80 mobile, depth-faded. Atmosphere only, **not** decoration |
| Loading object | Wireframe cube assembling. Reuses the cube chunks |

### HTML / CSS / SVG (never WebGL-only)
- Name, role, intro, all navigation
- Every project title, description, role, stack, link
- Timeline entries, achievements, certifications (SVG badges)
- Tech-stack list (SVG logos, not 3D logos)
- Contact links + form
- The "VIKAS MAURYA" wordmark: **HTML typography** in Syne ExtraBold, visually layered with the 3D scene. An optional extruded 3D wordmark (as in sheet A) can live *only* in the loader/intro as a decorative duplicate, `aria-hidden`

### Cut from sheet A
3D tech logos, database cylinders, cloud, threat-scanner eye, face-recognition mesh, OSINT globe, trophy, crowd figures, 3D nav icons, 3D certificate, "vulnerability" shattered sphere (BREAK is carried by the fracturing cube instead).

---

## 7–8. The world: a cohesive environment

**Concept: "The Studio in the Void."** A single brutalist concrete platform floating in dark atmospheric space. It's your personal workspace: one concrete block you sit on, a laptop, a few carefully placed objects. Above and around it hangs a large concrete cube structure that **assembles (BUILD), fractures (BREAK) and reseals with orange seams (SECURE)** as you scroll. Everything is made from the same three materials plus one light colour.

- Rule 1: at most **3 materials** in the whole world (concrete, dark brushed metal, black glass), plus the character.
- Rule 2: the orange accent is **light**, not paint. It appears only as seams, a laptop screen glow, the path light, and the rim light.
- Rule 3: every object answers to a project, the workspace, or the composition.

---

## 9–12. Scene-by-scene concept and scroll choreography

One persistent `<Canvas>`. The HTML sections scroll over it and provide both scroll length and SEO content. A single GSAP ScrollTrigger timeline, scrubbed, drives a normalised `progress` (0 → 1) that every scene reads.

| Scroll | Scene | 3D | HTML overlay | Camera |
|---|---|---|---|---|
| 0.00 | **00 Intro** (plays once, not scroll-bound, skippable) | Darkness → one orange seam line draws across → key light rises on the concrete block | Wordmark fades in; "Scroll / press ↓" cue | Low, tight, slow push-in |
| 0.00–0.12 | **01 Identity (hero)** | You, **seated on the concrete block with the laptop** (sheet A pose 3). Look-at-cursor active. Cube structure intact above, dim | **VIKAS MAURYA** · *Senior Developer & Security Researcher* (wording pending resume) · one-line intro · interaction cue | Cinematic 3/4 low angle, 35 mm, character right-of-centre, text left |
| 0.12–0.25 | **02 Workspace: BUILD** | Camera arcs to over-the-shoulder. Laptop screen glows. Cube chunks drift in and **assemble** above | "BUILD": short statement + dev stack (SVG list) | Orbit 70° around character, descend to shoulder height |
| 0.25–0.32 | **Transition: BREAK → SECURE** | Cube structure **fractures** (chunks separate, orange seams exposed), then **reseals** | "BREAK" / "SECURE": two short statements (research + defence) | Pull back and up to reveal the full structure |
| 0.32–0.60 | **03 Projects** | Character **reaches** to the laptop. Camera pushes *into* the screen, and each project becomes a station on the platform:<br>1. MBVV Workforce Portal → monitor slab with dashboard<br>2. Finance Leads CRM → laptop screen<br>3. Universal File→JSON → paper sheets folding into `{ }`<br>4. Keylogger Research → keyboard in glass containment case<br>5. Health Insurance AI Chatbot → phone with chat UI | Per-project card (title, role, description, stack, links) pinned beside the object | Dolly between stations along a spline. Each station holds ~5% of scroll (pinned) |
| 0.60–0.75 | **04 Experience** | Orange light travels a **path** (tube curve) past four concrete markers: 2022 → 2023 → 2024 → 2025 | Timeline entries appear as the light passes each marker | Tracking shot alongside the path |
| 0.75–0.88 | **05 About** | Character **stands** (transition clip). Close-up on the face, warm key light, glasses catch a highlight | About text, achievements, certifications | Slow push to a medium close-up, 50 mm, eye level |
| 0.88–1.00 | **06 Contact** | Wide pull-back: the whole platform in the void, structure sealed. Character turns to camera with a small gesture | Contact links, email, form | Crane up and back to a wide, calm final frame |

### Camera system (Part 19)
- Each scene defines keyframes `{ position, target, fov }`. Position and target each follow a `CatmullRomCurve3` across the keyframes, so there are no straight-line cuts.
- `progress` maps to curve parameter `t` through per-segment easing (holds at stations, eased travel between them).
- The cursor adds parallax on top: ±0.3 units, damped. It's disabled during pinned project holds so text stays stable.
- Navigation clicks call `gsap.to(window, { scrollTo: sectionAnchor })`. The scroll position stays the single source of truth, so back/forward and deep links (`/#projects`) just work.

---

## 13. Interaction concept (Part 11)

| Input | Response | Intensity |
|---|---|---|
| Cursor move | Eyes (full), head (40%), neck (20%) follow. Camera parallax ±0.3. Dust drifts slightly | Subtle, damped (λ ≈ 4) |
| Cursor idle > 4 s | Character returns gaze to laptop/camera | — |
| Hover a project object | Object lifts 2 cm, its seam light brightens, the HTML card gets focus styling | Small |
| Click a project object | Scroll-to its station, then open the project detail (HTML) | — |
| Keyboard | Tab through all HTML controls; `↑/↓` or `PgUp/PgDn` jump between scenes | — |
| Touch (mobile) | Tap-to-focus; gaze follows the last touch point; no gyro | — |
| "Skip 3D" toggle | Switches to the static HTML layout (§20, fallback) | — |

---

## 14. HTML vs 3D split (Part 14)

The 3D layer is **decorative plus spatial**. The HTML layer is **content plus navigation**. Every word on the page exists in the DOM, server-rendered by Next.js. The canvas is `aria-hidden`, and all interactive 3D objects have HTML equivalents.

---

## 15. Responsive strategy

| Tier | Detection | Scene |
|---|---|---|
| Desktop (≥ 1440, GPU tier ≥ 2) | `detect-gpu` + viewport | Full scene, LOD0, 1 shadow-casting light, selective bloom, 300 particles, DPR ≤ 1.75 |
| Laptop (1024–1439) | viewport | LOD0, no bloom, baked shadows only, DPR ≤ 1.5 |
| Tablet (768–1023) | viewport / touch | LOD1, cube structure simplified (fewer chunks), 120 particles, DPR ≤ 1.5 |
| Mobile (< 768) | viewport / touch | **Separate composition**: portrait framing (character bust, top 55% of screen), one prop per project station, no fracture sim (a 3-step keyframed version instead), 80 particles, DPR ≤ 1.25, no post-processing |
| No WebGL / GPU tier 0 / "Skip 3D" | feature test | Pre-rendered stills (Blender renders of each scene, AVIF) + full HTML content |

Runtime safety: drei `<PerformanceMonitor>` steps quality down (DPR → particles → bloom → shadows) if FPS stays below 45 for 2 s.

---

## 16. Performance strategy (Part 16)

| Budget | Desktop | Mobile |
|---|---|---|
| First load JS (gz, excl. three) | ≤ 200 KB | ≤ 200 KB |
| three + R3F + drei + gsap (gz, lazily loaded after LCP) | ≈ 250 KB | same |
| 3D payload before hero is interactive | ≤ 4 MB | ≤ 1.5 MB |
| Total 3D payload | ≤ 8 MB | ≤ 3 MB |
| Draw calls | ≤ 120 | ≤ 50 |
| Dynamic lights | 1 key (shadowed) + 2 unshadowed + env map | 1 key + env |
| Target | 60 fps | 45–60 fps |
| LCP | < 2.0 s (the HTML wordmark is the LCP element, not the canvas) | < 2.5 s |

Techniques:
- glTF + meshopt + KTX2 via `gltf-transform`
- `useGLTF.preload` for hero assets only; everything else lazy per scene
- `InstancedMesh` for repeated geometry
- Baked AO/lightmaps for all static geometry
- Small prefiltered environment map (256² cube) instead of a 4K HDR
- `frameloop="demand"` when the tab is hidden or the canvas is off-screen
- Selective bloom on emissive layer only (desktop)
- Draco avoided (meshopt decodes faster)

---

## 17. Colour / material direction

| Token | Value | Use |
|---|---|---|
| `--void` | `#0B0B0D` | Page background, fog colour |
| `--surface` | `#141416` / `#1C1B1D` | HTML panels (low opacity, blur) |
| `--concrete` | `#2A2A2C` → `#8E8B86` | 3D concrete (lit range) |
| `--steel` | `#A8ABB3` | Brushed-metal highlights |
| `--warm-white` | `#EDEAE4` | Primary text, key light colour `#F5F3EE` |
| `--grey` | `#9A9794` | Secondary text |
| `--accent` | **`#FF4D24`** (single accent) | Seams, links, focus rings, light path. ≤ 5% of any frame |

Materials:
- **Concrete**: roughness 0.85–0.95, subtle tiling noise normal, baked AO
- **Dark metal**: metalness 0.8, roughness 0.35–0.45
- **Black glass**: faked with env reflection + opacity (no transmission on mobile)
- **Skin**: `MeshPhysicalMaterial` with subtle sheen, no SSS pass (baked SSS tint in albedo)

---

## 18. Typography direction

| Role | Face | Notes |
|---|---|---|
| Display / wordmark | **Syne ExtraBold** | Matches the heavy extruded wordmark in sheet A. Tight tracking (-0.04em), uppercase |
| Headings + body | **Space Grotesk** | Technical but warm, readable at 15–18 px |
| Labels / small meta | **JetBrains Mono** | **Only** for dates, stack tags and section indices. No mono paragraphs, no pseudo-terminal copy |

Self-hosted via `next/font`: no layout shift, subset Latin.

---

## 20–23. Navigation, accessibility, SEO

- **Navigation**: Home · Work · Experience · About · Contact (a fixed minimal bar). Scene progress indicator on the right edge (5 dots). "Skip 3D / simple view" toggle, remembered in `localStorage`.
- **Accessibility**:
  - Semantic landmarks, one `h1`, logical heading order
  - Visible focus rings in the accent colour
  - Contrast ≥ 4.5:1 for all text over the scene (panels get a 70–85% opaque backdrop where needed)
  - `prefers-reduced-motion`: scene-to-scene crossfades instead of camera flights, no fracture animation, parallax off
  - Canvas is `aria-hidden`. Every 3D affordance has an HTML twin
  - WebGL failure falls back to the static stills
- **SEO**:
  - Next.js metadata API (title, description, canonical)
  - Open Graph/Twitter image (a Blender render of the hero)
  - JSON-LD `Person` + `CreativeWork` per project
  - All content SSR'd
  - `sitemap.xml`, `robots.txt`

---

## 21. Recommended project architecture

Stack: current stable **Next.js (App Router) + TypeScript + React 19, React Three Fiber v9, @react-three/drei, GSAP + ScrollTrigger + ScrollToPlugin**, and `@react-three/postprocessing` (desktop only). Styling: Tailwind CSS v4 with the tokens above, or CSS Modules. Either is fine; Tailwind is recommended for continuity with the Stitch prototype.

```
src/
  app/
    layout.tsx            # fonts, metadata, <SceneCanvas/> mounted once
    page.tsx              # semantic sections (SSR content)
    opengraph-image.tsx
  components/
    3d/                   # reusable objects: Character, Laptop, Phone, Keyboard, Monitor,
                          #   ConcreteBlock, CubeStructure, Rings, LightPath, Particles, GlassCase
    ui/                   # Button, Tag, ProjectCard, TimelineItem, SkipToggle
    navigation/           # NavBar, SceneDots
    SceneCanvas.tsx       # <Canvas>, quality tier, fallback boundary
  scenes/
    Intro/ Hero/ Workspace/ Projects/ Experience/ About/ Contact/
                          # each: Scene3D.tsx (objects + local anims), camera keys, overlay section
  animations/
    timeline.ts           # master ScrollTrigger timeline → progress store
    cameraRig.ts          # spline camera from scene keyframes
    character/            # lookAt, blink, idle mixer
  hooks/                  # useProgress, useQualityTier, useReducedMotion, useLookTarget
  data/                   # profile.ts, projects.ts, experience.ts, achievements.ts (from the resume only)
  utils/
public/
  models/{character,devices,environment,props}/   # optimised .glb (LOD0/LOD1)
  textures/  hdr/  images/projects/  images/fallback/
assets-incoming/          # raw source GLBs / photos (git-lfs, not deployed)
```

Every 3D component accepts `position / rotation / scale / visible / quality` plus a `progress` slice, and exposes hover/click callbacks.

---

## 24. Development order

| Phase | Deliverable | Gate |
|---|---|---|
| 1 | This analysis | **You approve** |
| 2 | Final UX spec + copy deck (from the resume) + low-fi storyboard (8 frames) | Approve copy & storyboard |
| 3 | GLB inventory report (§5 run on real files) | Approve keep/drop |
| 4 | Asset sourcing split confirmed (§6) | — |
| 5 | Character: head likeness → turntable renders | **Approve likeness** |
| 6 | Character rig, blendshapes, LODs, optimised GLB | Size/fps check |
| 7 | Next.js skeleton, SSR content sections, tokens, fonts, nav, fallback (fully usable **without** 3D) | Lighthouse ≥ 95 a11y/SEO |
| 8 | Empty canvas: lighting, fog, platform, camera rig, progress store | — |
| 9 | Character in scene, look-at, blink, idle | — |
| 10 | Workspace props + hero composition + intro | **Approve hero** |
| 11 | Cube structure BUILD/BREAK/SECURE | — |
| 12 | Projects stations | — |
| 13 | Experience path | — |
| 14 | About close-up + stand transition | — |
| 15 | Contact + full GSAP timeline pass | **Approve full desktop flow** |
| 16 | Desktop optimisation (budgets §16) | — |
| 17 | Mobile composition + tier system | Real-device test |
| 18 | Accessibility + reduced motion + SEO | axe clean |
| 19 | Performance testing (Lighthouse, WebPageTest, low-end Android) | Budgets met |
| 20 | Deploy (Vercel), analytics, OG check | Launch |

---

## What I need from you to proceed

1. Confirm the name (**Vikas Maurya** vs "Sushant" in the prompt title).
2. The **resume** (PDF or text) and, per project: role, stack, links, and any confidentiality limits.
3. ~~The GLB files.~~ Received. Please confirm the licences for laptop, phone and keyboard (`GLB_REPORT.md`).
4. **Original photographs** (raw, unfiltered; see §4 step 1). Tell me whether they may be committed to this repo, since it may be public.
5. Decisions: cut walking (§4)? Keep sunglasses as an Easter-egg variant? Location to display (the Stitch prototype's "Mumbai" is unverified)?
