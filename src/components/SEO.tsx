import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { services } from "../sections/Services/servicesData";

const SITE_URL = "https://physiotherapy-mu.vercel.app";
const DEFAULT_TITLE =
  "DE-INES Physiotherapy | Expert Physiotherapy in Benin City";
const DEFAULT_DESCRIPTION =
  "DE-INES Physiotherapy provides expert physiotherapy, sports injury rehabilitation, stroke recovery, pain management and post-surgical rehabilitation in Benin City, Edo State.";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION },
  "/about": {
    title: "About DE-INES Physiotherapy | Benin City",
    description:
      "Meet the DE-INES Physiotherapy team in Benin City. Learn about our approach to compassionate, evidence-based physiotherapy and rehabilitation.",
  },
  "/services": {
    title: "Physiotherapy Services | DE-INES, Benin City",
    description:
      "Explore physiotherapy and rehabilitation services in Benin City, including sports injury, musculoskeletal, pelvic health, stroke and post-surgical care.",
  },
  "/what-we-treat": {
    title: "Conditions We Treat | DE-INES Physiotherapy",
    description:
      "See conditions treated by DE-INES Physiotherapy in Benin City, including back and joint pain, sports injuries, stroke-related mobility problems and post-surgical needs.",
  },
  "/training": {
    title: "Healthcare Assistant Training | DE-INES",
    description:
      "Learn about practical Home Care Assistant training with DE-INES in Nigeria, including classroom learning, hands-on sessions and professional supervision.",
  },
  "/contact": {
    title: "Book a Physiotherapy Appointment | DE-INES Benin City",
    description:
      "Contact DE-INES Physiotherapy to book an appointment in Benin City or Agbor. Call, email or send your enquiry on WhatsApp.",
  },
  "/patient-info": {
    title: "Patient Information | DE-INES Physiotherapy",
    description:
      "Prepare for your physiotherapy appointment with DE-INES. Find practical information about assessments, treatment sessions and recovery.",
  },
  "/faq": {
    title: "Physiotherapy FAQs | DE-INES Benin City",
    description:
      "Answers to common questions about physiotherapy, treatment, appointments and patient care at DE-INES in Benin City.",
  },
};

const upsertMeta = (
  selector: string,
  attribute: string,
  value: string,
  content: string,
) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
  element.content = content;
};

const upsertCanonical = (href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }

  element.href = href;
};

const SEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const serviceSlug = pathname.startsWith("/services/")
      ? pathname.slice("/services/".length)
      : "";
    const service = services.find((item) => item.slug === serviceSlug);
    const metadata =
      service ?
        {
          title: `${service.title} | DE-INES Physiotherapy, Benin City`,
          description: `${service.overview} Available from DE-INES Physiotherapy in Benin City, Edo State.`,
        }
      : pageMetadata[pathname] ?? {
          title: "Page Not Found | DE-INES Physiotherapy",
          description: "The page you requested could not be found.",
        };
    const canonicalUrl = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;

    document.title = metadata.title;
    upsertMeta(
      'meta[name="description"]',
      "name",
      "description",
      metadata.description,
    );
    upsertMeta(
      'meta[property="og:title"]',
      "property",
      "og:title",
      metadata.title,
    );
    upsertMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      metadata.description,
    );
    upsertMeta(
      'meta[property="og:url"]',
      "property",
      "og:url",
      canonicalUrl,
    );
    upsertCanonical(canonicalUrl);
  }, [pathname]);

  return null;
};

export default SEO;
