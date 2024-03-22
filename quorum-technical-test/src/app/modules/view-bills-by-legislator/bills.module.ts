import { HttpInterceptorService } from './services/http-interceptor.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ɵBrowserAnimationBuilder } from '@angular/animations';
import { MatTabsModule } from '@angular/material/tabs';

import { HttpClientModule } from '@angular/common/http';
import { CsvSelectorService } from '../../services/csv-selector.service';
import { BillByLegislatorViewComponent } from './view/bill-by-legislator-view/bill-by-legislator-view.component';



@NgModule({
  declarations: [
    BillByLegislatorViewComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    RouterModule,
    MatTabsModule,
  ],
  providers:[CsvSelectorService]
})
export class BillsModule { }