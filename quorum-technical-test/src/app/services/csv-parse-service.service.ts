import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CsvParseService {

  constructor(private http: HttpClient) { }

  getCsvData(csvUrl: string): Observable<any[]> {
    return this.http.get(csvUrl, { responseType: 'text' }).pipe(
      map(data => {
        const csvArray = data.split('\n');
        const headers = csvArray[0].split(',');
        const rows = csvArray.slice(1);
        const result = rows.map(row => {
          const rowData = row.split(',');
          const obj = {};
          headers.forEach((header, index) => {
            obj[header.trim()] = rowData[index].trim();
          });
          return obj;
        });
        return result;
      })
    );
  }
}
