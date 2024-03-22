import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICsvData } from '../Interfaces/ICsvData';
import { ICsvRows } from '../Interfaces/ICsvRows';




@Injectable({
  providedIn: 'root'
})
export class CsvSelectorService {

  constructor(private http: HttpClient) { }

  getCsvData(csvUrl: string): Observable<ICsvData> {
    return this.http.get(csvUrl, { responseType: 'text' }).pipe(
      map(data => {
        const csvArray = data.split('\n');
        const headers = csvArray[0].split(',');
        const rows = csvArray.slice(1);
        const rowData = rows.map(row => {
          const values = row.split(',');
          const obj: ICsvRows = {};
          headers.forEach((header, index) => {
            obj[header.trim()] = values[index].trim();
          });
          return obj;
        });
        return { headers, rows: rowData };
      })
    );
  }
}
