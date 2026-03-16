import { useState } from 'react';
import {
  ChevronUp, Shield, AlertTriangle, CheckCircle, XCircle,
  Info, ZapOff, MapPin, Flame, Wind, Car, ArrowRight, RotateCcw,
  FileCheck, Zap, Home, Building2, Star
} from 'lucide-react';

// ─── CDN Image Map ────────────────────────────────────────────────────────────
const CDN = {
  slide01: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663031440910/zMHqWmcAAWqLvxcV.png',
  slide02: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663031440910/rEKRUkjZsbBYCrhg.png',
  slide03: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663031440910/EnGAUOzdvnWZWLgU.png',
  slide04: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663031440910/qixDwjZYebZhbRQh.png',
  slide05: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663031440910/bAZPHVSXJqLdPduq.png',
  slide06: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663031440910/XkXsJcftVIOlLZyW.png',
  slide07: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663031440910/MSJIkyGnodQQiYHi.png',
  slide08: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663031440910/UrStMGzqRoqYtCrT.png',
  slide09: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663031440910/RmJckaiXfrNWUCFV.png',
  slide10: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663031440910/NOybUqNSTYsEwUWX.png',
};

// ─── Types ────────────────────────────────────────────────────────────────────
type Verdict = 'recommended' | 'conditional' | 'restricted';
type Category = 'indoor' | 'outdoor' | 'clearance' | 'prohibited';

interface PlacementRule {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: Category;
  image: string;
  summary: string;
  keyRule: string;
  standard: string;
  verdict: Verdict;
}

// ─── Rules Data ───────────────────────────────────────────────────────────────
const rules: PlacementRule[] = [
  {
    id: 'best-location',
    number: '01',
    title: 'BEST LOCATION — INDOOR GARAGE',
    subtitle: 'Top Recommended Placement',
    category: 'indoor',
    image: CDN.slide01,
    summary: 'The garage is the #1 recommended indoor location for battery installation in Australian homes. It is a non-habitable room, typically shaded from direct sunlight, and provides adequate space for clearance compliance. South Australia\'s extreme summer heat makes the shaded garage environment particularly valuable for battery longevity.',
    keyRule: 'Install in a non-habitable room (garage, laundry, storage), out of direct sunlight, with adequate clearances from all windows, doors, and appliances leading to habitable rooms.',
    standard: 'AS/NZS 5139:2019 | Source: Evergreen Electrical',
    verdict: 'recommended',
  },
  {
    id: 'temperature',
    number: '02',
    title: 'OPERATING TEMPERATURE RANGE',
    subtitle: 'Thermal Management — Critical for SA',
    category: 'indoor',
    image: CDN.slide03,
    summary: 'Battery systems must be installed within their specified operating temperature range. South Australia regularly experiences summer temperatures exceeding 40°C, making shaded, ventilated locations critical for system longevity and safety. Direct sun exposure can void manufacturer warranties and trigger thermal protection shutdowns.',
    keyRule: 'Avoid locations exposed to direct sunlight or extreme heat. Maintain manufacturer-specified operating temperature range. In SA, south-facing walls or shaded locations are strongly preferred.',
    standard: 'AS/NZS 5139:2019 | Manufacturer Specifications',
    verdict: 'conditional',
  },
  {
    id: 'habitable-rooms',
    number: '03',
    title: 'HABITABLE VS NON-HABITABLE ROOMS',
    subtitle: 'Floor Plan Classification — RED vs GREEN',
    category: 'prohibited',
    image: CDN.slide04,
    summary: 'Australian standards strictly classify rooms as habitable (bedrooms, living rooms, kitchen, study, dining — shown in RED) versus non-habitable (garage, laundry, bathroom — shown in GREEN). Batteries must only be installed in GREEN zones or on exterior walls. This is one of the most commonly misunderstood rules during site assessments.',
    keyRule: 'Batteries MUST NOT be installed in any habitable room. Habitable rooms include: bedrooms, living rooms, kitchen, study, dining, and any room used for sleeping or regular occupation.',
    standard: 'AS/NZS 5139:2019 Cl. 4.2.4.2 & 5.2.4.2 | Clean Energy Council',
    verdict: 'restricted',
  },
  {
    id: 'garage-clearance',
    number: '04',
    title: 'GARAGE — 600mm CLEARANCE RULE',
    subtitle: 'Indoor Clearance Diagram',
    category: 'clearance',
    image: CDN.slide05,
    summary: 'When installing a battery in the garage, a minimum 600mm horizontal clearance must be maintained from any exit, window side, or appliance opening that leads into a habitable room. Additionally, 900mm vertical clearance is required below any such opening. The BESS must also maintain 600mm clearance from the front for servicing access.',
    keyRule: '600mm minimum from any exit, window, or appliance opening into a habitable room. 900mm minimum vertical clearance below any opening. 600mm front clearance for service access.',
    standard: 'AS/NZS 5139:2019 | Source: Evergreen Electrical',
    verdict: 'recommended',
  },
  {
    id: 'weatherboard-habitable',
    number: '05',
    title: 'WEATHERBOARD — HABITABLE SIDE',
    subtitle: 'Non-Combustible Barrier Required',
    category: 'outdoor',
    image: CDN.slide06,
    summary: 'For weatherboard homes, placing a battery on the outdoor wall of a habitable room requires a non-combustible barrier between the battery and the wall. Without this barrier, the installation is non-compliant. The barrier must extend 600mm each side and 900mm above the battery unit, using approved materials such as brick, concrete, or compressed cement sheet.',
    keyRule: 'Non-combustible barrier (600mm each side, 900mm above) REQUIRED between battery and combustible weatherboard wall adjacent to habitable room. Approved materials: brick, concrete, compressed cement sheet, ceramic tile.',
    standard: 'AS/NZS 5139:2019 & AS 1530.1 | Evergreen Electrical / Clean Energy Council',
    verdict: 'conditional',
  },
  {
    id: 'weatherboard-non-habitable',
    number: '06',
    title: 'WEATHERBOARD — NON-HABITABLE SIDE',
    subtitle: 'No Barrier Required',
    category: 'outdoor',
    image: CDN.slide07,
    summary: 'When the outdoor wall backs onto a non-habitable room (garage, laundry), there are NO additional non-combustible barrier requirements for weatherboard construction. This is the preferred outdoor placement scenario for weatherboard homes. Standard clearances from windows and doors still apply.',
    keyRule: 'No non-combustible barrier required when outdoor wall backs onto a non-habitable room (garage, laundry). Standard 600mm/900mm clearances from any windows or doors still apply.',
    standard: 'AS/NZS 5139:2019 | Evergreen Electrical / Clean Energy Council',
    verdict: 'recommended',
  },
  {
    id: 'brick-side-clearance',
    number: '07',
    title: 'BRICK HOUSE — SIDE CLEARANCE',
    subtitle: '600mm from Windows & Doors',
    category: 'clearance',
    image: CDN.slide08,
    summary: 'For brick homes, the battery must be placed beyond the 600mm exclusion zone from any window or door opening that leads into a habitable room. Batteries placed within this zone are non-compliant regardless of wall material. This rule applies to all construction types — brick, weatherboard, or rendered.',
    keyRule: 'Battery must be placed BEYOND 600mm from any window or door side opening into a habitable room. This applies to all wall construction types.',
    standard: 'AS/NZS 5139:2019 | Evergreen Electrical / Clean Energy Council',
    verdict: 'restricted',
  },
  {
    id: 'brick-under-window',
    number: '08',
    title: 'BRICK HOUSE — UNDER WINDOW',
    subtitle: '900mm Vertical Clearance Rule',
    category: 'clearance',
    image: CDN.slide09,
    summary: 'A battery CANNOT be located directly beneath a window if the room on the other side is a habitable room. The 900mm vertical clearance below the window sill must be maintained at all times. This is one of the most frequently cited non-compliance issues during post-installation inspections in South Australia.',
    keyRule: 'Battery CANNOT be located directly under a habitable-room window. 900mm vertical clearance below window sill is mandatory. Applies to all wall types.',
    standard: 'AS/NZS 5139:2019 | Evergreen Electrical / Clean Energy Council',
    verdict: 'restricted',
  },
  {
    id: 'under-window-wrong-right',
    number: '09',
    title: 'UNDER-WINDOW — WRONG vs RIGHT',
    subtitle: 'Compliance Comparison Diagram',
    category: 'clearance',
    image: CDN.slide10,
    summary: 'This diagram illustrates the correct and incorrect placement relative to habitable-room windows. The wrong scenario shows a battery positioned beneath a window without required clearance. The right scenario shows the battery relocated to comply with both 600mm side and 900mm vertical clearance rules. This comparison is used in Lightning Energy\'s pre-installation site assessment.',
    keyRule: 'Relocate battery to comply with 600mm side AND 900mm vertical clearance from habitable-room window openings. When in doubt, move further away.',
    standard: 'AS/NZS 5139:2019 | Evergreen Electrical / Clean Energy Council',
    verdict: 'conditional',
  },
  {
    id: 'standards-overview',
    number: '10',
    title: 'BATTERY PLACEMENT STANDARDS OVERVIEW',
    subtitle: 'AUS / NZ Standards Document',
    category: 'indoor',
    image: CDN.slide02,
    summary: 'Lightning Energy\'s Battery Placement Standards document covers all key AS/NZS 5139:2019 requirements for residential BESS (Battery Energy Storage System) installations across Australia and New Zealand. This document is used as the primary reference for all Lightning Energy installation assessments and customer consultations.',
    keyRule: 'All BESS installations must comply with AS/NZS 5139:2019, AS/NZS 3000:2018 (Wiring Rules), and relevant Clean Energy Council guidelines.',
    standard: 'AS/NZS 5139:2019 | Lightning Energy Standards',
    verdict: 'recommended',
  },
];

// ─── Additional Prohibited Locations ─────────────────────────────────────────
const prohibitedLocations = [
  { icon: <Home className="w-5 h-5" />, label: 'Habitable Rooms', detail: 'Bedrooms, living, kitchen, study, dining — any room used for regular occupation' },
  { icon: <Building2 className="w-5 h-5" />, label: 'Roof Spaces & Ceiling Voids', detail: 'Unless accessible via permanently installed fixed staircase or access ladder' },
  { icon: <ZapOff className="w-5 h-5" />, label: 'Wall Cavities', detail: 'Unless entirely sealed with non-combustible material to the cavity' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Under Staircases', detail: 'Including underneath or below entrance/exit walkways and escape routes' },
  { icon: <Wind className="w-5 h-5" />, label: 'Passageways & Escape Routes', detail: 'Must not obstruct any evacuation route, walkway, or exit path' },
  { icon: <Car className="w-5 h-5" />, label: 'Vehicle Impact Zones', detail: 'Locations where vehicle damage is foreseeable — bollard protection required if unavoidable' },
  { icon: <Flame className="w-5 h-5" />, label: 'Hazardous Areas (AS/NZS 3000)', detail: 'Near gas cylinders, gas meter vents, or any classified hazardous zone' },
];

// ─── SA-Specific Requirements ─────────────────────────────────────────────────
const saRequirements = [
  {
    title: 'SA Power Networks — Grid Connection',
    icon: <Zap className="w-5 h-5 text-[#00EAD3]" />,
    color: 'aqua',
    items: [
      'BESS must comply with SA Power Networks Technical Standard TS132',
      'Grid connection application required before energisation',
      'Export limit may apply depending on network capacity at your address',
      'NICC271 BESS Connection Guidelines apply for frequency support services',
    ],
  },
  {
    title: 'SA Home Battery Scheme (SABS)',
    icon: <Star className="w-5 h-5 text-[#F36710]" />,
    color: 'orange',
    items: [
      'SA Government subsidies available for eligible residential battery installations',
      'Must use CEC-accredited installer — Lightning Energy is fully accredited',
      'Battery must appear on the CEC approved product list',
      'VPP (Virtual Power Plant) participation available — adds annual revenue stream',
    ],
  },
  {
    title: 'Gas Meter Exclusion Zones',
    icon: <Flame className="w-5 h-5 text-yellow-400" />,
    color: 'yellow',
    items: [
      'Exchange cylinder: 600mm (A) and 1500mm (B) exclusion zones',
      'In-situ fill cylinder: 1500mm (A) and 9500mm (B) exclusion zones',
      'Local Gas Network Provider (GNP) may impose additional requirements',
      'Confirm with GNP for your specific SA address before installation',
    ],
  },
];

// ─── Decision Tree ─────────────────────────────────────────────────────────────
type TreeStep = {
  id: string;
  question: string;
  yes: string;
  no: string;
  yesLabel?: string;
  noLabel?: string;
};

const treeSteps: Record<string, TreeStep | { result: string; verdict: Verdict; detail: string }> = {
  start: {
    id: 'start',
    question: 'Is the proposed location INDOORS (inside the building)?',
    yes: 'indoor-habitable',
    no: 'outdoor-wall',
    yesLabel: 'Yes — Indoor',
    noLabel: 'No — Outdoor',
  },
  'indoor-habitable': {
    id: 'indoor-habitable',
    question: 'Is the room a HABITABLE room? (bedroom, living, kitchen, study, dining)',
    yes: 'result-prohibited-habitable',
    no: 'indoor-clearance',
    yesLabel: 'Yes — Habitable',
    noLabel: 'No — Non-Habitable',
  },
  'result-prohibited-habitable': {
    result: 'NON-COMPLIANT — Habitable Room',
    verdict: 'restricted',
    detail: 'Batteries are strictly prohibited in habitable rooms under AS/NZS 5139:2019. Relocate to garage, laundry, or outdoor wall.',
  },
  'indoor-clearance': {
    id: 'indoor-clearance',
    question: 'Is the battery more than 600mm from any window/door/vent opening into a habitable room?',
    yes: 'result-indoor-ok',
    no: 'result-indoor-clearance-fail',
    yesLabel: 'Yes — Compliant clearance',
    noLabel: 'No — Too close',
  },
  'result-indoor-ok': {
    result: 'COMPLIANT — Indoor Non-Habitable Room',
    verdict: 'recommended',
    detail: 'Location is compliant. Ensure 600mm front service clearance, adequate ventilation, and protection from vehicle impact if applicable.',
  },
  'result-indoor-clearance-fail': {
    result: 'NON-COMPLIANT — Insufficient Clearance',
    verdict: 'restricted',
    detail: 'Battery is within 600mm of a habitable room opening. Reposition to achieve minimum 600mm horizontal and 900mm vertical clearance from all habitable room windows, doors, and vents.',
  },
  'outdoor-wall': {
    id: 'outdoor-wall',
    question: 'Is the wall COMBUSTIBLE (e.g., weatherboard, timber cladding)?',
    yes: 'outdoor-combustible-side',
    no: 'outdoor-brick-clearance',
    yesLabel: 'Yes — Combustible wall',
    noLabel: 'No — Brick / Masonry',
  },
  'outdoor-combustible-side': {
    id: 'outdoor-combustible-side',
    question: 'Does the wall back onto a HABITABLE room (bedroom, living, kitchen)?',
    yes: 'result-weatherboard-barrier',
    no: 'result-weatherboard-ok',
    yesLabel: 'Yes — Habitable side',
    noLabel: 'No — Non-habitable side',
  },
  'result-weatherboard-barrier': {
    result: 'CONDITIONAL — Non-Combustible Barrier Required',
    verdict: 'conditional',
    detail: 'A non-combustible barrier (600mm each side, 900mm above) is REQUIRED between the battery and the weatherboard wall. Approved materials: brick, concrete, compressed cement sheet, ceramic tile.',
  },
  'result-weatherboard-ok': {
    result: 'COMPLIANT — Weatherboard Non-Habitable Side',
    verdict: 'recommended',
    detail: 'No non-combustible barrier required. Ensure standard clearances from any nearby windows or doors, and install signage for outdoor BESS.',
  },
  'outdoor-brick-clearance': {
    id: 'outdoor-brick-clearance',
    question: 'Is the battery more than 600mm from any window/door side AND more than 900mm below any window sill?',
    yes: 'result-brick-ok',
    no: 'result-brick-clearance-fail',
    yesLabel: 'Yes — Compliant clearance',
    noLabel: 'No — Too close',
  },
  'result-brick-ok': {
    result: 'COMPLIANT — Brick / Masonry Outdoor Wall',
    verdict: 'recommended',
    detail: 'Location is compliant. Install required signage ("Restricted Access — Authorised Personnel Only") and ensure protection from vehicle impact if near a driveway.',
  },
  'result-brick-clearance-fail': {
    result: 'NON-COMPLIANT — Insufficient Clearance',
    verdict: 'restricted',
    detail: 'Battery is within the exclusion zone. Reposition to achieve minimum 600mm from window/door sides AND 900mm below any window sill of a habitable room.',
  },
};

// ─── Verdict Config ───────────────────────────────────────────────────────────
const verdictConfig: Record<Verdict, { icon: React.ReactNode; label: string; color: string; bg: string }> = {
  recommended: { icon: <CheckCircle className="w-4 h-4" />, label: 'RECOMMENDED', color: 'text-[#00EAD3]', bg: 'bg-[#00EAD3]/10 border-[#00EAD3]/40' },
  conditional: { icon: <AlertTriangle className="w-4 h-4" />, label: 'CONDITIONAL', color: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/40' },
  restricted: { icon: <XCircle className="w-4 h-4" />, label: 'RESTRICTED', color: 'text-red-400', bg: 'bg-red-400/10 border-red-400/40' },
};

const categoryColors: Record<Category, string> = {
  indoor: 'text-[#00EAD3] bg-[#00EAD3]/10 border-[#00EAD3]/30',
  outdoor: 'text-[#F36710] bg-[#F36710]/10 border-[#F36710]/30',
  clearance: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  prohibited: 'text-red-400 bg-red-400/10 border-red-400/30',
};

const categoryLabels: Record<Category, string> = {
  indoor: 'INDOOR',
  outdoor: 'OUTDOOR',
  clearance: 'CLEARANCE',
  prohibited: 'PROHIBITED',
};

// ─── Rule Card ────────────────────────────────────────────────────────────────
function RuleCard({ rule }: { rule: PlacementRule }) {
  const verdict = verdictConfig[rule.verdict];
  const catColor = categoryColors[rule.category];

  return (
    <div className="bg-[#0d0d0d] border border-[#00EAD3]/30 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="p-5 flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-center">
          <span className="text-[#00EAD3] font-['Nextsphere'] font-extrabold text-sm">{rule.number}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className={`text-xs font-['GeneralSans'] font-semibold px-2 py-0.5 rounded border uppercase tracking-wider ${catColor}`}>
              {categoryLabels[rule.category]}
            </span>
            <span className={`text-xs font-['GeneralSans'] font-semibold px-2 py-0.5 rounded border flex items-center gap-1 ${verdict.color} ${verdict.bg}`}>
              {verdict.icon}{verdict.label}
            </span>
          </div>
          <h3 className="text-white font-['Nextsphere'] font-extrabold text-base leading-tight">{rule.title}</h3>
          <p className="text-gray-400 font-['GeneralSans'] text-sm mt-0.5">{rule.subtitle}</p>
        </div>
      </div>

      {/* Always visible content */}
      <div className="border-t border-gray-800">
        <div className="bg-black p-4">
          <img src={rule.image} alt={rule.title} className="w-full max-w-3xl mx-auto rounded-lg object-contain" loading="lazy" />
        </div>
        <div className="p-5 space-y-4">
          <p className="text-gray-300 font-['GeneralSans'] text-sm leading-relaxed">{rule.summary}</p>
          <div className="flex gap-3 p-4 bg-[#00EAD3]/5 border border-[#00EAD3]/20 rounded-lg">
            <Info className="w-5 h-5 text-[#00EAD3] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[#00EAD3] font-['GeneralSans'] font-semibold text-xs uppercase tracking-wider mb-1">KEY RULE</p>
              <p className="text-white font-['GeneralSans'] text-sm leading-relaxed">{rule.keyRule}</p>
            </div>
          </div>
          <p className="text-gray-600 font-['GeneralSans'] text-xs">📋 {rule.standard}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Decision Tree Component ──────────────────────────────────────────────────
function DecisionTree() {
  const [currentStep, setCurrentStep] = useState<string>('start');
  const [history, setHistory] = useState<string[]>([]);

  const step = treeSteps[currentStep];
  const isResult = 'result' in step;

  const handleAnswer = (next: string) => {
    setHistory(prev => [...prev, currentStep]);
    setCurrentStep(next);
  };

  const handleBack = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory(h => h.slice(0, -1));
    setCurrentStep(prev);
  };

  const handleReset = () => {
    setCurrentStep('start');
    setHistory([]);
  };

  return (
    <div className="bg-[#0d0d0d] border border-gray-800 rounded-xl overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1 h-5 bg-[#F36710] rounded-full" />
          <h2 className="text-white font-['Nextsphere'] font-extrabold text-lg tracking-wide">
            COMPLIANCE CHECKER
          </h2>
        </div>
        <span className="text-gray-500 font-['GeneralSans'] text-xs">Interactive Decision Tool</span>
      </div>

      <div className="p-6">
        {/* Progress breadcrumb */}
        {history.length > 0 && (
          <div className="flex items-center gap-1 mb-5 flex-wrap">
            {history.map((_, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#00EAD3]/50" />
                {i < history.length - 1 && <ArrowRight className="w-3 h-3 text-gray-700" />}
              </div>
            ))}
            <div className="w-2 h-2 rounded-full bg-[#00EAD3]" />
          </div>
        )}

        {!isResult ? (
          <div className="space-y-5">
            <div className="p-5 bg-gray-900/50 rounded-xl border border-gray-700">
              <p className="text-[#00EAD3] font-['GeneralSans'] font-semibold text-xs uppercase tracking-wider mb-2">
                QUESTION {history.length + 1}
              </p>
              <p className="text-white font-['Nextsphere'] font-extrabold text-xl leading-snug">
                {(step as TreeStep).question}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => handleAnswer((step as TreeStep).yes)}
                className="p-4 bg-[#00EAD3]/10 border border-[#00EAD3]/40 rounded-xl text-[#00EAD3] font-['GeneralSans'] font-semibold text-sm hover:bg-[#00EAD3]/20 transition-all flex items-center justify-between group"
              >
                <span>{(step as TreeStep).yesLabel || 'Yes'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleAnswer((step as TreeStep).no)}
                className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-300 font-['GeneralSans'] font-semibold text-sm hover:border-gray-500 transition-all flex items-center justify-between group"
              >
                <span>{(step as TreeStep).noLabel || 'No'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Result */}
            {(() => {
              const r = step as { result: string; verdict: Verdict; detail: string };
              const v = verdictConfig[r.verdict];
              return (
                <div className={`p-5 rounded-xl border ${v.bg}`}>
                  <div className={`flex items-center gap-2 mb-3 ${v.color}`}>
                    {v.icon}
                    <span className="font-['Nextsphere'] font-extrabold text-lg">{r.result}</span>
                  </div>
                  <p className="text-gray-300 font-['GeneralSans'] text-sm leading-relaxed">{r.detail}</p>
                </div>
              );
            })()}
            <p className="text-gray-500 font-['GeneralSans'] text-xs">
              ⚠️ This tool provides guidance only. A licensed electrician must conduct a full site assessment.
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-3 mt-5">
          {history.length > 0 && (
            <button
              onClick={handleBack}
              className="px-4 py-2 text-gray-400 border border-gray-700 rounded-lg font-['GeneralSans'] text-sm hover:border-gray-500 transition-all flex items-center gap-2"
            >
              <ChevronUp className="w-4 h-4 rotate-[-90deg]" /> Back
            </button>
          )}
          <button
            onClick={handleReset}
            className="px-4 py-2 text-gray-400 border border-gray-700 rounded-lg font-['GeneralSans'] text-sm hover:border-gray-500 transition-all flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" /> Start Over
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function BatteryPlacementSA() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'rules' | 'checker' | 'sa-specific' | 'installer'>('rules');

  const filters = [
    { id: 'all', label: 'ALL' },
    { id: 'indoor', label: 'INDOOR' },
    { id: 'outdoor', label: 'OUTDOOR' },
    { id: 'clearance', label: 'CLEARANCE' },
    { id: 'prohibited', label: 'PROHIBITED' },
  ];

  const filteredRules = activeFilter === 'all'
    ? rules
    : rules.filter(r => r.category === activeFilter);

  const tabs = [
    { id: 'rules', label: 'PLACEMENT RULES', icon: <Shield className="w-4 h-4" /> },
    { id: 'checker', label: 'COMPLIANCE CHECKER', icon: <CheckCircle className="w-4 h-4" /> },
    { id: 'sa-specific', label: 'SA REQUIREMENTS', icon: <MapPin className="w-4 h-4" /> },
    { id: 'installer', label: 'INSTALLER CHECKLIST', icon: <FileCheck className="w-4 h-4" /> },
  ];

  return (
    <div className="space-y-6">
      {/* ── Page Header ── */}
      <div className="border-b border-gray-800 pb-6">
        <div className="flex items-start gap-4 mb-3">
          <div className="p-2 bg-[#00EAD3]/10 rounded-lg border border-[#00EAD3]/30">
            <Shield className="w-6 h-6 text-[#00EAD3]" />
          </div>
          <div>
            <h1 className="text-4xl font-['Nextsphere'] font-extrabold text-white leading-tight">
              BATTERY PLACEMENT
            </h1>
            <p className="text-[#00EAD3] font-['Nextsphere'] font-extrabold text-xl tracking-widest">
              AUSTRALIA-WIDE STANDARDS
            </p>
          </div>
        </div>
        <p className="text-gray-400 font-['GeneralSans'] text-sm">
          AS/NZS 5139:2019 Compliance Standards — Lightning Energy Installation Guidelines
        </p>
      </div>

      {/* ── Verdict Legend ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {(Object.entries(verdictConfig) as [Verdict, typeof verdictConfig[Verdict]][]).map(([key, v]) => (
          <div key={key} className={`bg-[#0d0d0d] border rounded-xl p-4 flex items-center gap-3 ${v.bg}`}>
            <div className={`${v.color}`}>{v.icon}</div>
            <div>
              <p className={`font-['Nextsphere'] font-extrabold text-sm ${v.color}`}>{v.label}</p>
              <p className="text-gray-400 font-['GeneralSans'] text-xs">
                {key === 'recommended' ? 'Preferred placement scenario' : key === 'conditional' ? 'Requires additional measures' : 'Non-compliant without modification'}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Tab Navigation ── */}
      <div className="flex gap-1 bg-gray-900/50 p-1 rounded-xl border border-gray-800 flex-wrap">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-['GeneralSans'] font-semibold text-xs transition-all flex-1 justify-center ${
              activeTab === tab.id
                ? 'bg-[#F36710] text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* ── TAB: PLACEMENT RULES ── */}
      {activeTab === 'rules' && (
        <div className="space-y-6">
          {/* Quick Reference Table */}
          <div className="bg-[#0d0d0d] border border-gray-800 rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-800 flex items-center gap-2">
              <div className="w-1 h-5 bg-[#00EAD3] rounded-full" />
              <h2 className="text-[#00EAD3] font-['Nextsphere'] font-extrabold text-lg tracking-wide">
                QUICK REFERENCE — CLEARANCE STANDARDS
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-['GeneralSans']">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left px-5 py-3 text-gray-400 font-semibold uppercase text-xs tracking-wider">Scenario</th>
                    <th className="text-center px-4 py-3 text-gray-400 font-semibold uppercase text-xs tracking-wider">Side</th>
                    <th className="text-center px-4 py-3 text-gray-400 font-semibold uppercase text-xs tracking-wider">Vertical</th>
                    <th className="text-center px-4 py-3 text-gray-400 font-semibold uppercase text-xs tracking-wider">Front</th>
                    <th className="text-center px-4 py-3 text-gray-400 font-semibold uppercase text-xs tracking-wider">Barrier</th>
                    <th className="text-center px-4 py-3 text-gray-400 font-semibold uppercase text-xs tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-900">
                  {[
                    { scenario: 'Garage (Indoor)', side: '600mm', vert: '900mm', front: '600mm', barrier: 'No', status: 'recommended' as Verdict },
                    { scenario: 'Brick — Outdoor (Non-Habitable Side)', side: '600mm', vert: '900mm', front: '600mm', barrier: 'No', status: 'recommended' as Verdict },
                    { scenario: 'Weatherboard — Outdoor (Non-Habitable Side)', side: '600mm', vert: '900mm', front: '600mm', barrier: 'No', status: 'recommended' as Verdict },
                    { scenario: 'Weatherboard — Outdoor (Habitable Side)', side: '600mm', vert: '900mm', front: '600mm', barrier: 'YES', status: 'conditional' as Verdict },
                    { scenario: 'Garage Door Opening (>900mm wide)', side: '—', vert: '—', front: '1000mm', barrier: 'No', status: 'conditional' as Verdict },
                    { scenario: 'Within 600mm of Habitable Window/Door', side: '< 600mm', vert: '—', front: '—', barrier: 'N/A', status: 'restricted' as Verdict },
                    { scenario: 'Directly Under Habitable Room Window', side: '—', vert: '< 900mm', front: '—', barrier: 'N/A', status: 'restricted' as Verdict },
                    { scenario: 'Habitable Room (any)', side: '—', vert: '—', front: '—', barrier: 'Prohibited', status: 'restricted' as Verdict },
                    { scenario: 'Roof Space / Ceiling Void', side: '—', vert: '—', front: '—', barrier: 'Prohibited', status: 'restricted' as Verdict },
                    { scenario: 'Wall Cavity (unsealed)', side: '—', vert: '—', front: '—', barrier: 'Prohibited', status: 'restricted' as Verdict },
                  ].map((row, i) => {
                    const v = verdictConfig[row.status];
                    return (
                      <tr key={i} className="hover:bg-gray-900/30 transition-colors">
                        <td className="px-5 py-3 text-white font-semibold text-sm">{row.scenario}</td>
                        <td className={`px-4 py-3 text-center font-bold text-sm ${row.status === 'restricted' ? 'text-red-400' : row.status === 'conditional' ? 'text-yellow-400' : 'text-[#00EAD3]'}`}>{row.side}</td>
                        <td className={`px-4 py-3 text-center font-bold text-sm ${row.status === 'restricted' ? 'text-red-400' : row.status === 'conditional' ? 'text-yellow-400' : 'text-[#00EAD3]'}`}>{row.vert}</td>
                        <td className={`px-4 py-3 text-center font-bold text-sm ${row.status === 'restricted' ? 'text-red-400' : row.status === 'conditional' ? 'text-yellow-400' : 'text-[#00EAD3]'}`}>{row.front}</td>
                        <td className={`px-4 py-3 text-center text-sm font-semibold ${row.barrier === 'YES' ? 'text-yellow-400' : row.barrier === 'Prohibited' || row.barrier === 'N/A' ? 'text-red-400' : 'text-gray-400'}`}>{row.barrier}</td>
                        <td className="px-4 py-3 text-center">
                          <span className={`text-xs font-semibold px-2 py-1 rounded border flex items-center gap-1 justify-center w-fit mx-auto ${v.color} ${v.bg}`}>
                            {v.icon}{v.label}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Prohibited Locations Grid */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 bg-red-500 rounded-full" />
              <h2 className="text-white font-['Nextsphere'] font-extrabold text-xl tracking-wide">ABSOLUTELY PROHIBITED LOCATIONS</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {prohibitedLocations.map((loc, i) => (
                <div key={i} className="bg-[#0d0d0d] border border-red-500/20 rounded-xl p-4 flex gap-3">
                  <div className="p-2 bg-red-500/10 rounded-lg flex-shrink-0 text-red-400 h-fit">{loc.icon}</div>
                  <div>
                    <p className="text-red-400 font-['GeneralSans'] font-semibold text-sm mb-1">{loc.label}</p>
                    <p className="text-gray-500 font-['GeneralSans'] text-xs leading-relaxed">{loc.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filter + Rule Cards */}
          <div>
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="text-gray-500 font-['GeneralSans'] text-xs uppercase tracking-wider mr-1">Filter:</span>
              {filters.map(f => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-['GeneralSans'] font-semibold transition-all border ${
                    activeFilter === f.id
                      ? 'bg-[#00EAD3] text-black border-[#00EAD3]'
                      : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-500'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="space-y-3">
              {filteredRules.map(rule => <RuleCard key={rule.id} rule={rule} />)}
            </div>
          </div>

          {/* Additional Requirements */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 bg-[#F36710] rounded-full" />
              <h2 className="text-white font-['Nextsphere'] font-extrabold text-xl tracking-wide">ADDITIONAL REQUIREMENTS</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0d0d0d] border border-[#F36710]/30 rounded-xl p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-[#F36710]/10 rounded-lg"><Shield className="w-6 h-6 text-[#F36710]" /></div>
                  <div>
                    <span className="text-xs font-['GeneralSans'] font-bold uppercase tracking-wider text-[#F36710]">RULE 11</span>
                    <h3 className="text-white font-['Nextsphere'] font-extrabold text-sm leading-tight mt-0.5">OUTDOOR BESS — RESTRICTED ACCESS SIGNAGE</h3>
                  </div>
                </div>
                <p className="text-white font-['GeneralSans'] text-sm font-semibold mb-2">All outdoor BESS must display "Restricted Access — Authorised Personnel Only" signage.</p>
                <p className="text-gray-400 font-['GeneralSans'] text-xs leading-relaxed mb-3">Avoid direct sunlight; install on southern wall, under eaves, or with a fabricated shroud (900mm clearance above). Labels must include battery chemistry, voltage, capacity, and emergency shutdown procedure.</p>
                <p className="text-gray-600 font-['GeneralSans'] text-xs">📋 AS/NZS 5139:2019 | GSES</p>
              </div>
              <div className="bg-[#0d0d0d] border border-[#00EAD3]/30 rounded-xl p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-[#00EAD3]/10 rounded-lg"><ZapOff className="w-6 h-6 text-[#00EAD3]" /></div>
                  <div>
                    <span className="text-xs font-['GeneralSans'] font-bold uppercase tracking-wider text-[#00EAD3]">RULE 12</span>
                    <h3 className="text-white font-['Nextsphere'] font-extrabold text-sm leading-tight mt-0.5">NON-COMBUSTIBLE BARRIER — BESS</h3>
                  </div>
                </div>
                <p className="text-white font-['GeneralSans'] text-sm font-semibold mb-2">600mm each side, 900mm above — required on combustible walls shared with habitable rooms.</p>
                <p className="text-gray-400 font-['GeneralSans'] text-xs leading-relaxed mb-3">Approved materials: brick, concrete, compressed cement sheet, or ceramic tile. Must wrap around any corner or ceiling junction. Tested to AS 1530.1.</p>
                <p className="text-gray-600 font-['GeneralSans'] text-xs">📋 AS/NZS 5139:2019 & AS 1530.1 | GSES</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── TAB: COMPLIANCE CHECKER ── */}
      {activeTab === 'checker' && (
        <div className="space-y-4">
          <p className="text-gray-400 font-['GeneralSans'] text-sm">
            Use this step-by-step tool to determine if a proposed battery location is compliant with AS/NZS 5139:2019. Answer each question to receive a compliance verdict.
          </p>
          <DecisionTree />
        </div>
      )}

      {/* ── TAB: SA-SPECIFIC REQUIREMENTS ── */}
      {activeTab === 'sa-specific' && (
        <div className="space-y-6">
          <p className="text-gray-400 font-['GeneralSans'] text-sm">
            South Australia has specific requirements beyond the national AS/NZS 5139:2019 standard. These apply to all residential battery installations connected to the SA Power Networks distribution network.
          </p>
          {saRequirements.map((section, i) => (
            <div key={i} className={`bg-[#0d0d0d] border rounded-xl overflow-hidden ${
              section.color === 'aqua' ? 'border-[#00EAD3]/30' :
              section.color === 'orange' ? 'border-[#F36710]/30' : 'border-yellow-500/30'
            }`}>
              <div className={`px-5 py-4 border-b flex items-center gap-3 ${
                section.color === 'aqua' ? 'border-[#00EAD3]/20 bg-[#00EAD3]/5' :
                section.color === 'orange' ? 'border-[#F36710]/20 bg-[#F36710]/5' : 'border-yellow-500/20 bg-yellow-500/5'
              }`}>
                {section.icon}
                <h3 className="text-white font-['Nextsphere'] font-extrabold text-lg">{section.title}</h3>
              </div>
              <div className="p-5 space-y-3">
                {section.items.map((item, j) => (
                  <div key={j} className="flex gap-3 items-start">
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                      section.color === 'aqua' ? 'bg-[#00EAD3]' :
                      section.color === 'orange' ? 'bg-[#F36710]' : 'bg-yellow-400'
                    }`} />
                    <p className="text-gray-300 font-['GeneralSans'] text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* SA Climate Note */}
          <div className="bg-[#0d0d0d] border border-gray-700 rounded-xl p-5">
            <div className="flex gap-3">
              <div className="p-2 bg-[#F36710]/10 rounded-lg flex-shrink-0">
                <Flame className="w-5 h-5 text-[#F36710]" />
              </div>
              <div>
                <p className="text-[#F36710] font-['GeneralSans'] font-semibold text-sm mb-2">SA CLIMATE CONSIDERATION</p>
                <p className="text-gray-300 font-['GeneralSans'] text-sm leading-relaxed">
                  South Australia regularly records temperatures exceeding 40°C during summer. Battery systems installed on north or west-facing walls without shade protection are at significant risk of thermal throttling, reduced capacity, and accelerated degradation. Lightning Energy strongly recommends south-facing or shaded installations for all SA properties. A shaded garage installation is the gold standard for SA conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── TAB: INSTALLER CHECKLIST ── */}
      {activeTab === 'installer' && (
        <div className="space-y-6">
          <p className="text-gray-400 font-['GeneralSans'] text-sm">
            Pre-installation and post-installation checklist for Lightning Energy accredited installers. All items must be verified before energisation.
          </p>

          {[
            {
              title: 'PRE-INSTALLATION SITE ASSESSMENT',
              color: 'aqua',
              items: [
                { label: 'Confirm proposed location is non-habitable (garage, laundry, or exterior wall)', critical: true },
                { label: 'Measure and confirm 600mm side clearance from all habitable room windows and doors', critical: true },
                { label: 'Measure and confirm 900mm vertical clearance below all habitable room windows', critical: true },
                { label: 'Check for gas meter/cylinder proximity — confirm exclusion zone compliance', critical: true },
                { label: 'Assess wall construction type (brick/weatherboard/rendered) and determine if barrier is required', critical: true },
                { label: 'Check for vehicle impact risk — bollard required if applicable', critical: false },
                { label: 'Confirm no escape routes, passageways, or stairways are obstructed', critical: true },
                { label: 'Assess ambient temperature — avoid direct north/west sun exposure in SA', critical: false },
                { label: 'Confirm 600mm front service clearance is achievable', critical: false },
              ],
            },
            {
              title: 'PRODUCT & CERTIFICATION REQUIREMENTS',
              color: 'orange',
              items: [
                { label: 'Battery model confirmed on CEC approved product list', critical: true },
                { label: 'Inverter/PCE confirmed on CEC approved product list', critical: true },
                { label: 'Battery has functional Battery Management System (BMS)', critical: true },
                { label: 'Installer holds current CEC accreditation for battery storage', critical: true },
                { label: 'SA Power Networks grid connection application submitted (if required)', critical: true },
                { label: 'Export limit confirmed with SA Power Networks for address', critical: false },
              ],
            },
            {
              title: 'POST-INSTALLATION COMPLIANCE',
              color: 'yellow',
              items: [
                { label: 'Certificate of Electrical Safety (COES) issued', critical: true },
                { label: 'Restricted Access signage installed (outdoor installations)', critical: true },
                { label: 'Battery chemistry, voltage, capacity labels affixed', critical: true },
                { label: 'Emergency shutdown procedure label affixed', critical: true },
                { label: 'Non-combustible barrier installed and measured (if required)', critical: true },
                { label: 'Customer handover documentation provided', critical: false },
                { label: 'VPP enrolment completed (if applicable)', critical: false },
                { label: 'SA Home Battery Scheme paperwork submitted (if eligible)', critical: false },
              ],
            },
          ].map((section, i) => (
            <div key={i} className="bg-[#0d0d0d] border border-gray-800 rounded-xl overflow-hidden">
              <div className={`px-5 py-4 border-b border-gray-800 flex items-center gap-2`}>
                <div className={`w-1 h-5 rounded-full ${section.color === 'aqua' ? 'bg-[#00EAD3]' : section.color === 'orange' ? 'bg-[#F36710]' : 'bg-yellow-400'}`} />
                <h3 className="text-white font-['Nextsphere'] font-extrabold text-base tracking-wide">{section.title}</h3>
              </div>
              <div className="p-5 space-y-2">
                {section.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-900/30 transition-colors">
                    <div className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${
                      item.critical
                        ? 'border-[#00EAD3]/50 bg-[#00EAD3]/5'
                        : 'border-gray-700 bg-gray-900'
                    }`}>
                      {item.critical && <div className="w-2 h-2 rounded-sm bg-[#00EAD3]/30" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-300 font-['GeneralSans'] text-sm leading-relaxed">{item.label}</p>
                    </div>
                    {item.critical && (
                      <span className="text-red-400 font-['GeneralSans'] text-xs font-semibold flex-shrink-0 bg-red-400/10 px-2 py-0.5 rounded border border-red-400/30">CRITICAL</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Footer Disclaimer ── */}
      <div className="bg-[#0d0d0d] border border-[#F36710]/30 rounded-xl p-5">
        <div className="flex gap-3">
          <AlertTriangle className="w-5 h-5 text-[#F36710] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-[#F36710] font-['GeneralSans'] font-semibold text-sm mb-1">IMPORTANT DISCLAIMER</p>
            <p className="text-gray-400 font-['GeneralSans'] text-xs leading-relaxed">
              This reference guide is based on AS/NZS 5139:2019, AS/NZS 3000:2018, ERAC Battery Energy Storage System Installation Requirements (Feb 2021), and SA Power Networks Technical Standard TS132. All battery installations must be assessed and approved by a CEC-accredited licensed electrical contractor. Site-specific conditions, local council requirements, and Gas Network Provider exclusion zones may impose additional requirements beyond those shown here. Lightning Energy's installation team will conduct a full compliance assessment prior to every installation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
