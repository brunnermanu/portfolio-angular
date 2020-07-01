import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../project.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() project: Project;
  @Input() index: number;
  @Input() routerLinkActive: string

  ngOnInit() {
  }

}
