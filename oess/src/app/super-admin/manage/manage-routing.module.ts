import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageEventComponent } from './manage-event/manage-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';

const routes: Routes = [
  {
    path:'',
    component:ManageEventComponent
  },
  {
    path:'addEvent',
    component:AddEventComponent
  },
  {
    path:'manageRoles',
    component:ManageRolesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
