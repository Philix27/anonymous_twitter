import React from "react";
import HomeWrapper from "../comps/wrapper";
import { useAccount, useBalance } from "wagmi";

export default function ProfileView() {
  const { address, isConnected } = useAccount();
  const { data } = useBalance({ address: address });
  return (
    <HomeWrapper>
      <div>ProfilePage</div>
      <p>Address: {address}</p>
      <p>Balance: {data?.formatted}</p>
    </HomeWrapper>
  );
}
