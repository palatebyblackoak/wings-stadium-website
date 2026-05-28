import type { DayKey } from "./business";

export type Special = {
  text: string;
  price?: string;       // e.g. "$5", "70¢", "BOGO"
  emphasis?: boolean;   // visually highlight (e.g. headline offer)
};

export type DayLineup = {
  key: DayKey;
  label: string;
  shortLabel: string;
  theme?: string;       // e.g. "On Wednesdays We Wear Pink"
  subtitle?: string;
  liveDj?: boolean;
  highPriority?: boolean;
  specials: Special[];
  placeholder?: string; // shown when no confirmed offers yet
};

export const happyHour = {
  label: "Happy Hour",
  days: "Monday–Friday",
  time: "3PM – 7PM",
  drinks: [
    { text: "$1 OFF Home Court drinks + beers" },
    { text: "$3 Wells" },
    { text: "$2.75 Pints — Miller Lite, Bud Light" },
    { text: "$3.25 Michelob Pints" },
  ],
  apps: {
    headline: "$5 APPS",
    items: ["Cheese Sticks", "Fried Mushrooms", "Fried Pickles", "Mac & Cheese Bites"],
  },
  teachers: {
    headline: "TEACHERS SPECIAL",
    body: "Show 2 teacher IDs → 1 FREE select appetizer.",
    fineprint: "Valid during Happy Hour.",
  },
};

export const lunch = {
  headline: "Mix & Match Lunch",
  days: "Mon–Fri",
  body: "Build your weekday lunch — mix and match favorites.",
};

export const weekly: DayLineup[] = [
  {
    key: "mon",
    label: "Monday",
    shortLabel: "MON",
    specials: [
      { text: "Boneless Wings", price: "70¢", emphasis: true },
      { text: "$1 OFF Tall Drafts" },
      { text: "Miller & Bud Light (20oz)", price: "$3.75" },
      { text: "Michelob Ultra (20oz)", price: "$4.50" },
    ],
  },
  {
    key: "tue",
    label: "Tuesday",
    shortLabel: "TUE",
    subtitle: "Select Bottled Beers — $2.50",
    specials: [
      {
        text: "Bud Light · Budweiser · Tecate Light · Miller Lite · Twisted Tea · Hoop Tea",
        price: "$2.50",
        emphasis: true,
      },
    ],
  },
  {
    key: "wed",
    label: "Wednesday",
    shortLabel: "WED",
    theme: "On Wednesdays We Wear Pink",
    liveDj: true,
    highPriority: true,
    specials: [
      { text: "Wings", price: "BOGO", emphasis: true },
      { text: "Live DJ all night" },
    ],
  },
  {
    key: "thu",
    label: "Thursday",
    shortLabel: "THU",
    theme: "Texas Thursdays",
    subtitle: "Country Night",
    liveDj: true,
    specials: [
      { text: "Tito's", price: "$5", emphasis: true },
      { text: "5x5 & Shiner Pints", price: "$5" },
      { text: "Twisted Teas", price: "$4" },
      { text: "Live DJ all night" },
    ],
  },
  {
    key: "fri",
    label: "Friday",
    shortLabel: "FRI",
    theme: "Flashback Friday",
    subtitle: "90s & 2000s music",
    liveDj: true,
    specials: [
      { text: "Martinis & Margaritas", price: "$5", emphasis: true },
      { text: "Martinis — Cucumber · Lemon Drop · Espresso · Cosmopolitan" },
      { text: "Margaritas — Mango · Watermelon · Strawberry" },
      { text: "Live DJ all night" },
      { text: "Teachers Special" },
    ],
  },
  {
    key: "sat",
    label: "Saturday",
    shortLabel: "SAT",
    theme: "Game Day",
    specials: [],
    placeholder: "Every game on every screen. Lineup drops soon.",
  },
  {
    key: "sun",
    label: "Sunday",
    shortLabel: "SUN",
    theme: "Game Day",
    specials: [],
    placeholder: "Every game on every screen. Lineup drops soon.",
  },
];

export const weeklyByDay: Record<DayKey, DayLineup> = weekly.reduce(
  (acc, d) => ({ ...acc, [d.key]: d }),
  {} as Record<DayKey, DayLineup>,
);
