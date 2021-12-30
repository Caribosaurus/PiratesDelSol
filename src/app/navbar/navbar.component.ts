import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { PlatformService } from '../platform.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: Observable<User |null>;


  constructor(
    private userService: UserService,
    private platformService: PlatformService
    
  ) {
    this.user = userService.currentUser;
  }
  public get supportsWallet(){
    return this.platformService.supportsWallet();
  }

  ngOnInit(): void {
  }
  onLogin(): void {
      this.userService.login();
  }


}
