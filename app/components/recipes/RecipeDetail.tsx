import { RecipesInterface } from '@/types';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import Link from 'next/link';

interface PropsRecipeDetail {
    filterRecipe: RecipesInterface
}

export const RecipeDetail = ({ filterRecipe }: PropsRecipeDetail) => {
    console.log('Filter recipe', filterRecipe);
    return (
        <section>
            <Link href="/" className="flex items-center mb-10">
                <ArrowBackIosOutlinedIcon className="mr-2" />
                Volver
            </Link>
            <h1 className="text-4xl mb-4">{filterRecipe?.name}</h1>

            <div className="grid grid-cols-4 gap-20">
                <div className="col-span-4 sm:col-span-2">
                    <img src={filterRecipe?.image} alt="" />
                </div>
                <div className="col-span-4 sm:col-span-2">
                    <div>
                        <span className="text-2xl">Ingredients:</span>

                        <ul className="list-decimal list-inside mt-4">
                            {filterRecipe?.ingredients.map(item => (<li key={item}>{item}</li>))}
                        </ul>
                    </div>

                    <div className="mt-4">
                        <span className="text-2xl">Instructions:</span>

                        <ul className="list-decimal list-inside mt-4">
                            {filterRecipe?.instructions.map(item => (<li key={item}>{item}</li>))}
                        </ul>
                    </div>

                    <div className="mt-5 text-2xl">
                        Rating: {filterRecipe?.rating}
                    </div>
                </div>
            </div>
        </section>
    )
}