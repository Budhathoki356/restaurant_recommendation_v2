import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/shared/header/login/login.component';
import { RegisterComponent } from './components/shared/header/register/register.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ResDashboardComponent } from './components/restaurant/res-dashboard/res-dashboard.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { SerachComponent } from './components/user/dashboard/serach/serach.component';
import { RecommendationComponent } from './components/user/dashboard/recommendation/recommendation.component';
import { SuggestionComponent } from './components/user/dashboard/suggestion/suggestion.component';
import { AuthGuard } from './guard/auth.guard';
import { NotAuthGuard } from './guard/notAuth.guard';
import { ProfileComponent } from './components/shared/profile/profile.component';
import { UserService } from './services/user.service';
import { CuisineComponent } from './components/restaurant/cuisine/cuisine.component';
import { ResInfoComponent } from './components/restaurant/res-info/res-info.component';
import { EditComponent } from './components/restaurant/res-info/edit/edit.component';
import { CreateCuisineComponent } from './components/restaurant/cuisine/create-cuisine/create-cuisine.component';
import { EditCuisineComponent } from './components/restaurant/cuisine/edit-cuisine/edit-cuisine.component';
import { SearchItemsComponent } from './components/user/dashboard/serach/search-items/search-items.component';
import { ProfileRestaurantComponent } from './components/user/dashboard/profile-restaurant/profile-restaurant.component';
import { FoodItemsComponent } from './components/user/dashboard/food-items/food-items.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ResDashboardComponent,
    DashboardComponent,
    SerachComponent,
    SuggestionComponent,
    RecommendationComponent,
    ProfileComponent,
    CuisineComponent,
    ResInfoComponent,
    EditComponent,
    CreateCuisineComponent,
    EditCuisineComponent,
    SearchItemsComponent,
    ProfileRestaurantComponent,
    FoodItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard, NotAuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
