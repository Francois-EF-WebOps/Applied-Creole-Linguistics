export const FileTreeStructure = `
/
├── .github/
│   └── CODE_OF_CONDUCT.md
├── core/
│   ├── FOUNDATION.md          # The "Constitution"
│   ├── PEDAGOGY.md            # Detailed theory (Vygotsky/ASEAN)
│   └── GLOSSARY.md            # Shared definitions
├── volume-1-concrete/
│   ├── README.md              # Year 1 Overview
│   ├── saga-01-body-rhythms/
│   │   ├── arc-01-waking-up/
│   │   │   ├── episode-01.md
│   │   │   └── episode-02.md
│   │   └── arc-02-hygiene/
│   └── saga-02-food-sustenance/
├── volume-2-abstract/         # (Draft) Time, Emotion, Causality
├── radio/
│   ├── STANDARDS.md           # Audio production rules
│   ├── scripts/               # TTS-ready scripts
│   └── production-kit/        # Intro/Outro stems
├── community/
│   ├── CONTRIBUTING.md
│   ├── GOVERNANCE.md
│   └── ADOPTERS.md
├── research/
│   ├── asean-phonotics.md     # Comparative studies
│   └── articulation-gap.md    # Problem definition
├── seo/
│   ├── KEYWORDS.md
│   └── DISCOVERY_STRATEGY.md
├── LICENSE
└── README.md
`;

import { FileNode } from '../types';

// For the Sidebar UI
export const SidebarData: FileNode[] = [
  { name: 'README.md', type: 'file', path: '/' },
  { name: 'core', type: 'folder', children: [
    { name: 'FOUNDATION.md', type: 'file', path: '/foundation' },
    { name: 'PEDAGOGY.md', type: 'file', path: '/phonotics' }, // Mapping Pedagogy to Phonotics page for simplicity
  ]},
  { name: 'volume-1', type: 'folder', children: [
    { name: 'HIERARCHY.md', type: 'file', path: '/hierarchy' },
    { name: 'saga-01', type: 'folder', children: [] },
  ]},
  { name: 'radio', type: 'folder', children: [
    { name: 'STANDARDS.md', type: 'file', path: '/radio' },
  ]},
  { name: 'community', type: 'folder', children: [
    { name: 'GOVERNANCE.md', type: 'file', path: '/contribution' },
    { name: 'ROADMAP.md', type: 'file', path: '/roadmap' },
  ]},
  { name: 'seo', type: 'folder', children: [
    { name: 'STRATEGY.md', type: 'file', path: '/seo' },
  ]},
];
