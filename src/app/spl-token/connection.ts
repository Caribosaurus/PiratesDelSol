import {
  Cluster,
    clusterApiUrl,
    Commitment,
    Connection
  } from "@solana/web3.js";
import { environment } from "src/environments/environment";
  
  export const COMMITMENT: Commitment = "singleGossip";
  
  export const getConnection = () =>  new Connection(clusterApiUrl(environment.solanaCluster as Cluster),COMMITMENT);