import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ɵBrowserAnimationBuilder } from '@angular/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { BillByLegislatorViewComponent } from './modules/view-bills-by-legislator/view/bill-by-legislator-view/bill-by-legislator-view.component';



@NgModule({
  declarations: [
    AppComponent,
    BillByLegislatorViewComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    RouterModule,
    MatTabsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
