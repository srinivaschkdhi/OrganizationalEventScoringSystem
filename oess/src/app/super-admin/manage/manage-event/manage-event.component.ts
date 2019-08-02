import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
declare var $;

@Component({
  selector: 'app-manage-event',
  templateUrl: './manage-event.component.html',
  styleUrls: ['./manage-event.component.scss']
})
export class ManageEventComponent implements OnInit {
  removeRow(): any {
};
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
  msg:string ;
  
  constructor() {
    this.removeRow= function(){
      this.dataTable.remove($(this).closest('tr'),
      {
                title: 'Delete record',
                message: 'Are you sure you wish to remove this record?',
                buttons: 'Delete'
      }
      )}
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
      data:this.tableInfo,
      columns: [
            {title: 'Name', data: 'name'},
            {title: 'Category', data: 'category' },{
              title: 'Start Date', data: 'startDate'
            },{
              title: 'End Date', data: 'enddate'
            },{
              title: 'Action',
              data: null,
               defaultContent: '<button onclick="removeRow()"><span class="fa fa-trash"></span></button> '
              // defaultContent: '<a href="" class="editor_edit">Edit</a> / <a href="" class="editor_remove">Delete</a>'
          }]
    };
  }
  

}
