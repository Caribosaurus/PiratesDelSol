import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './models/user';
import { AuthenticationService } from './authentication.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpClient, private authService: AuthenticationService,private toastr: ToastrService) {
    const userString = localStorage.getItem('User');
    const user = userString ? JSON.parse(userString) : null;
    this.currentUserSubject = new BehaviorSubject<User | null>(user);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  private set currentUserValue(user:User|null) {
    localStorage.setItem('User', user? JSON.stringify(user): '');
    this.currentUserSubject.next(user);
  }

  public login() {
    return this.authService.login().subscribe(
      (user: User) => this.currentUserValue = user,
      (err: Error)=>{this.toastr.error('Please install a Solana wallet that supports message signing', '')}
    );
  }
  public logout() {
    this.currentUserValue = null;
  }

  public addDiscord(code: string) {
    return this.http.post<User>(`${environment.apiUrl}/user/discord`, { code, callback: environment.discordCallbackUrl }).subscribe(
      user => this.currentUserValue = {...user,token: this.currentUserValue?.token}
    );
  }
}
