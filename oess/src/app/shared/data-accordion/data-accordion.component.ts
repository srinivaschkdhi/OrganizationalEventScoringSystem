import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-accordion',
  templateUrl: './data-accordion.component.html',
  styleUrls: ['./data-accordion.component.scss']
})
export class DataAccordionComponent implements OnInit {
  isOpen: boolean= false;

  constructor() { }

  ngOnInit() {
  }

  toggleIcon(){
    this.isOpen = !this.isOpen;
  }
}
