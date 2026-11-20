
import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="card">
      <div className="card-art">
        {recipe.emoji}
      </div>

      <div className="card-content">
        <h3>{recipe.title}</h3>

        <div className="card-meta">
          <span>⏱ {recipe.minutes} min</span>
          <span>{recipe.difficulty}</span>
          <span>{recipe.cuisine}</span>
        </div>
      </div>
    </div>
  );
}
