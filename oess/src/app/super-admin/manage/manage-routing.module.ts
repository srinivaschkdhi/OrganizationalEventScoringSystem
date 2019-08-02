import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageEventComponent } from './manage-event/manage-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';
import { ManageGroupComponent } from './manage-group/manage-group.component';
import { GroupedObservable } from 'rxjs';

const routes: Routes = [
{
  path:'groups',
  component:ManageGroupComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
