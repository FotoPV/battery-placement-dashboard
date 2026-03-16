# Battery Placement Standards Dashboard
### Lightning Energy — South Australia

A fully self-contained, standalone React + Vite + Tailwind dashboard for AS/NZS 5139:2019 Battery Placement Compliance Standards.

---

## 🚀 Quick Start (3 steps)

```bash
# 1. Install dependencies
pnpm install

# 2. Run dev server
pnpm dev

# 3. Open in browser
# → http://localhost:5173
```

---

## 📦 Deploy on Manus (Recommended)

1. **Start a new Manus task**
2. **Upload this ZIP file**
3. Say: _"Deploy this as a public static dashboard"_
4. Manus will spin it up and give you a live public URL

---

## 🏗️ Build for Production

```bash
pnpm build
# Output goes to /dist — ready to deploy anywhere
```

---

## 📁 Project Structure

```
battery-placement-standalone/
├── public/
│   ├── fonts/                    ← Lightning Energy brand fonts
│   │   ├── NextSphere-ExtraBold.ttf
│   │   ├── GeneralSans-Regular.otf
│   │   ├── Urbanist-SemiBold.ttf
│   │   └── Urbanist-SemiBoldItalic.ttf
│   └── LightningEnergy_Logo_Icon_Aqua.png
├── src/
│   ├── components/
│   │   └── BatteryPlacementSA.tsx  ← Main dashboard component
│   ├── App.tsx                     ← Root layout with header/footer
│   ├── main.tsx                    ← Entry point
│   └── index.css                   ← Brand tokens + Tailwind
├── index.html                      ← Font declarations + app shell
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

---

## 🎨 Brand Colours

| Colour | Hex | Usage |
|--------|-----|-------|
| Aqua | `#00EAD3` | Primary accent, recommended states |
| Orange | `#F36710` | Secondary accent, warnings |
| Ash | `#808285` | Muted text |
| Black | `#000000` | Background |
| Surface | `#0d0d0d` | Card backgrounds |

---

## 📋 Dashboard Features

- **10 Placement Rule Cards** — All permanently expanded with official diagrams
- **Filter Bar** — ALL / INDOOR / OUTDOOR / CLEARANCE / PROHIBITED
- **Quick Reference Table** — 10 scenarios with clearance specs
- **Prohibited Locations Grid** — 7 absolutely prohibited scenarios
- **Compliance Checker** — Interactive step-by-step decision tree
- **SA Requirements** — SA Power Networks TS132, SABS, Gas Exclusion Zones
- **Installer Checklist** — Pre/post installation compliance checklists
- **Additional Requirements** — Signage and non-combustible barrier rules

---

## 🔧 Customisation

To adapt for other states (VIC, QLD, WA):
1. Duplicate `BatteryPlacementSA.tsx` → rename to `BatteryPlacementVIC.tsx`
2. Update the `saRequirements` array with state-specific rules
3. Update the header state badge in `App.tsx`
4. Replace CDN image URLs with state-specific diagram images

---

## 📚 Standards Referenced

- AS/NZS 5139:2019 — Battery Energy Storage Systems
- AS/NZS 3000:2018 — Wiring Rules
- ERAC Battery Energy Storage System Installation Requirements (Feb 2021)
- SA Power Networks Technical Standard TS132
- Clean Energy Council Battery Installation Guidelines

---

© 2026 Lightning Energy. All rights reserved.
