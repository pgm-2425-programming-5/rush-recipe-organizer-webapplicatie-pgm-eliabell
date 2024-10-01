// app/recipes/page.tsx
'use client';

import { useState, useEffect } from 'react';

interface Recipe {
  name: string;
  ingredients: string;
  instructions: string;
  category: string;
}

export default function RecipePage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filter, setFilter] = useState<string>('All');

  useEffect(() => {
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  const filteredRecipes = filter === 'All' ? recipes : recipes.filter(recipe => recipe.category === filter);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Jouw Recepten</h1>

      <div className="mb-4">
        <label htmlFor="category" className="mr-2">Filter op categorie:</label>
        <select
          id="category"
          className="p-2 border rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">Alle</option>
          <option value="Ontbijt">Ontbijt</option>
          <option value="Lunch">Lunch</option>
          <option value="Diner">Diner</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRecipes.map((recipe, index) => (
          <div key={index} className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold">{recipe.name}</h2>
            <p><strong>Ingrediënten:</strong> {recipe.ingredients}</p>
            <p><strong>Instructies:</strong> {recipe.instructions}</p>
            <p><strong>Categorie:</strong> {recipe.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
