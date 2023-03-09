const mongoose = require('mongoose');


const recipeSchema = new mongoose.Schema(
    {
        name: {type: String, required: true}, 
        content: {type: String},
        imageURL: {type: String}, 
      },
      { timestamps: true }
    );

const Recipe = mongoose.model('recipe', recipeSchema)

module.exports = Recipe;