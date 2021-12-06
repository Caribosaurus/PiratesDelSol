import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, map, Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './models/user';
import * as base58 from 'bs58';
import jwt_decode from 'jwt-decode';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {


  constructor(private http: HttpClient) {
  }


  private get solana(): any {
    let _window = window as any;
    if (_window.solana) {
      return _window.solana;
    }
  }

  private async get_pubKey(): Promise<string> {
    if (!this.solana) {
      return Promise.reject(new TypeError("Phantom not installed"));
    }
    if (!this.solana.publicKey) {
      await this.solana.connect();
    }
    return this.solana.publicKey.toString();

  }

  public login():Observable<User> {
    return from(this.get_pubKey()).pipe(
      switchMap(address => {
        const options = address ?
          { params: new HttpParams().set('address', address) } : {};
        return this.http.get<{ nonce: string; exp: string }>(`${environment.apiUrl}/auth/nonce`, options);
      }),
      switchMap(nonce => this.signMessage(nonce.nonce)),
      switchMap(signature => this.acquireToken(signature)),
      map(tokenResponse => {
        const user = jwt_decode(tokenResponse.token) as User;
        user.token = tokenResponse.token;
        localStorage.setItem("User", JSON.stringify(user));
        console.log(user);
        return user ;
      })
    )

  }


  private signMessage(nonce: string) {
    const encodedMessage = new TextEncoder().encode(nonce);
    return  from(this.solana.signMessage(encodedMessage)).pipe(
      map((signedMessage: any) => {
        return {
          signature: base58.encode(signedMessage.signature),
          publicKey: signedMessage.publicKey.toString() as string
        };
      })
    )

  }

  private acquireToken(signature: { signature: string, publicKey: string }) {
    return this.http.post<{ token: string }>(`${environment.apiUrl}/auth/token`, signature);
  }
}