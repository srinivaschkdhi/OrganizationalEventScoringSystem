import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
declare var $;

@Component({
  selector: 'app-manage-event',
  templateUrl: './manage-event.component.html',
  styleUrls: ['./manage-event.component.scss']
})
export class ManageEventComponent implements OnInit {
  @ViewChild('dataTable') table: ElementRef;
  dataTable: any;
  tableInfo: any = [
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Events", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Fungama", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" }
  ];

  dtOptions: DataTables.Settings = {};
  msg:string = "Well done!";
  
  constructor() {

  }

  ngOnInit() {
    // this.dataTable = $(this.table.nativeElement);
    // this.dataTable.dataTable();
    this.dtOptions = {
      data:this.tableInfo,
      columns: [
            {title: 'Name', data: 'name'},
            {title: 'Category', data: 'category' },
            {
              title: 'Start Date', data: 'startDate'
            },
            {
              title: 'End Date', data: 'enddate'
            },
            {
              title: 'Action',
              data: null,
              defaultContent: '<button onclick="JavaScript:alert(this.msg)"><span class="fa fa-trash"></span></button> '
          }]
    };
  }


}
