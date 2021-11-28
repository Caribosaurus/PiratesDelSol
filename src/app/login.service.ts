import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './models/user';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User | undefined>;
  public currentUser: Observable<User | undefined>;


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User | undefined>(undefined);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | undefined {
    return this.currentUserSubject.value;
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
    if (!this.solana.publicKey){
      await this.solana.connect();
    }
    return this.solana.publicKey.toString();
    
  }

  private async fetchNonce(){
    const address = await this.get_pubKey();
    const options = address ?
      { params: new HttpParams().set('address', address) } : {};
    return this.http.get<{nonce:string; exp:string}>(`${environment.apiUrl}/auth/nonce`, options);
  }

  private async signMessage(nonce: string): Promise<any> {
    const encodedMessage = new TextEncoder().encode(nonce);
    const signedMessage = await this.solana.signMessage(encodedMessage, "utf8");
    return signedMessage;
  }

  async authenticate(): Promise<void> {
    const nonce = await (await this.fetchNonce()).toPromise();

    await this.signMessage(nonce?.nonce as string);
  }

  logout() {
    this.currentUserSubject.next(undefined);
  }
}