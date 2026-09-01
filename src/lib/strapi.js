import axios from "axios";
import qs from "qs";

// axios's default param serializer doesn't handle nested objects
// (like the populate object below) correctly, so we use qs instead —
// this is what Strapi's own docs recommend. Run: npm install qs
const strapi = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_URL,
  paramsSerializer: (params) =>
    qs.stringify(params, { encodeValuesOnly: true }),
});

// Turns a relative Strapi media path into a full URL.
export function mediaUrl(path) {
  if (!path) return undefined; // let the browser skip loading entirely
  return path.startsWith("http")
    ? path
    : `${import.meta.env.VITE_STRAPI_URL}${path}`;
}

// Explicit populate object — reliable for nested components/media,
// unlike populate=* (one level only) or populate=deep (needs a plugin).
const homepagePopulate = {
  populate: {
    hero: { populate: "*" },
    stats: { populate: "*" },
    aboutFeatures: { populate: "*" },
    aboutImage: { populate: "*" },
    services: { populate: "*" },
    hospitalAffiliationImage: { populate: "*" },
    doctors: { populate: { image: true, specialties: true } },
    faqs: { populate: "*" },
    testimonials: { populate: "*" },
    finalCta: { populate: "*" },
    marqueeItems: { populate: "*" },
  },
};

const globalPopulate = {
  populate: {
    Logo: true,
    navLinks: { populate: "*" },
  },
};

export async function getHomepage() {
  const res = await strapi.get("/api/homepage", { params: homepagePopulate });
  return res.data.data.attributes ?? res.data.data;
}

export async function getGlobal() {
  const res = await strapi.get("/api/global", { params: globalPopulate });
  return res.data.data.attributes ?? res.data.data;
}

const aboutPagePopulate = {
  populate: {
    hero: { populate: "*" },
    stats: { populate: "*" },
    timeline: { populate: "*" },
    physicians: { populate: { image: true, highlights: true } },
    careSteps: { populate: "*" },
    facilities: { populate: "*" },
    testimonials: { populate: "*" },
    finalCta: { populate: "*" },
  },
};

export async function getAboutPage() {
  const res = await strapi.get("/api/about-page", {
    params: aboutPagePopulate,
  });
  return res.data.data.attributes ?? res.data.data;
}
