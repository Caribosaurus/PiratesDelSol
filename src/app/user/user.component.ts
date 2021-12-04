import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: Observable<User | null>;


  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.user = userService.currentUser;
  }
  public get discordAuthUrl() {
    return encodeURI(`https://discord.com/api/oauth2/authorize?client_id=910691941631557642&redirect_uri=${environment.discordCallbackUrl}&response_type=code&scope=identify`)
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        const code = params['code'];
        if(code){
          this.userService.addDiscord(code);
          this.router.navigate(
            [], 
            {
              relativeTo: this.route,
              queryParams: {}
            });
        }
      });
  }
  onLogout(): void {
    this.userService.logout();
  }

}
