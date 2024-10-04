export interface ResponseDummy {
    recipes: RecipesInterface[];
    total: number;
    skip: number;
    limit: number;
}

export interface RecipesInterface {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: Difficulty;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}

enum Difficulty {
    Easy = "Easy",
    Medium = "Medium",
}

export interface RecipeDifficulty {
    difficulty: string;
}