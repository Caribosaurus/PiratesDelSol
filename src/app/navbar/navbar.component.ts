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

  environment: string = environment.env !== 'prod' ? environment.env : '';
  currentUser: Observable<User | undefined>;

  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUser;
  }

  ngOnInit(): void {
  }
  onLogin(): void {
    this.authenticationService.authenticate();
  }

}
