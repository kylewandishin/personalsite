/**
 * One source of truth for who Kyle is, where he lives online, and what has
 * been written about him. Metadata, JSON-LD, and page copy all read from here.
 *
 * Every URL here should link back to this site or to arterial.us. Reciprocal
 * links are how search engines and Wikidata decide these profiles are the same
 * person. Keep this file in step with Wikidata Q139827048 and the Person node on
 * https://arterial.us/company.
 */
export const SITE_URL = "https://kyle.wandishin.com"
export const PERSON_ID = `${SITE_URL}/#person`
export const WEBSITE_ID = `${SITE_URL}/#website`
export const HEADSHOT_ID = `${SITE_URL}/#headshot`

/** Arterial's Organization node lives on arterial.us; reference it, don't redefine it. */
export const ARTERIAL_ORG_ID = "https://arterial.us/#organization"

export const person = {
  name: "Kyle Wandishin",
  givenName: "Kyle",
  familyName: "Wandishin",
  jobTitle: "Co-founder & Chief Technology Officer",
  shortTitle: "Co-founder & CTO",
  email: "kyle@arterial.us",
  phone: "+1-720-800-2900",
  phoneDisplay: "(720) 800-2900",
  location: "Boulder, Colorado",
  /** Full-resolution original, CC BY 4.0. Also the source for Wikimedia Commons. */
  headshot: "/images/kyle.jpeg",
  headshotSize: { width: 2400, height: 1600 },
} as const

export const PROFILE_LINKS = {
  linkedin: "https://www.linkedin.com/in/kylewandishin/",
  github: "https://github.com/kylewandishin",
  wikidata: "https://www.wikidata.org/wiki/Q139827048",
  arterialTeam: "https://arterial.us/company",
  arterialBooking: "https://arterial.us/book/kyle",
} as const

export const arterial = {
  name: "Arterial",
  legalName: "Arterial Data Solutions Inc.",
  url: "https://arterial.us/",
  // Same brand line as arterial.us, Wikidata P1451 and the Business Profile. Do not reword.
  tagline: "The Living Inventory of Your Road Infrastructure",
  incorporated: "2024-09-19",
  links: {
    website: "https://arterial.us/",
    linkedin: "https://www.linkedin.com/company/arterialai",
    github: "https://github.com/arterial-us",
    youtube: "https://www.youtube.com/channel/UC2ZJYO6RTc8sCeAfgRU-B0w",
    wikidata: "https://www.wikidata.org/wiki/Q139676065",
    news: "https://arterial.us/news",
  },
  /**
   * Deep links into arterial.us. Linking the specific page that backs a claim
   * (not just the homepage) is what gets those inner pages crawled and ranked.
   */
  pages: {
    company: "https://arterial.us/company",
    services: "https://arterial.us/services",
    hazards: "https://arterial.us/services/hazard-detection",
    fieldAssets: "https://arterial.us/services/field-assets",
    signage: "https://arterial.us/services/signage-inventory",
    data: "https://arterial.us/data",
    coverage: "https://arterial.us/data#coverage",
    elidar: "https://arterial.us/data#elidar",
    quality: "https://arterial.us/data#quality",
    integrations: "https://arterial.us/data#integrations",
    prioritization: "https://arterial.us/data#prioritization",
  },
} as const

export const seo = {
  title: "Kyle Wandishin | Co-founder & CTO of Arterial",
  description:
    "Kyle Wandishin is co-founder and CTO of Arterial, turning fleet dashcams into a living, survey-grade inventory of road infrastructure for cities and DOTs.",
} as const

/** Share card generated from app/opengraph-image.jpg; subpages pass it explicitly because their openGraph replaces the root's. */
export const OG_IMAGE = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "Kyle Wandishin, Co-founder and CTO of Arterial, Boulder, Colorado",
}

export const CC_BY_4 = "https://creativecommons.org/licenses/by/4.0/"

/** Wikidata entities used to disambiguate topics and places in JSON-LD. */
export const wd = {
  cuBoulder: "https://www.wikidata.org/wiki/Q736674",
  boulder: "https://www.wikidata.org/wiki/Q192517",
  computerVision: "https://www.wikidata.org/wiki/Q844240",
  machineLearning: "https://www.wikidata.org/wiki/Q2539",
  depthEstimation: "https://www.wikidata.org/wiki/Q111670253",
  reconstruction3d: "https://www.wikidata.org/wiki/Q4464732",
  gis: "https://www.wikidata.org/wiki/Q483130",
  edgeComputing: "https://www.wikidata.org/wiki/Q5337692",
  roadMaintenance: "https://www.wikidata.org/wiki/Q2354985",
  assetManagement: "https://www.wikidata.org/wiki/Q873442",
  enterpriseIntegration: "https://www.wikidata.org/wiki/Q1052246",
} as const

export type PressItem = {
  date: string
  label: string
  outlet: string
  title: string
  url: string
  author?: string
  /** True when the piece names Kyle, not just Arterial. */
  namesKyle: boolean
  /** Arterial's authorized reprint on arterial.us/news, when there is one. */
  arterialUrl?: string
}

/** Independent coverage, newest first. Each link was checked 2026-09-10. */
export const press: PressItem[] = [
  {
    date: "2026-04-29",
    label: "Apr 29, 2026",
    outlet: "Colorado Smart Cities Alliance",
    title: "Colorado Governments Select Three AI Solutions in Fifth Annual C² Challenge",
    url: "https://coloradosmart.city/colorado-governments-select-three-ai-solutions-in-annual-connected-colorado-challenge/",
    arterialUrl: "https://arterial.us/news/csca-c2-challenge-2026-arterial",
    namesKyle: false,
  },
  {
    date: "2025-09-22",
    label: "Sep 22, 2025",
    outlet: "BEN Colorado",
    title: "Introducing the Denver ScaleUp Network Fall 2025 Cohort",
    url: "https://www.bencolorado.org/blog/densun-fall-2025-cohort",
    arterialUrl: "https://arterial.us/news/ben-colorado-densun-fall-2025-cohort",
    namesKyle: true,
  },
  {
    date: "2025-08-11",
    label: "Aug 11, 2025",
    outlet: "CU Denver News",
    title: "Smart Futures Lab Hosts 3rd Annual Demo Day at CU Denver",
    url: "https://news.ucdenver.edu/smart-futures-lab-hosts-3rd-annual-demo-day-at-cu-denver-showcasing-smart-city-innovation/",
    namesKyle: true,
  },
  {
    date: "2025-08-06",
    label: "Aug 6, 2025",
    outlet: "Smart Futures Lab",
    title: "Press Release: Smart Futures Lab Hosts 3rd Annual Demo Day",
    url: "https://www.smartfutureslab.com/post/smart-futures-lab-hosts-demo-day-2025",
    arterialUrl: "https://arterial.us/news/smart-futures-lab-demo-day-2025",
    namesKyle: true,
  },
  {
    date: "2025-04-29",
    label: "Apr 29, 2025",
    outlet: "CU Boulder Leeds School of Business",
    title: "Arterial Charts a Bold Path Toward Launch",
    author: "Colton Sontrop",
    url: "https://www.colorado.edu/business/deming/news/2025/04/29/arterial-charts-bold-path-toward-launch",
    arterialUrl: "https://arterial.us/news/cu-boulder-arterial-launch-path-deming-2025",
    namesKyle: true,
  },
  {
    date: "2025-04-29",
    label: "Apr 29, 2025",
    outlet: "SmartCitiesWorld",
    title: "Denver Smart Futures Lab programme announces latest cohort",
    url: "https://www.smartcitiesworld.net/news/denver-smart-futures-lab-programme-announces-latest-cohort-11457",
    arterialUrl: "https://arterial.us/news/smart-cities-world-smart-futures-lab-cohort-2025",
    namesKyle: false,
  },
  {
    date: "2025-04-24",
    label: "Apr 24, 2025",
    outlet: "CU Denver News",
    title: "10 Startups Join CU Denver's Smart Future Lab Program",
    url: "https://news.ucdenver.edu/10-startups-from-colorado-and-across-the-u-s-join-cu-denvers-smart-future-lab-program/",
    namesKyle: true,
  },
  {
    date: "2025-04-24",
    label: "Apr 24, 2025",
    outlet: "Colorado Smart Cities Alliance",
    title: "10 Startups Join Third Cohort of CU Denver's Smart Futures Lab Program",
    url: "https://coloradosmart.city/10-startups-join-third-cohort-of-cu-denvers-smart-futures-lab-program/",
    arterialUrl: "https://arterial.us/news/csca-smart-futures-lab-cohort-3-2025",
    namesKyle: true,
  },
  {
    date: "2025",
    label: "2025",
    outlet: "Smart Futures Lab",
    title: "2025 Program Members",
    url: "https://www.smartfutureslab.com/2025-program-members",
    namesKyle: true,
  },
  {
    date: "2025-02-11",
    label: "Feb 11, 2025",
    outlet: "CU Boulder Leeds School of Business",
    title: "Arterial: The CU Boulder Startup Revolutionizing Road Maintenance",
    author: "Emily Iliff",
    url: "https://www.colorado.edu/business/deming/news/2025/02/11/arterial-cu-boulder-startup-revolutionizing-road-maintenance",
    arterialUrl: "https://arterial.us/news/cu-boulder-arterial-road-maintenance-deming-2025",
    namesKyle: true,
  },
]

const pressUrl = (match: string) => press.find((p) => p.url.includes(match))?.url

/** Milestones for Kyle and Arterial, newest first. `url` points at the independent source when there is one. */
export const recognition = [
  {
    year: "2026",
    title: "Connected Colorado (C²) Challenge winner",
    detail: "Selected by Lakewood and Loveland to deploy Arterial's automated inspection.",
    url: pressUrl("connected-colorado-challenge"),
  },
  {
    year: "2026",
    title: "Colorado delegation, London Tech Week",
    detail: "Part of Colorado's delegation to London Tech Week 2026.",
    url: undefined,
  },
  {
    year: "2025",
    title: "Denver ScaleUp Network, Fall 2025 cohort",
    detail: "BEN Colorado's growth program, supported by the City and County of Denver.",
    url: pressUrl("densun-fall-2025"),
  },
  {
    year: "2025",
    title: "CU Denver Smart Futures Lab, cohort 3",
    detail: "Smart-city accelerator run with the Colorado Smart Cities Alliance and Innosphere Ventures.",
    url: pressUrl("third-cohort"),
  },
  {
    year: "2025",
    title: "1st place, Techstars Startup Weekend AI & Life Sciences",
    detail: "Won in Winston-Salem, North Carolina, with Arterial.",
    url: pressUrl("bold-path-toward-launch"),
  },
] as const

const topic = (name: string, sameAs: string) => ({ "@type": "Thing", name, sameAs })

/** Site-wide graph: rendered once in the root layout. Page-specific nodes live with each page. */
export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: person.name,
      inLanguage: "en-US",
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: person.name,
      givenName: person.givenName,
      familyName: person.familyName,
      url: `${SITE_URL}/`,
      image: { "@id": HEADSHOT_ID },
      email: `mailto:${person.email}`,
      jobTitle: person.jobTitle,
      description: seo.description,
      worksFor: { "@id": ARTERIAL_ORG_ID },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Colorado Boulder",
        url: "https://www.colorado.edu/",
        sameAs: wd.cuBoulder,
      },
      homeLocation: { "@type": "Place", name: person.location, sameAs: wd.boulder },
      knowsAbout: [
        topic("Computer vision", wd.computerVision),
        topic("Machine learning", wd.machineLearning),
        topic("Monocular depth estimation", wd.depthEstimation),
        topic("3D reconstruction", wd.reconstruction3d),
        topic("Geographic information systems", wd.gis),
        topic("Edge computing", wd.edgeComputing),
        topic("Road maintenance", wd.roadMaintenance),
        topic("Infrastructure asset management", wd.assetManagement),
        topic("Enterprise application integration", wd.enterpriseIntegration),
        "Roadway infrastructure intelligence",
        "Software engineering",
      ],
      award: "1st place, Techstars Startup Weekend AI & Life Sciences 2025 (with Arterial)",
      sameAs: [PROFILE_LINKS.wikidata, PROFILE_LINKS.linkedin, PROFILE_LINKS.github, PROFILE_LINKS.arterialTeam],
      subjectOf: press
        .filter((p) => p.namesKyle)
        .map((p) => ({
          "@type": "Article",
          headline: p.title,
          url: p.url,
          datePublished: p.date,
          publisher: { "@type": "Organization", name: p.outlet },
          ...(p.author ? { author: { "@type": "Person", name: p.author } } : {}),
        })),
    },
    {
      // Minimal reference so this page validates on its own; arterial.us holds the full node.
      "@type": "Organization",
      "@id": ARTERIAL_ORG_ID,
      name: arterial.name,
      legalName: arterial.legalName,
      url: arterial.url,
      slogan: arterial.tagline,
      founder: [
        { "@id": PERSON_ID },
        {
          "@type": "Person",
          "@id": "https://arterial.us/company#person-wade-turner",
          name: "Wade Turner",
          url: "https://wadepturner.com/",
          sameAs: ["https://www.wikidata.org/wiki/Q139827063", "https://www.linkedin.com/in/wadeturner1/"],
        },
      ],
      sameAs: [arterial.links.wikidata, arterial.links.linkedin, arterial.links.github, arterial.links.youtube],
    },
    {
      "@type": "ImageObject",
      "@id": HEADSHOT_ID,
      contentUrl: `${SITE_URL}${person.headshot}`,
      url: `${SITE_URL}${person.headshot}`,
      width: person.headshotSize.width,
      height: person.headshotSize.height,
      caption: "Kyle Wandishin (self-portrait)",
      creator: { "@id": PERSON_ID },
      creditText: "Kyle Wandishin",
      copyrightNotice: "Kyle Wandishin, CC BY 4.0",
      license: CC_BY_4,
      acquireLicensePage: `${SITE_URL}/about#headshot`,
    },
  ],
}
