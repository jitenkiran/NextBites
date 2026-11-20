
export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  {
    id: "pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
  },
  {
    id: "burger",
    title: "Cheese Burger",
    emoji: "🍔",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "American",
  },
  {
    id: "ramen",
    title: "Chicken Ramen",
    emoji: "🍜",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Japanese",
  },
  {
    id: "pancakes",
    title: "Pancakes",
    emoji: "🥞",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "American",
  },
  {
    id: "tacos",
    title: "Mexican Tacos",
    emoji: "🌮",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "Mexican",
  },
  {
    id: "pasta",
    title: "Creamy Pasta",
    emoji: "🍝",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Italian",
  },
];
