import { Injectable } from '@angular/core';
import { PublicKey, Connection, clusterApiUrl, Cluster } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { createAssociatedTokenAccount } from './spl-token/create-account';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID: PublicKey = new PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',);
  private tokenMintAddress: PublicKey = new PublicKey(environment.tokenMintAddress);


  constructor() { }

  public async findAssociatedTokenAddress(
      walletAddress: string,
  ): Promise<PublicKey | undefined> {
      const address = new PublicKey(walletAddress);
      const pdsPubKey =  (await PublicKey.findProgramAddress(
          [
              address.toBuffer(),
              TOKEN_PROGRAM_ID.toBuffer(),
              this.tokenMintAddress.toBuffer(),
          ],
          this.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
      ))[0];
      const conn = new Connection(clusterApiUrl(environment.solanaCluster as Cluster));
      const info = await conn.getAccountInfo(pdsPubKey);
      return info? pdsPubKey: undefined;
  }
  public async createAssociatedTokenAddress(
    ): Promise<PublicKey> {
      return createAssociatedTokenAccount();
    }

}
