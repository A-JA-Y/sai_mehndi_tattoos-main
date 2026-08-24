// Auto-generated gallery manifest: all 180 unique images from assets-mehndi,
// visually classified by category and mehandi style. Regenerate rather than hand-edit.
export type GalleryCategory =
  | "mehndi"
  | "tattoo"
  | "sketch"
  | "nail-art"
  | "event";

export type MehndiStyle = "bridal" | "arabic" | "festive" | "minimal";

export type GalleryImage = {
  src: string;
  alt: string;
  category: GalleryCategory;
  style?: MehndiStyle;
  /** Intrinsic pixel size, read off the file. Drives frame shape and CLS. */
  w: number;
  h: number;
};

/**
 * The library is genuinely mixed — roughly a third 9:16 phone shots, a third
 * 3:4, and the rest 4:5, square or landscape. Any single frame ratio therefore
 * either crops a face off one third of it or letterboxes another third, so
 * frames follow their own image wherever the layout can take a ragged edge.
 */
export const aspectOf = (img: { w: number; h: number }) => img.w / img.h;

/**
 * Whether an image can fill a fixed frame without a visible crop — used where
 * a tidy row matters more than a perfect fit. `tolerance` is the share of the
 * image allowed to be cropped away; beyond it the image is shown whole instead.
 */
export function fillsFrame(
  img: { w: number; h: number },
  frame: number,
  tolerance = 0.22,
) {
  const ratio = aspectOf(img);
  const limit = 1 - tolerance;
  return ratio >= frame * limit && ratio <= frame / limit;
}

export const galleryImages: GalleryImage[] = [
  { src: "/assets-mehndi/img-018.jpg", alt: "Intricate bridal mehandi with peacocks and palace motifs on both palms", category: "mehndi", style: "bridal", w: 720, h: 722 },
  { src: "/assets-mehndi/img-014.jpg", alt: "Pink and white marble nails with gold veining", category: "nail-art", w: 736, h: 736 },
  { src: "/assets-mehndi/img-070.jpg", alt: "Elephant and lotus mehandi on both hands", category: "mehndi", style: "arabic", w: 736, h: 920 },
  { src: "/assets-mehndi/img-015.jpg", alt: "Long french-tip nails with silver glitter swirl accents", category: "nail-art", w: 1080, h: 1783 },
  { src: "/assets-mehndi/img-074.jpg", alt: "Intricate bridal henna palm with peacock and dome motifs", category: "mehndi", style: "bridal", w: 735, h: 915 },
  { src: "/assets-mehndi/img-022.jpg", alt: "Burgundy almond nails with silver glitter accents", category: "nail-art", w: 600, h: 761 },
  { src: "/assets-mehndi/img-096.jpg", alt: "Full-arm bridal mehandi with dense intricate patterns", category: "mehndi", style: "bridal", w: 736, h: 1308 },
  { src: "/assets-mehndi/img-025.jpg", alt: "Burgundy ombre nails with glitter hearts and rhinestones", category: "nail-art", w: 736, h: 1104 },
  { src: "/assets-mehndi/img-097.jpg", alt: "Bride hiding face behind fully hennaed arms with lattice design", category: "mehndi", style: "bridal", w: 750, h: 908 },
  { src: "/assets-mehndi/img-049.jpg", alt: "Almond nails with glossy nude polish and gold tips", category: "nail-art", w: 1200, h: 1799 },
  { src: "/assets-mehndi/img-102.jpg", alt: "Bride with circular mandala bridal mehandi against marigold backdrop", category: "mehndi", style: "bridal", w: 1242, h: 1799 },
  { src: "/assets-mehndi/img-051.jpg", alt: "Long coffin nails in brown glitter and nude tones", category: "nail-art", w: 1024, h: 1024 },
  { src: "/assets-mehndi/img-106.jpg", alt: "Joyful bride showing lotus arch bridal mehandi on palms", category: "mehndi", style: "bridal", w: 570, h: 855 },
  { src: "/assets-mehndi/img-170.jpg", alt: "Pink and white marble nails with gold glitter", category: "nail-art", w: 1000, h: 1500 },
  { src: "/assets-mehndi/img-110.jpg", alt: "Intricate bridal henna arms with peacock and wedding figures", category: "mehndi", style: "bridal", w: 1013, h: 1911 },
  { src: "/assets-mehndi/img-112.jpg", alt: "Bridal feet mehandi with elephant and umbrella motifs", category: "mehndi", style: "bridal", w: 960, h: 1200 },
  { src: "/assets-mehndi/img-113.jpg", alt: "Elegant bridal foot henna featuring elephants under parasols", category: "mehndi", style: "bridal", w: 926, h: 1200 },
  { src: "/assets-mehndi/img-121.jpg", alt: "Full-arm bridal mehandi with initials and shaded roses", category: "mehndi", style: "bridal", w: 1080, h: 1350 },
  { src: "/assets-mehndi/img-129.jpg", alt: "Bridal full-arm mehandi with bride and groom figures", category: "mehndi", style: "bridal", w: 400, h: 609 },
  { src: "/assets-mehndi/img-133.jpg", alt: "Full-arm bridal mehandi with bride and groom portraits", category: "mehndi", style: "bridal", w: 1080, h: 1920 },
  { src: "/assets-mehndi/img-136.jpg", alt: "Intricate bridal mehandi featuring bride and groom figures", category: "mehndi", style: "bridal", w: 836, h: 1312 },
  { src: "/assets-mehndi/img-143.jpg", alt: "Bridal mehandi with elephant procession and peacock motifs", category: "mehndi", style: "bridal", w: 570, h: 961 },
  { src: "/assets-mehndi/img-144.jpg", alt: "Bridal mehandi with palace arches and couple initials", category: "mehndi", style: "bridal", w: 570, h: 933 },
  { src: "/assets-mehndi/img-146.jpg", alt: "Intricate bridal mehandi with cityscape and zodiac motifs", category: "mehndi", style: "bridal", w: 570, h: 913 },
  { src: "/assets-mehndi/img-147.jpg", alt: "Bridal mehandi with peacocks and love-story lettering", category: "mehndi", style: "bridal", w: 800, h: 985 },
  { src: "/assets-mehndi/img-149.jpg", alt: "Ornate bridal mehandi with royal couple portraits", category: "mehndi", style: "bridal", w: 1390, h: 1839 },
  { src: "/assets-mehndi/img-151.jpg", alt: "Bridal mehandi featuring royal elephant and bride figures", category: "mehndi", style: "bridal", w: 900, h: 1122 },
  { src: "/assets-mehndi/img-152.jpg", alt: "Bridal mehandi with city skyline and wedding scenes", category: "mehndi", style: "bridal", w: 570, h: 900 },
  { src: "/assets-mehndi/img-153.jpg", alt: "Bold bridal mehandi with peacock, drums and skyline", category: "mehndi", style: "bridal", w: 1080, h: 1350 },
  { src: "/assets-mehndi/img-154.jpg", alt: "Traditional bridal mehandi with palanquin and kalash motifs", category: "mehndi", style: "bridal", w: 1048, h: 1280 },
  { src: "/assets-mehndi/img-157.jpg", alt: "Bridal full-arm mehandi with couple portraits on palms", category: "mehndi", style: "bridal", w: 400, h: 406 },
  { src: "/assets-mehndi/img-160.jpg", alt: "Palm mehandi of seated woman with Boss Lady quote", category: "mehndi", style: "festive", w: 1080, h: 1353 },
  { src: "/assets-mehndi/img-163.jpg", alt: "Dense bridal mehandi arms with elephants and couple portraits", category: "mehndi", style: "bridal", w: 984, h: 1481 },
  { src: "/assets-mehndi/img-164.png", alt: "Bridal arm mehandi with lotus crowns and couple portraits", category: "mehndi", style: "bridal", w: 1096, h: 1819 },
  { src: "/assets-mehndi/img-165.jpg", alt: "Bridal mehandi with realistic family portrait panels", category: "mehndi", style: "bridal", w: 463, h: 695 },
  { src: "/assets-mehndi/img-167.jpg", alt: "Bride showing baraat procession mehandi across crossed arms", category: "mehndi", style: "bridal", w: 600, h: 600 },
  { src: "/assets-mehndi/img-168.png", alt: "Storytelling bridal mehandi with love story scene panels", category: "mehndi", style: "bridal", w: 824, h: 1024 },
  { src: "/assets-mehndi/img-172.jpg", alt: "Collage of three intricate full-arm bridal mehandi designs", category: "mehndi", style: "bridal", w: 1280, h: 720 },
  { src: "/assets-mehndi/img-098.jpg", alt: "Bride raising intricate full-arm bridal mehandi at wedding gathering", category: "mehndi", style: "bridal", w: 1080, h: 1289 },
  { src: "/assets-mehndi/img-001.jpg", alt: "Long coffin nails with black and white French tips", category: "nail-art", w: 1200, h: 1165 },
  { src: "/assets-mehndi/img-062.jpg", alt: "Realistic black and grey portrait tattoo on forearm", category: "tattoo", w: 1200, h: 1600 },
  { src: "/assets-mehndi/img-019.jpg", alt: "Realistic pencil portrait sketch of a man in a suit", category: "sketch", w: 720, h: 1280 },
  { src: "/assets-mehndi/img-099.jpg", alt: "Woman showing dense floral bridal mehandi covering both arms", category: "mehndi", style: "bridal", w: 720, h: 900 },
  { src: "/assets-mehndi/img-002.jpg", alt: "French manicure with chevron tips and rhinestone accents", category: "nail-art", w: 1024, h: 1024 },
  { src: "/assets-mehndi/img-174.jpg", alt: "Collage of geometric sleeve, lion back and eagle tattoos", category: "tattoo", w: 1280, h: 720 },
  { src: "/assets-mehndi/img-027.jpg", alt: "Framed pencil portrait of man in hat, signed Art By Dev", category: "sketch", w: 720, h: 1280 },
  { src: "/assets-mehndi/img-100.jpg", alt: "Smiling bride displaying full-arm bridal henna with floral panels", category: "mehndi", style: "bridal", w: 527, h: 812 },
  { src: "/assets-mehndi/img-004.jpg", alt: "Two hands showing black and white angled French tips", category: "nail-art", w: 750, h: 713 },
  { src: "/assets-mehndi/img-175.jpg", alt: "Collage of script, angel wings and tiger tattoos", category: "tattoo", w: 1280, h: 720 },
  { src: "/assets-mehndi/img-064.jpg", alt: "Framed pencil sketch portrait of Sai Baba", category: "sketch", w: 720, h: 1280 },
  { src: "/assets-mehndi/img-101.jpg", alt: "Full-arm floral bridal mehandi with bold dark flower bands", category: "mehndi", style: "bridal", w: 1242, h: 1820 },
  { src: "/assets-mehndi/img-008.jpg", alt: "Glossy maroon nails with silver line art accents", category: "nail-art", w: 1200, h: 1407 },
  { src: "/assets-mehndi/img-176.jpg", alt: "Collage of rose shoulder and Thai temple back tattoos", category: "tattoo", w: 1280, h: 720 },
  { src: "/assets-mehndi/img-103.jpg", alt: "Crossed arms with rose and lattice bridal mehandi design", category: "mehndi", style: "bridal", w: 720, h: 806 },
  { src: "/assets-mehndi/img-011.jpg", alt: "Burgundy nails with glitter and pearl embellishments", category: "nail-art", w: 564, h: 628 },
  { src: "/assets-mehndi/img-105.jpg", alt: "Back-hand bridal mehandi with elephant and lotus lattice motifs", category: "mehndi", style: "bridal", w: 961, h: 1200 },
  { src: "/assets-mehndi/img-016.jpg", alt: "White french nails with hearts and glitter cuticle detail", category: "nail-art", w: 736, h: 1104 },
  { src: "/assets-mehndi/img-107.jpg", alt: "Full-arm bridal mehandi with palace domes and bride figures", category: "mehndi", style: "bridal", w: 750, h: 1000 },
  { src: "/assets-mehndi/img-017.jpg", alt: "Black chevron french-tip manicure with glitter lines", category: "nail-art", w: 1200, h: 1198 },
  { src: "/assets-mehndi/img-108.jpg", alt: "Bridal mehandi arms featuring bride groom and elephant portraits", category: "mehndi", style: "bridal", w: 1080, h: 1531 },
  { src: "/assets-mehndi/img-028.jpg", alt: "Black French tip nails with swirl line accents", category: "nail-art", w: 512, h: 640 },
  { src: "/assets-mehndi/img-109.jpg", alt: "Full-arm bridal mehandi with bride and groom portraits", category: "mehndi", style: "bridal", w: 526, h: 960 },
  { src: "/assets-mehndi/img-035.jpg", alt: "Almond nails with white French tips and pearl shimmer", category: "nail-art", w: 896, h: 1088 },
  { src: "/assets-mehndi/img-111.jpg", alt: "Bridal full-arm mehandi with elephants and royal figures", category: "mehndi", style: "bridal", w: 500, h: 625 },
  { src: "/assets-mehndi/img-036.jpg", alt: "Deep maroon nails with white heart accent nail", category: "nail-art", w: 474, h: 474 },
  { src: "/assets-mehndi/img-114.jpg", alt: "Bridal mehandi arms showing groom and bride portraits", category: "mehndi", style: "bridal", w: 547, h: 996 },
  { src: "/assets-mehndi/img-043.jpg", alt: "Almond nails with rose-gold cat-eye French tips", category: "nail-art", w: 640, h: 1136 },
  { src: "/assets-mehndi/img-116.jpg", alt: "Detailed bridal mehandi with traditional bride figures", category: "mehndi", style: "bridal", w: 618, h: 1062 },
  { src: "/assets-mehndi/img-044.jpg", alt: "Pink coffin nails with black swirls and rhinestones", category: "nail-art", w: 1200, h: 1727 },
  { src: "/assets-mehndi/img-117.png", alt: "Dense floral full-arm bridal henna with rose motifs", category: "mehndi", style: "bridal", w: 728, h: 1063 },
  { src: "/assets-mehndi/img-045.jpg", alt: "Vivid red manicure with swirl accents and rhinestones", category: "nail-art", w: 564, h: 997 },
  { src: "/assets-mehndi/img-118.jpg", alt: "Rich full-arm bridal mehandi with geometric bands", category: "mehndi", style: "bridal", w: 798, h: 960 },
  { src: "/assets-mehndi/img-046.jpg", alt: "Square nails with black and gold glitter French tips", category: "nail-art", w: 736, h: 736 },
  { src: "/assets-mehndi/img-119.jpg", alt: "Ornate full-arm henna with floral diamond patterns", category: "mehndi", style: "bridal", w: 802, h: 960 },
  { src: "/assets-mehndi/img-055.jpg", alt: "Black French tip nails with gold outline accents", category: "nail-art", w: 736, h: 736 },
  { src: "/assets-mehndi/img-120.jpg", alt: "Full-arm bridal mehandi with layered paisley patterns", category: "mehndi", style: "bridal", w: 604, h: 841 },
  { src: "/assets-mehndi/img-058.jpg", alt: "Coffin nails with abstract black and white French design", category: "nail-art", w: 1200, h: 1489 },
  { src: "/assets-mehndi/img-122.jpg", alt: "Dense floral bridal henna covering both forearms and hands", category: "mehndi", style: "bridal", w: 467, h: 830 },
  { src: "/assets-mehndi/img-068.jpg", alt: "Deep red and gold glitter ombre nails", category: "nail-art", w: 1200, h: 1200 },
  { src: "/assets-mehndi/img-123.jpg", alt: "Intricate bridal feet mehandi with rose and lattice patterns", category: "mehndi", style: "bridal", w: 475, h: 546 },
  { src: "/assets-mehndi/img-069.jpg", alt: "Red and white marble effect nail design", category: "nail-art", w: 564, h: 564 },
  { src: "/assets-mehndi/img-124.jpg", alt: "Bridal leg and feet mehandi with climbing rose vines", category: "mehndi", style: "bridal", w: 960, h: 1280 },
  { src: "/assets-mehndi/img-071.jpg", alt: "Burgundy French tip nails with hearts and bows", category: "nail-art", w: 1024, h: 971 },
  { src: "/assets-mehndi/img-125.jpg", alt: "Bridal feet mehandi with lotus motifs on blue stool", category: "mehndi", style: "bridal", w: 540, h: 960 },
  { src: "/assets-mehndi/img-078.jpg", alt: "French tip nails with silver leaf accents and rhinestones", category: "nail-art", w: 580, h: 580 },
  { src: "/assets-mehndi/img-128.jpg", alt: "Raised arms displaying full bridal henna with floral shading", category: "mehndi", style: "bridal", w: 960, h: 1280 },
  { src: "/assets-mehndi/img-079.jpg", alt: "Black French tips with gold glitter and gems", category: "nail-art", w: 1000, h: 1500 },
  { src: "/assets-mehndi/img-130.jpg", alt: "Full-arm bridal mehandi featuring bride portrait on palm", category: "mehndi", style: "bridal", w: 350, h: 553 },
  { src: "/assets-mehndi/img-080.jpg", alt: "White and nude nails with diagonal stripes and crystals", category: "nail-art", w: 1170, h: 1484 },
  { src: "/assets-mehndi/img-131.jpg", alt: "Bridal mehandi with couple portraits, elephants and peacocks", category: "mehndi", style: "bridal", w: 718, h: 1109 },
  { src: "/assets-mehndi/img-082.jpg", alt: "Long pink coffin nails with white wave French tips", category: "nail-art", w: 1200, h: 1265 },
  { src: "/assets-mehndi/img-132.jpg", alt: "Bridal arm mehandi with dancing figures and elephant bands", category: "mehndi", style: "bridal", w: 750, h: 933 },
  { src: "/assets-mehndi/img-083.jpg", alt: "Mauve almond nails with chrome and white accents", category: "nail-art", w: 736, h: 1104 },
  { src: "/assets-mehndi/img-134.jpg", alt: "Bride showing full-arm mehandi with realistic couple portrait", category: "mehndi", style: "bridal", w: 2041, h: 3856 },
  { src: "/assets-mehndi/img-086.png", alt: "Glossy pink nails with heart outlines and rhinestones", category: "nail-art", w: 1152, h: 2048 },
  { src: "/assets-mehndi/img-135.jpg", alt: "Dense bridal mehandi with peacock, elephant and name lettering", category: "mehndi", style: "bridal", w: 436, h: 720 },
  { src: "/assets-mehndi/img-089.jpg", alt: "Deep red nails with gold glitter heart accents", category: "nail-art", w: 736, h: 1302 },
  { src: "/assets-mehndi/img-138.jpg", alt: "Full-arm bridal mehandi with realistic couple face portraits", category: "mehndi", style: "bridal", w: 1379, h: 2397 },
  { src: "/assets-mehndi/img-090.jpg", alt: "Almond chrome nails with red outlined french tips", category: "nail-art", w: 698, h: 805 },
  { src: "/assets-mehndi/img-139.jpg", alt: "Bridal mehandi with royal figures on black background", category: "mehndi", style: "bridal", w: 828, h: 1472 },
  { src: "/assets-mehndi/img-173.jpg", alt: "Collage of black, maroon and gold nail art sets", category: "nail-art", w: 1280, h: 720 },
  { src: "/assets-mehndi/img-140.jpg", alt: "Bridal mehandi showing deity couples and palanquin scene", category: "mehndi", style: "bridal", w: 800, h: 1100 },
  { src: "/assets-mehndi/img-141.jpg", alt: "Dense bridal mehandi with bride figures on pink silk", category: "mehndi", style: "bridal", w: 570, h: 887 },
  { src: "/assets-mehndi/img-142.jpg", alt: "Full-arm bridal mehandi with wedding couple and rose motifs", category: "mehndi", style: "bridal", w: 400, h: 761 },
  { src: "/assets-mehndi/img-145.jpg", alt: "Full-arm bridal mehandi with bride and groom figures", category: "mehndi", style: "bridal", w: 400, h: 564 },
  { src: "/assets-mehndi/img-148.jpg", alt: "Bride raising arms covered in rose bridal mehandi", category: "mehndi", style: "bridal", w: 716, h: 884 },
  { src: "/assets-mehndi/img-150.jpg", alt: "Bridal mehandi with palace skyline and couple names", category: "mehndi", style: "bridal", w: 473, h: 561 },
  { src: "/assets-mehndi/img-155.jpg", alt: "Bridal mehandi with elephants, lotuses and landmarks", category: "mehndi", style: "bridal", w: 822, h: 1210 },
  { src: "/assets-mehndi/img-158.jpg", alt: "Full-arm bridal henna with named bride and groom figures", category: "mehndi", style: "bridal", w: 400, h: 711 },
  { src: "/assets-mehndi/img-159.png", alt: "Henna couple portrait on hand beside reference sketch", category: "mehndi", style: "bridal", w: 976, h: 1280 },
  { src: "/assets-mehndi/img-161.png", alt: "Intricate bridal arm mehandi with elephants and figures", category: "mehndi", style: "bridal", w: 960, h: 1280 },
  { src: "/assets-mehndi/img-162.jpg", alt: "Bridal full-arm henna with groom on horseback scenes", category: "mehndi", style: "bridal", w: 400, h: 600 },
  { src: "/assets-mehndi/img-169.png", alt: "Bridal mehandi with couple portraits on both palms", category: "mehndi", style: "bridal", w: 774, h: 774 },
  { src: "/assets-mehndi/img-178.jpg", alt: "Peacock and lotus henna design on palm", category: "mehndi", style: "festive", w: 736, h: 730 },
  { src: "/assets-mehndi/img-006.jpg", alt: "Tattoo contest stage with judges and big screen", category: "event", w: 1200, h: 1600 },
  { src: "/assets-mehndi/img-104.jpg", alt: "Crossed hands covered in dense checkered floral bridal henna", category: "mehndi", style: "bridal", w: 736, h: 1044 },
  { src: "/assets-mehndi/img-003.jpg", alt: "Black French tip nails with crossed line detailing", category: "nail-art", w: 736, h: 1243 },
  { src: "/assets-mehndi/img-005.jpg", alt: "Full back and sleeve tattoo displayed on stage", category: "tattoo", w: 1200, h: 1600 },
  { src: "/assets-mehndi/img-012.jpg", alt: "Two artists posing at a tattoo festival booth", category: "event", w: 966, h: 1288 },
  { src: "/assets-mehndi/img-115.jpg", alt: "Full-arm bridal henna with palace window figures", category: "mehndi", style: "bridal", w: 828, h: 1472 },
  { src: "/assets-mehndi/img-034.jpg", alt: "Red glitter ombre nails with tiny heart charms", category: "nail-art", w: 736, h: 738 },
  { src: "/assets-mehndi/img-013.jpg", alt: "Artist selfie with a friend at an outdoor tattoo convention", category: "event", w: 966, h: 1288 },
  { src: "/assets-mehndi/img-126.jpg", alt: "Seated bride showing full-arm and feet bridal mehandi", category: "mehndi", style: "bridal", w: 600, h: 1024 },
  { src: "/assets-mehndi/img-056.jpg", alt: "Red and gold glitter nails beside a rose", category: "nail-art", w: 375, h: 375 },
  { src: "/assets-mehndi/img-021.jpg", alt: "Selfie with a tattooed model at a convention venue", category: "event", w: 966, h: 1288 },
  { src: "/assets-mehndi/img-127.jpg", alt: "Bold bridal feet mehandi with leaf and rose motifs", category: "mehndi", style: "bridal", w: 720, h: 1280 },
  { src: "/assets-mehndi/img-081.jpg", alt: "Long nails with white tips and black swirl lines", category: "nail-art", w: 780, h: 1040 },
  { src: "/assets-mehndi/img-023.jpg", alt: "Contestant on stage before judges at a tattoo convention", category: "event", w: 1200, h: 1600 },
  { src: "/assets-mehndi/img-137.jpg", alt: "Bridal mehandi arms depicting Shiva and Parvati figures", category: "mehndi", style: "bridal", w: 828, h: 1472 },
  { src: "/assets-mehndi/img-094.jpg", alt: "White french coffin nails with black swirl accents", category: "nail-art", w: 736, h: 930 },
  { src: "/assets-mehndi/img-024.jpg", alt: "Judges reviewing a participant at a tattoo convention", category: "event", w: 1200, h: 1600 },
  { src: "/assets-mehndi/img-156.jpg", alt: "Crossed arms displaying dense bridal mehandi designs", category: "mehndi", style: "bridal", w: 400, h: 400 },
  { src: "/assets-mehndi/img-095.jpg", alt: "Burgundy coffin nails with red and silver line art", category: "nail-art", w: 944, h: 1416 },
  { src: "/assets-mehndi/img-026.jpg", alt: "Artist with guest tattoo artist at Delhi convention", category: "event", w: 1600, h: 975 },
  { src: "/assets-mehndi/img-166.jpg", alt: "Figurative bridal henna covering both forearms and palms", category: "mehndi", style: "bridal", w: 320, h: 320 },
  { src: "/assets-mehndi/img-029.jpg", alt: "Selfie with fellow artists at tattoo convention booth", category: "event", w: 966, h: 1288 },
  { src: "/assets-mehndi/img-030.jpg", alt: "Smiling selfie with international tattoo artist at expo", category: "event", w: 966, h: 1288 },
  { src: "/assets-mehndi/img-031.jpg", alt: "Posing at New Delhi tattoo convention sponsor backdrop, 2018", category: "event", w: 900, h: 1600 },
  { src: "/assets-mehndi/img-033.jpg", alt: "Two tattoo artists posing inside convention booth", category: "event", w: 1200, h: 1600 },
  { src: "/assets-mehndi/img-042.jpg", alt: "Group selfie with artists at a tattoo convention", category: "event", w: 966, h: 1288 },
  { src: "/assets-mehndi/img-047.jpg", alt: "Artist meeting a renowned tattooist at a convention booth", category: "event", w: 1200, h: 1600 },
  { src: "/assets-mehndi/img-048.jpg", alt: "Handshake at Heartwork Tattoo Festival banner in New Delhi", category: "event", w: 1200, h: 1600 },
  { src: "/assets-mehndi/img-052.jpg", alt: "Judges reviewing a participant on tattoo convention stage", category: "event", w: 1200, h: 1600 },
  { src: "/assets-mehndi/img-054.jpg", alt: "Artist posing with international tattoo artist at expo", category: "event", w: 900, h: 1600 },
  { src: "/assets-mehndi/img-059.jpg", alt: "Selfie with fellow artist at tattoo expo booths", category: "event", w: 966, h: 1288 },
  { src: "/assets-mehndi/img-060.jpg", alt: "Artist seated with tattooed guest at Delhi 2018 convention", category: "event", w: 757, h: 1600 },
  { src: "/assets-mehndi/img-067.jpg", alt: "Posing with tattooed performer at Delhi tattoo festival", category: "event", w: 1200, h: 1600 },
  { src: "/assets-mehndi/img-072.jpg", alt: "Seated with dreadlocked tattoo artist at festival backdrop", category: "event", w: 1189, h: 1520 },
  { src: "/assets-mehndi/img-084.jpg", alt: "Artist with heavily tattooed guest at convention backdrop", category: "event", w: 1600, h: 1599 },
  { src: "/assets-mehndi/img-087.jpg", alt: "Artist selfie with tattooed guest at tattoo convention", category: "event", w: 1932, h: 1632 },
  { src: "/assets-mehndi/img-088.jpg", alt: "Selfie at DLF Place Saket tattoo event in New Delhi", category: "event", w: 1288, h: 966 },
  { src: "/assets-mehndi/img-092.jpg", alt: "Selfie with event organiser at tattoo expo stalls", category: "event", w: 966, h: 1288 },
  { src: "/assets-mehndi/img-171.jpg", alt: "Students practicing mehandi designs on paper in class", category: "event", w: 1500, h: 2100 },
  { src: "/assets-mehndi/img-180.jpg", alt: "Selfie with fellow artist at outdoor tattoo convention", category: "event", w: 966, h: 1288 },
  { src: "/assets-mehndi/img-007.jpg", alt: "Four men posing together at an evening event", category: "event", w: 1200, h: 1600 },
  { src: "/assets-mehndi/img-057.jpg", alt: "Tattoo artist inking a client's forearm in studio", category: "tattoo", w: 720, h: 1280 },
  { src: "/assets-mehndi/img-038.jpg", alt: "Line-art chart of twenty nail design templates", category: "nail-art", w: 563, h: 768 },
  { src: "/assets-mehndi/img-009.jpg", alt: "Smiling selfie of two men at a convention", category: "event", w: 966, h: 1288 },
  { src: "/assets-mehndi/img-077.jpg", alt: "Artist inking portrait tattoo on client's forearm", category: "tattoo", w: 720, h: 1280 },
  { src: "/assets-mehndi/img-010.jpg", alt: "Selfie of the artist at an airport tarmac", category: "event", w: 720, h: 1280 },
  { src: "/assets-mehndi/img-085.jpg", alt: "Tattoo artist inking a portrait tattoo on a forearm", category: "tattoo", w: 720, h: 1280 },
  { src: "/assets-mehndi/img-020.jpg", alt: "Artist posing with a client holding a framed certificate", category: "event", w: 720, h: 1280 },
  { src: "/assets-mehndi/img-032.jpg", alt: "Stage and judges table at tattoo convention show", category: "event", w: 1200, h: 1600 },
  { src: "/assets-mehndi/img-037.jpg", alt: "Artist taking a selfie with a guest outdoors at a convention", category: "event", w: 966, h: 1288 },
  { src: "/assets-mehndi/img-041.jpg", alt: "Artist posing with a visitor against a brick wall", category: "event", w: 720, h: 1280 },
  { src: "/assets-mehndi/img-050.jpg", alt: "Artist selfie with guest tattoo artist at convention", category: "event", w: 1200, h: 1600 },
  { src: "/assets-mehndi/img-053.jpg", alt: "Night selfie of artist with a friend outdoors", category: "event", w: 966, h: 1288 },
  { src: "/assets-mehndi/img-061.jpg", alt: "Artist selfie with friend at tattoo convention booth", category: "event", w: 966, h: 1288 },
  { src: "/assets-mehndi/img-063.jpg", alt: "Selfie with heavily tattooed international artist at convention", category: "event", w: 966, h: 1288 },
  { src: "/assets-mehndi/img-065.jpg", alt: "Selfie with fellow artist at tattoo festival stalls", category: "event", w: 966, h: 1288 },
  { src: "/assets-mehndi/img-066.jpg", alt: "Selfie with tattooed artist giving thumbs up indoors", category: "event", w: 966, h: 1288 },
  { src: "/assets-mehndi/img-073.jpg", alt: "Artist selfie with tattooed guest at convention booth", category: "event", w: 966, h: 1288 },
  { src: "/assets-mehndi/img-075.jpg", alt: "Two artists posing together at outdoor expo tent", category: "event", w: 966, h: 1288 },
  { src: "/assets-mehndi/img-076.jpg", alt: "Selfie with fellow artist at busy tattoo expo", category: "event", w: 1565, h: 1600 },
  { src: "/assets-mehndi/img-091.jpg", alt: "Group selfie with tattoo artists at convention booth", category: "event", w: 966, h: 1288 },
  { src: "/assets-mehndi/img-093.jpg", alt: "Selfie with tattooed artist at evening tattoo convention", category: "event", w: 966, h: 1288 },
  { src: "/assets-mehndi/img-177.jpg", alt: "Artist receiving award at design competition ceremony", category: "event", w: 1080, h: 1080 },
  { src: "/assets-mehndi/img-179.jpg", alt: "Selfie with heavily tattooed artist at convention", category: "event", w: 1932, h: 2576 },
  { src: "/assets-mehndi/img-039.jpg", alt: "Blurry indoor selfie with a heavily tattooed artist", category: "event", w: 1932, h: 2576 },
  { src: "/assets-mehndi/img-040.jpg", alt: "Tilted selfie of two men at a convention", category: "event", w: 1932, h: 2576 },
];

/**
 * Full-viewport hero slideshow on the homepage.
 *
 * These are portrait shots filling a landscape frame, so a desktop viewport
 * only ever shows a horizontal band of each one — a centred crop lands on the
 * arms and cuts the bride's head off entirely. `focus` art-directs each slide:
 * a Tailwind object-position naming the band worth keeping.
 */
export const heroSlides = [
  { src: "/assets-mehndi/img-097.jpg", alt: "Bride veiling her face behind fully hennaed arms covered in intricate lattice bridal mehandi", w: 750, h: 908, focus: "object-top" },
  // Just below the top: hard against it, a short wide viewport shows her head
  // and clips the mandala palms that are the point of the shot.
  { src: "/assets-mehndi/img-102.jpg", alt: "Bride with circular mandala bridal mehandi on both hands against a glowing marigold backdrop", w: 1242, h: 1799, focus: "object-[50%_12%]" },
  // Full-bleed upscales hard, so this slot needs the resolution: the shot it
  // replaced (img-106) was only 570px wide and went soft across a 1920 hero.
  { src: "/assets-mehndi/img-101.jpg", alt: "Bride holding up both hands to show full-arm floral bridal mehandi with bold dark flower bands", w: 1242, h: 1820, focus: "object-[50%_25%]" },
];

/** Six curated images for the homepage gallery preview grid. */
export const homePreview: GalleryImage[] = [
  { src: "/assets-mehndi/img-074.jpg", alt: "Intricate bridal henna palm with peacock and dome motifs", category: "mehndi", style: "bridal", w: 735, h: 915 },
  { src: "/assets-mehndi/img-110.jpg", alt: "Intricate bridal henna arms with peacock and wedding figures", category: "mehndi", style: "bridal", w: 1013, h: 1911 },
  { src: "/assets-mehndi/img-112.jpg", alt: "Bridal feet mehandi with elephant and umbrella motifs", category: "mehndi", style: "bridal", w: 960, h: 1200 },
  { src: "/assets-mehndi/img-018.jpg", alt: "Intricate bridal mehandi with peacocks and palace motifs on both palms", category: "mehndi", style: "bridal", w: 720, h: 722 },
  { src: "/assets-mehndi/img-025.jpg", alt: "Burgundy ombre nails with glitter hearts and rhinestones", category: "nail-art", w: 736, h: 1104 },
  { src: "/assets-mehndi/img-064.jpg", alt: "Framed pencil sketch portrait of Sai Baba", category: "sketch", w: 720, h: 1280 },
];

/** Background for the full-width CTA banner on the homepage. */
export const ctaBannerSrc = "/assets-mehndi/img-174.jpg";
