"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BillByLegislatorViewComponent = void 0;
var core_1 = require("@angular/core");
var BillByLegislatorViewComponent = /** @class */ (function () {
    function BillByLegislatorViewComponent(csvService) {
        this.csvService = csvService;
    }
    BillByLegislatorViewComponent.prototype.ngOnInit = function () {
        this.retrieveBillsOfCsvFile();
    };
    BillByLegislatorViewComponent.prototype.retrieveBillsOfCsvFile = function () {
        var _this = this;
        var billsCsvFile = '../../../../../assets/data/bills.csv';
        this.csvService.getCsvData(billsCsvFile).subscribe(function (billsFile) { return _this.billsData = billsFile; });
    };
    BillByLegislatorViewComponent = __decorate([
        core_1.Component({
            selector: 'app-bill-by-legislator-view',
            templateUrl: './bill-by-legislator-view.component.html',
            styleUrl: './bill-by-legislator-view.component.scss'
        })
    ], BillByLegislatorViewComponent);
    return BillByLegislatorViewComponent;
}());
exports.BillByLegislatorViewComponent = BillByLegislatorViewComponent;
