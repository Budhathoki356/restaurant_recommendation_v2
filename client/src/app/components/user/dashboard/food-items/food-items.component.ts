import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CuisineService } from 'src/app/services/cuisine.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css']
})
export class FoodItemsComponent implements OnInit {
  foodItems: any = []
  imageUrl: string = environment.imgUrl

  constructor(private _cuisineService: CuisineService,
    private router: Router) { }

  ngOnInit(): void {
    this._cuisineService.getAllCuisine().subscribe(
      data => {
        this.foodItems = data
        console.log(this.foodItems)
      },
      error => {
        console.log(error)
      })
  }

  onDetail(id: any) {
    this.router.navigate([`/user/detail/${id}`])
  }

}
