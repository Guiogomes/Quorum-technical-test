import { Component, OnInit } from '@angular/core';
import { CsvSelectorService } from './services/csv-selector.service';
import { RouterOutlet } from '@angular/router';
import { BillByLegislatorViewComponent } from './modules/view-bills-by-legislator/view/bill-by-legislator-view/bill-by-legislator-view.component';
import { ICsvData } from './Interfaces/ICsvData';
import { ICsvRows } from './Interfaces/ICsvRows';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'quorum-technical-test';
  csvData: ICsvData = { headers: [], rows: [] };;
  csvUrl: string = '';

  constructor(private csvService: CsvSelectorService) {
  }
  
  ngOnInit(): void {
    this.retrieveCsvFileInformation();
    console.log(this.csvData);
  }
  
  retrieveCsvFileInformation() {
    this.csvUrl = '../../../../../assets/bills_(2).csv'
    this.csvService.getCsvData(this.csvUrl).subscribe(data => {
      this.csvData = data;
    });
  }
}
