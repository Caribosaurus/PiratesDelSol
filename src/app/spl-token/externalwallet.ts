import {
    Keypair,
    Connection,
    Transaction,
    TransactionInstruction
  } from "@solana/web3.js";
  //@ts-expect-error
  import Wallet from "@project-serum/sol-wallet-adapter";
  import { COMMITMENT } from "./connection";

  const get_wallet = () => {
    let _window = window as any;
    if (_window.solana) {
      return _window.solana;
    }
    if (_window.solflare){
      return _window.solflare;
    }
  }
  
  export const sendTxUsingExternalSignature = async (
    instructions: TransactionInstruction[],
    connection: Connection,
    feePayer: Keypair | null,
    signersExceptWallet: Keypair[],
    wallet: Wallet
  ) => {
    let tx = new Transaction().add(...instructions);
    tx.setSigners(
      ...(feePayer
        ? [(feePayer as Keypair).publicKey, wallet.publicKey]
        : [wallet.publicKey]),
      ...signersExceptWallet.map(s => s.publicKey)
    );
    tx.recentBlockhash = (await connection.getRecentBlockhash("max")).blockhash;
    signersExceptWallet.forEach(acc => {
      tx.partialSign(acc);
    });
    let signed = await wallet.signTransaction(tx);
    let txid = await connection.sendRawTransaction(signed.serialize(), {
      skipPreflight: false,
      preflightCommitment: COMMITMENT
    });
    return connection.confirmTransaction(txid, COMMITMENT);
  };
  
  const connectToWallet = () => {
      let wallet = get_wallet();
    if (!wallet.connected) {
      return wallet.connect() as Promise<void>;
    } else {
      return Promise.resolve();
    }
  };
  
  export const useWallet = async (): Promise<Wallet> => {
    await connectToWallet();
    return get_wallet();
  };