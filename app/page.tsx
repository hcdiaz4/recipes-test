'use client';

import { useState } from "react";
import { Recipes, Sidebar, TitlePage } from "./components";

export default function Home() {

  const [difficultyValue, setDifficulty] = useState('All');

  const filterRecipesDifficulty = (difficulty: string) => {
    setDifficulty(difficulty);
  }

  return (
    <>
      <TitlePage text={`${difficultyValue} recipes`} />
      <div className="grid grid-cols-1 sm:grid-cols-4">
        <aside className="sm:col-span-1">
          <Sidebar changeHandler={filterRecipesDifficulty} />
        </aside>
        <section className="sm:col-span-3">
          <Recipes difficulty={difficultyValue} />
        </section>
      </div>
    </>
  );
}
