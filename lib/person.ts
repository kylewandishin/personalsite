/**
 * One source of truth for who Kyle is and where he lives online.
 *
 * Every URL here should link back to this site or to arterial.us — reciprocal
 * links are how search engines and Wikidata decide these profiles are the same
 * person. Keep this list in step with Wikidata Q139827048 and the Person node on
 * https://arterial.us/company.
 */
export const SITE_URL = "https://kyle.wandishin.com"
export const PERSON_ID = `${SITE_URL}/#person`

/** Arterial's Organization node lives on arterial.us; reference it, don't redefine it. */
export const ARTERIAL_ORG_ID = "https://arterial.us/#organization"

export const PROFILE_LINKS = {
  linkedin: "https://www.linkedin.com/in/kylewandishin/",
  github: "https://github.com/kylewandishin",
  wikidata: "https://www.wikidata.org/wiki/Q139827048",
  arterialTeam: "https://arterial.us/company",
  arterialBooking: "https://arterial.us/book/kyle",
} as const

export const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: `${SITE_URL}/`,
      name: "Kyle Wandishin",
      inLanguage: "en-US",
      mainEntity: { "@id": PERSON_ID },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Kyle Wandishin",
      givenName: "Kyle",
      familyName: "Wandishin",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/images/kyle.jpeg`,
      jobTitle: "Co-founder & Chief Technology Officer",
      worksFor: {
        "@type": "Organization",
        "@id": ARTERIAL_ORG_ID,
        name: "Arterial",
        legalName: "Arterial Data Solutions Inc.",
        url: "https://arterial.us/",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Colorado Boulder",
        sameAs: "https://www.wikidata.org/wiki/Q736674",
      },
      homeLocation: {
        "@type": "Place",
        name: "Boulder, Colorado",
        sameAs: "https://www.wikidata.org/wiki/Q192517",
      },
      knowsAbout: [
        "Computer vision",
        "Applied machine learning",
        "Monocular depth estimation",
        "Geospatial mapping",
        "Roadway infrastructure intelligence",
        "Software engineering",
      ],
      sameAs: [
        PROFILE_LINKS.linkedin,
        PROFILE_LINKS.github,
        PROFILE_LINKS.wikidata,
        PROFILE_LINKS.arterialTeam,
      ],
    },
  ],
}
