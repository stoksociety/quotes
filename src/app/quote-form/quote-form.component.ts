import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'events';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Input()
  quotes!: Quote;

  @Output() newQuoteEvent = new EventEmitter<Quote>();

  author!: string;
  quoteContent!: string;
  submitted!: string

  constructor() { }

  ngOnInit(): void {
  }
  newQuote() {

    if (this.author && this.quoteContent && this.submitted != '') {
      const newQuote = new Quote(
        Quote.generateId(), this.author, this.quoteContent, this.submitted, 0, 0, new Date());


      this.newQuoteEvent.emit(newQuote)
    } else {
      alert("Fill all the required fields")
    }




    this.author = "";
    this.quoteContent = "";
    this.submitted = ""


  }
  constructor() { }

  ngOnInit(): void {
  }

}

