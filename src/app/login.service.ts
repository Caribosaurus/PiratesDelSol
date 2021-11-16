import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './models/user';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User|undefined>;
    public currentUser: Observable<User|undefined>;


     constructor() {
        this.currentUserSubject = new BehaviorSubject<User|undefined>(undefined);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User | undefined {
        return this.currentUserSubject.value;
    }

    private get solana(): any {
      let _window = window as any;
      if (_window.solana){
        return _window.solana;
      }
      
    }

    private connect_solana_wallet(): Promise<any> {
      if (this.solana){
        return this.solana.connect();
      }
      return Promise.reject(new TypeError("Phantom not installed"))
    }

    connect(): Observable<User> {
        return from(this.connect_solana_wallet()).pipe(
          map((login:any) => {
            const user =  {
              address: login.publicKey.toString() as string
            };
            this.currentUserSubject.next(user);
            return user;
            })
          );
    }

    logout() {
        this.currentUserSubject.next(undefined);
    }
}