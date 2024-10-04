import { RecipesInterface, ResponseDummy } from "@/types";
import axios from "axios";

export const getAllRecipes = async (): Promise<ResponseDummy> => {
    try {
        const recipes = await axios<ResponseDummy>(`${process.env.NEXT_PUBLIC_RECIPES_API_URL}`);
        return recipes.data;
    } catch (error) {
        console.log(error);
        throw new Error('[getAllRecipes]: Error get recipes API.');
    }

}

export const getRecipeDetail = async (recipe_id: number): Promise<RecipesInterface> => {
    try {
        const recipe = await axios<RecipesInterface>(`${process.env.NEXT_PUBLIC_RECIPES_API_URL}/${recipe_id}`);
        return recipe.data;
    } catch (error) {
        console.log(error);
        throw new Error('[getRecipeDetail]: Error get recipe by id.');
    }
}

export const recipeSearch = async (query: string): Promise<ResponseDummy> => {
    try {
        const result = await axios<ResponseDummy>(`${process.env.NEXT_PUBLIC_RECIPES_API_URL}/search?q=${query}`);
        return result.data;
    } catch (error) {
        console.log(error);
        throw new Error('[recipeSearch]: Error search recipes API.');
    }
}