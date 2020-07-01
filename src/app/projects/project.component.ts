import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Project;

  constructor(private recipeService: ProjectService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Project) => {
          this.selectedRecipe = recipe;
        }
      );
  }

}
