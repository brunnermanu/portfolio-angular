import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './projects/project.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/project', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'project', component: ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

