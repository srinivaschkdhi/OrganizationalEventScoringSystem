import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageEventComponent } from './manage-event/manage-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';
import { ManageEventCategoriesComponent } from './manage-event-categories/manage-event-categories.component';
import { ManageGroupComponent } from './manage-group/manage-group.component';


const routes: Routes = [

  {
    path:'addEvent',
    component: AddEventComponent
  },
  {
    path:'manageEventCategories',
    component: ManageEventCategoriesComponent
  },
  {
    path:'manageRoles',
    component: ManageRolesComponent
  },
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
