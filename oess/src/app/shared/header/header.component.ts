import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AjaxService } from '../../services/ajax.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  message: string;

  constructor(private ajaxService: AjaxService) { }

  ngOnInit() {
    this.ajaxService.currentLogin.subscribe(message => this.message = message);
  }

}
