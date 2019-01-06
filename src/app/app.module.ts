import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import {LoginComponent, DashboardComponent,UsersProfileComponent, UsersListComponent} from './users';
import { AuthService } from './users/services/auth.service';
import { UsersService } from './users/services/users.service';
import { FilterPipe } from './users/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    UsersListComponent,
    UsersProfileComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({})
  ],
  providers: [AuthService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
