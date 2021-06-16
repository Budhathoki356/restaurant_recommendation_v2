import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  @Input() recommendedCuisine: any;
  constructor() { }

  ngOnInit(): void {
  }

}
