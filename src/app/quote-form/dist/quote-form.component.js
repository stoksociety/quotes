"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QuoteFormComponent = void 0;
var core_1 = require("@angular/core");
var events_1 = require("events");
var quote_1 = require("../quote");
var QuoteFormComponent = /** @class */ (function () {
    function QuoteFormComponent() {
        this.newQuoteEvent = new events_1.EventEmitter();
    }
    QuoteFormComponent.prototype.ngOnInit = function () {
    };
    QuoteFormComponent.prototype.newQuote = function () {
        if (this.author && this.quoteContent && this.submitted != '') {
            var newQuote = new quote_1.Quote(quote_1.Quote.generateId(), this.author, this.quoteContent, this.submitted, 0, 0, new Date());
            this.newQuoteEvent.emit(newQuote);
        }
        else {
            alert("Fill all the required fields");
        }
        this.author = "";
        this.quoteContent = "";
        this.submitted = "";
    };
    QuoteFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input()
    ], QuoteFormComponent.prototype, "quotes");
    __decorate([
        Output()
    ], QuoteFormComponent.prototype, "newQuoteEvent");
    QuoteFormComponent = __decorate([
        core_1.Component({
            selector: 'app-quote-form',
            templateUrl: './quote-form.component.html',
            styleUrls: ['./quote-form.component.css']
        })
    ], QuoteFormComponent);
    return QuoteFormComponent;
}());
exports.QuoteFormComponent = QuoteFormComponent;
