// "use client";
import { ethers } from "ethers";
import React, { useState } from "react";

const address = "0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5";
export default async function EthersComp() {
  const _provider = new ethers.providers.EtherscanProvider();
  console.log(_provider, "a provider");
  const apiKey = _provider.apiKey;
  console.log(apiKey, "apiKey");
  const balance = _provider.getBalance(address);

  //   const ethVal = window.ethereum as ethers.providers.ExternalProvider;
  //   console.log(ethVal, "a provider");
  //   const provider = new ethers.providers.Web3Provider(ethVal);

  //   await provider.send("eth_requestAccounts", []);

  //   const signer = provider.getSigner();
  //   const [currentAccount, setCurrentAccount] = useState("");
  return <div>EthersComp</div>;
}
