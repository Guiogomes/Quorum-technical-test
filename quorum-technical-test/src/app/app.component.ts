import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BillByLegislatorViewComponent } from './modules/view-bills-by-legislator/view/bill-by-legislator-view/bill-by-legislator-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BillByLegislatorViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'quorum-technical-test';
}
