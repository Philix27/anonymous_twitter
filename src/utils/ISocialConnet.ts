import { AuthSigner } from "@celo/identity/lib/odis/query";
import { ethers } from "ethers";

interface IServiceContext {
  odisUrl: string;
  odisPubkey: string;
}

export interface ISocialConnect {
  children: React.ReactNode;

  issuerAddress: string;
  authSigner: AuthSigner;
  serviceContext: IServiceContext;
  quotaFee: ethers.BigNumber;
  //   blindingClient: WebBlsBlindingClient;
}
