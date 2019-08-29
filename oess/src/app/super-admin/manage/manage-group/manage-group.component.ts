import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
// import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-manage-group',
  templateUrl: './manage-group.component.html',
  styleUrls: ['./manage-group.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ManageGroupComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Hari Mankal', 'Sandeep Joshi', 'Satya Ravi Tavva', 'Pandu Kodi', 'Pramila Kasirajan'];
  filter: string[] = ['Role', 'Name', 'Duration'];
  teamList = [
    {
      teamId: "Team 1",
      headList: [
        {
          name: "Hari Mankal",
          designation: "Director, Project Management",
          reportees: 83
        },
        {
          name: "Sandeep Joshi",
          designation: "Director, Operations",
          reportees: 23
        },
        {
          name: "Satya Ravi Tavva",
          designation: "Senior Project Manager",
          reportees: 55
        },
        {
          name: "Pandu Kodi",
          designation: "Software Engineer",
          reportees: 54
        },
        {
          name: "Rishi Kalawatia",
          designation: "Senior Project Manager",
          reportees: 98
        },
        {
          name: "Pramila Kasirajan",
          designation: "Senior Software Engineer",
          reportees: 16
        }
      ]
    },
    {
      teamId: "Team 2",
      headList: [
        {
          name: "Vinod Sirigiri",
          designation: "Senior Project Manager",
          reportees: 93
        },
        {
          name: "Vandana Srivastava",
          designation: "Senior Project Manager",
          reportees: 86
        },
        {
          name: "Gopalakrishna Maddipatla",
          designation: "Senior Project Manager",
          reportees: 78
        },
        {
          name: "Prakhar Agarwal",
          designation: "Senior Software Engineer",
          reportees: 46
        },
        {
          name: "Jugal Kishore",
          designation: "Senior Recruiter",
          reportees: 23
        }
      ]
    },
    {
      teamId: "Team 3",
      headList: [
        {
          name: "Denis Vlassenko",
          designation: "Lead Software Engineer",
          reportees: 47
        },
        {
          name: "Mandar Navare",
          designation: "Project Manager",
          reportees: 78
        },
        {
          name: "Nagarjun Venkata",
          designation: "Project Manager",
          reportees: 23
        },
        {
          name: "Nadzeya Shedava",
          designation: "Lead Software Engineer",
          reportees: 45
        },
        {
          name: "Piyush Priyadarshi",
          designation: "Project Manager",
          reportees: 67
        }
      ]
    }
  ];
    
  
  filteredOptions: Observable<string[]>;

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  review = [
    'Take bath',
    'Wash car',
  ];

  drop(event: CdkDragDrop<string[]>) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);
      }
    
  }
  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}