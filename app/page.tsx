
import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <p className="eyebrow">YOUR NEXT FAVORITE MEAL</p>
        <h1>Find your next bite.</h1>
        <p>
          Simple recipes, delicious moments.
          Discover something amazing to cook today.
        </p>
      </section>

      <section className="recipes-section">
        <h2>Explore Recipes</h2>

        <div className="grid">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
