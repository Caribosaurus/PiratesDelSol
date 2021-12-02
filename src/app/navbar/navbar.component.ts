import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../login.service';
import { User } from '../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: Observable<User |null>;


  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.user = authenticationService.currentUser;
  }


  ngOnInit(): void {
  }
  onLogin(): void {
    this.authenticationService.login().subscribe();
  }
  onLogout(): void {
    this.authenticationService.logout();
  }

}
