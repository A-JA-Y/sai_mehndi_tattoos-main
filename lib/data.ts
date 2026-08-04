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

export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  image: string;
  /** Autoplay/muted background video shown once footage is added to /public/videos/. */
  video: string;
};

export const services: Service[] = [
  {
    slug: "bridal-mehandi",
    number: "01",
    title: "Bridal Mehandi",
    short: "Elaborate full-hand & full-leg designs for your big day.",
    description:
      "The centrepiece of every wedding. Elaborate, story-woven bridal designs crafted over hours of fine detailing — portraits, motifs and moments from your journey, finished with a rich, deep stain that photographs beautifully.",
    features: [
      "Custom motifs woven with your love story",
      "100% natural, hand-mixed henna cones",
      "Deep, long-lasting stain",
      "Trial design available before the wedding",
    ],
    image: "/assets-mehndi/img-096.jpg",
    video: "/videos/bridal-mehandi.mp4",
  },
  {
    slug: "party-mehandi",
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
    image: "/assets-mehndi/img-121.jpg",
    video: "/videos/party-mehandi.mp4",
  },
  {
    slug: "arabic-designs",
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
    image: "/assets-mehndi/img-070.jpg",
    video: "/videos/arabic-designs.mp4",
  },
  {
    slug: "tattoo-art",
    number: "04",
    title: "Tattoo Art",
    short: "Professional tattoos, from fine line work to portraits.",
    description:
      "Born from a sketch artist's hand. Professional tattoo work spanning minimal line art, script, ornamental patterns and detailed portraits — drawn first, inked with care. Priced by size, by hour or by session — see the full price list below.",
    features: [
      "Custom design consultation",
      "Hygienic, single-use equipment",
      "Fine-line, script & ornamental styles",
      "Free touch-up guidance",
    ],
    image: "/assets-mehndi/img-062.jpg",
    video: "/videos/tattoo-art.mp4",
  },
  {
    slug: "nail-art",
    number: "05",
    title: "Nail Art",
    short: "Creative nail art to complete your occasion look.",
    description:
      "The finishing touch. Hand-painted nail art that echoes your mehandi and outfit — from subtle festive shimmer to detailed statement nails for brides.",
    features: [
      "French tip, ombre & marble art",
      "Chrome, cat-eye & glitter finishes",
      "Gel & acrylic extensions",
      "Bridal & festive nail styling",
    ],
    image: "/assets-mehndi/img-014.jpg",
    video: "/videos/nail-art.mp4",
  },
  {
    slug: "classes",
    number: "06",
    title: "Classes & Training",
    short: "Learn Mehandi, Tattoo & Nail Art as a career skill.",
    description:
      "Art as a livelihood. Structured courses in Mehandi, Tattoo Making and Nail Art for students and hobbyists — the same skills that built this studio, taught step by step. Students who have completed 10th or 12th grade can build a real career as skilled artists. Basic batches start at ₹7,000/month, Advance batches at ₹8,000/month.",
    features: [
      "Beginner to professional levels",
      "Hands-on practice from day one",
      "Career guidance for young artists",
      "Certificate on completion",
    ],
    image: "/assets-mehndi/img-024.jpg",
    video: "/videos/classes.mp4",
  },
];

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
    poster: "/assets-mehndi/img-171.jpg",
    reel: "https://www.instagram.com/reel/DYxxNthyF2Q/",
    levels: [
      {
        tier: "Basic",
        price: 7000,
        priceUnit: "/month",
        highlights: [
          "Mehandi internals, design & outline",
          "Bail patterns & full-hand coverage",
          "Five-finger cover bail",
          "Back and front full-cover hand",
          "Red & black mehandi application",
          "Bangles mehandi",
        ],
      },
      {
        tier: "Advance",
        price: 8000,
        priceUnit: "/month",
        admissionFee: 18000,
        highlights: [
          "Normal & heavy bridal mehandi",
          "Portrait mehandi (face wali)",
          "Madhubani mehandi — pattern, dulhan, taashe, kalash, doli, shri, ganesh",
          "Bridal heavy & normal leg mehandi",
          "3D bridal mehandi",
        ],
      },
    ],
    note: "Certificate on completion. Advance registration fee of ₹18,000 is non-refundable.",
  },
  {
    slug: "tattoo-training",
    title: "Tattoo Training",
    short: "Machine handling to full portrait realism, taught hands-on.",
    poster: "/assets-mehndi/img-057.jpg",
    reel: "https://www.instagram.com/reel/DLVxvqhTtlk/",
    levels: [
      {
        tier: "Basic",
        price: 7000,
        priceUnit: "/month",
        highlights: [
          "Tattoo machine knowledge — coil vs rotary, setup & maintenance",
          "Needles, inks & sterile studio hygiene",
          "Stencil making & transfer",
          "Line work fundamentals on artificial skin",
          "Skin preparation & cross-contamination prevention",
          "Client interaction basics & pricing guidance",
        ],
      },
      {
        tier: "Advance",
        price: 8000,
        priceUnit: "/month",
        highlights: [
          "Portrait & realism training — proportion, gradients, likeness",
          "Colour theory — blending, saturation, tattoos that age well",
          "Advanced machine handling — voltage & depth control",
          "Cover-up & redesign techniques",
          "Real-skin practice on supervised client sessions",
          "Studio setup, branding & portfolio building",
        ],
      },
    ],
  },
  {
    slug: "nail-art-classes",
    title: "Nail Art Classes",
    short: "Nail anatomy to bridal-ready extensions and 3D art.",
    poster: "/assets-mehndi/img-038.jpg",
    reel: "https://www.instagram.com/reel/DLnxzgNzgwC/",
    levels: [
      {
        tier: "Basic",
        price: 7000,
        priceUnit: "/month",
        highlights: [
          "Nail anatomy & product knowledge",
          "Nail shapes & filing",
          "Gel polish & soft gelx",
          "Temporary & press-on extensions",
          "French tip, ombre & marble art",
          "Dotting, chrome & cat-eye techniques",
        ],
      },
      {
        tier: "Advance",
        price: 8000,
        priceUnit: "/month",
        highlights: [
          "Gel & acrylic extensions",
          "3D nail art, foil & rhinestone application",
          "Bridal & engagement nail art",
          "Drill techniques & Russian manicure",
          "Overlay, refill & removal",
          "Vendor sourcing & kit building",
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

/** A handful of real studio reels for the gallery/social sections. */
export const instagramReels = [
  "https://www.instagram.com/reel/DYxxNthyF2Q/",
  "https://www.instagram.com/reel/DLVxvqhTtlk/",
  "https://www.instagram.com/reel/DLnxzgNzgwC/",
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
    a: "Call or WhatsApp the studio to know the current batch timings. Courses in Mehandi, Tattoo Making and Nail Art are open to students (10th/12th pass) and hobbyists alike, with Basic batches from ₹7,000/month and Advance batches from ₹8,000/month.",
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
