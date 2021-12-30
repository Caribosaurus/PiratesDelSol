import { Platform } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(
    private platform: Platform,
    private authService: AuthenticationService
    ) { }

  public isMobile(): boolean{
    return this.platform.IOS || this.platform.ANDROID;
  }
  public supportsWallet(){
    return !this.isMobile() || !!this.authService.wallet
  }
}
