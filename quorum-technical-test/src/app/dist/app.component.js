"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
/* eslint-disable no-bitwise */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
/** Class for the app component that is bootstrapped to run the application
 */
var AppComponent = /** @class */ (function () {
    /** constructor for setting up DI in this component */
    function AppComponent(router) {
        this.router = router;
        this.users = [];
    }
    /** this class requires this method to implement the OnInit interface */
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) {
            _this.setSkipLinkUrl(event.urlAfterRedirects);
        });
    };
    /**
     * setSkipLinkUrl takes in a url string and processes whether
     * the skipToMain link should be updated to use the new value
     * @param currentUrl the new url to refer to
     */
    AppComponent.prototype.setSkipLinkUrl = function (currentUrl) {
        if (!currentUrl.endsWith('#app-content')) {
            this.skipToMain = currentUrl + "#app-content";
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'body',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
