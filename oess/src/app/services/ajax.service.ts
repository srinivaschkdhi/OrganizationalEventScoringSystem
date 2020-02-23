import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  private loginModule = new BehaviorSubject('Guest');
  currentLogin = this.loginModule.asObservable();

  constructor() { }

  changeLoginModule(message: string){
    this.loginModule.next(message);
  }

}
