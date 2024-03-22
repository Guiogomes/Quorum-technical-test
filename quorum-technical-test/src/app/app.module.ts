import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { CsvSelectorService } from './services/csv-selector.service';
import { BillsModule } from './modules/view-bills-by-legislator/bills.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    RouterModule,
    MatTabsModule,
    BillsModule
  ],
  providers:[CsvSelectorService]
})
export class AppModule { }
