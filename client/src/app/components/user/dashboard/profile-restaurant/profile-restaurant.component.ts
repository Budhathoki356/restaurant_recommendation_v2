import { Component, OnInit } from "@angular/core";
import { RestaurantService } from "src/app/services/restaurant.service";
import { ActivatedRoute } from "@angular/router";
import { environment } from "src/environments/environment";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-profile-restaurant",
  templateUrl: "./profile-restaurant.component.html",
  styleUrls: ["./profile-restaurant.component.css"],
})
export class ProfileRestaurantComponent implements OnInit {
  restaurantDetails;
  imgUrl = environment.imgUrl;
  reviews;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;

  reviewForm = new FormGroup({
    review: new FormControl(""),
  });

  constructor(
    private restaurantService: RestaurantService,
    private acitveRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.restaurantService
      .getById(this.acitveRoute.snapshot.params.id)
      .subscribe((result) => {
        this.restaurantDetails = result;
        console.log(this.restaurantDetails);
      });
    this.getReviews(this.acitveRoute.snapshot.params.id);
  }

  countStar(star: any, id: any) {
    this.selectedValue = star;
    this.restaurantService
      .addRate(this.selectedValue, id)
      .subscribe((result) => {
        console.log(result);
      });
  }

  onReviewSubmit(id: any) {
    this.restaurantService
      .addReview(id, this.reviewForm.value.review)
      .subscribe((result) => {
        this.reviewForm.reset();
        this.getReviews(id);
      });
  }

  getReviews(id: string) {
    this.restaurantService.getReviews(id).subscribe((result) => {
      this.reviews = result;
      console.log(this.reviews);
    });
  }
}
