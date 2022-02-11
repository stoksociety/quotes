import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-vote',
  templateUrl: './quote-vote.component.html',
  styleUrls: ['./quote-vote.component.css']
})
export class QuoteVoteComponent implements OnInit {
  votes: number = 0;
  vote: number = 0;
  likeButtonClick() {
    this.votes++;
  }
  dislikeButtonClick() {
    this.vote--;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
