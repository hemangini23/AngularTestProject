import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DashboardService } from '../dashboard.service';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent, MyProfileComponent, ProjectsComponent
  ],
  providers: [
    DashboardService
  ]
})
export class AdminModule { }
