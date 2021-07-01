import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CuisineService } from "src/app/services/cuisine.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-serach",
  templateUrl: "./serach.component.html",
  styleUrls: ["./serach.component.css"],
})
export class SerachComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  searchItems: any;
  recommendedRestaurants: any;
  searchForm = new FormGroup({
    location: new FormControl(""),
    foodName: new FormControl(""),
    gtePrice: new FormControl(""),
  });
  len = false;

  constructor(private cuisineService: CuisineService) {}

  onSearchSubmit() {
    this.len = false;
    this.searchItems = [];
    this.cuisineService.search(this.searchForm.value).subscribe((result) => {
      if (result) {
        if (!result[0]?.restaurant) {
          this.len = true;
        } else {
          this.searchItems = result;
        }
      } else {
        this.len = true;
      }
    });
    console.log(this.searchForm.value);
    this.cuisineService
      .getRecommendation(this.searchForm.value)
      .subscribe((result) => {
        this.recommendedRestaurants = result;
        console.log(this.recommendedRestaurants);
        this.messageEvent.emit(this.recommendedRestaurants);
      });
  }

  ngOnInit(): void {}
}
