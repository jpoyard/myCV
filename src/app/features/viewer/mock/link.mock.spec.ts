import { Link } from "../model/link";

const MOCK_PRIMARY_LINKS: Link[] = [
  { icon: "fa-map-marker", label: "2, rue des Monts Chauvets Poissy, France", url: "https://www.google.fr/maps/place/2+Rue+des+Monts+Chauvets,+78300+Poissy" },
  { icon: "fa-envelope", label: "julien.poyard@gmail.com", url: "mailto:julien.poyard@gmail.com" },
  { icon: "fa-mobile", label: "(+33) 6 60 75 40 32", url: "tel:+33660754032" }
];

export function getMockPrimaryLinks(): Link[] {
  return JSON.parse(JSON.stringify(MOCK_PRIMARY_LINKS));
}

const MOCK_SECONDARY_LINKS: Link[] = [
  { icon: "fa-linkedin", label: "linkedin.com/in/jpoyard", url: "http://www.linkedin.com/in/jpoyard" },
  { icon: "fa-github", label: "github.com/jpoyard", url: "https://github.com/jpoyard" },
  { icon: "fa-twitter", label: "@jpoyard", url: "https://twitter.com/jpoyard" },
  { icon: "fa-codepen", label: "codepen.io/jpoyard", url: "https://codepen.io/jpoyard" }
]

export function getMockSecondaryLinks(): Link[] {
  return JSON.parse(JSON.stringify(MOCK_SECONDARY_LINKS));
}

