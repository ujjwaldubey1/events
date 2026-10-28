export type Spot = {
  name: string;
  note: string;
  query: string;
};

export type Hub = {
  id: string;
  pill: string;
  area: string;
  hindi: string;
  after: string;
  forEvents: string;
  eat: Spot[];
  try: Spot[];
  see: Spot[];
};

export const hubs: Hub[] = [
  {
    id: "bkc",
    pill: "BKC · Devcon",
    area: "Bandra Kurla Complex",
    hindi: "बीकेसी",
    after: "After Devcon at Jio World Centre",
    forEvents: "Devcon 8, ETHIndia, Stark Space, Onchain Legal, NEAR mixer",
    eat: [
      {
        name: "O Pedro",
        note: "Goan plates in G Block. Prawn peri-peri, pork vindaloo. Book it.",
        query: "O Pedro BKC Mumbai",
      },
      {
        name: "Yazu",
        note: "Pan-Asian. Duck bao, pork belly, veg dumplings if the table is mixed.",
        query: "Yazu BKC Mumbai",
      },
      {
        name: "The Daily",
        note: "Veg-friendly cafe. Grilled sandwich, bowls, filter coffee.",
        query: "The Daily BKC Mumbai",
      },
      {
        name: "Hitchki",
        note: "Keema pav, grilled fish, late kitchen still inside BKC.",
        query: "Hitchki BKC Mumbai",
      },
      {
        name: "Bombay Sweet Shop",
        note: "Pistachio roll, milk cake. Mithai that is not hotel dessert.",
        query: "Bombay Sweet Shop BKC Mumbai",
      },
      {
        name: "Pa Pa Ya",
        note: "Robatayaki and sushi in G Block if the group wants a longer table.",
        query: "Pa Pa Ya BKC Mumbai",
      },
    ],
    try: [
      {
        name: "Elco Pani Puri",
        note: "Bandra West, 15 minutes. The city's argument-ending pani puri.",
        query: "Elco Pani Puri Bandra Mumbai",
      },
      {
        name: "Ashok Vada Pav",
        note: "Juhu. One of the vada pavs people actually mean when they say Mumbai.",
        query: "Ashok Vada Pav Juhu Mumbai",
      },
      {
        name: "Carter Road corn",
        note: "Roasted bhutta on the sea wall after you leave BKC for Bandra.",
        query: "Carter Road Bandra Mumbai",
      },
    ],
    see: [
      {
        name: "Bandra Fort",
        note: "Castella de Aguada. Sea Link in front of you, sunset if the talks end on time.",
        query: "Bandra Fort Mumbai",
      },
      {
        name: "Bandstand",
        note: "Walk the promenade. Same coast as the fort, easier after dark.",
        query: "Bandra Bandstand Mumbai",
      },
      {
        name: "Jio Garden",
        note: "If you need air without leaving the complex.",
        query: "Jio Garden BKC Mumbai",
      },
    ],
  },
  {
    id: "vile-parle",
    pill: "Vile Parle · IBW",
    area: "Vile Parle / Juhu",
    hindi: "विले पार्ले",
    after: "After India Blockchain Week at Fairmont Mumbai",
    forEvents: "IBW Conference, Institutional Forum, Future Asset Forum",
    eat: [
      {
        name: "Gajalee",
        note: "Konkani seafood. Crab, bombil fry, sol kadhi. Minutes from Fairmont.",
        query: "Gajalee Vile Parle Mumbai",
      },
      {
        name: "Café Madras",
        note: "Matunga. Rava dosa, filter coffee. The South Indian plate this side respects.",
        query: "Cafe Madras Matunga Mumbai",
      },
      {
        name: "Aaswad",
        note: "Dadar. Maharashtrian veg thali: pithla, sabudana, bhakri.",
        query: "Aaswad Dadar Mumbai",
      },
      {
        name: "Mahesh Lunch Home",
        note: "Juhu. Surmai fry. Coastal, not a buffet.",
        query: "Mahesh Lunch Home Juhu Mumbai",
      },
      {
        name: "Amar Juice Centre",
        note: "Juhu. Cheese masala toast and juice. Veg institution.",
        query: "Amar Juice Centre Juhu Mumbai",
      },
      {
        name: "Prithvi Café",
        note: "Juhu. Quiet tables, bookshop next door, not a conference hotel.",
        query: "Prithvi Cafe Juhu Mumbai",
      },
    ],
    try: [
      {
        name: "Juhu beach chaat",
        note: "Bhel, pau bhaji, kulfi. Walk off the Fairmont air-conditioning.",
        query: "Juhu Chowpatty Mumbai",
      },
      {
        name: "Natural's Ice Cream",
        note: "Sitaphal if it is in season. The Juhu parlour is the original.",
        query: "Natural Ice Cream Juhu Mumbai",
      },
      {
        name: "Aaswad",
        note: "Dadar. Maharashtrian thali: sabudana, pithla, the plate you should have once.",
        query: "Aaswad Dadar Mumbai",
      },
    ],
    see: [
      {
        name: "Juhu Beach",
        note: "Twelve minutes from Fairmont. The city's west-side evening.",
        query: "Juhu Beach Mumbai",
      },
      {
        name: "ISKCON Juhu",
        note: "Temple and a surprisingly good sattvic canteen.",
        query: "ISKCON Juhu Mumbai",
      },
      {
        name: "T2 art wall",
        note: "If you are flying or staying airside, Jaya He at the airport is worth the walk.",
        query: "Jaya He Museum T2 Mumbai Airport",
      },
    ],
  },
  {
    id: "andheri",
    pill: "Andheri",
    area: "Andheri / Versova",
    hindi: "अंधेरी",
    after: "After DeFi Security Summit & Unchained at Courtyard Marriott",
    forEvents: "DeFi Security Summit, Unchained Summit India",
    eat: [
      {
        name: "Joey's Pizza",
        note: "Versova. Cheese burst, veg or chicken. Mumbai's pizza argument.",
        query: "Joeys Pizza Versova Mumbai",
      },
      {
        name: "Mahesh Lunch Home",
        note: "Surmai fry, kori roti. Coastal fish after Unchained.",
        query: "Mahesh Lunch Home Juhu Mumbai",
      },
      {
        name: "Farmers' Cafe",
        note: "Versova. Veg bowls and cold coffee. Daylight leftover.",
        query: "Farmers Cafe Versova Mumbai",
      },
      {
        name: "Bawarchi",
        note: "Andheri. Hyderabadi-leaning biryani. Late, unfancy.",
        query: "Bawarchi Andheri Mumbai",
      },
      {
        name: "Udupi Kitchen, Andheri",
        note: "Masala dosa, filter coffee. The neighbourhood plate.",
        query: "Udupi restaurant Andheri West Mumbai",
      },
    ],
    try: [
      {
        name: "Versova beach corn",
        note: "Same ritual as Carter Road, fewer lanyards.",
        query: "Versova Beach Mumbai",
      },
      {
        name: "Lokhandwala chaat",
        note: "Street plates after 9pm when the conference buses have left.",
        query: "Lokhandwala Market Andheri Mumbai",
      },
      {
        name: "Cutting chai",
        note: "Any stall on SV Road. Ask for cutting, not a latte.",
        query: "SV Road Andheri Mumbai",
      },
    ],
    see: [
      {
        name: "Versova Beach",
        note: "Fishing boats at one end, the city at the other. Sunset is the point.",
        query: "Versova Beach Mumbai",
      },
      {
        name: "Lokhandwala",
        note: "Walk, eat, leave. Not a monument. A neighbourhood that stays open.",
        query: "Lokhandwala Andheri Mumbai",
      },
      {
        name: "Juhu stretch",
        note: "North along the coast if you have a spare hour between summit days.",
        query: "Juhu Beach Mumbai",
      },
    ],
  },
  {
    id: "bandra",
    pill: "Bandra",
    area: "Bandra West",
    hindi: "बांद्रा",
    after: "After Monad Blitz, or any BKC night that should not stay in BKC",
    forEvents: "Monad Blitz Mumbai, evenings off BKC",
    eat: [
      {
        name: "Pali Village Café",
        note: "Slow-cooked lamb, mushroom toast. Book it. Pali Hill does not walk-in this week.",
        query: "Pali Village Cafe Bandra Mumbai",
      },
      {
        name: "Candies",
        note: "Veg club sandwich, cold coffee. Pali Hill canteen. Cheap, fast.",
        query: "Candies Pali Hill Bandra Mumbai",
      },
      {
        name: "Suzette",
        note: "Mushroom galette, cider. When you want a plate not a stall.",
        query: "Suzette Bandra Mumbai",
      },
      {
        name: "Elco",
        note: "Pani puri and ragda. Hill Road. Do this once.",
        query: "Elco Pani Puri Bandra Mumbai",
      },
      {
        name: "Toto's Garage",
        note: "Fish fingers and a pint. Dive energy, Pali.",
        query: "Totos Garage Bandra Mumbai",
      },
    ],
    try: [
      {
        name: "Elco",
        note: "Pani puri, ragda. Hill Road. Do this once even if you do nothing else.",
        query: "Elco Market Bandra Mumbai",
      },
      {
        name: "Carter Road",
        note: "Corn, coconut water, the sea wall. This is the afterparty without a guest list.",
        query: "Carter Road Bandra Mumbai",
      },
      {
        name: "Bandra pav bhaji",
        note: "Turner Road stalls after 10. Messy, correct.",
        query: "Turner Road pav bhaji Bandra Mumbai",
      },
    ],
    see: [
      {
        name: "Bandra Fort & Sea Link",
        note: "The postcard. Stay for the lights on the cables.",
        query: "Bandra Fort Sea Link Mumbai",
      },
      {
        name: "Chapel Road",
        note: "Murals, bakeries, the Bandra people actually live in.",
        query: "Chapel Road Bandra Mumbai",
      },
      {
        name: "Mount Mary",
        note: "Hilltop basilica, city and sea in one view.",
        query: "Mount Mary Church Bandra Mumbai",
      },
    ],
  },
  {
    id: "colaba",
    pill: "Colaba",
    area: "Colaba / Fort / Marine Drive",
    hindi: "कोलाबा",
    after: "When you leave the north and remember this is still Bombay",
    forEvents: "City nights, last days, anyone who came for Gateway not only G Block",
    eat: [
      {
        name: "Britannia & Co",
        note: "Berry pulao (mutton, veg exists) and raspberry drink. Lunch only.",
        query: "Britannia and Co Ballard Estate Mumbai",
      },
      {
        name: "Trishna",
        note: "Butter-pepper-garlic crab. The one meal to spend on. Book.",
        query: "Trishna Fort Mumbai",
      },
      {
        name: "Chetana",
        note: "Gujarati veg thali at Kala Ghoda. Unlimited in the old sense.",
        query: "Chetana restaurant Kala Ghoda Mumbai",
      },
      {
        name: "Kyani & Co",
        note: "Bun maska, Irani chai. Dhobi Talao. Go before they tire of the day.",
        query: "Kyani and Co Mumbai",
      },
      {
        name: "Bademiya",
        note: "Late seekh and roomali behind the Taj. Standing, spicy, correct.",
        query: "Bademiya Colaba Mumbai",
      },
      {
        name: "Leopold Café",
        note: "Chilli beef or veg steak. Causeway. Touristy, still open late.",
        query: "Leopold Cafe Colaba Mumbai",
      },
    ],
    try: [
      {
        name: "Kyani & Co",
        note: "Dhobi Talao. Bun maska, Irani chai. Go in the morning.",
        query: "Kyani and Co Mumbai",
      },
      {
        name: "Girgaum Chowpatty",
        note: "Pav bhaji and bhel on the sand. Marine Drive is the walk there.",
        query: "Girgaum Chowpatty Mumbai",
      },
      {
        name: "Leopold / Mondegar",
        note: "Colaba Causeway. Touristy, still useful, still open late.",
        query: "Leopold Cafe Colaba Mumbai",
      },
    ],
    see: [
      {
        name: "Gateway of India",
        note: "Apollo Bunder. Go at blue hour, not noon.",
        query: "Gateway of India Mumbai",
      },
      {
        name: "Marine Drive",
        note: "Queen's Necklace. Walk from Chowpatty to Nariman Point.",
        query: "Marine Drive Mumbai",
      },
      {
        name: "CST",
        note: "Chhatrapati Shivaji Maharaj Terminus. The UNESCO shed. Stand on the concourse.",
        query: "Chhatrapati Shivaji Maharaj Terminus Mumbai",
      },
    ],
  },
];

export function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export const hubByNeighborhood: Record<string, string> = {
  BKC: "bkc",
  "Vile Parle": "vile-parle",
  Andheri: "andheri",
  Bandra: "bandra",
  Mumbai: "colaba",
};
