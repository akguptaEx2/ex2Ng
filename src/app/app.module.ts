import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import {LoginComponent, DashboardComponent,UsersProfileComponent, UsersListComponent} from './users';
import { AuthService } from './users/services/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    UsersListComponent,
    UsersProfileComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({})
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
