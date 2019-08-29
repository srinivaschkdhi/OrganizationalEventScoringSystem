import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { AddEventComponent } from './add-event/add-event.component';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';
import { ManageEventCategoriesComponent } from './manage-event-categories/manage-event-categories.component';
import { ManageEventComponent } from './manage-event/manage-event.component';
import {DataTablesModule} from 'angular-datatables';
import { ManageGroupComponent } from './manage-group/manage-group.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [AddEventComponent, ManageRolesComponent, ManageEventCategoriesComponent, ManageEventComponent, ManageGroupComponent],
  imports: [
    CommonModule,
    ManageRoutingModule,
    DataTablesModule,
    DragDropModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class ManageModule { }
