import { hubByNeighborhood } from "@/data/around";

export { directionsUrl, howToReach, mapsUrl } from "@/data/around";
export type { Hub, HubOrigin } from "@/data/around";

export type Diet = "veg" | "nonveg" | "both";

export type FlowStep = {
  verb: string;
  place: string;
  dish?: string;
  diet: Diet;
  note: string;
  query: string;
};

export type AfterFlow = {
  id: string;
  label: string;
  tag: "Veg" | "Non-veg" | "Dishes" | "Walk" | "Night";
  summary: string;
  steps: FlowStep[];
};

const bkc: AfterFlow[] = [
  {
    id: "bkc-veg",
    label: "Veg dinner",
    tag: "Veg",
    summary: "Leave Jio World, eat proper veg, finish on the Bandra sea wall.",
    steps: [
      {
        verb: "First, sit at",
        place: "The Daily, BKC",
        dish: "Grilled veg sandwich & filter coffee",
        diet: "veg",
        note: "G Block, walking distance from Jio World Centre. Reset after the hallway.",
        query: "The Daily BKC Mumbai",
      },
      {
        verb: "Then go to",
        place: "Bombay Sweet Shop",
        dish: "Pistachio roll & milk cake",
        diet: "veg",
        note: "Mithai that is not hotel dessert. Take a box if the table is full.",
        query: "Bombay Sweet Shop BKC Mumbai",
      },
      {
        verb: "Then eat",
        place: "Elco, Bandra West",
        dish: "Pani puri & ragda",
        diet: "veg",
        note: "Fifteen minutes west. The pani puri people mean when they say Mumbai.",
        query: "Elco Pani Puri Bandra Mumbai",
      },
      {
        verb: "End at",
        place: "Bandstand",
        dish: "Roasted corn on the wall",
        diet: "veg",
        note: "Sea Link lights, coconut water, no guest list.",
        query: "Bandra Bandstand Mumbai",
      },
    ],
  },
  {
    id: "bkc-nonveg",
    label: "Non-veg dinner",
    tag: "Non-veg",
    summary: "Goan fish in BKC, then Bandra meat, then the fort.",
    steps: [
      {
        verb: "Book",
        place: "O Pedro",
        dish: "Prawn peri-peri & pork vindaloo",
        diet: "nonveg",
        note: "Goan room in G Block. The sit-down after Devcon. Book before the keynote ends.",
        query: "O Pedro BKC Mumbai",
      },
      {
        verb: "If you want louder",
        place: "Yazu, BKC",
        dish: "Duck bao & pork belly",
        diet: "nonveg",
        note: "Pan-Asian, builder-table volume, ten minutes from Jio World.",
        query: "Yazu BKC Mumbai",
      },
      {
        verb: "Then cross to",
        place: "Hitchki, BKC",
        dish: "Keema pav & grilled fish",
        diet: "nonveg",
        note: "Late kitchen, still in the complex if you do not want a cab yet.",
        query: "Hitchki BKC Mumbai",
      },
      {
        verb: "Walk it at",
        place: "Bandra Fort",
        diet: "both",
        note: "Castella de Aguada. Sea Link in front of you. Stay for the cables lighting up.",
        query: "Bandra Fort Mumbai",
      },
    ],
  },
  {
    id: "bkc-dishes",
    label: "Famous dishes",
    tag: "Dishes",
    summary: "The plates this city actually argues about: vada pav, pani puri, pav bhaji, kulfi.",
    steps: [
      {
        verb: "Start with",
        place: "Ashok Vada Pav, Juhu",
        dish: "Vada pav",
        diet: "veg",
        note: "Twenty-odd minutes from BKC. One of the vada pavs worth the trip.",
        query: "Ashok Vada Pav Juhu Mumbai",
      },
      {
        verb: "Then",
        place: "Elco Market",
        dish: "Pani puri",
        diet: "veg",
        note: "Hill Road, Bandra. Do not skip the ragda.",
        query: "Elco Market Bandra Mumbai",
      },
      {
        verb: "Then",
        place: "Turner Road stalls",
        dish: "Pav bhaji",
        diet: "veg",
        note: "After 10pm. Messy, butter-heavy, correct.",
        query: "Turner Road pav bhaji Bandra Mumbai",
      },
      {
        verb: "Finish on",
        place: "Natural's, Bandra / Juhu",
        dish: "Sitaphal ice cream",
        diet: "veg",
        note: "If sitaphal is in season, that is the order. Else tender coconut.",
        query: "Natural Ice Cream Bandra Mumbai",
      },
    ],
  },
  {
    id: "bkc-walk",
    label: "Sunset walk",
    tag: "Walk",
    summary: "Air first, then the postcard, then corn.",
    steps: [
      {
        verb: "Step out to",
        place: "Jio Garden",
        diet: "both",
        note: "If the hall is still loud. Five minutes of sky inside the complex.",
        query: "Jio Garden BKC Mumbai",
      },
      {
        verb: "Cab to",
        place: "Bandra Fort",
        diet: "both",
        note: "The Sea Link shot. Go at blue hour, not noon.",
        query: "Bandra Fort Mumbai",
      },
      {
        verb: "Walk",
        place: "Carter Road",
        dish: "Bhutta & coconut water",
        diet: "veg",
        note: "Promenade, fishing boats, the afterparty without a lanyard.",
        query: "Carter Road Bandra Mumbai",
      },
      {
        verb: "If you still want a table",
        place: "Suzette, Bandra",
        dish: "Galette complète",
        diet: "both",
        note: "Cider and a buckwheat plate when hotel coffee is enough.",
        query: "Suzette Bandra Mumbai",
      },
    ],
  },
  {
    id: "bkc-night",
    label: "Late night",
    tag: "Night",
    summary: "When Devcon closes and Bandra is still open.",
    steps: [
      {
        verb: "Cross to",
        place: "Candies, Pali Hill",
        dish: "Cold coffee & a toasted sandwich",
        diet: "both",
        note: "Canteen energy. Cheap, fast, a table if you wait.",
        query: "Candies Pali Hill Bandra Mumbai",
      },
      {
        verb: "Wander",
        place: "Chapel Road",
        diet: "both",
        note: "Murals, bakeries, the Bandra people live in. Not the one on the lanyard map.",
        query: "Chapel Road Bandra Mumbai",
      },
      {
        verb: "If you need meat",
        place: "Pali Village Café",
        dish: "Slow-cooked lamb / mushroom toast",
        diet: "both",
        note: "Old bungalow. Book it. Pali Hill does not walk-in well this week.",
        query: "Pali Village Cafe Bandra Mumbai",
      },
      {
        verb: "Last stop",
        place: "Bandstand",
        diet: "both",
        note: "Sit on the wall. The week can wait until morning.",
        query: "Bandra Bandstand Mumbai",
      },
    ],
  },
];

const vileParle: AfterFlow[] = [
  {
    id: "vp-veg",
    label: "Veg dinner",
    tag: "Veg",
    summary: "South Indian, a Maharashtrian thali, then Juhu sand.",
    steps: [
      {
        verb: "Take a cab to",
        place: "Café Madras, Matunga",
        dish: "Rava dosa, filter coffee",
        diet: "veg",
        note: "The South Indian breakfast-or-dinner this side of the harbour still respects.",
        query: "Cafe Madras Matunga Mumbai",
      },
      {
        verb: "Or sit for a thali at",
        place: "Aaswad, Dadar",
        dish: "Maharashtrian thali: pithla, sabudana, bhakri",
        diet: "veg",
        note: "The plate you should have once even if every other meal is a canapé.",
        query: "Aaswad Dadar Mumbai",
      },
      {
        verb: "Sweets at",
        place: "Natural's, Juhu",
        dish: "Sitaphal ice cream",
        diet: "veg",
        note: "The original parlour. Walk it on the beach after.",
        query: "Natural Ice Cream Juhu Mumbai",
      },
      {
        verb: "End on",
        place: "Juhu Beach",
        dish: "Bhel & pau bhaji",
        diet: "veg",
        note: "Twelve minutes from Fairmont. Chaat on the sand, not another hotel lounge.",
        query: "Juhu Chowpatty Mumbai",
      },
    ],
  },
  {
    id: "vp-nonveg",
    label: "Non-veg dinner",
    tag: "Non-veg",
    summary: "Konkani seafood, then Juhu, then the water.",
    steps: [
      {
        verb: "Sit at",
        place: "Gajalee, Vile Parle",
        dish: "Crab, bombil fry, sol kadhi",
        diet: "nonveg",
        note: "The local seafood room. Minutes from Fairmont. This is the IBW dinner.",
        query: "Gajalee Vile Parle Mumbai",
      },
      {
        verb: "If Gajalee is packed",
        place: "Mahesh Lunch Home, Juhu",
        dish: "Surmai fry & kothimbir vadi on the side",
        diet: "nonveg",
        note: "Coastal, not a buffet. Order the fish of the day.",
        query: "Mahesh Lunch Home Juhu Mumbai",
      },
      {
        verb: "Walk to",
        place: "Juhu Beach",
        diet: "both",
        note: "Digest on the sand. Kulfi if you still have a hand free.",
        query: "Juhu Beach Mumbai",
      },
      {
        verb: "Quiet table after",
        place: "Prithvi Café",
        dish: "Chai & a bun",
        diet: "veg",
        note: "Bookshop next door. Not a conference hotel.",
        query: "Prithvi Cafe Juhu Mumbai",
      },
    ],
  },
  {
    id: "vp-dishes",
    label: "Famous dishes",
    tag: "Dishes",
    summary: "Vada pav at the source, chaat on the beach, sitaphal last.",
    steps: [
      {
        verb: "Queue at",
        place: "Ashok Vada Pav",
        dish: "Vada pav",
        diet: "veg",
        note: "Juhu. This is the one. Dry garlic chutney on the pav.",
        query: "Ashok Vada Pav Juhu Mumbai",
      },
      {
        verb: "Then",
        place: "Amar Juice Centre",
        dish: "Cheese masala toast & fresh juice",
        diet: "veg",
        note: "Juhu institution. Go veg. The toast is the point.",
        query: "Amar Juice Centre Juhu Mumbai",
      },
      {
        verb: "Then the sand",
        place: "Juhu Chowpatty",
        dish: "Bhel, sev puri, pau bhaji",
        diet: "veg",
        note: "Eat standing. This is not plated.",
        query: "Juhu Chowpatty Mumbai",
      },
      {
        verb: "Last",
        place: "Natural's Juhu",
        dish: "Sitaphal or tender coconut",
        diet: "veg",
        note: "Original shop. Close the loop.",
        query: "Natural Ice Cream Juhu Mumbai",
      },
    ],
  },
  {
    id: "vp-walk",
    label: "Juhu evening",
    tag: "Walk",
    summary: "Beach, temple canteen, then sleep near the airport.",
    steps: [
      {
        verb: "Walk",
        place: "Juhu Beach",
        diet: "both",
        note: "Fairmont to the water is a short cab. Sunset if the forum ended on time.",
        query: "Juhu Beach Mumbai",
      },
      {
        verb: "If you want quiet",
        place: "ISKCON Juhu",
        dish: "Sattvic thali at the canteen",
        diet: "veg",
        note: "Temple first, then the surprisingly good kitchen.",
        query: "ISKCON Juhu Mumbai",
      },
      {
        verb: "Airside, if you are flying",
        place: "Jaya He at T2",
        diet: "both",
        note: "The airport art wall. Worth the walk even if your gate is close.",
        query: "Jaya He Museum T2 Mumbai Airport",
      },
    ],
  },
];

const andheri: AfterFlow[] = [
  {
    id: "and-veg",
    label: "Veg dinner",
    tag: "Veg",
    summary: "Versova tables, Udupi plates, chaat after.",
    steps: [
      {
        verb: "Sit at",
        place: "Farmers' Cafe, Versova",
        dish: "Veg bowls & cold coffee",
        diet: "veg",
        note: "Daylight leftover, or an early dinner if the summit ran long.",
        query: "Farmers Cafe Versova Mumbai",
      },
      {
        verb: "For a proper plate",
        place: "Shree Krishna / Udupi, Andheri",
        dish: "Masala dosa & filter coffee",
        diet: "veg",
        note: "The neighbourhood Udupi will outcook the hotel. Ask a local which one is open.",
        query: "Udupi restaurant Andheri West Mumbai",
      },
      {
        verb: "Then",
        place: "Lokhandwala Market",
        dish: "Pani puri & dabeli",
        diet: "veg",
        note: "Street plates after 9. The summit buses have left.",
        query: "Lokhandwala Market Andheri Mumbai",
      },
      {
        verb: "End with",
        place: "Versova Beach",
        dish: "Roasted corn",
        diet: "veg",
        note: "Fishing boats one end, city the other.",
        query: "Versova Beach Mumbai",
      },
    ],
  },
  {
    id: "and-nonveg",
    label: "Non-veg dinner",
    tag: "Non-veg",
    summary: "Coastal fish, then Versova pizza, then the beach.",
    steps: [
      {
        verb: "Go to",
        place: "Mahesh Lunch Home",
        dish: "Surmai fry, kori roti if they have it",
        diet: "nonveg",
        note: "Juhu / Andheri. Order fish. Skip the North Indian column.",
        query: "Mahesh Lunch Home Juhu Mumbai",
      },
      {
        verb: "Or the argument",
        place: "Joey's Pizza, Versova",
        dish: "Chicken spicy mix / veg cheese burst",
        diet: "both",
        note: "Mumbai's pizza fight. Queue or take away. Both rooms (Versova & Malad) are a pilgrimage.",
        query: "Joeys Pizza Versova Mumbai",
      },
      {
        verb: "If you want gravy",
        place: "Bawarchi, Andheri",
        dish: "Biryani",
        diet: "nonveg",
        note: "Hyderabadi-leaning, late, unfancy.",
        query: "Bawarchi Andheri Mumbai",
      },
      {
        verb: "Walk",
        place: "Versova Beach",
        diet: "both",
        note: "Sunset is the point. Fewer lanyards than Juhu.",
        query: "Versova Beach Mumbai",
      },
    ],
  },
  {
    id: "and-dishes",
    label: "Famous dishes",
    tag: "Dishes",
    summary: "Pizza, vada pav, corn, cutting chai.",
    steps: [
      {
        verb: "Queue",
        place: "Joey's Pizza",
        dish: "Cheese burst",
        diet: "both",
        note: "Veg and chicken. This is the dish people fly for, not a side.",
        query: "Joeys Pizza Versova Mumbai",
      },
      {
        verb: "Then a pav",
        place: "Local vada pav stall, Andheri",
        dish: "Vada pav",
        diet: "veg",
        note: "Any crowded stall on SV Road with a frying kadhai. Dry chutney.",
        query: "Vada pav SV Road Andheri Mumbai",
      },
      {
        verb: "Then",
        place: "Versova Beach",
        dish: "Bhutta",
        diet: "veg",
        note: "Same ritual as Carter Road.",
        query: "Versova Beach Mumbai",
      },
      {
        verb: "Always",
        place: "A stall on SV Road",
        dish: "Cutting chai",
        diet: "veg",
        note: "Ask for cutting, not a latte.",
        query: "SV Road Andheri Mumbai",
      },
    ],
  },
  {
    id: "and-walk",
    label: "Versova walk",
    tag: "Walk",
    summary: "Coast, market, done.",
    steps: [
      {
        verb: "Cab to",
        place: "Versova Beach",
        diet: "both",
        note: "From Courtyard Marriott this is the water you want.",
        query: "Versova Beach Mumbai",
      },
      {
        verb: "Loop through",
        place: "Lokhandwala",
        diet: "both",
        note: "Walk, eat, leave. Stays open after the summit.",
        query: "Lokhandwala Andheri Mumbai",
      },
      {
        verb: "If you have an hour",
        place: "Juhu stretch",
        diet: "both",
        note: "North along the coast. Same sea, different crowd.",
        query: "Juhu Beach Mumbai",
      },
    ],
  },
];

const bandra: AfterFlow[] = [
  {
    id: "ban-veg",
    label: "Veg dinner",
    tag: "Veg",
    summary: "Pani puri, a bungalow plate, galettes, the wall.",
    steps: [
      {
        verb: "Do this first",
        place: "Elco",
        dish: "Pani puri, ragda patties",
        diet: "veg",
        note: "Hill Road. Once, even if you do nothing else in Bandra.",
        query: "Elco Pani Puri Bandra Mumbai",
      },
      {
        verb: "Then a table",
        place: "Candies",
        dish: "Veg club sandwich & cold coffee",
        diet: "veg",
        note: "Pali Hill canteen. No ceremony.",
        query: "Candies Pali Hill Bandra Mumbai",
      },
      {
        verb: "Or sit down at",
        place: "Suzette",
        dish: "Mushroom galette",
        diet: "veg",
        note: "When you want a plate and a cider, not a stall.",
        query: "Suzette Bandra Mumbai",
      },
      {
        verb: "Finish",
        place: "Carter Road",
        dish: "Corn",
        diet: "veg",
        note: "The sea wall is the bill.",
        query: "Carter Road Bandra Mumbai",
      },
    ],
  },
  {
    id: "ban-nonveg",
    label: "Non-veg dinner",
    tag: "Non-veg",
    summary: "Bungalow lamb, Bandra grill, fort lights.",
    steps: [
      {
        verb: "Book",
        place: "Pali Village Café",
        dish: "Slow-cooked lamb",
        diet: "nonveg",
        note: "Old bungalow. This week, book. Veg mushroom toast if someone at the table does not eat meat.",
        query: "Pali Village Cafe Bandra Mumbai",
      },
      {
        verb: "Louder option",
        place: "Toto's Garage",
        dish: "Fish fingers & a pint",
        diet: "nonveg",
        note: "Pali. Dive energy. Not a tasting menu.",
        query: "Totos Garage Bandra Mumbai",
      },
      {
        verb: "Late grill",
        place: "Hill Road kebab stalls",
        dish: "Seekh & roomali",
        diet: "nonveg",
        note: "After 11. Follow the smoke.",
        query: "Hill Road kebabs Bandra Mumbai",
      },
      {
        verb: "Then the view",
        place: "Bandra Fort",
        diet: "both",
        note: "Sea Link. Worth being slightly too full.",
        query: "Bandra Fort Mumbai",
      },
    ],
  },
  {
    id: "ban-dishes",
    label: "Famous dishes",
    tag: "Dishes",
    summary: "Elco, pav bhaji, corn, ice cream.",
    steps: [
      {
        verb: "First",
        place: "Elco",
        dish: "Pani puri",
        diet: "veg",
        note: "Non-negotiable.",
        query: "Elco Market Bandra Mumbai",
      },
      {
        verb: "Then",
        place: "Turner Road",
        dish: "Pav bhaji",
        diet: "veg",
        note: "Butter, pav, standing up.",
        query: "Turner Road pav bhaji Bandra Mumbai",
      },
      {
        verb: "Then",
        place: "Carter Road",
        dish: "Bhutta",
        diet: "veg",
        note: "Lime and chilli on the cob.",
        query: "Carter Road Bandra Mumbai",
      },
      {
        verb: "Last",
        place: "Natural's Bandra",
        dish: "Sitaphal",
        diet: "veg",
        note: "Close it sweet.",
        query: "Natural Ice Cream Bandra Mumbai",
      },
    ],
  },
  {
    id: "ban-walk",
    label: "Sea Link evening",
    tag: "Walk",
    summary: "Fort, bandstand, chapel, done.",
    steps: [
      {
        verb: "Go up to",
        place: "Mount Mary",
        diet: "both",
        note: "Hilltop basilica. City and sea in one look.",
        query: "Mount Mary Church Bandra Mumbai",
      },
      {
        verb: "Down to",
        place: "Bandra Fort",
        diet: "both",
        note: "The postcard from the other angle.",
        query: "Bandra Fort Sea Link Mumbai",
      },
      {
        verb: "Promenade",
        place: "Bandstand",
        diet: "both",
        note: "Walk until the talk from the day leaves your head.",
        query: "Bandra Bandstand Mumbai",
      },
      {
        verb: "Home through",
        place: "Chapel Road",
        diet: "both",
        note: "Murals on the way back to a cab.",
        query: "Chapel Road Bandra Mumbai",
      },
    ],
  },
];

const colaba: AfterFlow[] = [
  {
    id: "col-veg",
    label: "Veg dinner",
    tag: "Veg",
    summary: "Irani chai, a Gujarati thali, Chowpatty, the necklace.",
    steps: [
      {
        verb: "Morning or late afternoon",
        place: "Kyani & Co",
        dish: "Bun maska & Irani chai",
        diet: "veg",
        note: "Dhobi Talao. Go before they tire of the day.",
        query: "Kyani and Co Mumbai",
      },
      {
        verb: "The thali",
        place: "Chetana, Kala Ghoda",
        dish: "Gujarati thali",
        diet: "veg",
        note: "Unlimited in the old sense. Fort, not Colaba Causeway noise.",
        query: "Chetana restaurant Kala Ghoda Mumbai",
      },
      {
        verb: "Or Kala Ghoda Cafe",
        place: "Kala Ghoda Café",
        dish: "Eggs-if-you-want, or the veg breakfast plate",
        diet: "both",
        note: "Slower. Good coffee. Fort.",
        query: "Kala Ghoda Cafe Mumbai",
      },
      {
        verb: "Then walk",
        place: "Girgaum Chowpatty → Marine Drive",
        dish: "Pav bhaji & bhel",
        diet: "veg",
        note: "Eat on the sand, then the Queen's Necklace all the way to Nariman Point.",
        query: "Girgaum Chowpatty Mumbai",
      },
    ],
  },
  {
    id: "col-nonveg",
    label: "Non-veg dinner",
    tag: "Non-veg",
    summary: "Berry pulao, crab, late seekh.",
    steps: [
      {
        verb: "Lunch only",
        place: "Britannia & Co",
        dish: "Berry pulao (mutton) & raspberry drink",
        diet: "nonveg",
        note: "Ballard Estate. They close when they close. Veg berry pulao exists, still order a table in time.",
        query: "Britannia and Co Ballard Estate Mumbai",
      },
      {
        verb: "The spend",
        place: "Trishna",
        dish: "Butter-pepper-garlic crab",
        diet: "nonveg",
        note: "Fort. The one meal to spend on. Book.",
        query: "Trishna Fort Mumbai",
      },
      {
        verb: "After midnight",
        place: "Bademiya",
        dish: "Seekh kebab & roomali roti",
        diet: "nonveg",
        note: "Colaba. Behind the Taj. Standing, spicy, correct.",
        query: "Bademiya Colaba Mumbai",
      },
      {
        verb: "If you want a room",
        place: "Leopold Café",
        dish: "Chilli beef / veg steak",
        diet: "both",
        note: "Causeway. Touristy, still open, still useful.",
        query: "Leopold Cafe Colaba Mumbai",
      },
    ],
  },
  {
    id: "col-dishes",
    label: "Famous dishes",
    tag: "Dishes",
    summary: "The south Bombay set: bun maska, crab, pav bhaji, kulfi.",
    steps: [
      {
        verb: "Begin",
        place: "Kyani & Co",
        dish: "Bun maska",
        diet: "veg",
        note: "Irani café. Butter, pav, chai.",
        query: "Kyani and Co Mumbai",
      },
      {
        verb: "The famous plate",
        place: "Trishna or Gajalee",
        dish: "Crab / bombil fry",
        diet: "nonveg",
        note: "Skip if you do not eat fish. Veg people: jump to Chowpatty.",
        query: "Trishna Fort Mumbai",
      },
      {
        verb: "Street",
        place: "Girgaum Chowpatty",
        dish: "Pav bhaji, bhel, kulfi",
        diet: "veg",
        note: "This is the dish + the view.",
        query: "Girgaum Chowpatty Mumbai",
      },
      {
        verb: "Look up",
        place: "CST",
        diet: "both",
        note: "Chhatrapati Shivaji Maharaj Terminus. Stand on the concourse after you eat.",
        query: "Chhatrapati Shivaji Maharaj Terminus Mumbai",
      },
    ],
  },
  {
    id: "col-walk",
    label: "Gateway night",
    tag: "Walk",
    summary: "Apollo Bunder, the necklace, the station.",
    steps: [
      {
        verb: "Go at blue hour to",
        place: "Gateway of India",
        diet: "both",
        note: "Apollo Bunder. Not noon. The Taj is the neighbour, not the destination.",
        query: "Gateway of India Mumbai",
      },
      {
        verb: "Walk",
        place: "Colaba Causeway",
        diet: "both",
        note: "Stalls, bookshops, a cold lime soda.",
        query: "Colaba Causeway Mumbai",
      },
      {
        verb: "Then the long walk",
        place: "Marine Drive",
        diet: "both",
        note: "Chowpatty to Nariman Point. This is the city showing off.",
        query: "Marine Drive Mumbai",
      },
      {
        verb: "Last look",
        place: "CST",
        diet: "both",
        note: "The UNESCO shed, lit. Then a cab north if you have a morning session.",
        query: "Chhatrapati Shivaji Maharaj Terminus Mumbai",
      },
    ],
  },
];

export const flowsByHub: Record<string, AfterFlow[]> = {
  bkc,
  "vile-parle": vileParle,
  andheri,
  bandra,
  colaba,
};

export function flowsForNeighborhood(neighborhood: string): AfterFlow[] {
  const hub = hubByNeighborhood[neighborhood] ?? "colaba";
  return flowsByHub[hub] ?? colaba;
}

export function flowById(id: string): AfterFlow | undefined {
  return Object.values(flowsByHub)
    .flat()
    .find((flow) => flow.id === id);
}
