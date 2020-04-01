import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getTeamMemberSummery(): any[] {
    var TeamMemberSummery = [
      { Region: "East", TeamMembersCount: 20, TemporarilyUnavailableMembers: 2 },
      { Region: "West", TeamMembersCount: 10, TemporarilyUnavailableMembers: 1 },
      { Region: "North", TeamMembersCount: 25, TemporarilyUnavailableMembers: 5 },
      { Region: "South", TeamMembersCount: 30, TemporarilyUnavailableMembers: 0 },
    ];
    return TeamMemberSummery
  }

  getTeamMember(): any[] {
    var TeamMember = [
      {
        Region: "East", Members: [
          { ID: 1, Name: "Hema", Status: "Available" },
          { ID: 1, Name: "Pooja", Status: "Busy" },
          { ID: 1, Name: "Akhil", Status: "Available" },
          { ID: 1, Name: "Vishal", Status: "Available" },
        ]
      },
      {
        Region: "West", Members: [
          { ID: 1, Name: "Divesh", Status: "Available" },
          { ID: 2, Name: "Bhavik", Status: "Busy" },
          { ID: 3, Name: "Harshita", Status: "Available" },
          { ID: 4, Name: "Ananya", Status: "Available" },
        ]
      },
      {
        Region: "North", Members: [
          { ID: 11, Name: "Akanksha", Status: "Available" },
          { ID: 12, Name: "Ketan", Status: "Busy" },
          { ID: 13, Name: "Ajinkya", Status: "Available" },
          { ID: 14, Name: "Joel", Status: "Available" },
        ]
      },
      {
        Region: "South", Members: [
          { ID: 21, Name: "Sara", Status: "Available" },
          { ID: 22, Name: "Anjali", Status: "Busy" },
          { ID: 23, Name: "Ritesh", Status: "Available" },
          { ID: 24, Name: "Sujeet", Status: "Available" },
        ]
      },
    ];
    return TeamMember;
  }
}
