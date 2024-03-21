import { NgModule } from "@angular/core";
import { BillByLegislatorViewComponent } from "./view/bill-by-legislator-view/bill-by-legislator-view.component";
import { TableModule } from 'primeng/table';

@NgModule({
    declarations: [
        BillByLegislatorViewComponent
    ],
    imports: [
        TableModule,
    ]
})


export class ViewBillsByLegislatorModule {}