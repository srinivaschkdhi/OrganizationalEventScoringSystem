import { Component, OnInit, ViewChild, ElementRef, Input, Renderer } from '@angular/core';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-manage-event',
  templateUrl: './manage-event.component.html',
  styleUrls: ['./manage-event.component.scss']
})
export class ManageEventComponent implements OnInit {
  @ViewChild('delBtn') delBtn: { nativeElement: any; };
  @ViewChild('dataTable') table: ElementRef;

  dataTable: any;
  tableInfo: any = [
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019", "id": 1 },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" ,"id":2},
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019", "id": 3 },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019", "id":4 },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019", "id":5 },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019", "id":6 },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019", "id":7 },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" , "id":8},
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" , "id":9},
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019", "id":10 },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" , "id":11},
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019", "id":12 },
    { "name": "Engx Week Hyderabad", "category": "Organization Initiatives", "startDate": "2/15/2019", "enddate": "2/25/2019" , "id":13},
    { "name": "Engx Week Hyderabad", "category": "Events", "startDate": "2/15/2019", "enddate": "2/25/2019", "id":14 }
   
  ];

  dtOptions: DataTables.Settings = {};
  msg: string;

  constructor(private renderer: Renderer, private router: Router) {

  }

  ngOnInit() {
    this.msg = "Well done!";

    // this.dataTable = $(this.table.nativeElement);
    // this.dataTable.dataTable();
    //  $('#example').on('click', 'a.editor_edit', function (e) {
    //     e.preventDefault();

    //     editor.edit( $(this).closest('tr'), {
    //         title: 'Edit record',
    //         buttons: 'Update'
    //     } );
    // } );

    // Delete a record
    // $('#example').on('click', 'a.editor_remove', function (e) {
    //     e.preventDefault();

    //     editor.remove( $(this).closest('tr'), {
    //         title: 'Delete record',
    //         message: 'Are you sure you wish to remove this record?',
    //         buttons: 'Delete'
    //     } );
    // } );

    this.dtOptions = {
      data: this.tableInfo,
      columns: [
        {
          title: 'Name', data: 'name'
        },
        {
          title: 'Category', data: 'category'
        },
        {
          title: 'Start Date', data: 'startDate'
        }, {
          title: 'End Date', data: 'enddate'
        }, {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-default " #editBtn  data-toggle="confirmation" data-singleton="true"><span class="fa fa-pencil"></span></button>';
          }
          // defaultContent: '<a href="" class="editor_edit">Edit</a> / <a href="" class="editor_remove">Delete</a>'
        }]
    };
  }
  ngAfterViewInit(): void {
    this.renderer.listen(document, 'click', (event) => {
     
      //if (event.target.hasAttribute("view-person-id")) {
        this.router.navigate(["/admin/manage/addEvent" ]);
     // }
    });
  }
  

}
