import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DashboardService } from '../../dashboard.service';
import { items } from './items';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;

  Clients: string[];
  Projects: string[];
  Years: number[] = [];
  TeamMembersSummary = [];
  TeamMembers = [];
  Today: Date;

  ngOnInit(): void {
    this.Designation = "Team Leader";
    this.Username = "Ananya Pandey";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    this.Today = new Date();

    this.Clients = ["Hexaware Technologies", "Cognizent", "Accenture"];
    this.Projects = ["EY", "JBHunt", "ABC"];
    for (var i = 2015; i < 2025; i++) {
      this.Years.push(i);
    }
    this.TeamMembersSummary = this.dashboardService.getTeamMemberSummery();
    this.TeamMembers = this.dashboardService.getTeamMember(); 
  }
  onProjectChange($event) {
    if ($event.target.innerHTML == "EY") {
      this.ProjectCost = 1234;
      this.CurrentExpenditure = 45560;
      this.AvailableFunds = 23200;
    }
    else if ($event.target.innerHTML == "JBHunt") {
      this.ProjectCost = 143550;
      this.CurrentExpenditure = 34060;
      this.AvailableFunds = 81200;
    }
    else if ($event.target.innerHTML == "ABC") {
      this.ProjectCost = 6784;
      this.CurrentExpenditure = 46790;
      this.AvailableFunds = 3450;
    }
  }
}
