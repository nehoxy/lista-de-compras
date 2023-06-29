import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemsComponent } from './components/items/items.component';

const routes: Routes = [{path:'add-item',component:AddItemComponent},{path:'',component:ItemsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
