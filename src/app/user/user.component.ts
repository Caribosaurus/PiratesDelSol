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
  showAddress = false;


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
  public get twitterAuthUrl(){
    return encodeURI(`https://twitter.com/i/oauth2/authorize?client_id=OEVmR3VsR0prN3ZsX0FNNGtwVUs6MTpjaQ&redirect_uri=${environment.twitterCallbackUrl}&response_type=code&scope=tweet.read&state=xyzABC123&code_challenge=challenge&code_challenge_method=plain`)

  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        const code = params['code'];
        const state = params['state'];
        if (code){
          state
            ? this.userService.addTwitter(code)
            : this.userService.addDiscord(code);
          this.router.navigate(
            [], 
            {
              relativeTo: this.route,
              queryParams: {}
            });
        }
        else if(code){
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
  onCreateWallet(): void{
    this.userService.createPdsWallet();
  }

}
