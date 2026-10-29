export type Spot = {
  name: string;
  note: string;
  query: string;
};

export type HubOrigin = {
  name: string;
  query: string;
};

export type Hub = {
  id: string;
  pill: string;
  area: string;
  hindi: string;
  after: string;
  forEvents: string;
  origin: HubOrigin;
  how: Record<string, string>;
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
    origin: {
      name: "Jio World Centre",
      query: "Jio World Centre BKC Mumbai",
    },
    how: {
      "O Pedro BKC Mumbai": "8 min walk through G Block from Jio World Centre. Book it.",
      "Yazu BKC Mumbai": "10 min walk, still in G Block.",
      "The Daily BKC Mumbai": "5 min walk from Jio World Centre.",
      "Hitchki BKC Mumbai": "8 min walk, still inside BKC.",
      "Bombay Sweet Shop BKC Mumbai": "10 min walk in G Block.",
      "Pa Pa Ya BKC Mumbai": "10 min walk, G Block.",
      "Elco Pani Puri Bandra Mumbai": "15 min cab to Hill Road, Bandra West.",
      "Elco Market Bandra Mumbai": "15 min cab to Hill Road, Bandra West.",
      "Ashok Vada Pav Juhu Mumbai": "20–25 min cab to Juhu.",
      "Carter Road Bandra Mumbai": "15 min cab to the Bandra sea wall.",
      "Bandra Fort Mumbai": "15 min cab. Go at blue hour.",
      "Bandra Bandstand Mumbai": "15 min cab to the promenade.",
      "Jio Garden BKC Mumbai": "5 min walk, still inside the complex.",
      "Turner Road pav bhaji Bandra Mumbai": "15 min cab to Bandra West, then on foot.",
      "Natural Ice Cream Bandra Mumbai": "15 min cab to Bandra.",
      "Suzette Bandra Mumbai": "15 min cab to Pali / Bandra West.",
      "Candies Pali Hill Bandra Mumbai": "15 min cab to Pali Hill.",
      "Chapel Road Bandra Mumbai": "15 min cab, then a short walk through Bandra.",
      "Pali Village Cafe Bandra Mumbai": "15 min cab to Pali Hill. Book it.",
    },
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
    origin: {
      name: "Fairmont Mumbai",
      query: "Fairmont Mumbai Vile Parle",
    },
    how: {
      "Gajalee Vile Parle Mumbai": "8–10 min cab from Fairmont. The closest proper seafood room.",
      "Cafe Madras Matunga Mumbai": "25 min cab to Matunga. Worth it for dinner or a late breakfast.",
      "Aaswad Dadar Mumbai": "20 min cab to Dadar West.",
      "Mahesh Lunch Home Juhu Mumbai": "12 min cab to Juhu.",
      "Amar Juice Centre Juhu Mumbai": "12 min cab to Juhu.",
      "Prithvi Cafe Juhu Mumbai": "12 min cab to Juhu.",
      "Juhu Chowpatty Mumbai": "12 min cab. Walk the sand after you eat.",
      "Natural Ice Cream Juhu Mumbai": "12 min cab to the original Juhu parlour.",
      "Juhu Beach Mumbai": "12 min cab from Fairmont to the water.",
      "ISKCON Juhu Mumbai": "15 min cab to Juhu.",
      "Jaya He Museum T2 Mumbai Airport": "Fairmont sits on T2. Walk airside if you are already in the terminal.",
    },
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
    origin: {
      name: "Courtyard by Marriott",
      query: "Courtyard by Marriott Mumbai International Airport",
    },
    how: {
      "Joeys Pizza Versova Mumbai": "15 min cab to Versova. Queue or take away.",
      "Mahesh Lunch Home Juhu Mumbai": "12 min cab towards Juhu.",
      "Farmers Cafe Versova Mumbai": "15 min cab to Versova.",
      "Bawarchi Andheri Mumbai": "10 min cab in Andheri.",
      "Udupi restaurant Andheri West Mumbai": "10 min cab, Andheri West.",
      "Versova Beach Mumbai": "15 min cab to the water.",
      "Lokhandwala Market Andheri Mumbai": "12 min cab. Stays open after the summit.",
      "SV Road Andheri Mumbai": "8 min cab. Ask for cutting chai.",
      "Vada pav SV Road Andheri Mumbai": "8 min cab to any crowded stall on SV Road.",
      "Lokhandwala Andheri Mumbai": "12 min cab, then walk the market.",
      "Juhu Beach Mumbai": "12 min cab north along the coast.",
    },
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
    origin: {
      name: "Bandra West",
      query: "Bandra West Mumbai",
    },
    how: {
      "Pali Village Cafe Bandra Mumbai": "5–8 min walk in Pali Hill. Book it this week.",
      "Candies Pali Hill Bandra Mumbai": "5 min walk, Pali Hill.",
      "Suzette Bandra Mumbai": "8 min walk from Pali / Hill Road.",
      "Elco Pani Puri Bandra Mumbai": "8 min walk or a short rickshaw to Hill Road.",
      "Totos Garage Bandra Mumbai": "8 min walk in Pali.",
      "Elco Market Bandra Mumbai": "8 min walk to Hill Road.",
      "Carter Road Bandra Mumbai": "10 min rickshaw to the sea wall.",
      "Turner Road pav bhaji Bandra Mumbai": "8 min walk to Turner Road.",
      "Bandra Fort Sea Link Mumbai": "10 min rickshaw to the fort.",
      "Chapel Road Bandra Mumbai": "10 min walk through the neighbourhood.",
      "Mount Mary Church Bandra Mumbai": "10 min walk uphill.",
      "Hill Road kebabs Bandra Mumbai": "8 min walk to Hill Road. Follow the smoke after 11.",
      "Bandra Fort Mumbai": "10 min rickshaw. Stay for the Sea Link lights.",
      "Bandra Bandstand Mumbai": "10 min rickshaw to the promenade.",
      "Natural Ice Cream Bandra Mumbai": "8 min walk or a short rickshaw.",
    },
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
    origin: {
      name: "Gateway of India",
      query: "Gateway of India Mumbai",
    },
    how: {
      "Britannia and Co Ballard Estate Mumbai": "10 min cab to Ballard Estate. Lunch only — they close when they close.",
      "Trishna Fort Mumbai": "8 min cab or 15 min walk to Fort. Book.",
      "Chetana restaurant Kala Ghoda Mumbai": "10 min cab to Kala Ghoda.",
      "Kyani and Co Mumbai": "15 min cab to Dhobi Talao. Go before they tire of the day.",
      "Bademiya Colaba Mumbai": "5 min walk from Gateway, behind the Taj.",
      "Leopold Cafe Colaba Mumbai": "8 min walk down Colaba Causeway.",
      "Girgaum Chowpatty Mumbai": "15 min cab. Eat on the sand, then walk the Queen's Necklace.",
      "Gateway of India Mumbai": "You are here. Go at blue hour, not noon.",
      "Marine Drive Mumbai": "15 min cab, or walk it from Chowpatty to Nariman Point.",
      "Chhatrapati Shivaji Maharaj Terminus Mumbai": "15 min cab to the UNESCO station.",
      "Kala Ghoda Cafe Mumbai": "10 min cab to Fort / Kala Ghoda.",
      "Colaba Causeway Mumbai": "8 min walk from Gateway.",
    },
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

export function directionsUrl(origin: string, destination: string) {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`;
}

export function howToReach(hub: Hub, query: string) {
  return hub.how[query] ?? `Cab or auto from ${hub.origin.name}.`;
}

export function originFromVenue(venue?: string, neighborhood?: string, address?: string): HubOrigin | undefined {
  if (!venue || venue === "Mumbai") return undefined;
  return {
    name: venue,
    query: address ?? `${venue}, ${neighborhood ?? "Mumbai"}, Mumbai`,
  };
}

export const hubByNeighborhood: Record<string, string> = {
  BKC: "bkc",
  "Vile Parle": "vile-parle",
  Andheri: "andheri",
  Bandra: "bandra",
  Mumbai: "colaba",
};
