import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../login.service';
import { User } from '../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  environment: string = environment.env !== 'prod' ? environment.env: '';
  currentUser: Observable<User | undefined>;

  constructor(
    private authenticationService: AuthenticationService
    ) {
    this.currentUser = this.authenticationService.currentUser;
}

  ngOnInit(): void {
  }

  async onLogin(): Promise<void> {
    this.authenticationService.connect().subscribe(x => {
      console.log(x)});
  }

}
