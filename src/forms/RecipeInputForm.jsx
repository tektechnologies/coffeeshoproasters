import React from "react";
import { useForm } from "@tanstack/react-form";

const RecipeInputForm = () => {
  const form = useForm({
    defaultValues: {
      coffeeName: "",
      origin: "",
      roastLevel: "medium",
      grindSize: "medium",
      waterRatio: "",
      brewTime: "",
      temperature: "",
      notes: "",
    },
    onSubmit: async ({ value }) => {
      // Handle form submission
      console.log("Recipe submitted:", value);
      // You can add API call here to save the recipe
    },
  });

  return (
    <div className="recipe-form-container">
      <h2>Recipe Input Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className="form-group">
          <label htmlFor="coffeeName">Coffee Name</label>
          <input
            id="coffeeName"
            type="text"
            placeholder="Enter coffee name"
            value={form.getFieldValue("coffeeName")}
            onChange={(e) => form.setFieldValue("coffeeName", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="origin">Origin</label>
          <input
            id="origin"
            type="text"
            placeholder="Coffee origin"
            value={form.getFieldValue("origin")}
            onChange={(e) => form.setFieldValue("origin", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="roastLevel">Roast Level</label>
          <select
            id="roastLevel"
            value={form.getFieldValue("roastLevel")}
            onChange={(e) => form.setFieldValue("roastLevel", e.target.value)}
          >
            <option value="light">Light</option>
            <option value="medium">Medium</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="grindSize">Grind Size</label>
          <select
            id="grindSize"
            value={form.getFieldValue("grindSize")}
            onChange={(e) => form.setFieldValue("grindSize", e.target.value)}
          >
            <option value="extra-fine">Extra Fine</option>
            <option value="fine">Fine</option>
            <option value="medium-fine">Medium Fine</option>
            <option value="medium">Medium</option>
            <option value="medium-coarse">Medium Coarse</option>
            <option value="coarse">Coarse</option>
            <option value="extra-coarse">Extra Coarse</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="waterRatio">Water Ratio (g)</label>
          <input
            id="waterRatio"
            type="number"
            placeholder="e.g., 250"
            value={form.getFieldValue("waterRatio")}
            onChange={(e) => form.setFieldValue("waterRatio", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="brewTime">Brew Time (seconds)</label>
          <input
            id="brewTime"
            type="number"
            placeholder="e.g., 240"
            value={form.getFieldValue("brewTime")}
            onChange={(e) => form.setFieldValue("brewTime", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="temperature">Temperature (°F)</label>
          <input
            id="temperature"
            type="number"
            placeholder="e.g., 200"
            value={form.getFieldValue("temperature")}
            onChange={(e) => form.setFieldValue("temperature", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            placeholder="Additional brewing notes..."
            rows="4"
            value={form.getFieldValue("notes")}
            onChange={(e) => form.setFieldValue("notes", e.target.value)}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Save Recipe
          </button>
          <button
            type="button"
            className="reset-btn"
            onClick={() => form.reset()}
          >
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeInputForm;
