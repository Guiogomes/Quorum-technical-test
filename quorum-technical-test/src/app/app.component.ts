import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import Papa, { ParseResult } from 'papaparse';
import { config } from 'process';
import fs from 'fs'; 
import { CsvSelectorService } from './services/csv-selector.service';
import { UsecsvAngularPluginModule } from '@usecsv/angular';

interface LegislatorVotes {
  legislator_id: string;
  vote_id: string;
  bills_supported: number;
  bills_oppose: number;
}

interface BillsVotes {
  bill_id: string;
  bill_title: string;
  sponsor_name: string;
  support_votes: number;
  oppose_votes: number;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UsecsvAngularPluginModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Quorum Technical Test';
  importData: any;
  legislatorCsvData: any = { headers: [], rows: []};
  billsCsvData: any = { headers: [], rows: []};
  votesResultCsvData: any  = { headers: [], rows: []};
  votesCsvData: any = { headers: [], rows: []};
  legislatorsVotesInfos: LegislatorVotes[] | [] = [];
  infosAboutLegislatorVotes: { legislator_id: string, legislator_name: string, bills_suported: number, bills_oppose: number}[] = [];
  billsVotesInfos: BillsVotes [] | [] = [];

  constructor(private csvService: CsvSelectorService) { }
  
  async ngOnInit(): Promise<void> {
      await this.retrieveCsvFileInformation('../assets/legislators.csv', 'legislator');
      await this.retrieveCsvFileInformation('../assets/bills.csv', 'bills');
      await this.retrieveCsvFileInformation('../assets/votes.csv', 'votes');
      await this.retrieveCsvFileInformation('../assets/voteResults.csv', 'voteResults');
      this.filterVotesPerLegislators();
      this.formatLegislateToShowVotesInfo();
      this.filterVotesPerBill();
  }

  async retrieveCsvFileInformation(fileUrl: string, csvAttributeName: string): Promise<void> {
    const data = await this.csvService.getCsvData(fileUrl);
    switch(csvAttributeName) {
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

  retrieveRowsForTables(table: { headers: [], rows: []}) {
    const tableRows = table.rows;
    return tableRows;
  }

  filterVotesPerLegislators() {
    const legislatorTableRows = this.retrieveRowsForTables(this.legislatorCsvData);
    const votesResultsTableRows: any = this.retrieveRowsForTables(this.votesResultCsvData);
    this.legislatorsVotesInfos = legislatorTableRows
      .map((legislator: any) => votesResultsTableRows
        .filter((votes: any) => votes.legislator_id === legislator.id)
          .reduce((acc: any, curr: any, index: any) => {
              if(acc.legislator_id === curr.legislator_id) {
                acc.vote_id = curr.vote_id;
                if(curr.vote_type === '1') {
                  acc.bills_supported = acc.bills_supported + 1;
                } else if (curr.vote_type === '2') {
                  acc.bills_oppose = acc.bills_oppose + 1;
                }
              } else {
                acc.legislator_id = curr.legislator_id;
              }
              return acc;
          }, {
            legislator_id: '',
            vote_id: '',
            bills_supported: 0,
            bills_oppose: 0,
          }));
  }

  formatLegislateToShowVotesInfo() {
    const legislatorTableRows:any[] = this.retrieveRowsForTables(this.legislatorCsvData);
    this.infosAboutLegislatorVotes = this.legislatorsVotesInfos.map((value, index) => {
        let legislatorObj = {
        legislator_id: '',
        legislator_name: '',
        bills_suported: 0,
        bills_oppose: 0
      }
      if(value.legislator_id === legislatorTableRows[index].id) {
        legislatorObj = {
          legislator_id: value.legislator_id,
          legislator_name: legislatorTableRows[index].name,
          bills_suported: value.bills_supported,
          bills_oppose: value.bills_oppose,
        };        
      }
      return legislatorObj;
    })
    this.infosAboutLegislatorVotes = this.infosAboutLegislatorVotes.filter((value) => value.legislator_name !== '');
  }

  filterVotesPerBill() {
    const votesResultsTableRows:any = this.retrieveRowsForTables(this.votesResultCsvData);
    const votesTableRows:any = this.retrieveRowsForTables(this.votesCsvData);
    const billsTableRows: any = this.retrieveRowsForTables(this.billsCsvData);
    const legislatorTableRows: any = this.retrieveRowsForTables(this.legislatorCsvData);
    this.billsVotesInfos = votesResultsTableRows.map((votesResults: any) => votesTableRows.reduce((acc: any, curr: any, index: number) => {
      if(curr.id === votesResults.vote_id) {
        acc.bill_id = curr.bill_id;
        acc.sponsor_name = legislatorTableRows.find((legislator: any) => legislator.id === votesResults.legislator_id)?.name;
        acc.bill_title = billsTableRows.find((bill: any) => bill.id === curr.bill_id)?.title;
        if(votesResults.vote_type === '1') {
          acc.support_votes = acc.support_votes + 1;
        } else if (votesResults.vote_type === '2') {
          acc.oppose_votes = acc.oppose_votes + 1;
        }
      }
      return acc
    }, {
      bill_id: '',
      bill_title: '',
      sponsor_name: '',
      support_votes: 0,
      oppose_votes: 0,
    }));
  }
}  

