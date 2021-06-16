import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CuisineService } from 'src/app/services/cuisine.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<any>()
  searchItems: any
  recommendedRestaurants: any
  searchForm = new FormGroup({
    // location: new FormControl(''),
    foodName: new FormControl('')
  })


  constructor(
    private cuisineService: CuisineService
  ) { }

  onSearchSubmit() {
    this.cuisineService.search(this.searchForm.value.foodName).subscribe(result => {
      this.searchItems = result
    })

    this.cuisineService.getRecommendation(this.searchForm.value.foodName).subscribe(result => {
      this.recommendedRestaurants = result
      this.messageEvent.emit(this.recommendedRestaurants)
    })
  }

  ngOnInit(): void {
  }

}
