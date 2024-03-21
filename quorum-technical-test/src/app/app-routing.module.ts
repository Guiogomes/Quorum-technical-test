import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BillByLegislatorViewComponent } from './modules/view-bills-by-legislator/view/bill-by-legislator-view/bill-by-legislator-view.component';


const routes: Routes = [
  {
  path: 'bills-by-legislator',
  component: BillByLegislatorViewComponent,
  pathMatch: 'full'
}
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
