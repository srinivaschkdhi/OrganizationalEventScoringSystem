import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-event-categories',
  templateUrl: './manage-event-categories.component.html',
  styleUrls: ['./manage-event-categories.component.scss']
})
export class ManageEventCategoriesComponent implements OnInit {
  categories: any = [
    { "name": "Organization Initiatives", "weightage":55,"id": 1 },
    { "name": "Cultural Trophy","weightage":15, "id":2},
    { "name": "Quarterly Awards", "weightage":10,"id": 3 },
    { "name": "Sports Trophy", "weightage":15,"id":4 },
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
