import {
    clusterApiUrl,
    Commitment,
    Connection
  } from "@solana/web3.js";
  
  export const COMMITMENT: Commitment = "singleGossip";
  
  export const getConnection = () =>  new Connection(clusterApiUrl("mainnet-beta"),COMMITMENT);