"use client";
import { Inter } from "next/font/google";
import "../styles/index.scss";
import AuthProvider from "../context/authContext";
import { MasaProvider } from "@masa-finance/masa-react";
const inter = Inter({ subsets: ["latin"] });
import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { createPublicClient, http } from "viem";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
});

// export const metadata = {
//   title: "Unwind",
//   description: "Speak your mind freely.",
// };

// export default function RootLayout(children: any) {
//   return (
//     <html lang="en">
//       <head></head>
//       <body className={inter.className}>
//         {children}
//         {/* <AuthProvider></AuthProvider> */}
//       </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
