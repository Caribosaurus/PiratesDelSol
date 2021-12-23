import {
  PublicKey,
  SystemProgram,
  SYSVAR_RENT_PUBKEY,
  TransactionInstruction,
} from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { getConnection } from "./connection";
import { sendTxUsingExternalSignature, useWallet } from "./externalwallet";
import { environment } from "src/environments/environment";

const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new PublicKey(
  "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
);

const findAssociatedTokenAccountPublicKey = async (
  ownerPublicKey: PublicKey,
  tokenMintPublicKey: PublicKey
) =>
  (
    await PublicKey.findProgramAddress(
      [
        ownerPublicKey.toBuffer(),
        TOKEN_PROGRAM_ID.toBuffer(),
        tokenMintPublicKey.toBuffer()
      ],
      SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
    )
  )[0];

const createIx = (
  funderPubkey: PublicKey,
  associatedTokenAccountPublicKey: PublicKey,
  ownerPublicKey: PublicKey,
  tokenMintPublicKey: PublicKey
) =>
  new TransactionInstruction({
    programId: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
    data: Buffer.from([]),
    keys: [
      { pubkey: funderPubkey, isSigner: true, isWritable: true },
      {
        pubkey: associatedTokenAccountPublicKey,
        isSigner: false,
        isWritable: true
      },
      { pubkey: ownerPublicKey, isSigner: false, isWritable: false },
      { pubkey: tokenMintPublicKey, isSigner: false, isWritable: false },
      { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
      { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false }
    ]
  });

export const createAssociatedTokenAccount = async (
) => {
  const tokenMintPublicKey = new PublicKey(environment.tokenMintAddress);
  const connection = getConnection();
  const wallet = await useWallet();
  const associatedTokenAccountPublicKey = await findAssociatedTokenAccountPublicKey(
    wallet.publicKey,
    tokenMintPublicKey
  );

  const ix = createIx(
    wallet.publicKey,
    associatedTokenAccountPublicKey,
    wallet.publicKey,
    tokenMintPublicKey
  );

  await sendTxUsingExternalSignature([ix], connection, null, [], wallet);


  return associatedTokenAccountPublicKey;
};