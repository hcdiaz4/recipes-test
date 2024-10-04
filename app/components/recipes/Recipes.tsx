'use client'

import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Link from "next/link";
import { RecipeDifficulty, RecipesInterface } from "@/types";
import useRecipe from "@/shared/hooks/useRecipe";
import { useEffect } from "react";

export const Recipes = ({ difficulty }: RecipeDifficulty) => {

    const { data, loading, filter } = useRecipe();
    useEffect(() => {
        filter(difficulty);
    }, [difficulty]);

    const render = loading
        ? (
            <div className="text-2xl">Recipes loading...</div>
        ) : (
            data?.length ?
                <ImageList sx={{ width: '100%', height: '100%' }} cols={1}>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 ">
                        {
                            data.map((recipe: RecipesInterface) => {
                                return (
                                    <Link href={`/recipe-detail/${recipe.id}`} key={recipe.id}>
                                        <ImageListItem>
                                            <img className="rounded" src={recipe.image} alt={recipe.name} loading="lazy" />
                                            <ImageListItemBar
                                                title={
                                                    <>
                                                        <span className="text-sm bg-blue-500 rounded p-1 text-white">{recipe.difficulty}</span>
                                                        <div className="text-1xl"> {recipe.name}</div>
                                                    </>
                                                }
                                                subtitle={
                                                    <>
                                                        <div className="flex items-center">
                                                            <AccessTimeIcon className="mr-1 w-4" />
                                                            <span className="text-sm"><b>Preparation time:</b> {recipe.prepTimeMinutes}min</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <AccessTimeIcon className="mr-1 w-4" />
                                                            <span className="text-sm"><b>Cook time:</b> {recipe.cookTimeMinutes}min</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-sm"><b>Number of servings:</b> {recipe.servings}</span>
                                                        </div>

                                                    </>
                                                }
                                                position="below"
                                            />
                                        </ImageListItem>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </ImageList> : <div className="text-2xl">No <b>{difficulty}</b> recipes found.</div>
        )

    return (
        render
    )
}