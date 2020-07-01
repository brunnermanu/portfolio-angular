import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  selectedProject: Project;

  constructor(private recipeService: ProjectService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (project: Project) => {
          this.selectedProject = project;
        }
      );
  }

}
