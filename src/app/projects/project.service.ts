import { Project } from './project.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class ProjectService {
  recipeSelected = new EventEmitter<Project>();

  private recipes: Project[] = [
    new Project('Gravuren Brunner',
      'This is simply a Test',
      './assets/img/Handgravur.jpeg',
      'https://gravurenbrunner.ch/'),
    new Project('Thaicurry',
      'This is simply a Test',
      'https://res.cloudinary.com/swissmilk/image/fetch/q_auto,f_auto/' +
      'https://api.swissmilk.ch/wp-content/uploads/2019/05/ss-alltagsrezepte-winter-geschmortes-wintergemuese-mit-poulet.jpg',
      ''),
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
