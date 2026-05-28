export type DrinkItem = {
  name: string;
  price?: string;
  description?: string;
};

export type BarSection = {
  id: string;
  title: string;
  subtitle?: string;
  layout: "cards" | "list" | "pills" | "twoCol";
  items?: DrinkItem[];
  names?: string[];     // for pills (e.g. shots)
  groups?: { heading: string; names: string[] }[]; // for twoCol (bottle beers)
  note?: string;
};

export const barMenu: BarSection[] = [
  {
    id: "cocktails",
    title: "Cocktails",
    subtitle: "Home Court Drinks",
    layout: "cards",
    items: [
      { name: "Smirnoff Preparado", price: "$9", description: "Green apple Smirnoff, vodka, topped with candy, fresh strawberries and pineapple." },
      { name: "Electric Lemonade", price: "$6", description: "Vodka, blue curaçao, simple syrup, lime juice, Sprite." },
      { name: "Jolly Rancher Popsicle", price: "$6", description: "Vodka, blue curaçao, melon liqueur, Sprite." },
      { name: "Spicy Watermelon Vodka", price: "$8", description: "Smirnoff tamarindo, watermelon liqueur, watermelon puree, topped with candy." },
      { name: "Sweet Tamarind Tequila", price: "$8", description: "Tequila, pineapple and cranberry juice, topped with candy." },
      { name: "The Original Cantarito", price: "$12", description: "Tequila El Tequileño, agave nectar, orange, grapefruit and lime juice, grapefruit soda." },
      { name: "Blueberry Float", price: "$12", description: "Vodka and blueberries." },
      { name: "Blackberry Smash", price: "$10", description: "Amaras Mezcal and fresh blackberries." },
      { name: "Strawberry Ginger Paloma", price: "$8", description: "Tequila, ginger beer, grapefruit juice, fresh strawberries." },
      { name: "Cherry Limeade", price: "$5", description: "Vodka, lime juice, simple syrup, splash of grenadine." },
      { name: "La Piña Mezcal", price: "$9", description: "Amaras Mezcal, pineapple juice, jalapeño, cilantro." },
      { name: "Berry Mezcal", price: "$12", description: "Amaras Mezcal, midori, red berries, hint of jalapeño, ginger beer." },
      { name: "Passion Mezcal Paloma", price: "$10", description: "Amaras Mezcal, passion fruit puree, grapefruit juice, club soda." },
    ],
  },
  {
    id: "margaritas",
    title: "Margaritas",
    layout: "cards",
    items: [
      { name: "Mango Margarita", price: "$7", description: "Tequila, triple sec, mango puree, sour mix, chamoy, Trechas rim." },
      { name: "Strawberry Margarita", price: "$7", description: "Tequila, triple sec, strawberry puree, sour mix, chamoy, Trechas rim." },
      { name: "Watermelon Margarita", price: "$7", description: "Tequila, triple sec, watermelon puree, sour mix, chamoy, Trechas rim." },
      { name: "The Original Margarita", price: "$12", description: "Tequila El Tequileño Reposado, Grand Marnier, sweet and sour." },
      { name: "Cucumber Lime Margarita", price: "$12", description: "Patrón Silver, Grand Marnier, agave syrup, fresh cucumber, lime juice." },
      { name: "TWS Margarita", price: "$12", description: "Tequila El Tequileño Reposado, Grand Marnier, Brandy Presidente, lime juice, simple syrup." },
      { name: "Well Margarita", price: "$5", description: "On the rocks." },
    ],
  },
  {
    id: "martinis",
    title: "Martinis",
    layout: "cards",
    items: [
      { name: "Cucumber Martini", price: "$7", description: "Tito's vodka, midori, fresh cucumber puree." },
      { name: "Pink Whitney Cosmo", price: "$5", description: "Pink Whitney vodka, cranberry juice, fresh lime juice." },
      { name: "Espresso Martini", price: "$7", description: "Tito's vodka, coffee liqueur, espresso." },
      { name: "Mazapán Martini", price: "$10", description: "Tito's vodka, Frangelico, Kahlúa, mazapán." },
    ],
  },
  {
    id: "classics",
    title: "Classics",
    layout: "list",
    items: [
      { name: "Tito's Mule", price: "$7" },
      { name: "Mai Tai", price: "$7" },
      { name: "Salty Dog", price: "$5" },
      { name: "Blue Hawaiian", price: "$6" },
      { name: "Sex on the Beach", price: "$6" },
      { name: "Paloma", price: "$6" },
      { name: "Old Fashioned", price: "$8", description: "Redemption Rye" },
      { name: "Vampiro", price: "$7" },
      { name: "Bloody Mary", price: "$8" },
      { name: "Piña Colada", price: "$6" },
      { name: "Long Island Tea", price: "$6" },
    ],
  },
  {
    id: "draft",
    title: "Draft Beer",
    layout: "pills",
    names: [
      "Shiner Bock", "Dos Equis", "Corona Premier", "Modelo", "Blue Moon",
      "Coors Light", "Miller Lite", "Karbach Crawford", "EastCider",
      "Budweiser", "Bud Light", "Ultra Gold", "Stella", "5x5 Vaquero",
      "Michelob Ultra", "Seasonal Beer",
    ],
  },
  {
    id: "bottle",
    title: "Bottle Beer",
    layout: "twoCol",
    groups: [
      {
        heading: "Domestic",
        names: ["Bud Light", "Budweiser", "Michelob Ultra", "Michelob Gold", "Coors Light"],
      },
      {
        heading: "Import",
        names: ["Corona", "Corona Premier", "Dos Equis", "Heineken", "Negra Modelo", "Pacifico", "Carta Blanca"],
      },
      {
        heading: "Non-Alcoholic",
        names: ["Ultra"],
      },
    ],
  },
  {
    id: "seltzers",
    title: "Seltzers",
    layout: "pills",
    names: [
      "High Noon", "NÜTRL", "White Claw", "Topo Chico", "Lucky One",
      "Twisted Tea", "Hoop Tea", "Smirnoff Ice (Apple)", "Sun Cruiser",
    ],
  },
  {
    id: "shots",
    title: "Shots",
    note: "Ask your server for current pricing.",
    layout: "pills",
    names: [
      "Green Tea", "Jägerbomb", "Jameson Pickle Back", "Lemon Drop",
      "Mexican Lollipop", "Peanut Butter Jelly", "Peanut Butter Cup",
      "Scooby Snack", "Starburst", "Vegas Bomb", "Washington Apple",
      "Buttery N**ple", "Liquid Marijuana", "Royal F**k", "Star F**ker",
      "Crazy B**ch", "Fire & Ice", "Gatorade", "Jolly Rancher", "Purple Gecko",
    ],
  },
  {
    id: "cheap-shots",
    title: "Cheap Shots",
    subtitle: "$5 each",
    layout: "pills",
    names: ["Rumple Minze", "Fireball", "Jose Cuervo Especial Blanco", "Jägermeister"],
  },
  {
    id: "wines",
    title: "Wines",
    layout: "list",
    items: [
      { name: "Barefoot Cabernet", price: "$7" },
      { name: "Barefoot Chardonnay", price: "$7" },
    ],
  },
];
