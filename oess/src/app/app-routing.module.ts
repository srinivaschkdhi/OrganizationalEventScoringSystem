import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { SuperAdminModule } from './super-admin/super-admin.module';

const routes: Routes = [
  {
    path: 'carousel',
    loadChildren: () => SharedModule
  },
  {
    path: 'admin',
    loadChildren: () => SuperAdminModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
