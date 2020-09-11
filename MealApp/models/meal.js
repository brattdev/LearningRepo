class Meal {
    constructor(
        id, 
        categoryIds, 
        title, 
        affordability, 
        complexity, 
        imageUrl, 
        duration, 
        ingredients, 
        steps,
        isGlutenfree,
        isVegan,
        isVegeterian,
        isLactosefree){
            this.id=id,
            this.categoryIds = categoryIds,
            this.title = title,
            this.affordability = affordability,
            this.complexity = complexity,
            this.imageUrl = imageUrl,
            this.duration = duration,
            this.ingredients = ingredients,
            this.steps = steps,
            this.isGlutenfree = isGlutenfree,
            this.isVegan = isVegan,
            this.isVegeterian = isVegeterian,
            this.isLactosefree = isLactosefree
        }
}

export default Meal;