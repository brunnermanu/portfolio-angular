import { Ingredient } from '../shared/ingredient.model';

export class Project {
  public name: string;
  public description: string;
  public imagePath: string;
  public websitePath: string;

  constructor(name: string, description: string, imagePath: string, websitePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.websitePath = websitePath;
  }
}
