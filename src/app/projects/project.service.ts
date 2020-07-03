import { Project } from './project.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Projects } from '@angular/cli/lib/config/schema';

@Injectable()
export class ProjectService {
  recipeSelected = new EventEmitter<Project>();
  projectsChanged = new EventEmitter<Projects[]>();

  private projects: Project[] = [
    new Project('app',
      'Shopping List & Recipe Book',
      'My actual project is created with Angular. Feel free to look how the project is going.',
      './assets/img/groceries.jpeg',
      'https://manus-recipe-book.netlify.app',
    ),
    new Project('website',
      'Gravuren Brunner',
      'This was my very first project created with HTML and CSS.',
      './assets/img/Handgravur.jpeg',
      'https://gravurenbrunner.ch/',
      ),
    new Project('website',
      'Shine Light',
      'Website created with HTML and CSS. Later Wordpress was integrated.',
      './assets/img/Kuechenbeleuchtung.jpg',
      'https://shinelight.ch/',
      ),
    new Project('app',
      'Hangman-Game',
      'Created with Javascript.',
      './assets/img/hangman.jpg',
      'https://manu-brunner-hangman.netlify.app',
      ),
    new Project('app',
      'Todo-App',
      'Created with Javascript.',
      './assets/img/Todolist.jpg',
      'https://manu-brunner-todo.netlify.app',
      ),
    new Project('app',
      'Notes-App',
      'Created with Javascript.',
      './assets/img/notes.jpg',
      'https://manu-brunner-notes.netlify.app',
    ),

  ];

  getProjects() {
    return this.projects.slice();
  }

  getWebsites() {
    return this.projectsChanged.emit(this.projects.filter(x => x.group === 'website'));
  }

  getApps() {
    return this.projectsChanged.emit(this.projects.filter(x => x.group === 'app'));
  }

  getActual() {
    return this.projectsChanged.emit(this.projects.filter(x => x.name === 'Shopping List & Recipe Book'));
  }

  getAllProjects() {
    return this.projectsChanged.emit(this.projects);
  }
}
