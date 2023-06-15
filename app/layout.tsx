import { Inter } from "next/font/google";
import "../styles/index.scss";
import AuthProvider from "../src/context/authContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Unwind",
  description: "Speak your mind freely.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        {children}
        {/* <AuthProvider></AuthProvider> */}
      </body>
    </html>
  );
}
