import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../authentication.service';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: Observable<User |null>;


  constructor(
    private userService: UserService
  ) {
    this.user = userService.currentUser;
  }


  ngOnInit(): void {
  }
  onLogin(): void {
    this.userService.login();
  }


}
