import { Component, OnInit } from '@angular/core';
import { ICsvData } from '../../../../Interfaces/ICsvData';
import { CsvSelectorService } from '../../../../services/csv-selector.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-bill-by-legislator-view',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './bill-by-legislator-view.component.html',
  styleUrl: './bill-by-legislator-view.component.scss'
})
export class BillByLegislatorViewComponent implements OnInit {
  csvData: ICsvData = { headers: [], rows: [] };;
  csvUrl: string = '';

  constructor(private csvService: CsvSelectorService) {
  }
  
  ngOnInit(): void {
    this.retrieveCsvFileInformation();
    console.log(this.csvData);
  }
  
  async retrieveCsvFileInformation() {
    this.csvUrl = '../../../../../assets/bills_(2).csv'
    const data = await this.csvService.getCsvData(this.csvUrl);
    if(!data) return;
    this.csvData = data;
  }
}
