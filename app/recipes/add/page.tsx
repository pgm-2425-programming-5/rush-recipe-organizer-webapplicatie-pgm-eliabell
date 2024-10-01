"use client";
import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Recipe {
  name: string;
  ingredients: string;
  instructions: string;
  category: string;
}


export default function AddRecipePage() {
  const [recipe, setRecipe] = useState<Recipe>({
    name: "",
    ingredients: "",
    instructions: "",
    category: "ontbijt",
  });
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Retrieve current recipes from localStorage
    const storedRecipes = localStorage.getItem("recipes");
    const recipes = storedRecipes ? JSON.parse(storedRecipes) : [];

    // Add the new recipe
    const updatedRecipes = [...recipes, recipe];
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    // Redirect to the recipes page
    router.push("/recipes");
    // redirect("/recipes", "push");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Voeg een nieuw recept toe</h1>

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2">
            Naam:
          </label>
          <input
            id="name"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ingredients" className="block font-bold mb-2">
            Ingrediënten:
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="instructions" className="block font-bold mb-2">
            Instructies:
          </label>
          <textarea
            id="instructions"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block font-bold mb-2">
            Categorie:
          </label>
          <select
            id="category"
            name="category"
            value={recipe.category}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="Ontbijt">Ontbijt</option>
            <option value="Lunch">Lunch</option>
            <option value="Diner">Diner</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Opslaan
        </button>
      </form>
    </div>
  );
}
