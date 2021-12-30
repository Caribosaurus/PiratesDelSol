import { Platform } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { WalletService } from './wallet.service';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(
    private platform: Platform,
    private walletService: WalletService
    ) { }

  public isMobile(): boolean{
    return this.platform.IOS || this.platform.ANDROID;
  }
  public supportsWallet(){
    return !this.isMobile() || !!this.walletService.wallet;
  }
}
