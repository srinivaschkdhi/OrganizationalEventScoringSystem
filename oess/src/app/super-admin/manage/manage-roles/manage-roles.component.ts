import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-roles',
  templateUrl: './manage-roles.component.html',
  styleUrls: ['./manage-roles.component.scss']
})
export class ManageRolesComponent implements OnInit {
  
  roles: any = [
    { "name": "Group Captain Male", "id": 1 },
    { "name": "Group Captain Female", "id":2},
    { "name": "Co-Ordinator", "id": 3 },
    { "name": "Volunteer", "id":4 },
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
