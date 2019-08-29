import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ManageModule } from './manage/manage.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    SharedModule,
    ManageModule
  ]
})
export class SuperAdminModule { }
