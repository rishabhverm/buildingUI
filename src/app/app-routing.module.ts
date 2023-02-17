import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBuildingComponent } from './Components/add-building/add-building.component';
import { BuildingListComponent } from './Components/building-list/building-list.component';

const routes: Routes = [

  { path: 'building', component: BuildingListComponent },

  { path: 'building/add', component: AddBuildingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
