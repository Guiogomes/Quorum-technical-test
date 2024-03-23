import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CsvSelectorService } from './services/csv-selector.service';
import { RouterOutlet } from '@angular/router';
import { BillByLegislatorViewComponent } from './modules/view-bills-by-legislator/view/bill-by-legislator-view/bill-by-legislator-view.component';
import { ICsvData } from './Interfaces/ICsvData';
import { ICsvRows } from './Interfaces/ICsvRows';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OnChanges } from '@angular/core';
import { SimpleChange } from '@angular/core';
import { CommonModule } from '@angular/common';


interface LegislatorVotes {
  legislator_id: number;
  legislator_name: string;
  bills_supported: number;
  bills_oppose: number;
}

interface BillsVotes {
  bill_id: number;
  bill_title: string;
  sponsor_id: number;
  support_votes: number;
  oppose_votes: number;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Quorum Technical Test';
  legislatorCsvData: ICsvData | undefined = { headers: [], rows: []};
  billsCsvData: ICsvData | undefined = { headers: [], rows: []};
  votesResultCsvData: ICsvData | undefined  = { headers: [], rows: []};
  votesCsvData: ICsvData | undefined = { headers: [], rows: []};
  legislatorsVotesInfos: LegislatorVotes[] | [] = [];

  constructor(private csvService: CsvSelectorService) { }
  
  async ngOnInit(): Promise<void> {
      await this.retrieveCsvFileInformation('../assets/legislators_(2).csv', 'legislator');
      await this.retrieveCsvFileInformation('../assets/bills_(2).csv', 'bills');
      await this.retrieveCsvFileInformation('../assets/vote_results_(2).csv', 'votesResults');
      await this.retrieveCsvFileInformation('../assets/votes_(2).csv', 'votes');
      this.filterVotesPerLegislators();
  }
  
  async retrieveCsvFileInformation(fileUrl: string, csvAttributeName: string): Promise<void> {
    const data = await this.csvService.getCsvData(fileUrl);
    switch(csvAttributeName.toLowerCase()) {
        case 'legislator':
          this.legislatorCsvData = data;
          break
        case 'bills':
          this.billsCsvData = data;
          break
        case 'voteResults':
          this.votesResultCsvData = data;
          break
        case 'votes':
          this.votesCsvData = data
          break
      }
    ;
  }

  filterVotesPerLegislators() {
    if(!this.legislatorCsvData || !this.votesResultCsvData) return;
    
  }
}
