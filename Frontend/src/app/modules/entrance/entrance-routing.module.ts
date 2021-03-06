import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntranceComponent } from './entrance.component';
import { FormEntranceComponent } from './form-entrance/form-entrance.component';

const routes: Routes = [
  { path: '', component: EntranceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntranceRoutingModule { }
