import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './models/user';
import { AuthenticationService } from './authentication.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(
    private http: HttpClient, 
    private authService: AuthenticationService,
    private tokenService: TokenService,
    private toastr: ToastrService) {
    const userString = localStorage.getItem('User');
    const user = userString ? JSON.parse(userString) : null;
    this.currentUserSubject = new BehaviorSubject<User | null>(user);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  private set currentUserValue(user:User|null) {
    if(user){
       this.tokenService.findAssociatedTokenAddress(user.address).then(pubKey => {
        user.pdsAccount = pubKey? pubKey.toBase58(): undefined;
        localStorage.setItem('User', JSON.stringify(user));
        this.currentUserSubject.next(user);
      })
    }
    else {
      localStorage.setItem('User','');
      this.currentUserSubject.next(user);
    }
    
  }

  public login() {
    return this.authService.login().subscribe(
      (user: User) => {
        this.currentUserValue = user;
      },
      (err: Error)=>{this.toastr.error('Please install a Solana wallet that supports message signing', '')}
    );
  }
  public logout() {
    this.currentUserValue = null;
  }
  public createPdsWallet(){
    this.tokenService.createAssociatedTokenAddress().then(pubKey => {
      let user = this.currentUserValue as User;
      user.pdsAccount = pubKey.toBase58();
      this.currentUserValue = user;
    }).catch(err => this.toastr.error('You need 0.002 sol to create a PDS wallet', 'Transaction failed'))
  }

  public addDiscord(code: string) {
    return this.http.post<User>(`${environment.apiUrl}/user/discord`, { code, callback: environment.discordCallbackUrl }).subscribe(
      user => {
        this.currentUserValue = {...user,token: this.currentUserValue?.token};
      }
    );
  }
  public addTwitter(code: string) {
    return this.http.post<User>(`${environment.apiUrl}/user/twitter`, { code, callback: environment.twitterCallbackUrl }).subscribe(
      user => {
        this.currentUserValue = {...user,token: this.currentUserValue?.token};
      }
    );
  }
}
