export const site = {
  name: "Sai Mehndi & Tattoo",
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
    instagram: "#",
    facebook: "#",
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
};

export const services: Service[] = [
  {
    slug: "bridal-mehndi",
    number: "01",
    title: "Bridal Mehndi",
    short: "Elaborate full-hand & full-leg designs for your big day.",
    description:
      "The centrepiece of every wedding. Elaborate, story-woven bridal designs crafted over hours of fine detailing — portraits, motifs and moments from your journey, finished with a rich, deep stain that photographs beautifully.",
    features: [
      "Custom motifs woven with your love story",
      "100% natural, hand-mixed henna cones",
      "Deep, long-lasting stain",
      "Trial design available before the wedding",
    ],
    image: "/images/hero-2.jpg",
  },
  {
    slug: "party-mehndi",
    number: "02",
    title: "Party & Festival Mehndi",
    short: "Quick, elegant designs for sangeet, Diwali, Eid & more.",
    description:
      "Beautiful without the long wait. Elegant designs sized for sangeet nights, Karva Chauth, Diwali, Eid and family get-togethers — refined patterns applied swiftly so everyone gets their turn.",
    features: [
      "15–40 minute express designs",
      "Group & family bookings welcome",
      "Trending festive patterns",
      "At-studio or at-venue service",
    ],
    image: "/images/gallery-3.jpg",
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
    image: "/images/gallery-2.jpg",
  },
  {
    slug: "tattoo-art",
    number: "04",
    title: "Tattoo Art",
    short: "Professional tattoos, from fine line work to portraits.",
    description:
      "Born from a sketch artist's hand. Professional tattoo work spanning minimal line art, script, ornamental patterns and detailed portraits — drawn first, inked with care.",
    features: [
      "Custom design consultation",
      "Hygienic, single-use equipment",
      "Fine-line, script & ornamental styles",
      "Free touch-up guidance",
    ],
    image: "/images/gallery-1.jpg",
  },
  {
    slug: "nail-art",
    number: "05",
    title: "Nail Art",
    short: "Creative nail art to complete your occasion look.",
    description:
      "The finishing touch. Hand-painted nail art that echoes your mehndi and outfit — from subtle festive shimmer to detailed statement nails for brides.",
    features: [
      "Bridal & festive nail styling",
      "Hand-painted detailing",
      "Colour-matched to your outfit",
      "Quick add-on to any booking",
    ],
    image: "/images/gallery-4.jpg",
  },
  {
    slug: "classes",
    number: "06",
    title: "Classes & Training",
    short: "Learn Mehndi, Tattoo & Nail Art as a career skill.",
    description:
      "Art as a livelihood. Structured courses in Mehndi, Tattoo Making and Nail Art for students and hobbyists — the same skills that built this studio, taught step by step. Students who have completed 10th or 12th grade can build a real career as skilled artists.",
    features: [
      "Beginner to professional levels",
      "Hands-on practice from day one",
      "Career guidance for young artists",
      "Certificate on completion",
    ],
    image: "/images/gallery-5.jpg",
  },
];

export const stats = [
  { value: 18, suffix: "+", label: "Years of Artistry" },
  { value: 1000, suffix: "+", label: "Occasions Adorned" },
  { value: 100, suffix: "+", label: "Students Trained" },
  { value: 4, suffix: "", label: "Art Forms Mastered" },
];

export type Review = {
  name: string;
  occasion: string;
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Priya Sharma",
    occasion: "Bridal Mehndi",
    text: "Sai did my bridal mehndi and it was beyond beautiful. The design lasted for weeks and everyone kept asking who did it!",
  },
  {
    name: "Anjali Verma",
    occasion: "Diwali Celebration",
    text: "Super talented and so patient with all my requests. My whole family got their mehndi done for Diwali — everyone loved it.",
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
    occasion: "Mehndi Classes",
    text: "Joined the mehndi classes after 12th and I'm already taking my own small bookings. He teaches with so much patience.",
  },
  {
    name: "Aarti Joshi",
    occasion: "Karva Chauth",
    text: "The stain came out so dark and rich! My go-to artist for every Karva Chauth now. Booking again this year.",
  },
];

export const faqs = [
  {
    q: "How early should I book for bridal mehndi?",
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
    a: "Call or WhatsApp the studio to know the current batch timings. Courses in Mehndi, Tattoo Making and Nail Art are open to students (10th/12th pass) and hobbyists alike.",
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  category: "Bridal" | "Arabic" | "Festive";
};

export const galleryItems: GalleryItem[] = [
  { src: "/images/hero-2.jpg", alt: "Bridal couple with intricate mehndi", category: "Bridal" },
  { src: "/images/gallery-1.jpg", alt: "Detailed bridal mehndi design", category: "Bridal" },
  { src: "/images/gallery-2.jpg", alt: "Arabic floral mehndi trail", category: "Arabic" },
  { src: "/images/hero-1.jpg", alt: "Festive mehndi on both hands", category: "Festive" },
  { src: "/images/gallery-4.jpg", alt: "Full-hand bridal mehndi", category: "Bridal" },
  { src: "/images/gallery-5.jpg", alt: "Arabic design with bold flowers", category: "Arabic" },
  { src: "/images/gallery-3.jpg", alt: "Elegant festive mehndi design", category: "Festive" },
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
    text: "After years of canvas and paper, the artistry found its true home — mehndi. Continuous practice turned passion into craft, and competition wins soon followed.",
  },
  {
    year: "2011",
    title: "National recognition",
    text: "Competing at the national level in contests hosted by Grihshobha, Meri Saheli, Mahila Yug and The Times of India — winning the Grihshobha National Certificate 2011.",
  },
  {
    year: "Onwards",
    title: "Passing the art forward",
    text: "Training young students so they too can earn a respectable livelihood through art — and expanding into professional tattooing, driven by one thought: \"If I can apply mehndi, why not create tattoos?\"",
  },
  {
    year: "Today",
    title: "The studio in Patel Nagar",
    text: "Eighteen years in, Sai Mehndi & Tattoo is a full studio — bridal mehndi, tattoos, nail art and classes — where every contest won taught something, and every one lost taught even more.",
  },
];

export const awards = [
  "Grihshobha National Certificate 2011",
  "The Times of India Competitions",
  "Meri Saheli",
  "Mahila Yug",
];

export const marqueeItems = [
  "Bridal Mehndi",
  "Arabic Designs",
  "Party Mehndi",
  "Tattoo Art",
  "Nail Art",
  "Mehndi Classes",
];
