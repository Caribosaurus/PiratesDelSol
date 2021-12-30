import { Injectable } from '@angular/core';
import base58 from 'bs58';
import { ToastrService } from 'ngx-toastr';
import { from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(
    private toastr: ToastrService
  ) {
   }

   public get wallet(): any {
    let _window = window as any;
    if (_window.solflare){
      return _window.solflare;
    }
    if (_window.solana) {
      return _window.solana;
    }
    return null;

  }
  public async get_pubKey(): Promise<string> {
    if (!this.wallet) {
      this.toastr.info('No installed Wallet', '')
      return Promise.reject(new TypeError("No installed Wallet"));
    }
    if (!this.wallet.publicKey) {
      if(this.wallet.isMathWallet){
        await this.wallet.getAccount();
      }
      else{
        
        const connected = await this.wallet.connect();
        if(!connected){
          return Promise.reject(new TypeError("Refused to connect"));
        }
      }
    }
    this.toastr.info(this.wallet.publicKey.toString(), '');
    return this.wallet.publicKey.toString();

  }
  public signMessage(nonce: string) {
    const encodedMessage = new TextEncoder().encode(nonce);
    this.toastr.info(nonce, '');
    return  from(this.wallet.signMessage(encodedMessage,'utf8')).pipe(
      map((signedMessage: any) => {
        return {
          signature: base58.encode(signedMessage.signature),
          publicKey: signedMessage.publicKey.toString() as string
        };
      })
    )

  }
}
