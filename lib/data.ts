import { galleryImages, type GalleryCategory, type MehndiStyle } from "@/lib/gallery";

export const site = {
  name: "Sai Mehandi & Tattoo",
  shortName: "Sai",
  artist: "Dev Kumar",
  tagline: "Turning every occasion into a work of art, one design at a time.",
  since: 2008,
  phones: ["+91 98999 42258", "+91 93116 41163"],
  whatsapp: "919899942258",
  email: "devakumar786@gmail.com",
  address:
    "Shop No. 22, Minni Khanna Market, West Patel Nagar, New Delhi – 110008",
  hours: "Open daily · 10:00 AM – 9:00 PM",
  mapEmbed:
    "https://www.google.com/maps?q=Minni%20Khanna%20Market%2C%20West%20Patel%20Nagar%2C%20New%20Delhi%20110008&output=embed",
  socials: {
    instagram:
      "https://www.instagram.com/sai_mehandi_and_tattoo_studio?utm_source=qr&igsh=emRjcGcwaW43dGpw",
    facebook: "https://www.facebook.com/share/1JiS6UXDYL/",
    youtube: "https://www.youtube.com/@saimehandiandtattoostudio",
    twitter: "https://x.com/SaiTattoo",
  },
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

/** The four crafts the studio actually advertises. */
export type ServiceCategoryKey = "mehandi" | "tattoo" | "nail-art" | "classes";

export type Service = {
  slug: string;
  number: string;
  title: string;
  /** Which top-level craft this service belongs to. Drives the navbar strip. */
  category: ServiceCategoryKey;
  short: string;
  description: string;
  /**
   * `features` / `details` are intentionally NOT rendered on the services page —
   * they enumerate sub-styles of each craft, which the studio does not want listed.
   * Kept here only so the copy isn't lost; render neither without asking first.
   */
  features: string[];
  details: string[];
  image: string;
  /** Autoplay/muted background video shown once footage is added to /public/videos/. */
  video: string;
  /**
   * The slice of the gallery this service's "Show more" opens. Single source of
   * truth for the services -> gallery deep link; omit for services with no
   * matching gallery category (e.g. classes).
   */
  gallery?: { category: GalleryCategory; style?: MehndiStyle };
};

/** Below this a style filter lands the visitor on a near-empty grid. */
const MIN_STYLE_MATCHES = 6;

/**
 * Resolves a service's intended gallery filter against what the manifest really
 * holds. Style tagging is thin for some categories (currently 1 arabic and 2
 * festive images), so the style is only kept when enough photos carry it —
 * otherwise the visitor gets the whole category rather than a one-photo grid.
 * Self-corrects as more images are tagged in lib/gallery.ts.
 */
export function resolveGallery(gallery: NonNullable<Service["gallery"]>) {
  const inCategory = galleryImages.filter(
    (img) => img.category === gallery.category,
  );
  if (!gallery.style) {
    return { category: gallery.category, images: inCategory };
  }
  const styled = inCategory.filter((img) => img.style === gallery.style);
  return styled.length >= MIN_STYLE_MATCHES
    ? { category: gallery.category, style: gallery.style, images: styled }
    : { category: gallery.category, images: inCategory };
}

/** Builds the /gallery deep link for a service, pre-filtered to its own work. */
export const galleryLink = (gallery: NonNullable<Service["gallery"]>) => {
  const resolved = resolveGallery(gallery);
  const params = new URLSearchParams({ category: resolved.category });
  if (resolved.style) params.set("style", resolved.style);
  return `/gallery?${params.toString()}`;
};

export const services: Service[] = [
  {
    slug: "bridal-mehandi",
    category: "mehandi",
    number: "01",
    title: "Bridal Mehandi",
    short: "Elaborate full-hand & full-leg designs for your big day.",
    description:
      "The centrepiece of every wedding. Elaborate, story-woven designs built up over hours of fine detailing and personalised to your celebration, finished with a rich, deep stain that photographs beautifully.",
    features: [
      "Custom motifs woven with your love story",
      "100% natural, hand-mixed henna cones",
      "Deep, long-lasting stain",
      "Trial design available before the wedding",
    ],
    details: [
      "Custom bridal composition with portraits, foliage, blessings and wedding symbols.",
      "Full-hand and full-leg coverage with matching bridal detailing.",
      "Normal bridal, heavy bridal, face wali portrait mehandi and 3D layered finishing styles.",
      "Natural stain finish with aftercare support for richer, longer-lasting colour.",
    ],
    image: "/assets-mehndi/img-096.jpg",
    video: "/videos/bridal-mehandi.mp4",
    gallery: { category: "mehndi", style: "bridal" },
  },
  {
    slug: "party-mehandi",
    category: "mehandi",
    number: "02",
    title: "Party & Festival Mehandi",
    short: "Quick, elegant designs for sangeet, Diwali, Eid & more.",
    description:
      "Beautiful without the long wait. Elegant designs sized for sangeet nights, Karva Chauth, Diwali, Eid and family get-togethers — refined patterns applied swiftly so everyone gets their turn.",
    features: [
      "15–40 minute express designs",
      "Group & family bookings welcome",
      "Trending festive patterns",
      "At-studio or at-venue service",
    ],
    details: [
      "Festive Arabic, floral and minimal motifs designed to suit your outfit and occasion.",
      "Perfect for sangeet, Diwali, Karva Chauth, Eid, birthdays and family functions.",
      "Fast service with clean finishing, ideal for last-minute celebrations.",
      "Adds a polished festive look with rich contrast and balanced hand coverage.",
    ],
    image: "/assets-mehndi/img-121.jpg",
    video: "/videos/party-mehandi.mp4",
    gallery: { category: "mehndi", style: "festive" },
  },
  {
    slug: "arabic-designs",
    category: "mehandi",
    number: "03",
    title: "Arabic Designs",
    short: "Bold, flowing florals with clean modern lines.",
    description:
      "A modern favourite for both hands and feet. Bold, flowing floral trails with generous negative space and clean lines — striking from across the room, effortless up close.",
    features: [
      "Statement floral trails",
      "Elegant negative-space styling",
      "Perfect for hands & feet",
      "Pairs beautifully with western wear",
    ],
    details: [
      "Flowing floral patterns with crisp lines and strong visual balance.",
      "Ideal for minimal luxury looks with a clean, contemporary finish.",
      "Can be tailored for both hands and feet depending on the occasion.",
      "A versatile look that works beautifully with festive, bridal and casual outfits.",
    ],
    image: "/assets-mehndi/img-070.jpg",
    video: "/videos/arabic-designs.mp4",
    gallery: { category: "mehndi", style: "arabic" },
  },
  {
    slug: "tattoo-art",
    category: "tattoo",
    number: "04",
    title: "Tattoo Art",
    short: "Professional tattoos, from fine line work to portraits.",
    description:
      "Born from a sketch artist’s hand. Every piece is drawn before it is inked — sized, placed and worked with a sterile, single-use setup and unhurried attention. Priced by size, by hour or by session; the full rate card is below.",
    features: [
      "Custom design consultation",
      "Hygienic, single-use equipment",
      "Fine-line, script & ornamental styles",
      "Free touch-up guidance",
    ],
    details: [
      "Custom consultation, sketching and placement planning before the procedure.",
      "Line work, geometric, calligraphy, minimal and portrait tattoo styles.",
      "Sterile hygiene setup, safe aftercare education and touch-up guidance.",
      "Tattoo classes and pricing available for both basic and advanced training tracks.",
    ],
    image: "/assets-mehndi/img-062.jpg",
    video: "/videos/tattoo-art.mp4",
    gallery: { category: "tattoo" },
  },
  {
    slug: "nail-art",
    category: "nail-art",
    number: "05",
    title: "Nail Art",
    short: "Creative nail art to complete your occasion look.",
    description:
      "The finishing touch. Hand-painted nail art shaped around your mehandi and your outfit, prepped and finished so it lasts through the whole celebration.",
    features: [
      "French tip, ombre & marble art",
      "Chrome, cat-eye & glitter finishes",
      "Gel & acrylic extensions",
      "Bridal & festive nail styling",
    ],
    details: [
      "Nail anatomy, product knowledge, shaping, filing and healthy nail preparation.",
      "Gel polish, temporary extension, soft gel, acrylic, chrome, rhinestone and bridal styling.",
      "Trending creative finishes including marble, ombre, blooming, cat-eye and 3D art.",
      "From quick fixes to bridal statement sets, every design is tailored to your style.",
    ],
    image: "/assets-mehndi/img-014.jpg",
    video: "/videos/nail-art.mp4",
    gallery: { category: "nail-art" },
  },
  {
    slug: "classes",
    category: "classes",
    number: "06",
    title: "Classes & Training",
    short: "Learn Mehandi, Tattoo & Nail Art as a career skill.",
    description:
      "Art as a livelihood. Structured courses in Mehandi, Tattoo Making and Nail Art for students and hobbyists — the same skills that built this studio, taught step by step. Students who have completed 10th or 12th grade can build a real career as skilled artists. Basic batches start at ₹7,000 and advance batches at ₹15,000 for Mehandi, ₹10,000 and ₹18,000 for Nail Art, ₹80,000 and ₹1,50,000 for Tattoo.",
    features: [
      "Beginner to professional levels",
      "Hands-on practice from day one",
      "Career guidance for young artists",
      "Certificate on completion",
    ],
    details: [
      "Mehandi courses cover outline, bail, bridal patterns, portrait design and full-hand technique.",
      "Nail art classes include product knowledge, extensions, gel application and modern art styles.",
      "Tattoo training covers machine handling, stencil prep, hygiene, realism and professional studio skills.",
      "Certificate will be issued on completion; course fee is non-refundable once enrolled.",
    ],
    image: "/assets-mehndi/img-024.jpg",
    video: "/videos/classes.mp4",
  },
];

/**
 * The services page gives mehandi a single section covering all three styles,
 * so every craft has exactly one anchor to link to: mehandi gets the
 * craft-level id, and the other crafts are one service each and keep their own
 * slug. Bridal / party / Arabic have no section of their own, so anything that
 * pointed at them links to their slice of the gallery instead.
 */
export const MEHANDI_ANCHOR = "mehandi";

export function craftAnchor(key: ServiceCategoryKey) {
  if (key === "mehandi") return MEHANDI_ANCHOR;
  return services.find((service) => service.category === key)?.slug ?? key;
}

/**
 * Where a link naming a single service should go. Bridal, party and Arabic
 * have no section of their own, so they land on their slice of the gallery —
 * the work is what tells the styles apart. Everything else has a section.
 */
export function serviceHref(service: Service) {
  if (service.category === "mehandi" && service.gallery) {
    return galleryLink(service.gallery);
  }
  return `/services#${service.slug}`;
}

/** Everything that is its own standalone section on the services page. */
export const standaloneServices = services.filter(
  (service) => service.category !== "mehandi",
);

/**
 * The three cards in the homepage services preview. Deliberately the *crafts*
 * rather than individual services — the mehandi sub-styles (bridal, party,
 * arabic) are not advertised separately on the homepage. Artwork and the link
 * target follow the first service of each craft so this stays in sync with
 * `services` on its own.
 */
export const homeFeatured = (
  [
    {
      key: "mehandi",
      title: "Mehandi",
      short:
        "Bridal, festive and Arabic designs — from eight-hour bridal sittings to fifteen-minute party patterns.",
      image: "/assets-mehndi/img-153.jpg",
    },
    {
      key: "tattoo",
      title: "Tattoo",
      short:
        "Professional tattoos drawn before they are inked — fine line work, script, ornamental and portraits.",
      image: "/assets-mehndi/img-062.jpg",
    },
    {
      key: "nail-art",
      title: "Nail Art",
      short:
        "Hand-painted nail art, gel and acrylic extensions, chrome and cat-eye finishes to complete the look.",
      image: "/assets-mehndi/img-080.jpg",
    },
    // Artwork is chosen here rather than inherited from the first service:
    // these three all sit near 4:5, which is the card's frame, so each card
    // fills edge to edge with no crop worth seeing and no filler bars.
  ] satisfies {
    key: ServiceCategoryKey;
    title: string;
    short: string;
    image: string;
  }[]
).flatMap((craft, i) => {
  const first = services.find((service) => service.category === craft.key);
  return first
    ? [
        {
          ...craft,
          number: String(i + 1).padStart(2, "0"),
          video: first.video,
          href: `/services#${craftAnchor(craft.key)}`,
        },
      ]
    : [];
});

const SERVICE_CATEGORY_LABELS: Record<ServiceCategoryKey, string> = {
  mehandi: "Mehandi",
  tattoo: "Tattoo",
  "nail-art": "Nail Art",
  classes: "Classes",
};

/**
 * The strip under the navbar. Only the four top-level crafts belong here —
 * sub-styles (bridal, party, arabic, …) are deliberately not advertised
 * separately. Each entry jumps to the first service card of that craft.
 */
export const serviceCategories = (
  Object.keys(SERVICE_CATEGORY_LABELS) as ServiceCategoryKey[]
).flatMap((key) => {
  const first = services.find((service) => service.category === key);
  return first
    ? [
        {
          key,
          label: SERVICE_CATEGORY_LABELS[key],
          href: `/services#${craftAnchor(key)}`,
        },
      ]
    : [];
});

export const stats = [
  { value: 18, suffix: "+", label: "Years of Artistry" },
  { value: 10000, suffix: "+", label: "Occasions Adorned" },
  { value: 1000, suffix: "+", label: "Students Trained" },
  { value: 4, suffix: "", label: "Art Forms Mastered" },
];

/* ------------------------------------------------------------------ */
/* Classes & Training — curriculum sourced from studio enrolment forms */
/* ------------------------------------------------------------------ */

export type ClassLevel = {
  tier: "Basic" | "Advance";
  price: number;
  priceUnit: string;
  admissionFee?: number;
  highlights: string[];
};

export type ClassProgram = {
  slug: string;
  title: string;
  short: string;
  poster: string;
  reel?: string; // Instagram reel permalink shown as the card's autoplay video
  levels: ClassLevel[];
  note?: string;
};

export const classPrograms: ClassProgram[] = [
  {
    slug: "mehandi-classes",
    title: "Mehandi Classes",
    short: "From your first outline to full bridal artistry.",
    poster: "/assets-mehndi/img-149.jpg",
    reel: "https://www.instagram.com/reel/DYxxNthyF2Q/",
    levels: [
      {
        tier: "Basic",
        price: 7000,
        priceUnit: "course",
        highlights: [
          "Part of Mehandi",
          "Internal design",
          "Outline",
          "Bail",
          "Full hand",
          "Five finger cover bail",
          "Back and front full cover hand",
          "Red mehandi",
          "Black mehandi",
          "Bangles",
        ],
      },
      {
        tier: "Advance",
        price: 15000,
        priceUnit: "course",
        highlights: [
          "Normal bridal",
          "Heavy bridal",
          "Portrait mehandi (Face Wali)",
          "Madhubani mehandi — pattern, dulha, dulhan, taashe, kalash, doli, shri ganesh",
          "Bridal heavy leg mehandi",
          "Bridal normal leg mehandi",
          "3D bridal finishing styles",
        ],
      },
    ],
    note: "Certificate will be available on completion. Advance fee will not be returned.",
  },
  {
    slug: "tattoo-training",
    title: "Tattoo Training",
    short: "Machine handling to full portrait realism, taught hands-on.",
    poster: "/assets-mehndi/img-005.jpg",
    reel: "https://www.instagram.com/reel/DLVxvqhTtlk/",
    levels: [
      {
        tier: "Basic",
        price: 80000,
        priceUnit: "course",
        highlights: [
          "Introduction to tattoo art and history",
          "Drawing fundamentals: lines, strokes, shading and light & shadow",
          "Tattoo design and composition basics",
          "Basic tattoo styles: traditional, minimal, fine-line, geometric and blackwork",
          "Tattoo equipment theory: machine, needles, power supply and ink",
          "Stencil creation, placement and hygiene principles",
          "Safety, sterilization, cross-contamination prevention and disposal rules",
        ],
      },
      {
        tier: "Advance",
        price: 150000,
        priceUnit: "course",
        highlights: [
          "Advanced drawing fundamentals: line control, proportion, perspective, light, shadow, form, composition, gesture and anatomy",
          "2D tattoo art: line-art, black & grey, colour theory, traditional, neo-traditional, fine-line, minimalist, geometric, mandala, dotwork, realistic portrait drawing, lettering and custom tattoo design",
          "Advanced shading: smooth gradients, whip shading, stippling, cross-hatching, black packing and depth creation",
          "3D art & tattoo design: forms, volumes, perspective, 3D lettering, geometric illusions, realistic objects and optical illusion concepts",
          "Anatomy & realistic art: human anatomy, facial structure, hands, feet, muscles, body proportions, portrait construction and animal anatomy",
          "Tattoo composition & placement: body contour design, full sleeves, backs, chest, shoulders, leg pieces, multi-tattoo connections and negative-space planning",
          "Advanced design development: reference analysis, concept development, custom artwork, style combinations, original flash creation and portfolio building",
          "Professional & safety module: advanced hygiene, cross-contamination control, equipment safety, sharps disposal, client consultation, consent, documentation, aftercare and local regulations",
          "Master-level projects: full sleeve, large back-piece, realistic portrait, 3D tattoo design, custom black & grey piece, full-colour composition and final professional portfolio",
        ],
      },
    ],
  },
  {
    slug: "nail-art-classes",
    title: "Nail Art Classes",
    short: "Nail anatomy to bridal-ready extensions and 3D art.",
    poster: "/assets-mehndi/img-170.jpg",
    reel: "https://www.instagram.com/reel/DLnxzgNzgwC/",
    levels: [
      {
        tier: "Basic",
        price: 10000,
        priceUnit: "course",
        highlights: [
          "Nail anatomy",
          "Product knowledge",
          "Nail shapes and filing",
          "Vendor details",
          "Gel polish",
          "Temporary extension",
          "Soft gelx",
          "French tip",
          "Swirls",
          "Blooming",
          "Dotting art",
          "Chrome",
          "Cat eye",
          "Fall glitter",
          "Spider art",
          "Rose illustration",
          "Ombre art",
          "Animal print",
          "Marble art",
        ],
      },
      {
        tier: "Advance",
        price: 18000,
        priceUnit: "course",
        highlights: [
          "Nail anatomy and nail shape mastery",
          "Power polish and product knowledge",
          "Temporary extension, gel extension and acrylic extension basics",
          "Removal, refill, soft gel extension, overlay and press-on nails",
          "Brush knowledge, drill techniques, Russian manicure and nail prep",
          "Dotting tool, sticker art, dry glitter, french nails and animal prints",
          "Spider gel, sweater art, cat-eye, ombre, marble, foil and rhinestone work",
          "3D, bridal, neon, chrome, cracked, airbrush and emboss art styles",
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Tattoo pricing — cost of a tattoo by size, hour & session          */
/* ------------------------------------------------------------------ */

export type PriceRate = { tier: string; rate: number; unit: string };

export const tattooPricing: {
  label: string;
  note: string;
  base?: { label: string; amount: number };
  rates: PriceRate[];
}[] = [
  {
    label: "By Size",
    note: "Best for small tattoos",
    base: { label: "First inch", amount: 1500 },
    rates: [
      { tier: "Junior Artist", rate: 500, unit: "/inch" },
      { tier: "Senior Artist", rate: 700, unit: "/inch" },
      { tier: "Dev", rate: 1000, unit: "/inch" },
    ],
  },
  {
    label: "By Hour",
    note: "Best for single-session tattoos",
    rates: [
      { tier: "Junior Artist", rate: 3000, unit: "/hour" },
      { tier: "Senior Artist", rate: 5000, unit: "/hour" },
      { tier: "Dev", rate: 8000, unit: "/hour" },
    ],
  },
  {
    label: "By Session",
    note: "Best for single / multiple session tattoos, up to 12 hours",
    rates: [
      { tier: "Junior Artist", rate: 20000, unit: "/session" },
      { tier: "Senior Artist", rate: 40000, unit: "/session" },
      { tier: "Dev", rate: 50000, unit: "/session" },
    ],
  },
];

export const tattooPricingNote = "Taxes applicable.";

/* ------------------------------------------------------------------ */
/* Nail art add-on pricing                                            */
/* ------------------------------------------------------------------ */

export const nailArtPricing: { service: string; price: number }[] = [
  { service: "Gel Polish", price: 399 },
  { service: "Cat Eye", price: 800 },
  { service: "Press On Nails", price: 499 },
  { service: "Gel Extensions", price: 999 },
  { service: "Acrylic Extensions", price: 999 },
  { service: "Nail Extensions + Art (French / Ombre / Glitter Ombre)", price: 1199 },
  { service: "Toe Nail Extensions", price: 999 },
  { service: "Removal", price: 199 },
];

/**
 * Real studio posts embedded on the gallery page.
 *
 * PORTRAIT POSTS ONLY. Instagram's widget sizes each embed to the post it is
 * showing, so a landscape or square post renders short and leaves a band of
 * dead white space inside the card while the portrait ones next to it stay
 * full. `DLnxzgNzgwC` was dropped for exactly that reason — check a permalink
 * renders portrait before adding it here. The gallery lays itself out from the
 * length of this list, so adding a third is all that is needed.
 */
export const instagramReels = [
  "https://www.instagram.com/reel/DYxxNthyF2Q/",
  "https://www.instagram.com/reel/DLVxvqhTtlk/",
];

export type Review = {
  name: string;
  occasion: string;
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Priya Sharma",
    occasion: "Bridal Mehandi",
    text: "Sai did my bridal mehandi and it was beyond beautiful. The design lasted for weeks and everyone kept asking who did it!",
  },
  {
    name: "Anjali Verma",
    occasion: "Diwali Celebration",
    text: "Super talented and so patient with all my requests. My whole family got their mehandi done for Diwali — everyone loved it.",
  },
  {
    name: "Ritu Malhotra",
    occasion: "Sangeet Night",
    text: "Booked for my sangeet, the design was intricate and finished right on time. Highly recommend for any occasion.",
  },
  {
    name: "Neha Kapoor",
    occasion: "First Tattoo",
    text: "Got my first tattoo here — Dev sir sketched it in front of me until it was perfect. Clean studio, steady hands, zero regrets.",
  },
  {
    name: "Simran Kaur",
    occasion: "Mehandi Classes",
    text: "Joined the mehandi classes after 12th and I'm already taking my own small bookings. He teaches with so much patience.",
  },
  {
    name: "Aarti Joshi",
    occasion: "Karva Chauth",
    text: "The stain came out so dark and rich! My go-to artist for every Karva Chauth now. Booking again this year.",
  },
];

export const faqs = [
  {
    q: "How early should I book for bridal mehandi?",
    a: "For wedding season (October–February), 3–4 weeks in advance is ideal. Off-season, a week's notice usually works — but the earlier you book, the more time we have to design something personal.",
  },
  {
    q: "How long does bridal application take?",
    a: "Between 3 and 6 hours depending on coverage — full hands to elbows and feet to mid-calf take the longest. We plan the sitting around your wedding schedule so you're never rushed.",
  },
  {
    q: "How do I get the darkest stain?",
    a: "Keep the paste on for 6–8 hours, dab lemon-sugar once it's semi-dry, avoid water for the first 12 hours, and let warmth do the rest. Full aftercare instructions come with every booking.",
  },
  {
    q: "Do you travel to homes and venues?",
    a: "Yes — home visits and venue bookings are available across Delhi NCR for bridal and group appointments. Travel details are confirmed at the time of booking.",
  },
  {
    q: "Is the henna 100% natural?",
    a: "Absolutely. Cones are hand-mixed in the studio from natural henna — no chemical dyes — which is exactly why the stain settles into that deep, rich colour safely.",
  },
  {
    q: "How do I join the classes?",
    a: "Call or WhatsApp the studio to know the current batch timings. Courses in Mehandi, Tattoo Making and Nail Art are open to students (10th/12th pass) and hobbyists alike, with Mehandi Basic ₹7,000 / Advance ₹15,000, Nail Art Basic ₹10,000 / Advance ₹18,000, and Tattoo Basic ₹80,000 / Advance ₹1,50,000.",
  },
];

export const timeline = [
  {
    year: "Early Days",
    title: "A childhood of colour",
    text: "A deep love for design and painting from the very beginning — school competitions, first-prize trophies, and formal training in sketching and facial portraits.",
  },
  {
    year: "2008",
    title: "The art moves to hands",
    text: "After years of canvas and paper, the artistry found its true home — mehandi. Continuous practice turned passion into craft, and competition wins soon followed.",
  },
  {
    year: "2011",
    title: "National recognition",
    text: "Competing at the national level in contests hosted by Grihshobha, Meri Saheli, Mahila Yug and The Times of India — winning the Grihshobha National Certificate 2011.",
  },
  {
    year: "Onwards",
    title: "Passing the art forward",
    text: "Training young students so they too can earn a respectable livelihood through art — and expanding into professional tattooing, driven by one thought: \"If I can apply mehandi, why not create tattoos?\"",
  },
  {
    year: "Today",
    title: "The studio in Patel Nagar",
    text: "Eighteen years in, Sai Mehandi & Tattoo is a full studio — bridal mehandi, tattoos, nail art and classes — where every contest won taught something, and every one lost taught even more.",
  },
];

export const awards = [
  "Grihshobha National Certificate 2011",
  "The Times of India Competitions",
  "Meri Saheli",
  "Mahila Yug",
];

export const marqueeItems = [
  "Bridal Mehandi",
  "Arabic Designs",
  "Party Mehandi",
  "Tattoo Art",
  "Nail Art",
  "Mehandi Classes",
];
