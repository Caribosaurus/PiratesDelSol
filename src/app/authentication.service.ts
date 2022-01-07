import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, map, Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './models/user';
import * as base58 from 'bs58';
import jwt_decode from 'jwt-decode';
import { WalletService } from './wallet.service';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {


  constructor(
    private http: HttpClient,
    private walletService: WalletService) {
  }


  public login():Observable<User> {
    return from(this.walletService.get_pubKey())
      .pipe(
        switchMap(address => {
          const options = address ?
            { params: new HttpParams().set('address', address) } : {};
          return this.http.get<{ nonce: string; exp: string }>(`${environment.apiUrl}/auth/nonce`, options);
        }),
        switchMap(nonce => this.walletService.signMessage(nonce.nonce)),
        switchMap(signature => this.acquireToken(signature)),
        map(tokenResponse => {
          const user = jwt_decode(tokenResponse.token) as User;
          user.token = tokenResponse.token;
          localStorage.setItem("User", JSON.stringify(user));
          return user ;
        })
      );
  }

  private acquireToken(signature: { signature: string, publicKey: string }) {
    return this.http.post<{ token: string }>(`${environment.apiUrl}/auth/token`, signature);
  }
}