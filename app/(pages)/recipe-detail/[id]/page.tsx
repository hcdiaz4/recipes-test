'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { RecipesInterface } from "@/types";
import { getRecipeDetail } from "@/services";


export default function RecipeDetailPage({ params }: { params: { id: number } }) {
    const [recipe, setRecipe] = useState<RecipesInterface>();

    useEffect(() => {
        getRecipeById();
    }, []);

    const getRecipeById = async () => {
        const recipe = await getRecipeDetail(params.id);
        console.log('Recipe: ', recipe);
        setRecipe(recipe);
    }
    return (
        <section>
            <Link href="/" className="flex items-center mb-10">
                <ArrowBackIosOutlinedIcon className="mr-2" />
                Volver
            </Link>
            <h1 className="text-4xl mb-4">{recipe?.name}</h1>

            <div className="grid grid-cols-4 gap-20">
                <div className="col-span-4 sm:col-span-2">
                    <img src={recipe?.image} alt="" />
                </div>
                <div className="col-span-4 sm:col-span-2">
                    <div>
                        <span className="text-2xl">Ingredients:</span>

                        <ul className="list-decimal list-inside mt-4">
                            {recipe?.ingredients.map(item => (<li key={item}>{item}</li>))}
                        </ul>
                    </div>

                    <div className="mt-4">
                        <span className="text-2xl">Instructions:</span>

                        <ul className="list-decimal list-inside mt-4">
                            {recipe?.instructions.map(item => (<li key={item}>{item}</li>))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}