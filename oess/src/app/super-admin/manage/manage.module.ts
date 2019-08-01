import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { AddEventComponent } from './add-event/add-event.component';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';
import { ManageEventCategoriesComponent } from './manage-event-categories/manage-event-categories.component';
import { ManageEventComponent } from './manage-event/manage-event.component';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [AddEventComponent, ManageRolesComponent, ManageEventCategoriesComponent, ManageEventComponent],
  imports: [
    CommonModule,
    ManageRoutingModule,
    DataTablesModule
  ]
})
export class ManageModule { }
