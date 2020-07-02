import {Component} from '@angular/core';
import {Project} from '../projects/project.model';
import {ProjectService} from '../projects/project.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  project: Project;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router) { }

  onProjects() {
    return this.projectService.getAllProjects();
  }

  onWebsites() {
    return this.projectService.getWebsites();
  }

  onApps() {
    return this.projectService.getApps();
  }

  onActual() {
    return this.projectService.getActual();
  }
}
