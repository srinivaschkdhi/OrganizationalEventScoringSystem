import { Component, OnInit } from '@angular/core';
import { AjaxService } from 'src/app/services/ajax.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  message: string;

  constructor(private ajaxService: AjaxService) { }

  ngOnInit() {
    this.ajaxService.currentLogin.subscribe(message => this.message = message);
    this.newLogin();
  }

  newLogin(){
    this.ajaxService.changeLoginModule("Super Admin");
  }

}
