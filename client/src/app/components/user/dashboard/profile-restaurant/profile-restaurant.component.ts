import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-restaurant',
  templateUrl: './profile-restaurant.component.html',
  styleUrls: ['./profile-restaurant.component.css']
})
export class ProfileRestaurantComponent implements OnInit {

  restaurantDetails;
  imgUrl = environment.imgUrl
  constructor(private restaurantService: RestaurantService,
    private acitveRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.restaurantService.getById(this.acitveRoute.snapshot.params.id).subscribe(result => {
      this.restaurantDetails = result
      console.log(this.restaurantDetails)
    })
  }

}
