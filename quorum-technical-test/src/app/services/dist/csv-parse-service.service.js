"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CsvParseService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var CsvParseService = /** @class */ (function () {
    function CsvParseService(http) {
        this.http = http;
    }
    CsvParseService.prototype.getCsvData = function (csvUrl) {
        return this.http.get(csvUrl, { responseType: 'text' }).pipe(operators_1.map(function (data) {
            var csvArray = data.split('\n');
            var headers = csvArray[0].split(',');
            var rows = csvArray.slice(1);
            var result = rows.map(function (row) {
                var rowData = row.split(',');
                var obj = {};
                headers.forEach(function (header, index) {
                    obj[header.trim()] = rowData[index].trim();
                });
                return obj;
            });
            return result;
        }));
    };
    CsvParseService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CsvParseService);
    return CsvParseService;
}());
exports.CsvParseService = CsvParseService;
