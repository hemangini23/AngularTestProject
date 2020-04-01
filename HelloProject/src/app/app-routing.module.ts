import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProjectsComponent } from './admin/projects/projects.component';


const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "projects", component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
