# Introduction #

This describes the relationships between the datatypes.


# Overview #

## Primary Datatypes ##
  * ShoppingList
  * Meal
  * Recipe
  * IngredientItem


## Secondary Datatypes ##
  * Ingredient
  * RecipeType
  * IngredientType
  * Measurement
  * Fraction

# Details #
  * ShoppingList is a list of none, one or more of Meal, Recipe, IngredientItem
  * Meal is a list of Recipe
  * Recipe is a list of IngredientItem, a RecipeType, a ServingSize, a Description, an Instruction
  * IngredientItem is one ingredient, none or one whole number, none or one fraction, one measurement, none or one instruction