import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
      return (window as any).solana;
    }

    connect(): Observable<User> {
        return from(this.solana.connect()).pipe(
          map((login:any) => {
            const user =  {
              address: login.publicKey.toString() as string
            };
            this.currentUserSubject.next(user);
            return user;
            }
          ));
    }

    logout() {
        this.currentUserSubject.next(undefined);
    }
}