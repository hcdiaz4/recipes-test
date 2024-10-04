import { getAllRecipes } from "@/services";
import { RecipesInterface } from "@/types";
import { useEffect, useState } from "react";

interface UseRecipeData {
    data: RecipesInterface[];
    loading: boolean;
    error: Error | null;
    filter: (value: string) => void;
}

const useRecipe = (): UseRecipeData => {
    const [data, setData] = useState<RecipesInterface[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [difficulty, setDifficulty] = useState('All');

    useEffect(() => {

        const fetchRecipes = async () => {
            try {
                setLoading(true);
                const recipesData = await getAllRecipes();
                setData(recipesData.recipes);
                setLoading(false);

                if (difficulty === 'All') {
                    return;
                }
                else {
                    findRecipesByDifficulty(recipesData.recipes, difficulty);
                }

            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        }

        const findRecipesByDifficulty = (recipesCopy: RecipesInterface[], difficulty: string) => {
            const filterRecipes = recipesCopy.filter((x: RecipesInterface) => x.difficulty === difficulty);
            setData(filterRecipes)
        }

        fetchRecipes();
    }, [difficulty]);

    const filter = (value: string) => {
        setDifficulty(value);
    };

    return { data, loading, error, filter };
}

export default useRecipe;