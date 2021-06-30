import { Component, OnInit, Input } from "@angular/core";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-items",
  templateUrl: "./search-items.component.html",
  styleUrls: ["./search-items.component.css"],
})
export class SearchItemsComponent implements OnInit {
  imageUrl = environment.imgUrl;
  @Input() searchItems: any;
  @Input() len: any;
  constructor(private router: Router) {}

  onProfile(id: any) {
    this.router.navigate(["restaurant-profile/", id]);
  }

  ngOnInit(): void {}

  onDetail(id: any) {
    this.router.navigate([`/user/detail/${id}`]);
  }
}
