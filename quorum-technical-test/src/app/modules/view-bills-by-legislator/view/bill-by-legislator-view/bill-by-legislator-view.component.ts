import { Component, OnInit } from '@angular/core';
import { CsvParseService } from '../../../../services/csv-parse-service.service';
import { IBills } from '../../../../interfaces/IBills';

@Component({
  selector: 'app-bill-by-legislator-view',
  templateUrl: './bill-by-legislator-view.component.html',
  styleUrl: './bill-by-legislator-view.component.scss'
})
export class BillByLegislatorViewComponent implements OnInit {
  billsData: IBills[] | undefined;
    constructor(private csvService: CsvParseService) {}
    ngOnInit(): void {
        this.retrieveBillsOfCsvFile();
    }

    retrieveBillsOfCsvFile() {
        const billsCsvFile = '../../../../../assets/data/bills.csv'
        this.csvService.getCsvData(billsCsvFile).subscribe(billsFile => this.billsData = billsFile);
    }
}
